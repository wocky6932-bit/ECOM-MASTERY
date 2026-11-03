"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Search,
  Type,
  Maximize2,
  Minimize2,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

interface Chapter {
  id: string;
  title: string;
  order: number;
  content: string;
}

interface SecureReaderClientProps {
  product: {
    id: string;
    title: string;
    slug: string;
    chapters: Chapter[];
  };
  user: {
    id: string;
    name: string;
    email: string;
  };
  initialChapterOrder: number;
  initialProgress: number;
}

export default function SecureReaderClient({
  product,
  user,
  initialChapterOrder = 1,
  initialProgress = 20,
}: SecureReaderClientProps) {
  const chapters = product.chapters;
  const [currentOrder, setCurrentOrder] = useState(initialChapterOrder);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeChapter =
    chapters.find((c) => c.order === currentOrder) || chapters[0] || {
      id: "1",
      title: "Introduction",
      order: 1,
      content: "",
    };

  const progressPercent = Math.round((currentOrder / chapters.length) * 100);

  // Sauvegarde automatique de la progression côté serveur
  useEffect(() => {
    fetch("/api/reader/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product.id,
        lastPosition: currentOrder,
        chapterId: activeChapter.id,
        progressPct: progressPercent,
      }),
    }).catch(console.error);
  }, [currentOrder, product.id, activeChapter.id, progressPercent]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const fontSizeClasses = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed sm:text-lg",
    lg: "text-lg leading-loose sm:text-xl",
    xl: "text-xl leading-loose sm:text-2xl",
  };

  const cycleFontSize = () => {
    const sizes: ("sm" | "base" | "lg" | "xl")[] = ["sm", "base", "lg", "xl"];
    const nextIdx = (sizes.indexOf(fontSize) + 1) % sizes.length;
    setFontSize(sizes[nextIdx]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col select-none">
      {/* Header Sombre et Épuré (Exactement comme la maquette du lecteur) */}
      <header className="bg-[#070E1B] border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="Retour au tableau de bord"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm hidden sm:inline-block">
              {product.title}
            </span>
          </div>
        </div>

        {/* Barre de Progression au Centre */}
        <div className="flex items-center gap-3 max-w-xs w-full mx-4">
          <span className="text-xs font-mono font-semibold text-slate-400">
            {progressPercent}%
          </span>
          <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#0066FF] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Outils de Lecture (Recherche, Zoom texte, Plein écran) */}
        <div className="flex items-center gap-2">
          <button
            onClick={cycleFontSize}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors text-xs font-bold"
            title="Changer la taille du texte"
          >
            Aa
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="Plein écran"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Corps du Lecteur avec Sidebar Sommaire et Zone de Texte */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Sommaire */}
        <aside
          className={`w-64 sm:w-72 bg-[#0A1424] border-r border-slate-800/80 p-5 flex flex-col justify-between transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Sommaire
              </span>
            </div>

            <div className="space-y-1.5">
              {chapters.map((chap) => {
                const isActive = chap.order === currentOrder;
                return (
                  <button
                    key={chap.id}
                    onClick={() => setCurrentOrder(chap.order)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#0066FF] text-white font-semibold shadow-sm"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="truncate">{chap.title}</span>
                    {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Session certifiée Ecom Mastery</span>
            </div>
            <span>Licence nominative : {user.name}</span>
          </div>
        </aside>

        {/* Zone de Lecture avec Filigrane Dynamique anti-piratage */}
        <div className="flex-1 bg-[#F8FAFC] text-slate-900 relative overflow-y-auto p-6 sm:p-12 md:p-16 flex flex-col justify-between">
          
          {/* Filigrane Dynamique (Filigrane avec email et ID commande) */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden opacity-[0.035] select-none rotate-[-25deg]">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 whitespace-nowrap leading-loose">
              ECOM MASTERY • {user.email} • {user.id.slice(0, 8)} <br />
              COPIE STRICTEMENT PERSONNELLE • TOUS DROITS RÉSERVÉS
            </div>
          </div>

          {/* Conteneur de lecture épuré */}
          <div className="max-w-3xl mx-auto w-full z-10 pb-16">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight mb-8 pb-4 border-b border-slate-200">
              {activeChapter.title}
            </h1>

            <div className={`text-slate-700 whitespace-pre-line space-y-6 ${fontSizeClasses[fontSize]}`}>
              {activeChapter.content}
            </div>
          </div>

          {/* Pagination Bas de Chapitre (Précédent / Suivant) */}
          <div className="max-w-3xl mx-auto w-full pt-8 border-t border-slate-200/80 flex items-center justify-between z-10">
            <button
              onClick={() => setCurrentOrder(Math.max(1, currentOrder - 1))}
              disabled={currentOrder <= 1}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Chapitre précédent</span>
            </button>

            <button
              onClick={() => setCurrentOrder(Math.min(chapters.length, currentOrder + 1))}
              disabled={currentOrder >= chapters.length}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <span>Chapitre suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
