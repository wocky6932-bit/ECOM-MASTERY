import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser || sessionUser.role !== "ADMIN") {
    return null;
  }
  return sessionUser;
}

// PATCH /api/admin/products/[id] - Modifier un ebook
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;

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
    } = body;

    const existing = await prisma.product.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json({ error: "Ebook introuvable" }, { status: 404 });
    }

    const dataToUpdate: Record<string, unknown> = {};

    if (title !== undefined) dataToUpdate.title = title.trim();
    if (shortDesc !== undefined) dataToUpdate.shortDesc = shortDesc.trim();
    if (description !== undefined) dataToUpdate.description = description.trim();
    if (price !== undefined) dataToUpdate.price = Number(price);
    if (category !== undefined) dataToUpdate.category = category.trim();
    if (coverImage !== undefined) dataToUpdate.coverImage = coverImage.trim();
    if (status !== undefined) dataToUpdate.status = status;
    if (targetAudience !== undefined) dataToUpdate.targetAudience = targetAudience.trim();

    if (learnPoints !== undefined) {
      if (Array.isArray(learnPoints)) {
        dataToUpdate.learnPoints = JSON.stringify(learnPoints);
      } else if (typeof learnPoints === "string") {
        dataToUpdate.learnPoints = JSON.stringify(
          learnPoints.split("\n").filter((p) => p.trim())
        );
      }
    }

    if (slug !== undefined) {
      const cleanSlug = slug
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      if (cleanSlug !== existing.slug) {
        const slugCollision = await prisma.product.findUnique({
          where: { slug: cleanSlug },
        });
        if (slugCollision) {
          return NextResponse.json(
            { error: "Ce slug est déjà utilisé par un autre ebook." },
            { status: 400 }
          );
        }
        dataToUpdate.slug = cleanSlug;
      }
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (err: unknown) {
    console.error("Erreur modification ebook:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur lors de la modification." },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/products/[id] - Supprimer un ebook
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;

  try {
    const existing = await prisma.product.findUnique({
      where: { id },
      include: {
        _count: { select: { orders: true } },
      },
    });

    if (!existing) {
      return NextResponse.json({ error: "Ebook introuvable" }, { status: 404 });
    }

    // Supprimer d'abord les dépendances associées (readings, accessCodes) si nécessaire
    await prisma.readingProgress.deleteMany({
      where: { productId: id },
    });

    await prisma.accessCode.deleteMany({
      where: { productId: id },
    });

    // Si des commandes existent pour ce produit, les supprimer ou les détacher pour préserver l'historique
    await prisma.order.deleteMany({
      where: { productId: id },
    });

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Ebook supprimé avec succès." });
  } catch (err: unknown) {
    console.error("Erreur suppression ebook:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur lors de la suppression de l'ebook." },
      { status: 500 }
    );
  }
}
