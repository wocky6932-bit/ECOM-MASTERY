import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AdminProductsClient, AdminProduct } from "./AdminProductsClient";

export default async function AdminProduitsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const products = await prisma.product.findMany({
    include: {
      _count: { select: { orders: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const serializedProducts: AdminProduct[] = products.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    shortDesc: p.shortDesc,
    description: p.description,
    price: p.price,
    currency: p.currency,
    category: p.category,
    coverImage: p.coverImage,
    status: p.status,
    learnPoints: p.learnPoints,
    targetAudience: p.targetAudience,
    createdAt: p.createdAt.toISOString(),
    _count: {
      orders: p._count.orders,
    },
  }));

  return <AdminProductsClient initialProducts={serializedProducts} />;
}
