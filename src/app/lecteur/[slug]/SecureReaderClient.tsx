"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Type,
  Maximize2,
  Minimize2,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Menu,
  X,
  Clock,
  BookmarkCheck,
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

// Composant pour rendre le texte riche, les schémas, les tableaux et les boîtes d'alerte
function FormattedChapterContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let tableBuffer: string[] = [];

  const flushCode = (key: number) => {
    if (codeBuffer.length > 0) {
      elements.push(
        <div
          key={`code-${key}`}
          className="my-6 rounded-2xl bg-[#0B1528] text-blue-100 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-blue-900/40 shadow-inner"
        >
          <pre className="whitespace-pre">{codeBuffer.join("\n")}</pre>
        </div>
      );
      codeBuffer = [];
    }
  };

  const flushTable = (key: number) => {
    if (tableBuffer.length > 0) {
      const rows = tableBuffer
        .filter((r) => !r.includes("---"))
        .map((r) =>
          r
            .split("|")
            .map((c) => c.trim())
            .filter((c) => c.length > 0)
        );

      if (rows.length > 0) {
        const header = rows[0];
        const body = rows.slice(1);
        elements.push(
          <div
            key={`table-${key}`}
            className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs"
          >
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  {header.map((col, idx) => (
                    <th key={idx} className="p-3 sm:p-4">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {body.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 sm:p-4 font-medium">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableBuffer = [];
    }
  };

  lines.forEach((line, index) => {
    // Blocs de code / schémas ASCII
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCode(index);
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    // Tableaux Markdown
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      tableBuffer.push(line);
      return;
    } else if (tableBuffer.length > 0) {
      flushTable(index);
    }

    // Titres H2 / H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={index}
          className="text-base sm:text-lg font-bold text-[#0B1528] mt-8 mb-3 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
          {line.replace("### ", "")}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={index}
          className="text-lg sm:text-xl font-extrabold text-[#0B1528] mt-10 mb-4 pb-2 border-b border-slate-200"
        >
          {line.replace("## ", "")}
        </h2>
      );
      return;
    }

    // Callout Box : Astuce / Erreur / Important
    if (line.startsWith("> [!TIP]") || line.startsWith("> 💡")) {
      elements.push(
        <div
          key={index}
          className="my-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-4 text-xs sm:text-sm text-emerald-900 font-medium flex items-start gap-3 shadow-xs"
        >
          <span className="text-lg">💡</span>
          <div>
            <strong className="block font-bold mb-0.5">Conseil Terrain Pro :</strong>
            {line.replace(/> \[\!TIP\]|> 💡/, "").trim()}
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!WARNING]") || line.startsWith("> ⚠️")) {
      elements.push(
        <div
          key={index}
          className="my-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4 text-xs sm:text-sm text-amber-900 font-medium flex items-start gap-3 shadow-xs"
        >
          <span className="text-lg">⚠️</span>
          <div>
            <strong className="block font-bold mb-0.5">Erreur fréquente à éviter :</strong>
            {line.replace(/> \[\!WARNING\]|> ⚠️/, "").trim()}
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!NOTE]") || line.startsWith("> 📌")) {
      elements.push(
        <div
          key={index}
          className="my-5 rounded-2xl bg-blue-50/80 border border-blue-200/80 p-4 text-xs sm:text-sm text-blue-900 font-medium flex items-start gap-3 shadow-xs"
        >
          <span className="text-lg">📌</span>
          <div>
            <strong className="block font-bold mb-0.5">À retenir impérativement :</strong>
            {line.replace(/> \[\!NOTE\]|> 📌/, "").trim()}
          </div>
        </div>
      );
      return;
    }

    // Listes à puces
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const bulletText = line.trim().replace(/^[-*]\s+/, "");
      // Traitement du gras **texte**
      const parts = bulletText.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <div key={index} className="flex items-start gap-2.5 my-2 pl-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
          <p className="leading-relaxed text-slate-700">
            {parts.map((p, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-bold text-slate-900">
                  {p}
                </strong>
              ) : (
                p
              )
            )}
          </p>
        </div>
      );
      return;
    }

    // Listes numérotées
    if (/^\d+\.\s/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s(.*)/);
      if (match) {
        const num = match[1];
        const contentText = match[2];
        const parts = contentText.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <div key={index} className="flex items-start gap-3 my-2.5 pl-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {num}
            </span>
            <p className="leading-relaxed text-slate-700">
              {parts.map((p, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-bold text-slate-900">
                    {p}
                  </strong>
                ) : (
                  p
                )
              )}
            </p>
          </div>
        );
        return;
      }
    }

    // Paragraphe normal
    if (line.trim().length > 0) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={index} className="my-3 leading-relaxed text-slate-700">
          {parts.map((seg, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-bold text-slate-900">
                {seg}
              </strong>
            ) : (
              seg
            )
          )}
        </p>
      );
    }
  });

  if (codeBuffer.length > 0) flushCode(lines.length);
  if (tableBuffer.length > 0) flushTable(lines.length);

  return <div className="space-y-1">{elements}</div>;
}

export default function SecureReaderClient({
  product,
  user,
  initialChapterOrder = 1,
}: SecureReaderClientProps) {
  const chapters = product.chapters;
  const [currentOrder, setCurrentOrder] = useState(initialChapterOrder);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
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

  // Sauvegarde automatique de la progression
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
    sm: "text-sm",
    base: "text-base sm:text-[17px]",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
  };

  const cycleFontSize = () => {
    const sizes: ("sm" | "base" | "lg" | "xl")[] = ["sm", "base", "lg", "xl"];
    const nextIdx = (sizes.indexOf(fontSize) + 1) % sizes.length;
    setFontSize(sizes[nextIdx]);
  };

  return (
    <div className="h-screen flex flex-col bg-[#070F1E] text-white overflow-hidden font-sans">
      {/* Barre d'outils supérieure du lecteur */}
      <header className="h-16 bg-[#0B1528] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/ebooks"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Retour à mes ebooks"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="border-l border-white/10 pl-3">
            <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] sm:max-w-xs md:max-w-md">
              {product.title}
            </h1>
            <p className="text-[10px] text-blue-400 font-medium">
              Module {currentOrder}/{chapters.length} · {progressPercent}%
            </p>
          </div>
        </div>

        {/* Contrôles du lecteur */}
        <div className="flex items-center gap-2">
          {/* Progression en barre fine */}
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 mr-2">
            <div className="w-24 bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#0066FF] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-mono text-[11px]">{progressPercent}%</span>
          </div>

          <button
            onClick={cycleFontSize}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Ajuster la taille du texte"
          >
            <Type className="w-4 h-4" />
            <span className="uppercase text-[10px] font-bold">{fontSize}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors hidden sm:block"
            title={isFullscreen ? "Quitter le plein écran" : "Mode plein écran"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Sommaire des chapitres"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Corps du Lecteur */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Backdrop sombre sur smartphone quand le sommaire est ouvert */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-xs transition-opacity"
          />
        )}

        {/* Sommaire Latéral */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 z-40 md:z-10 w-72 sm:w-80 max-w-[85vw] bg-[#0B1528] border-r border-white/10 flex flex-col justify-between p-4 overflow-y-auto transition-all duration-300 shrink-0 ${
            sidebarOpen
              ? "translate-x-0 opacity-100 shadow-2xl md:shadow-none"
              : "-translate-x-full md:-ml-72 sm:md:-ml-80 opacity-0 pointer-events-none md:pointer-events-none"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#0066FF]" />
                Sommaire du cours
              </span>
              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-md">
                {chapters.length} Modules
              </span>
            </div>

            <div className="space-y-1.5">
              {chapters.map((chap) => {
                const isActive = chap.order === currentOrder;
                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      setCurrentOrder(chap.order);
                      if (window.innerWidth < 768) setSidebarOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-[#0066FF] text-white font-semibold shadow-md"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-5 h-5 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
                          isActive ? "bg-white text-[#0066FF]" : "bg-white/10 text-slate-400"
                        }`}
                      >
                        0{chap.order}
                      </span>
                      <span className="truncate">{chap.title.replace(/^\d+\.\s*/, "")}</span>
                    </div>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
            <div className="flex items-center gap-2 mb-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">Licence nominative certifiée</span>
            </div>
            <p className="truncate text-slate-400">{user.name} ({user.email})</p>
          </div>
        </aside>

        {/* Zone de Lecture principale avec Filigrane anti-piratage */}
        <main className="flex-1 bg-white text-slate-800 relative overflow-y-auto p-4 sm:p-8 md:p-16 flex flex-col justify-between scroll-smooth">
          
          {/* Filigrane discret dynamique */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.025] select-none rotate-[-25deg]">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 whitespace-nowrap leading-loose text-center">
              ECOM MASTERY • {user.email} • ID #{user.id.slice(0, 8)} <br />
              COPIE STRICTEMENT PERSONNELLE • REVENTE INTERDITE
            </div>
          </div>

          {/* Contenu du Chapitre */}
          <div className="max-w-3xl mx-auto w-full z-10 pb-16">
            
            {/* Titre du chapitre avec badge */}
            <div className="mb-8 pb-5 border-b border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Module {activeChapter.order}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight leading-snug">
                {activeChapter.title}
              </h2>
            </div>

            {/* Contenu formaté avec schémas, diagrammes et tableaux */}
            <div className={fontSizeClasses[fontSize]}>
              <FormattedChapterContent content={activeChapter.content} />
            </div>

          </div>

          {/* Pagination Navigation Chapitre Précédent / Suivant */}
          <div className="max-w-3xl mx-auto w-full pt-8 border-t border-slate-200 flex items-center justify-between z-10">
            <button
              onClick={() => {
                setCurrentOrder(Math.max(1, currentOrder - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentOrder <= 1}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Chapitre précédent</span>
            </button>

            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
              Page {currentOrder} / {chapters.length}
            </span>

            <button
              onClick={() => {
                setCurrentOrder(Math.min(chapters.length, currentOrder + 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentOrder >= chapters.length}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
            >
              <span>Chapitre suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
