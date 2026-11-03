import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { sessionId } = await params;

  // Ensure the session belongs to the current user
  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    select: { userId: true },
  });

  if (!session || session.userId !== sessionUser.userId)
    return NextResponse.json({ error: "Session introuvable" }, { status: 404 });

  await prisma.session.update({
    where: { id: sessionId },
    data: { revokedAt: new Date() },
  });

  return NextResponse.json({ success: true });
}
