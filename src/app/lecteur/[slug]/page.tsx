import React from "react";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import SecureReaderClient from "./SecureReaderClient";

interface ReaderProps {
  params: Promise<{ slug: string }>;
}

export default async function LecteurPage({ params }: ReaderProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;

  let sessionUser = token ? verifyToken(token) : null;

  // En dev local, si session non existante, utiliser Makhou par défaut
  if (!sessionUser) {
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
    } else {
      redirect(`/login?redirect=/lecteur/${slug}`);
    }
  }

  // 1. Récupérer le produit
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    notFound();
  }

  // 2. CONTRÔLE D'ACCÈS STRICT CÔTÉ SERVEUR :
  // L'utilisateur DOIT posséder une commande "PAID" ou être ADMIN
  const hasAccess =
    sessionUser.role === "ADMIN" ||
    (await prisma.order.findFirst({
      where: {
        userId: sessionUser.userId,
        productId: product.id,
        status: "PAID",
      },
    }));

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-4">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
            🔒
          </div>
          <h2 className="text-xl font-bold text-slate-900">Accès non autorisé</h2>
          <p className="text-xs text-slate-500">
            Vous ne possédez pas de licence active pour accéder à <strong>{product.title}</strong>.
          </p>
          <a
            href={`/ebook/${slug}`}
            className="inline-block bg-[#0066FF] text-white px-5 py-2.5 rounded-xl text-xs font-bold"
          >
            Acheter cet ebook (5 000 FCFA)
          </a>
        </div>
      </div>
    );
  }

  // 3. Récupérer la progression de lecture existante
  const progress = await prisma.readingProgress.findUnique({
    where: {
      userId_productId: {
        userId: sessionUser.userId,
        productId: product.id,
      },
    },
  });

  const parsedChapters = JSON.parse(product.chapters || "[]");

  return (
    <SecureReaderClient
      product={{
        id: product.id,
        title: product.title,
        slug: product.slug,
        chapters: parsedChapters,
      }}
      user={{
        id: sessionUser.userId,
        name: sessionUser.name,
        email: sessionUser.email,
      }}
      initialChapterOrder={progress?.lastPosition || 1}
      initialProgress={progress?.progressPct || 20}
    />
  );
}
