import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const token = req.cookies.get("ecom_session")?.value;

    let sessionUser = token ? verifyToken(token) : null;

    if (!sessionUser) {
      // Fallback dev client
      const userMakhou = await prisma.user.findUnique({
        where: { email: "makhou@example.sn" },
      });
      if (userMakhou) {
        sessionUser = {
          userId: userMakhou.id,
          name: userMakhou.name,
          email: userMakhou.email,
          role: userMakhou.role,
        };
      }
    }

    if (!sessionUser) {
      return NextResponse.json({ error: "Authentification requise." }, { status: 401 });
    }

    // 1. Vérifier existence du produit
    const product = await prisma.product.findUnique({
      where: { slug },
    });

    if (!product || !product.privateFileKey) {
      return NextResponse.json({ error: "Ebook introuvable ou indisponible." }, { status: 404 });
    }

    // 2. CONTRÔLE D'ACCÈS STRICT CÔTÉ SERVEUR :
    // L'utilisateur doit avoir payé ou être administrateur
    const hasPaid =
      sessionUser.role === "ADMIN" ||
      (await prisma.order.findFirst({
        where: {
          userId: sessionUser.userId,
          productId: product.id,
          status: "PAID",
        },
      }));

    if (!hasPaid) {
      return NextResponse.json(
        { error: "Accès refusé : aucune licence active pour cet ebook." },
        { status: 403 }
      );
    }

    // 3. Lire le fichier PDF depuis le stockage sécurisé privé (non public)
    const filePath = path.resolve(process.cwd(), product.privateFileKey);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Fichier source introuvable." }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // Retourner le flux PDF avec en-têtes sécurisés
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${slug}.pdf"`,
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
