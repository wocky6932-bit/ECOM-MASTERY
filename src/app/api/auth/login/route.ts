import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { comparePassword, signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre email et mot de passe." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Identifiants invalides." },
        { status: 401 }
      );
    }

    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Identifiants invalides." },
        { status: 401 }
      );
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    // Enregistrer la session
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "Navigateur Web";

    // Vérifier limitation à 2 appareils
    const activeSessions = await prisma.session.findMany({
      where: {
        userId: user.id,
        revokedAt: null,
      },
      orderBy: { lastActivity: "desc" },
    });

    // Si plus de 2 appareils, révoquer la plus ancienne
    if (activeSessions.length >= 2) {
      const oldest = activeSessions[activeSessions.length - 1];
      await prisma.session.update({
        where: { id: oldest.id },
        data: { revokedAt: new Date() },
      });
    }

    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        deviceName: userAgent.slice(0, 50),
        ipAddress: ip.slice(0, 40),
      },
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Poser le cookie sécurisé HttpOnly
    response.cookies.set("ecom_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
      path: "/",
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
