import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  Users
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Fil d'Ariane */}
        <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#0066FF] transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/boutique" className="hover:text-[#0066FF] transition-colors">
            Boutique
          </Link>
          <span>/</span>
          <span className="text-slate-400">{ebook.category}</span>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-xs">{ebook.title}</span>
        </nav>

        {/* Grille principale présentation ebook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Gauche : Couverture et Visuel */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="sticky top-28 w-full flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-35 transition-opacity"></div>
                <BookCover
                  title={ebook.title}
                  subtitle="Le guide pratique"
                  size="lg"
                  className="relative shadow-2xl"
                />
              </div>

              {/* Récapitulatif garanties sous la couverture */}
              <div className="w-full max-w-sm mt-8 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Paiement 100% sécurisé via <strong>Wave</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Accès instantané après validation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Lock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Lecture en ligne sécurisée multi-appareils</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Fiche descriptive & Achat */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header produit */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">
                {ebook.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1528] tracking-tight mt-3">
                {ebook.title}
              </h1>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                {ebook.description}
              </p>
            </div>

            {/* Bloc Prix & CTA d'achat (Fidèle à la maquette) */}
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                  Prix officiel
                </span>
                <span className="text-3xl font-black text-[#0B1528]">
                  {ebook.price.toLocaleString("fr-FR")} FCFA
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Paiement unique • Accès à vie
                </span>
              </div>

              <Link
                href={`/paiement?slug=${ebook.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Acheter maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Ce que vous allez apprendre */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-[#0B1528] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Ce que vous allez apprendre :
              </h3>
              <ul className="space-y-3">
                {ebook.learnPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sommaire du livre */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-[#0B1528] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0066FF]" />
                Sommaire du livre :
              </h3>
              <div className="space-y-3">
                {ebook.chapters.map((chap) => (
                  <div
                    key={chap.id}
                    className="flex items-center justify-between bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="font-semibold text-slate-800">{chap.title}</span>
                    <span className="text-xs text-slate-400">Chapitre {chap.order}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public cible */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-[#0B1528] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Public cible :
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-200/60 rounded-xl p-4">
                {ebook.targetAudience}
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
