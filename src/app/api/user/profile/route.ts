import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, hashPassword, comparePassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await req.json();
  const { name, phone, currentPwd, newPwd } = body;

  if (!name || name.trim().length < 2)
    return NextResponse.json({ error: "Nom invalide" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: sessionUser.userId } });
  if (!user)
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });

  // Password change
  if (currentPwd || newPwd) {
    if (!currentPwd || !newPwd)
      return NextResponse.json(
        { error: "Les deux champs de mot de passe sont requis" },
        { status: 400 }
      );
    if (newPwd.length < 8)
      return NextResponse.json(
        { error: "Le nouveau mot de passe doit faire au moins 8 caractères" },
        { status: 400 }
      );
    const valid = await comparePassword(currentPwd, user.passwordHash);
    if (!valid)
      return NextResponse.json(
        { error: "Mot de passe actuel incorrect" },
        { status: 400 }
      );
    const newHash = await hashPassword(newPwd);
    await prisma.user.update({
      where: { id: user.id },
      data: { name: name.trim(), phone: phone || null, passwordHash: newHash },
    });
  } else {
    await prisma.user.update({
      where: { id: user.id },
      data: { name: name.trim(), phone: phone || null },
    });
  }

  return NextResponse.json({ success: true });
}
