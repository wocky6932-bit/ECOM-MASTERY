import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashCode, signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { code, email } = await req.json();

    if (!code || !email) {
      return NextResponse.json({ error: "Code et email requis." }, { status: 400 });
    }

    const hashed = hashCode(code);

    // Vérifier l'existence et l'état du code
    const accessCode = await prisma.accessCode.findFirst({
      where: {
        codeHash: hashed,
        status: "ACTIVE",
      },
      include: {
        user: true,
        product: true,
      },
    });

    if (!accessCode) {
      return NextResponse.json(
        { error: "Ce code d'accès est invalide, révoqué ou introuvable." },
        { status: 404 }
      );
    }

    // Vérifier correspondance email
    if (accessCode.user.email.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json(
        { error: "Ce code n'est pas associé à cette adresse e-mail." },
        { status: 403 }
      );
    }

    // Connecter automatiquement l'utilisateur
    const token = signToken({
      userId: accessCode.user.id,
      email: accessCode.user.email,
      role: accessCode.user.role,
      name: accessCode.user.name,
    });

    const response = NextResponse.json({
      success: true,
      message: "Accès validé avec succès",
      productId: accessCode.productId,
      productSlug: accessCode.product.slug,
    });

    response.cookies.set("ecom_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
