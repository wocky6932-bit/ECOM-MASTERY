import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "@/lib/seed-data";
import { AdminProductsClient, AdminProduct } from "./AdminProductsClient";

export default async function AdminProduitsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const products = await prisma.product.findMany({
    where: {
      slug: { not: "boostez-votre-productivite" },
    },
    include: {
      _count: { select: { orders: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const allOfficial = [INITIAL_EBOOK, ...OTHER_EBOOKS];

  // Synchronisation automatique de TiDB avec les titres officiels
  for (const b of allOfficial) {
    const dbP = products.find((p) => p.slug === b.slug);
    if (dbP && (dbP.title !== b.title || dbP.coverImage !== b.coverImage || dbP.category !== b.category)) {
      prisma.product
        .update({
          where: { id: dbP.id },
          data: {
            title: b.title,
            shortDesc: b.shortDesc,
            description: b.description || b.shortDesc,
            category: b.category,
            coverImage: b.coverImage,
          },
        })
        .catch(() => {});
      dbP.title = b.title;
      dbP.shortDesc = b.shortDesc;
      dbP.category = b.category;
      dbP.coverImage = b.coverImage;
    }
  }

  const serializedProducts: AdminProduct[] = products.map((p) => {
    const official = allOfficial.find((b) => b.slug === p.slug);
    return {
      id: p.id,
      title: official?.title || p.title,
      slug: p.slug,
      shortDesc: official?.shortDesc || p.shortDesc,
      description: official?.description || p.description,
      price: official?.price || p.price,
      currency: p.currency,
      category: official?.category || p.category,
      coverImage: official?.coverImage || p.coverImage,
      status: p.status,
      learnPoints: typeof p.learnPoints === "string" ? p.learnPoints : JSON.stringify(p.learnPoints),
      targetAudience: typeof p.targetAudience === "string" ? p.targetAudience : JSON.stringify(p.targetAudience),
      createdAt: p.createdAt.toISOString(),
      _count: {
        orders: p._count.orders,
      },
    };
  });

  return <AdminProductsClient initialProducts={serializedProducts} />;
}
