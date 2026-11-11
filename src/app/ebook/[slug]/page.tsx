import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCover } from "@/components/BookCover";
import { INITIAL_EBOOK, OTHER_EBOOKS, EbookData } from "@/lib/seed-data";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  Users,
  Star,
  Sparkles,
  Smartphone,
  ChevronRight,
  ShoppingCart,
  Award,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EbookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const allBooks: EbookData[] = [INITIAL_EBOOK, ...OTHER_EBOOKS];
  const ebook = allBooks.find((b) => b.slug === slug);

  if (!ebook) {
    notFound();
  }

  // Normalisation sécurisée de learnPoints (supporte string, JSON stringifié et tableau)
  const safeLearnPoints: string[] = Array.isArray(ebook.learnPoints)
    ? ebook.learnPoints
    : typeof ebook.learnPoints === "string"
    ? (() => {
        try {
          const parsed = JSON.parse(ebook.learnPoints);
          return Array.isArray(parsed) ? parsed : [ebook.learnPoints];
        } catch {
          return [ebook.learnPoints];
        }
      })()
    : [];

  // Thème de couleur selon la catégorie
  let badgeColor = "bg-blue-50 text-[#0066FF] border-blue-100";
  let theme: "ecommerce" | "marketing" | "productivity" | "development" | "sourcing" = "ecommerce";
  const catLower = ebook.category.toLowerCase();
  if (catLower.includes("sourc") || catLower.includes("alibaba") || catLower.includes("import")) {
    badgeColor = "bg-amber-50 text-amber-700 border-amber-200";
    theme = "sourcing";
  } else if (catLower.includes("market") || catLower.includes("ads") || catLower.includes("facebook")) {
    badgeColor = "bg-purple-50 text-purple-600 border-purple-100";
    theme = "marketing";
  } else if (catLower.includes("productiv")) {
    badgeColor = "bg-emerald-50 text-emerald-600 border-emerald-100";
    theme = "productivity";
  } else if (catLower.includes("dev") || catLower.includes("web")) {
    badgeColor = "bg-orange-50 text-orange-600 border-orange-100";
    theme = "development";
  }

  // Contrôle de session utilisateur
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  const isAdmin = sessionUser?.role === "ADMIN";

  let hasAccess = isAdmin;
  if (!hasAccess && sessionUser) {
    try {
      const paidOrder = await prisma.order.findFirst({
        where: {
          userId: sessionUser.userId,
          product: { slug },
          status: "PAID",
        },
      });
      hasAccess = Boolean(paidOrder);
    } catch {
      hasAccess = false;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans text-slate-800">
      <Navbar user={sessionUser ? { name: sessionUser.name, role: sessionUser.role } : null} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 w-full">
        {/* Fil d'Ariane moderne */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto pb-1">
          <Link href="/" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <Link href="/#ebooks" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">
            Nos Livres
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <span className="text-slate-500 font-medium whitespace-nowrap">{ebook.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <span className="text-slate-800 font-bold truncate max-w-xs">{ebook.title}</span>
        </nav>

        {/* Grille principale : Livre à gauche, Fiche à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Colonne Gauche : Couverture 3D & Réassurance */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="sticky top-28 w-full flex flex-col items-center">
              
              {/* Couverture avec effet d'élévation 3D */}
              <div className="relative group mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <BookCover
                  title={ebook.title}
                  subtitle="Guide officiel pratique"
                  theme={theme}
                  size="hero"
                  className="relative shadow-2xl"
                />
              </div>

              {/* Bloc de réassurance Wave & Sécurité sous le livre */}
              <div className="w-full max-w-md bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3.5 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Paiement 100% sécurisé Wave</p>
                    <p className="text-slate-400 text-[11px]">Validation instantanée sans frais cachés</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Accès instantané garanti</p>
                    <p className="text-slate-400 text-[11px]">Code d&apos;accès et lecture en ligne immédiate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Lecture multi-écrans protégée</p>
                    <p className="text-slate-400 text-[11px]">Smartphone, tablette et ordinateur (2 appareils)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Colonne Droite : Fiche descriptive & Achat */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header produit avec badge et avis */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeColor}`}>
                  {ebook.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-50/80 px-3 py-1 rounded-full border border-amber-100">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-slate-800">4.9 / 5</span>
                  <span className="text-slate-400 font-normal">(1,2k avis vérifiés)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1528] tracking-tight leading-tight">
                {ebook.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                {ebook.description}
              </p>

              {/* Bloc Prix & Achat Wave intégré */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    Prix de lancement officiel
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B1528]">
                      {ebook.price.toLocaleString("fr-FR")}
                    </span>
                    <span className="text-sm font-bold text-[#0066FF]">FCFA</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Paiement unique • Accès à vie garanti
                  </span>
                </div>

                {hasAccess ? (
                  <div className="flex flex-col gap-2 w-full sm:w-auto items-stretch sm:items-end">
                    <Link
                      href={`/lecteur/${ebook.slug}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{isAdmin ? "Lire l'ebook (Accès Admin Gratuit)" : "Lire mon ebook (Accès Débloqué)"}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    {isAdmin && (
                      <span className="text-[11px] text-emerald-700 font-semibold text-center sm:text-right">
                        ✨ Compte Administrateur — Vous lisez sans payer
                      </span>
                    )}
                  </div>
                ) : (
                  <Link
                    href={`/paiement?slug=${ebook.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Acheter maintenant</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            </div>

            {/* Ce que vous allez apprendre */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1528] mb-5 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Ce que vous allez apprendre :</span>
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {safeLearnPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sommaire détaillé du livre */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1528] mb-5 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Sommaire du livre :</span>
              </h3>

              <div className="space-y-3">
                {ebook.chapters.map((chap, idx) => (
                  <div
                    key={chap.id}
                    className="flex items-center justify-between bg-slate-50/60 hover:bg-blue-50/40 border border-slate-100 rounded-2xl px-5 py-3.5 text-sm transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#0066FF] bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs font-mono">
                        0{chap.order}
                      </span>
                      <span className="font-semibold text-slate-800 group-hover:text-[#0066FF] transition-colors">
                        {chap.title.replace(/^\d+\.\s*/, "")}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-100">
                      Chapitre {chap.order}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public cible */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1528] mb-3 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span>Public cible :</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-purple-50/40 border border-purple-100/60 rounded-2xl p-4 font-medium">
                {ebook.targetAudience}
              </p>
            </div>

            {/* Bannière de passage à l'action finale */}
            <div className="bg-gradient-to-r from-[#0B1528] to-[#0A2558] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Prêt à commencer votre lecture ?
                </p>
                <h4 className="text-lg font-bold text-white mt-1">
                  Accédez à votre ebook dès maintenant
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Paiement sécurisé Wave · Réception instantanée
                </p>
              </div>

              <Link
                href={`/paiement?slug=${ebook.slug}`}
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md shrink-0"
              >
                <span>Obtenir mon accès ({ebook.price.toLocaleString("fr-FR")} FCFA)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
