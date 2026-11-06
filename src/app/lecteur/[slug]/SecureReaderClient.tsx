"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Type,
  Maximize2,
  Minimize2,
  CheckCircle2,
  ShieldCheck,
  Menu,
  X,
  Clock,
  BookmarkCheck,
  Lightbulb,
  AlertTriangle,
  Bookmark,
  Sun,
  Moon,
  Coffee,
  Workflow,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  CheckSquare,
  Key,
  Target,
  Users,
  Rocket,
  TrendingUp,
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

// Fonction utilitaire pour parser le gras **texte** dans n'importe quelle chaîne
function renderFormattedInlineText(text: string) {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-inherit underline-offset-2">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// 1. Schéma interactif : "Le cycle vertueux du petit budget"
function InteractiveCycleBudgetDiagram({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const steps = [
    {
      num: "01",
      title: "Stock Test Local",
      desc: "Achat de 4 à 8 unités locales (Sandaga, grossistes) sans bloquer son capital.",
      icon: "📦",
      tag: "Risque Zéro",
      badgeClass: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      num: "02",
      title: "Publicité Ciblée",
      desc: "Meta & TikTok Ads à 2 000 - 3 000 FCFA/jour avec ciblage laser.",
      icon: "🎯",
      tag: "Ventes 24h",
      badgeClass: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      num: "03",
      title: "Closing WhatsApp",
      desc: "Conversion humaine directe, qualification express et confirmation vocale.",
      icon: "💬",
      tag: "Taux Conv. 40%",
      badgeClass: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    {
      num: "04",
      title: "Paiement Wave / COD",
      desc: "Encaissement instantané 0 frais par Wave ou Cash à la livraison.",
      icon: "📱",
      tag: "Cash Immédiat",
      badgeClass: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    },
    {
      num: "05",
      title: "Réinvestissement",
      desc: "Rotation accélérée : 80% du bénéfice réinjecté pour doubler le stock.",
      icon: "🔄",
      tag: "Effet Cumulé",
      badgeClass: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
  ];

  return (
    <div
      className={`my-8 rounded-3xl p-6 sm:p-8 border shadow-lg transition-all ${
        theme === "dark"
          ? "bg-[#0F1B33] border-blue-500/20 text-white"
          : theme === "sepia"
          ? "bg-[#F4ECE1] border-[#DFD3C1] text-[#2C241E]"
          : "bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border-blue-100 text-slate-800"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shadow-md">
            <Workflow className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black tracking-widest uppercase text-[#0066FF]">
              Infographie Stratégique Pro
            </span>
            <h4 className="text-base sm:text-lg font-black tracking-tight">
              Le Cycle Vertueux du Petit Budget
            </h4>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Modèle Rentable Validé
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border transition-all hover:scale-[1.02] flex flex-col justify-between ${
              theme === "dark"
                ? "bg-[#142342] border-white/10"
                : theme === "sepia"
                ? "bg-[#FAF5EC] border-[#DFD3C1]"
                : "bg-white border-slate-200/80 shadow-xs"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${s.badgeClass}`}>
                  {s.tag}
                </span>
              </div>
              <h5 className="text-sm font-bold tracking-tight mb-1 flex items-center gap-1.5">
                <span className="text-xs font-black text-[#0066FF] opacity-80">{s.num}.</span>
                {s.title}
              </h5>
              <p className="text-xs opacity-80 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] opacity-75">
        <span>⚡ Pas de bureau · Pas de salarié · Vitesse d'exécution maximale</span>
        <span className="font-bold text-[#0066FF]">Rotation du capital en 72 heures</span>
      </div>
    </div>
  );
}

// 2. Infographie interactive : Les 3 Piliers d'Objectifs Meta Ads (Notoriété, Considération, Conversion)
function FacebookAdsObjectivesInfographic({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const pillars = [
    {
      title: "1. NOTORIÉTÉ",
      subtitle: "Susciter de l'intérêt pour votre marque",
      headerBg: "bg-rose-500 text-white",
      bodyBg: theme === "dark" ? "bg-rose-950/20 border-rose-500/20" : "bg-rose-50/70 border-rose-200",
      accent: "text-rose-600 dark:text-rose-400",
      items: [
        { name: "Notoriété de la marque", desc: "Augmente le souvenir de vos produits chez les prospects" },
        { name: "Portée", desc: "Touche le maximum absolu d'utilisateurs uniques au moindre coût" },
      ],
    },
    {
      title: "2. CONSIDÉRATION",
      subtitle: "Inciter les gens à s'intéresser & interagir",
      headerBg: "bg-amber-500 text-white",
      bodyBg: theme === "dark" ? "bg-amber-950/20 border-amber-500/20" : "bg-amber-50/70 border-amber-200",
      accent: "text-amber-600 dark:text-amber-400",
      items: [
        { name: "Trafic", desc: "Redirige vers votre boutique en ligne ou catalogue" },
        { name: "Engagement", desc: "Génère des likes, commentaires et partages viraux" },
        { name: "Vues de vidéos", desc: "Diffuse vos démonstrations produits au meilleur tarif" },
        { name: "Génération de prospects", desc: "Formulaires intégrés sans sortir de Facebook" },
        { name: "Messages WhatsApp / Messenger", desc: "⭐ L'arme N°1 en Afrique : discussion directe de vente" },
      ],
    },
    {
      title: "3. CONVERSION",
      subtitle: "Déclencher l'achat & encaisser le cash",
      headerBg: "bg-teal-600 text-white",
      bodyBg: theme === "dark" ? "bg-teal-950/20 border-teal-500/20" : "bg-teal-50/70 border-teal-200",
      accent: "text-teal-600 dark:text-teal-400",
      items: [
        { name: "Conversions (Achats)", desc: "Optimise pour les paiements Wave & commandes fermes" },
        { name: "Ventes catalogue", desc: "Présente automatiquement vos collections de produits" },
        { name: "Visites point de vente", desc: "Attire les clients vers votre point relais ou boutique physique" },
      ],
    },
  ];

  return (
    <div
      className={`my-8 rounded-3xl p-6 sm:p-8 border shadow-xl transition-all ${
        theme === "dark"
          ? "bg-[#0E1A33] border-white/10 text-white"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <div className="text-center mb-6 pb-4 border-b border-black/10 dark:border-white/10">
        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 border border-teal-500/20">
          Architecture Officielle Meta Ads
        </span>
        <h4 className="text-base sm:text-xl font-black mt-2 tracking-tight">
          Les 3 Grands Piliers d'Objectifs Publicitaires
        </h4>
        <p className="text-xs opacity-70 mt-1 max-w-lg mx-auto">
          Chaque objectif indique à l'intelligence artificielle de Facebook quel type d'acheteur cibler en priorité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm"
          >
            <div className={`p-4 text-center ${pillar.headerBg}`}>
              <h5 className="font-black text-sm tracking-wide uppercase">{pillar.title}</h5>
              <p className="text-[11px] opacity-90 mt-0.5 leading-snug">{pillar.subtitle}</p>
            </div>
            <div className={`p-4 flex-1 space-y-2.5 border-t border-black/5 dark:border-white/5 ${pillar.bodyBg}`}>
              {pillar.items.map((item, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white/90 dark:bg-black/30 border border-black/5 dark:border-white/5 shadow-xs"
                >
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-[11px] opacity-75 mt-0.5 ml-3.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-75">
        <span>💡 En Afrique : Démarrez par <strong>Messages WhatsApp</strong> ou <strong>Ventes (Conversions)</strong>.</span>
        <span className="font-bold text-teal-600">Objectif = 80% du succès de votre campagne</span>
      </div>
    </div>
  );
}

// 3. Mockup d'interface de ciblage Facebook Ads Manager (avec trombone 📎)
function FacebookAudienceMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-3xl border p-6 sm:p-8 relative shadow-xl transition-all ${
        theme === "dark"
          ? "bg-[#0E1A33] border-teal-500/30 text-white"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-teal-50/50 border-teal-200 text-slate-800"
      }`}
    >
      {/* Trombone paperclip illustré en haut à droite */}
      <div className="absolute -top-3.5 right-6 w-6 h-10 border-2 border-rose-400 rounded-full rotate-12 shadow-sm pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Interface Gestionnaire de Publicités
          </span>
          <h4 className="text-sm sm:text-base font-black tracking-tight">
            Configuration de l'Audience & Ciblage Laser
          </h4>
        </div>
        <div className="flex gap-1.5">
          <span className="px-3 py-1 rounded-xl text-[11px] font-extrabold bg-[#0066FF] text-white shadow-xs">
            Créer une audience
          </span>
          <span className="px-3 py-1 rounded-xl text-[11px] font-medium opacity-60">
            Audiences enregistrées
          </span>
        </div>
      </div>

      <div className="space-y-3.5 text-xs">
        {/* Lieux */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-xs">
          <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1.5">
            Lieux géographiques ciblés
          </label>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-3 py-1 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold text-xs border border-teal-500/20 flex items-center gap-1.5">
              📍 Sénégal · Dakar, Thiès, Mbour, Saint-Louis
            </span>
            <span className="px-3 py-1 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold text-xs border border-teal-500/20 flex items-center gap-1.5">
              📍 Côte d'Ivoire · Abidjan (Cocody, Yopougon, Marcory)
            </span>
          </div>
        </div>

        {/* Âge / Sexe / Langue */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-xs">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
              Âge
            </label>
            <span className="font-black text-sm text-[#0066FF]">22 ans - 48 ans</span>
            <p className="text-[10px] opacity-60 mt-0.5">Tranche avec pouvoir d'achat actif</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-xs">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
              Sexe
            </label>
            <div className="flex gap-1.5 mt-0.5">
              <span className="px-2.5 py-1 rounded-lg bg-teal-600 text-white font-extrabold text-[10px]">Tous</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-[10px] opacity-60">Hommes</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-[10px] opacity-60">Femmes</span>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-xs">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
              Langues
            </label>
            <span className="font-bold text-xs">Français (Tous)</span>
          </div>
        </div>

        {/* Ciblage Avancé */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-xs">
          <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1.5">
            Ciblage Avancé (Données démographiques & Centres d'intérêt)
          </label>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-[#0066FF] text-[11px] font-bold border border-blue-500/20">
              ✓ Acheteurs actifs en ligne
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-[#0066FF] text-[11px] font-bold border border-blue-500/20">
              ✓ E-commerce & Shopping
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-[#0066FF] text-[11px] font-bold border border-blue-500/20">
              ✓ Utilisateurs mobiles 4G & Wi-Fi
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-[#0066FF] text-[11px] font-bold border border-blue-500/20">
              ✓ Wave / Paiements mobiles
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-75">
        <span>💡 Conseil pro : Évitez de sur-restreindre vos centres d'intérêt au début.</span>
        <span className="font-black text-teal-600">Taille d'audience estimée : 1.8M - 2.5M personnes</span>
      </div>
    </div>
  );
}

// 4. Citation percutante illustrée (Teal callout avec bordure épaisse)
function IllustratedPunchlineQuote({ quote }: { quote: string }) {
  return (
    <div className="my-8 rounded-2xl border-l-4 border-teal-500 bg-teal-500/10 p-5 sm:p-6 text-teal-950 dark:text-teal-200 shadow-sm">
      <p className="text-sm sm:text-base font-black uppercase tracking-wide leading-relaxed">
        « {quote} »
      </p>
    </div>
  );
}

// 5. Bannière d'Objectif Sparkle
function SparkleGoalBanner({ text }: { text: string }) {
  return (
    <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-teal-500/15 border border-amber-400/40 text-center shadow-sm">
      <span className="text-xs sm:text-sm font-black tracking-wide text-amber-950 dark:text-amber-200 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
        <span>{text}</span>
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
      </span>
    </div>
  );
}

// Bloc de code moderne avec barre macOS et bouton de copie
function ModernCodeBlock({
  code,
  theme,
}: {
  code: string;
  theme: "light" | "sepia" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Schéma : Le cycle vertueux du petit budget
  if (
    code.includes("LE CYCLE VERTUEUX DU PETIT BUDGET") ||
    code.includes("CYCLE VERTUEUX") ||
    (code.includes("Petit Stock") && code.includes("Closing WhatsApp"))
  ) {
    return <InteractiveCycleBudgetDiagram theme={theme} />;
  }

  // 2. Infographie : Objectifs publicitaires Facebook
  if (code.includes("OBJECTIFS PUBLICITAIRES FACEBOOK")) {
    return <FacebookAdsObjectivesInfographic theme={theme} />;
  }

  // 3. Mockup : Ciblage d'audience Facebook
  if (code.includes("CIBLAGE D'AUDIENCE FACEBOOK")) {
    return <FacebookAudienceMockup theme={theme} />;
  }

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#0A101D] shadow-xl text-slate-200">
      <div className="bg-[#101827] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 font-semibold ml-2">
            script-terrain.txt
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          title="Copier le script"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px] font-bold">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px]">Copier</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-blue-100">
        <pre className="whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}

// Tableau Haute Définition avec formatage enrichi des badges et des prix
function HighEndTable({
  tableLines,
  theme,
}: {
  tableLines: string[];
  theme: "light" | "sepia" | "dark";
}) {
  const rows = tableLines
    .filter((r) => !r.includes("---"))
    .map((r) =>
      r
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c.length > 0)
    );

  if (rows.length === 0) return null;

  const header = rows[0];
  const body = rows.slice(1);

  return (
    <div className="my-8">
      <div
        className={`overflow-x-auto rounded-3xl border shadow-md transition-all ${
          theme === "dark"
            ? "border-white/10 bg-[#0E1A33]"
            : theme === "sepia"
            ? "border-[#DFD3C1] bg-[#FAF5EC]"
            : "border-slate-200/90 bg-white"
        }`}
      >
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr
              className={`border-b ${
                theme === "dark"
                  ? "border-white/10 bg-[#142342] text-slate-300"
                  : theme === "sepia"
                  ? "border-[#DFD3C1] bg-[#F2EAE0] text-[#332A24]"
                  : "border-slate-200 bg-slate-50/90 text-slate-700"
              }`}
            >
              {header.map((col, idx) => (
                <th
                  key={idx}
                  className="p-3.5 sm:p-4 text-[11px] font-extrabold uppercase tracking-wider"
                >
                  {renderFormattedInlineText(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`divide-y ${
              theme === "dark"
                ? "divide-white/5 text-slate-300"
                : theme === "sepia"
                ? "divide-[#DFD3C1]/50 text-[#3B3029]"
                : "divide-slate-100 text-slate-700"
            }`}
          >
            {body.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`transition-colors ${
                  theme === "dark"
                    ? "hover:bg-white/5"
                    : theme === "sepia"
                    ? "hover:bg-[#F0E6D8]"
                    : "hover:bg-blue-50/40"
                }`}
              >
                {row.map((cell, cIdx) => {
                  const isFirstCol = cIdx === 0;
                  const isCurrency = /\d+[\s\u00A0]*000\s*FCFA/i.test(cell);

                  return (
                    <td key={cIdx} className="p-3.5 sm:p-4 align-middle">
                      {isFirstCol && isCurrency ? (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 shadow-xs">
                          {cell.replace(/\*\*/g, "")}
                        </span>
                      ) : (
                        <div className="leading-relaxed">
                          {renderFormattedInlineText(cell)}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] mt-2 text-right opacity-60 flex items-center justify-end gap-1">
        <span>↔</span> Faites défiler horizontalement sur smartphone si nécessaire
      </p>
    </div>
  );
}

// Composant pour rendre le texte riche, les schémas, les tableaux et les boîtes d'alerte
function FormattedChapterContent({
  content,
  theme,
}: {
  content: string;
  theme: "light" | "sepia" | "dark";
}) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let tableBuffer: string[] = [];

  const flushCode = (key: number) => {
    if (codeBuffer.length > 0) {
      elements.push(
        <ModernCodeBlock
          key={`code-${key}`}
          code={codeBuffer.join("\n")}
          theme={theme}
        />
      );
      codeBuffer = [];
    }
  };

  const flushTable = (key: number) => {
    if (tableBuffer.length > 0) {
      elements.push(
        <HighEndTable
          key={`table-${key}`}
          tableLines={tableBuffer}
          theme={theme}
        />
      );
      tableBuffer = [];
    }
  };

  lines.forEach((line, index) => {
    // 1. Blocs de code / schémas ASCII
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

    // 2. Tableaux Markdown
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      tableBuffer.push(line);
      return;
    } else if (tableBuffer.length > 0) {
      flushTable(index);
    }

    // 3. Séparateur horizontal "---"
    if (line.trim() === "---") {
      elements.push(
        <div key={index} className="my-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-xs" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
        </div>
      );
      return;
    }

    // 4. Citation percutante : > 💬 QUOTE:
    if (line.startsWith("> 💬 QUOTE:")) {
      const quoteText = line.replace("> 💬 QUOTE:", "").trim();
      elements.push(<IllustratedPunchlineQuote key={index} quote={quoteText} />);
      return;
    }

    // 5. Bannière d'objectif : > ✨ GOAL:
    if (line.startsWith("> ✨ GOAL:")) {
      const goalText = line.replace("> ✨ GOAL:", "").trim();
      elements.push(<SparkleGoalBanner key={index} text={goalText} />);
      return;
    }

    // 6. Titres H2 numérotés avec icônes illustrées (ex: ## I. , ## II. , ## III. ...)
    if (line.startsWith("## I. ") || line.startsWith("## 1. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    if (line.startsWith("## II. ") || line.startsWith("## 2. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 shadow-sm">
            <Key className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    if (line.startsWith("## III. ") || line.startsWith("## 3. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 shadow-sm">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    if (line.startsWith("## IV. ") || line.startsWith("## 4. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    if (line.startsWith("## V. ") || line.startsWith("## 5. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
            <Rocket className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    if (line.startsWith("## VI. ") || line.startsWith("## 6. ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 dark:text-indigo-200">
            {renderFormattedInlineText(line.replace(/^##\s*/, ""))}
          </h2>
        </div>
      );
      return;
    }

    // Autres Titres H2 / H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={index}
          className="text-base sm:text-xl font-black mt-8 mb-4 flex items-center gap-2.5 tracking-tight text-teal-800 dark:text-teal-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0 shadow-xs" />
          <span>{renderFormattedInlineText(line.replace("### ", ""))}</span>
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <div key={index} className="mt-12 mb-6 pb-3 border-b border-black/10 dark:border-white/10">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {renderFormattedInlineText(line.replace("## ", ""))}
          </h2>
        </div>
      );
      return;
    }

    // 7. Boîtes de Callout : Conseil / Alerte / Point clé
    if (line.startsWith("> [!TIP]") || line.startsWith("> 💡")) {
      const tipText = line.replace(/> \[\!TIP\]|> 💡/, "").trim();
      elements.push(
        <div
          key={index}
          className="my-6 rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 flex items-start gap-4 shadow-xs"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
              Conseil Terrain d'Expert
            </span>
            <div className="text-sm font-medium leading-relaxed opacity-95">
              {renderFormattedInlineText(tipText)}
            </div>
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!WARNING]") || line.startsWith("> ⚠️")) {
      const warnText = line.replace(/> \[\!WARNING\]|> ⚠️/, "").trim();
      elements.push(
        <div
          key={index}
          className="my-6 rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-start gap-4 shadow-xs"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
              Erreur Fréquente à Éviter
            </span>
            <div className="text-sm font-medium leading-relaxed opacity-95">
              {renderFormattedInlineText(warnText)}
            </div>
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!NOTE]") || line.startsWith("> 📌")) {
      const noteText = line.replace(/> \[\!NOTE\]|> 📌/, "").trim();
      elements.push(
        <div
          key={index}
          className="my-6 rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/30 flex items-start gap-4 shadow-xs"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0066FF] dark:text-blue-400 block mb-1">
              Règle d'Or Impérative
            </span>
            <div className="text-sm font-medium leading-relaxed opacity-95">
              {renderFormattedInlineText(noteText)}
            </div>
          </div>
        </div>
      );
      return;
    }

    // 8. Listes à puces (- ou *)
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const bulletText = line.trim().replace(/^[-*]\s+/, "");
      elements.push(
        <div key={index} className="flex items-start gap-3 my-2.5 pl-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0 shadow-xs" />
          <div className="leading-relaxed text-sm sm:text-base opacity-90">
            {renderFormattedInlineText(bulletText)}
          </div>
        </div>
      );
      return;
    }

    // 9. Listes numérotées (1. , 2. )
    if (/^\d+\.\s/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s(.*)/);
      if (match) {
        const num = match[1];
        const contentText = match[2];
        elements.push(
          <div
            key={index}
            className={`my-3.5 p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : theme === "sepia"
                ? "bg-[#F5EDE1] border-[#DFD3C1]"
                : "bg-slate-50/70 border-slate-200/80 shadow-xs"
            }`}
          >
            <span className="w-7 h-7 rounded-xl bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              {num}
            </span>
            <div className="leading-relaxed text-sm sm:text-base opacity-95">
              {renderFormattedInlineText(contentText)}
            </div>
          </div>
        );
        return;
      }
    }

    // 10. Paragraphe standard
    if (line.trim().length > 0) {
      elements.push(
        <p key={index} className="my-4 leading-relaxed text-sm sm:text-base opacity-90">
          {renderFormattedInlineText(line)}
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
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("light");
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

  // Styles selon le thème choisi
  const themeClasses = {
    light: "bg-[#F4F6F9] text-slate-800",
    sepia: "bg-[#F5EFE6] text-[#2C241E]",
    dark: "bg-[#091122] text-slate-100",
  };

  const contentBgClasses = {
    light: "bg-white text-slate-800 shadow-2xl border border-slate-200/80",
    sepia: "bg-[#FAF5EC] text-[#2D241E] shadow-2xl border border-[#DFD3C1]",
    dark: "bg-[#0B1528] text-slate-100 shadow-2xl border border-white/10",
  };

  const headerBgClasses = {
    light: "bg-white/95 border-slate-200 text-slate-800",
    sepia: "bg-[#F5EDE1]/95 border-[#DFD3C1] text-[#2D241E]",
    dark: "bg-[#0E1A33]/95 border-white/10 text-white",
  };

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden font-sans select-text ${themeClasses[theme]}`}
    >
      {/* 1. BARRE SUPÉRIEURE ÉLÉGANTE (Type Scribd Ebook Reader) */}
      <header
        className={`h-16 border-b px-4 sm:px-6 flex items-center justify-between z-20 shrink-0 backdrop-blur-md transition-colors ${headerBgClasses[theme]}`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/ebooks"
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 hover:text-inherit transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Retour à mes formations"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Mes formations</span>
          </Link>

          <div className="h-4 w-px bg-slate-300 dark:bg-white/20 hidden sm:block" />

          {/* Badge format livre : [s] Page X / 10 */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-teal-600 text-white font-mono text-[11px] font-black flex items-center justify-center shadow-xs">
              M
            </span>
            <div className="flex flex-col">
              <h1 className="text-xs sm:text-sm font-bold truncate max-w-[160px] sm:max-w-xs md:max-w-md">
                {product.title}
              </h1>
              <span className="text-[11px] opacity-60 font-medium">
                Module {activeChapter.order} / {chapters.length} · {progressPercent}% terminé
              </span>
            </div>
          </div>
        </div>

        {/* Contrôles de lecture & Thèmes */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sélecteur de Thème (Clair / Sépia / Sombre) */}
          <div className="flex items-center p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                theme === "light"
                  ? "bg-white text-teal-600 shadow-xs"
                  : "text-slate-400 hover:text-slate-700"
              }`}
              title="Mode Livre Blanc"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("sepia")}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                theme === "sepia"
                  ? "bg-[#EFE5D5] text-amber-900 shadow-xs"
                  : "text-slate-400 hover:text-slate-700"
              }`}
              title="Mode Sépia Papier (Confort yeux)"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                theme === "dark"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Mode Nuit Sombre"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Ajuster la taille de police */}
          <button
            onClick={cycleFontSize}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-bold"
            title="Ajuster la taille du texte"
          >
            <Type className="w-4 h-4" />
            <span className="uppercase text-[10px] font-extrabold">{fontSize}</span>
          </button>

          {/* Mode Plein Écran */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden sm:block"
            title={isFullscreen ? "Quitter le plein écran" : "Mode plein écran"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Bouton Sommaire */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold ${
              sidebarOpen
                ? "bg-teal-600 text-white shadow-sm"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            title="Sommaire du cours"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden md:inline">Sommaire</span>
          </button>
        </div>
      </header>

      {/* 2. CORPS DU LECTEUR */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Backdrop pour mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-xs transition-opacity"
          />
        )}

        {/* Sommaire Latéral Haut de Gamme */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 z-40 md:z-10 w-80 max-w-[85vw] border-r flex flex-col justify-between p-4 overflow-y-auto transition-all duration-300 shrink-0 ${
            theme === "dark"
              ? "bg-[#0B1528] border-white/10 text-white"
              : theme === "sepia"
              ? "bg-[#F5EDE1] border-[#DFD3C1] text-[#2C241E]"
              : "bg-[#0E1A33] border-slate-800 text-white"
          } ${
            sidebarOpen
              ? "translate-x-0 opacity-100 shadow-2xl md:shadow-none"
              : "-translate-x-full md:-ml-80 opacity-0 pointer-events-none"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                Curriculum Officiel
              </span>
              <span className="text-[10px] font-extrabold bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-500/30">
                {chapters.length} Modules
              </span>
            </div>

            {/* Progression globale */}
            <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="opacity-80">Avancement du cours</span>
                <span className="text-teal-400 font-black">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              {chapters.map((chap) => {
                const isActive = chap.order === currentOrder;
                const isPassed = chap.order < currentOrder;

                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      setCurrentOrder(chap.order);
                      if (window.innerWidth < 768) setSidebarOpen(false);
                      const container = document.getElementById("reader-main-container");
                      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-teal-600 text-white font-bold shadow-md shadow-teal-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-xl flex items-center justify-center font-mono text-[11px] font-black shrink-0 ${
                          isActive
                            ? "bg-white text-teal-700"
                            : isPassed
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {isPassed ? "✓" : `0${chap.order}`}
                      </span>
                      <span className="truncate leading-tight">
                        {chap.title.replace(/^\d+\.\s*/, "")}
                      </span>
                    </div>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-white/10 text-[11px] text-slate-400">
            <div className="flex items-center gap-2 mb-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-bold">Licence Nominative Vérifiée</span>
            </div>
            <p className="truncate text-slate-400">
              {user.name} ({user.email})
            </p>
          </div>
        </aside>

        {/* 3. ZONE DE LECTURE HAUTE GAMME (Mise en page "Feuille de Livre" avec Post-It rouge) */}
        <main
          id="reader-main-container"
          className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-10 flex flex-col items-center justify-between scroll-smooth transition-colors"
        >
          {/* Feuille de Livre A4 / Magazine */}
          <div
            className={`max-w-4xl w-full rounded-3xl p-6 sm:p-12 md:p-16 my-4 transition-all relative ${contentBgClasses[theme]}`}
          >
            {/* Filigrane discret anti-piratage ultra-subtil */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.015] select-none rotate-[-20deg]">
              <div className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white whitespace-nowrap leading-loose text-center">
                ECOM MASTERY • {user.email} • ID #{user.id.slice(0, 8)} <br />
                LICENCE OFFICIELLE CERTIFIÉE • REVENTE INTERDITE
              </div>
            </div>

            {/* Post-it rouge coin inférieur droit façon Scribd Ebook */}
            <div className="absolute bottom-6 right-6 w-9 h-9 rounded-lg bg-rose-500 text-white font-black text-xs flex items-center justify-center shadow-lg rotate-[-4deg] select-none z-20">
              {activeChapter.order}
            </div>

            {/* En-tête du Module */}
            <div className="relative z-10 mb-10 pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-700 dark:text-teal-300 bg-teal-500/15 border border-teal-500/30 px-3.5 py-1.5 rounded-full">
                  <BookmarkCheck className="w-3.5 h-3.5 text-teal-600" />
                  Module {activeChapter.order} sur {chapters.length}
                </span>
                <span className="text-xs opacity-60 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-500" />
                  Temps de lecture : ~12 min
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-slate-950 dark:text-white">
                {activeChapter.title}
              </h1>
            </div>

            {/* Contenu formaté avec infographies, tableaux et citations */}
            <div className={`relative z-10 ${fontSizeClasses[fontSize]}`}>
              <FormattedChapterContent content={activeChapter.content} theme={theme} />
            </div>

            {/* Sceau de Licence et de Fin de Module */}
            <div className="relative z-10 mt-14 p-5 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">Document Officiel Certifié Ecom Mastery</h4>
                  <p className="text-[11px] opacity-70">
                    Propriété exclusive de <strong>{user.name}</strong> ({user.email})
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 opacity-70">
                Licence #{user.id.slice(0, 10)}
              </span>
            </div>
          </div>

          {/* 4. BARRE DE NAVIGATION EN BAS (Précédent / Suivant) */}
          <div className="max-w-4xl w-full py-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
            <button
              onClick={() => {
                setCurrentOrder(Math.max(1, currentOrder - 1));
                const container = document.getElementById("reader-main-container");
                if (container) container.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentOrder <= 1}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-xs font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Module précédent</span>
            </button>

            <span className="text-xs opacity-60 font-bold">
              Page {currentOrder} sur {chapters.length}
            </span>

            {currentOrder < chapters.length ? (
              <button
                onClick={() => {
                  setCurrentOrder(currentOrder + 1);
                  const container = document.getElementById("reader-main-container");
                  if (container) container.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-black transition-all shadow-lg shadow-teal-500/25 hover:shadow-xl hover:scale-[1.02]"
              >
                <span>Module suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/dashboard/ebooks"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all shadow-lg shadow-emerald-500/25"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Formation terminée !</span>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
