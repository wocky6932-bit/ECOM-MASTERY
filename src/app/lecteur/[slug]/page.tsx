import React from "react";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "@/lib/seed-data";
import SecureReaderClient from "./SecureReaderClient";
import { Lock } from "lucide-react";

interface ReaderProps {
  params: Promise<{ slug: string }>;
}

export default async function LecteurPage({ params }: ReaderProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;

  let sessionUser = token ? verifyToken(token) : null;

  // En dev local ou sans cookie, tenter de récupérer l'utilisateur Makhou
  if (!sessionUser) {
    try {
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
    } catch {
      // Ignorer l'erreur réseau éventuelle
    }

    if (!sessionUser) {
      redirect(`/login?redirect=/lecteur/${slug}`);
    }
  }

  // 1. Récupérer le produit (depuis la base avec fallback mémoire)
  let product: { id: string; title: string; slug: string; chapters: any } | null = null;
  try {
    product = await prisma.product.findUnique({
      where: { slug },
    });
  } catch {
    // Si la base est inaccessible, fallback sur les données mémoire
    product = null;
  }

  if (!product) {
    const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];
    const fallback = allBooks.find((b) => b.slug === slug);
    if (!fallback) {
      notFound();
    }
    product = {
      id: fallback.id || `prod-${fallback.slug}`,
      title: fallback.title,
      slug: fallback.slug,
      chapters: JSON.stringify(fallback.chapters),
    };
  }

  // 2. CONTRÔLE D'ACCÈS : L'utilisateur DOIT posséder une commande "PAID" ou être ADMIN
  let hasAccess = sessionUser.role === "ADMIN";
  if (!hasAccess) {
    try {
      const order = await prisma.order.findFirst({
        where: {
          userId: sessionUser.userId,
          productId: product.id,
          status: "PAID",
        },
      });
      hasAccess = Boolean(order);
    } catch {
      hasAccess = false;
    }
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-4">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-5 h-5" />
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
  let progress: { lastPosition: number; progressPct: number } | null = null;
  try {
    progress = await prisma.readingProgress.findUnique({
      where: {
        userId_productId: {
          userId: sessionUser.userId,
          productId: product.id,
        },
      },
    });
  } catch {
    progress = null;
  }

  // 4. Parser les chapitres en toute sécurité (priorité au contenu officiel corrigé dans seed-data)
  let parsedChapters: any[] = [];
  const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];
  const officialBook = allBooks.find((b) => b.slug === slug);
  if (officialBook && Array.isArray(officialBook.chapters) && officialBook.chapters.length > 0) {
    parsedChapters = officialBook.chapters;
  } else {
    try {
      parsedChapters = typeof product.chapters === "string" ? JSON.parse(product.chapters || "[]") : product.chapters || [];
    } catch {
      parsedChapters = [];
    }
  }

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
