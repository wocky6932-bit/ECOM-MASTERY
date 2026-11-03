import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Vérification du rôle Administrateur
async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser || sessionUser.role !== "ADMIN") {
    return null;
  }
  return sessionUser;
}

// GET /api/admin/products - Liste des produits
export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const products = await prisma.product.findMany({
    include: {
      _count: { select: { orders: true, accessCodes: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ products });
}

// POST /api/admin/products - Ajouter un ebook
export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const {
      title,
      slug,
      shortDesc,
      description,
      price,
      category,
      coverImage,
      learnPoints,
      targetAudience,
      status,
      chapters,
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Le titre est obligatoire" }, { status: 400 });
    }

    // Génération ou nettoyage du slug
    const cleanSlug = (slug || title)
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Vérifier l'unicité du slug
    const existing = await prisma.product.findUnique({
      where: { slug: cleanSlug },
    });
    if (existing) {
      return NextResponse.json(
        { error: "Un ebook avec ce slug ou ce titre existe déjà." },
        { status: 400 }
      );
    }

    // Chapitres par défaut si non spécifiés
    const defaultChapters = chapters && chapters.length > 0
      ? JSON.stringify(chapters)
      : JSON.stringify([
          {
            id: "chapitre-1",
            title: "1. Introduction",
            order: 1,
            content: "Bienvenue dans cet ebook complet.",
          },
        ]);

    const formattedLearnPoints = Array.isArray(learnPoints)
      ? JSON.stringify(learnPoints)
      : typeof learnPoints === "string" && learnPoints.trim()
      ? JSON.stringify(learnPoints.split("\n").filter((p: string) => p.trim()))
      : JSON.stringify(["Maîtriser les bases essentielles"]);

    const product = await prisma.product.create({
      data: {
        title: title.trim(),
        slug: cleanSlug,
        shortDesc: shortDesc ? shortDesc.trim() : (description ? description.slice(0, 160) : ""),
        description: description ? description.trim() : "",
        learnPoints: formattedLearnPoints,
        targetAudience: targetAudience ? targetAudience.trim() : "Tous publics, débutants et professionnels.",
        price: Number(price) > 0 ? Number(price) : 5000,
        currency: "XOF",
        coverImage: coverImage && coverImage.trim() ? coverImage.trim() : "/images/mockups-reference.jpg",
        category: category && category.trim() ? category.trim() : "E-commerce",
        chapters: defaultChapters,
        status: status === "INACTIVE" ? "INACTIVE" : "ACTIVE",
      },
    });

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (err: unknown) {
    console.error("Erreur création produit:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur lors de la création de l'ebook." },
      { status: 500 }
    );
  }
}
