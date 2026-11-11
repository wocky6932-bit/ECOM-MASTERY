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
  Sun,
  Moon,
  Coffee,
  Copy,
  Check,
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  FileText,
  Layers,
  Smartphone,
  Globe,
  MessageSquare,
  Image as ImageIcon,
  Video,
  Settings,
  Info,
  Headphones,
  AlertCircle,
  CheckSquare,
  Square,
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
  // Nettoyage sécurisé des emojis sans altérer le texte ou les lettres de l'alphabet
  const clean = text.replace(/\p{Extended_Pictographic}/gu, "").trim();
  const parts = clean.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-inherit underline-offset-2">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// 1. Schéma : Le cycle vertueux du petit budget (Design sobre et épuré)
function InteractiveCycleBudgetDiagram({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const steps = [
    {
      num: "01",
      title: "Stock Test Local",
      desc: "Achat de 4 à 8 unités locales (Sandaga, grossistes) sans bloquer son capital.",
      tag: "Risque minimal",
    },
    {
      num: "02",
      title: "Publicité Ciblée",
      desc: "Campagnes Meta et TikTok à 2 000 - 3 000 FCFA/jour avec ciblage précis.",
      tag: "Test rapide",
    },
    {
      num: "03",
      title: "Closing WhatsApp",
      desc: "Conversion directe, qualification des prospects et confirmation de commande.",
      tag: "Conversion directe",
    },
    {
      num: "04",
      title: "Encaissement Wave / COD",
      desc: "Paiement instantané sans frais par Wave ou règlement à la livraison.",
      tag: "Trésorerie immédiate",
    },
    {
      num: "05",
      title: "Réinvestissement",
      desc: "Rotation accélérée : 70% à 80% du bénéfice réinjecté pour doubler le stock.",
      tag: "Croissance continue",
    },
  ];

  return (
    <div
      className={`my-8 rounded-2xl p-6 sm:p-7 border transition-all ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
            Méthodologie Financière
          </span>
          <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Le Cycle Vertueux du Petit Budget
          </h4>
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-slate-700">
          Modèle validé sur le terrain
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
              theme === "dark"
                ? "bg-slate-950/50 border-slate-800/80"
                : theme === "sepia"
                ? "bg-white/70 border-[#DFD3C1]"
                : "bg-white border-slate-200 shadow-xs"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 w-7 h-7 rounded-lg flex items-center justify-center">
                  {s.num}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {s.tag}
                </span>
              </div>
              <h5 className="text-sm font-semibold tracking-tight mb-1 text-slate-900 dark:text-white">
                {s.title}
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Structure légère · Vitesse d'exécution prioritaire</span>
        <span className="font-semibold text-slate-900 dark:text-white">
          Rotation du capital en 72 heures
        </span>
      </div>
    </div>
  );
}

// 2. Infographie : Les 3 Piliers d'Objectifs Meta Ads (Notoriété, Considération, Conversion)
function FacebookAdsObjectivesInfographic({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const pillars = [
    {
      num: "01",
      title: "Notoriété",
      subtitle: "Faire connaître votre marque et vos produits",
      items: [
        { name: "Notoriété de la marque", desc: "Augmente la mémorisation de vos produits auprès des prospects." },
        { name: "Portée", desc: "Touche le maximum d'utilisateurs uniques au coût le plus bas." },
      ],
    },
    {
      num: "02",
      title: "Considération",
      subtitle: "Inciter les prospects à interagir et s'informer",
      items: [
        { name: "Trafic", desc: "Dirige les visiteurs vers votre boutique ou votre catalogue." },
        { name: "Engagement", desc: "Favorise les commentaires, partages et réactions sous vos publications." },
        { name: "Vues de vidéos", desc: "Diffuse vos démonstrations produits au meilleur coût par vue." },
        { name: "Messages WhatsApp", desc: "Recommandé en Afrique : ouvre une discussion directe de vente." },
      ],
    },
    {
      num: "03",
      title: "Conversion",
      subtitle: "Déclencher l'achat et les paiements directs",
      items: [
        { name: "Achats sur site", desc: "Optimise pour les commandes confirmées et paiements Wave." },
        { name: "Ventes catalogue", desc: "Présente automatiquement vos collections selon les profils." },
        { name: "Points de retrait", desc: "Oriente les clients vers votre point relais ou boutique physique." },
      ],
    },
  ];

  return (
    <div
      className={`my-8 rounded-2xl p-6 sm:p-7 border transition-all ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Structure Officielle Meta Ads
        </span>
        <h4 className="text-base sm:text-lg font-bold mt-1 tracking-tight text-slate-900 dark:text-white">
          Les 3 Piliers d'Objectifs Publicitaires
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
          L'objectif choisi détermine comment l'algorithme distribue votre budget et quel type d'acheteur est ciblé.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`rounded-xl border overflow-hidden flex flex-col ${
              theme === "dark"
                ? "bg-slate-950/60 border-slate-800"
                : theme === "sepia"
                ? "bg-white/80 border-[#DFD3C1]"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/40">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">
                Pilier {pillar.num}
              </span>
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                {pillar.title}
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                {pillar.subtitle}
              </p>
            </div>
            <div className="p-3.5 flex-1 space-y-2">
              {pillar.items.map((item, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800"
                >
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>Conseil Afrique : Commencez par <strong>Messages WhatsApp</strong> ou <strong>Achats (Conversions)</strong>.</span>
        <span className="font-semibold text-slate-900 dark:text-white">L'objectif représente 80% de l'efficacité</span>
      </div>
    </div>
  );
}

// 3. Mockup d'interface : Paramétrage d'Audience Meta Ads
function FacebookAudienceMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border overflow-hidden ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-white border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Gestionnaire de Publicités · Définition de l'Audience
          </span>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
          Ciblage géographique & démographique
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Lieu de diffusion
            </span>
            <div className="font-semibold text-slate-900 dark:text-white">
              Dakar, Sénégal (+40 km)
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Personnes vivant récemment ou de passage dans cette zone géographique.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Tranche d'âge & Genre
            </span>
            <div className="font-semibold text-slate-900 dark:text-white">
              22 – 48 ans · Tous les genres
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Segment avec pouvoir d'achat actif et habitude de paiement Wave / Cash.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1.5">
            Ciblage Avancé par Centres d'Intérêt
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "Achats en ligne",
              "Commerce électronique",
              "Accessoires de mode",
              "Téléphonie mobile",
              "Wave Mobile Money",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Citation éditoriale sobre
function IllustratedPunchlineQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="my-6 pl-4 border-l-2 border-slate-900 dark:border-white py-1">
      <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 italic leading-relaxed">
        "{renderFormattedInlineText(quote)}"
      </p>
    </blockquote>
  );
}

// 5. Bannière d'objectif sobre
function SparkleGoalBanner({ text }: { text: string }) {
  return (
    <div className="my-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-3">
      <Info className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
        {renderFormattedInlineText(text)}
      </div>
    </div>
  );
}

// 6. Mockup : Audiences Personnalisées
function FacebookCustomAudienceMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const sources = [
    { name: "Fichier client", desc: "Liste de numéros WhatsApp ou emails pour relancer les anciens acheteurs." },
    { name: "Trafic du site web (Pixel)", desc: "Visiteurs ayant consulté votre boutique sans finaliser l'achat." },
    { name: "Interactions Page & Profil", desc: "Personnes ayant envoyé un message, commenté ou partagé vos posts." },
    { name: "Vues de vidéos", desc: "Spectateurs ayant regardé plus de 50% de vos démonstrations produits." },
  ];

  return (
    <div
      className={`my-8 rounded-2xl border overflow-hidden ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-white border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Créer une Audience Personnalisée (Custom Audience)
        </span>
        <span className="text-[11px] text-slate-500 font-medium">Ciblage de reciblage (Retargeting)</span>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sources.map((s, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30"
          >
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
              {s.name}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. Mockup : Placements Publicitaires
function FacebookPlacementsMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Placements Advantage+ vs Manuels
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
          Où diffuser vos publicités ?
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Placements Advantage+ (Recommandé)
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            L'algorithme diffuse automatiquement sur Facebook, Instagram, Messenger et Audience Network là où le coût par conversion est le plus bas.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Placements Manuels
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Sélection stricte : privilégiez le Fil d'actualité Facebook, le Fil Instagram et les Stories pour un engagement direct maximal.
          </p>
        </div>
      </div>
    </div>
  );
}

// 8. Mockup : Budget et Calendrier
function FacebookBudgetMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Stratégie Budgétaire
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
          Budget Quotidien vs Budget Global
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Budget Quotidien (Ex : 3 000 à 5 000 FCFA/jour)
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Idéal pour tester un produit sur 4 à 6 jours consécutifs. Vous pouvez stopper ou augmenter le budget à tout instant selon les résultats.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Budget Global
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Fixe un plafond maximum pour une période définie (ex : 30 000 FCFA pour une promotion spéciale Korité ou Tabaski).
          </p>
        </div>
      </div>
    </div>
  );
}

// 9. Formats Publicitaires
function FacebookFormatsInfographic({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const formats = [
    { title: "Image Unique", desc: "Idéal pour un produit clair avec une accroche tarifaire nette." },
    { title: "Vidéo Démonstration", desc: "Montre l'utilisation réelle en situation et résout un problème concret." },
    { title: "Carrousel Multi-Produits", desc: "Permet de faire défiler jusqu'à 10 cartes produits avec liens distincts." },
    { title: "Bouton WhatsApp Direct", desc: "Le format N°1 en Afrique : le prospect démarre une discussion en un clic." },
  ];

  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Formats Créatifs
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
          Choisir le bon format publicitaire
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        {formats.map((f, i) => (
          <div
            key={i}
            className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
          >
            <div className="font-semibold text-slate-900 dark:text-white mb-1">
              {f.title}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 10. Mockup : Tests A/B par répartition (Split Testing)
function FacebookABTestMockup({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Gestionnaire de Publicités Meta • Test par répartition
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Exemple de configuration : Variable « Audience (Âge) »
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
          ID Campagne : 6097994191172
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Ensemble de publicités A
            </span>
            <span className="text-[11px] font-mono text-slate-500">Budget 25,00 €</span>
          </div>
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Audience : 18 - 24 ans
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Diffusion équitable sur le même créatif visuel. Aucune interférence avec l'autre groupe.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Ensemble de publicités B
            </span>
            <span className="text-[11px] font-mono text-slate-500">Budget 25,00 €</span>
          </div>
          <div className="font-semibold text-slate-900 dark:text-white mb-1">
            Audience : 25 - 50 ans
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Deuxième groupe d'âge testé en simultané pour identifier l'audience la plus réactive.
          </p>
        </div>
      </div>

      <div className="mt-3.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
        <span className="font-semibold text-slate-900 dark:text-white">Règle de fiabilité :</span> Aucun chevauchement d'audiences — votre portée potentielle est répartie de manière aléatoire et équitable entre les deux ensembles pour garantir l'exactitude des résultats.
      </div>
    </div>
  );
}

// 11. Résultats Tests A/B : Coût par résultat & Portée
function FacebookABTestResultsChart({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Rapport d'analyse comparative
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
          Résultats du test par répartition sur deux audiences différentes
        </h4>
      </div>

      {/* Section 1 : Coût par résultat */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mb-3.5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase text-slate-500">
            Métrique 1 : Afficher par Coût par résultat
          </span>
          <span className="text-[11px] font-semibold text-slate-900 dark:text-white">
            Ensemble B gagnant (95% de certitude statistique)
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-600 dark:text-slate-300">Ensemble A (18 - 24 ans)</span>
              <span className="font-semibold text-slate-900 dark:text-white">0,62 € / résultat</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-slate-400 dark:bg-slate-600 w-[90%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-900 dark:text-white font-semibold">Ensemble B (25 - 50 ans) — Gagnant</span>
              <span className="font-bold text-slate-900 dark:text-white">0,33 € / résultat (-47% de coût)</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-slate-900 dark:bg-white w-[48%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 : Portée (Personnes atteintes) */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mb-3.5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase text-slate-500">
            Métrique 2 : Afficher par Portée (Personnes atteintes)
          </span>
          <span className="text-[11px] font-mono text-slate-500">Budget égal 25,00 €</span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-600 dark:text-slate-300">Ensemble A (18 - 24 ans)</span>
              <span className="font-semibold text-slate-900 dark:text-white">2 110 personnes</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-slate-400 dark:bg-slate-600 w-[30%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-900 dark:text-white font-semibold">Ensemble B (25 - 50 ans)</span>
              <span className="font-bold text-slate-900 dark:text-white">7 140 personnes (3,4x plus de portée)</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-slate-900 dark:bg-white w-[100%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 : Placements de diffusion */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="text-xs font-bold uppercase text-slate-500 mb-2">
          Métrique 3 : Répartition par Placements (Ordinateur vs Mobile)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-500 text-[10px] uppercase">Facebook Fil</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">58%</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-500 text-[10px] uppercase">Instagram</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">31%</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-500 text-[10px] uppercase">Audience Net.</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">8%</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-500 text-[10px] uppercase">Messenger</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">3%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 12. Pixel Facebook Architecture & Rôle
function FacebookPixelArchitectureCard({ theme }: { theme: "light" | "sepia" | "dark" }) {
  return (
    <div
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Outil d'analyse Meta • Suivi des Conversions
        </span>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
          Le Pixel Facebook & l'API de Conversions
        </h4>
      </div>

      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mb-3.5">
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
          « Le pixel Facebook est un outil d'analyse qui vous permet de mesurer l'efficacité de votre publicité en suivant les actions entreprises par les personnes sur votre site web. »
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3.5">
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">1. Diffusion ultra-précise</div>
          <p className="text-slate-500 leading-relaxed">S'assurer que les publicités sont diffusées auprès des personnes les plus enclines à acheter.</p>
        </div>
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">2. Audiences de reciblage</div>
          <p className="text-slate-500 leading-relaxed">Créer des audiences personnalisées pour recontacter les visiteurs ayant abandonné leur panier.</p>
        </div>
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">3. Outils publicitaires Meta</div>
          <p className="text-slate-500 leading-relaxed">Débloquer les campagnes d'optimisation d'achats et le catalogue dynamique automatisé.</p>
        </div>
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="font-semibold text-slate-900 dark:text-white mb-1">4. Mesure exacte du ROI</div>
          <p className="text-slate-500 leading-relaxed">Savoir avec certitude combien chaque franc investi génère en chiffre d'affaires réel.</p>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="font-semibold text-slate-900 dark:text-white text-xs mb-1">Comment ça marche ?</div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Pour configurer le pixel Facebook, ajoutez le code dans l'en-tête (balise &lt;head&gt;) de votre site web. Lorsqu'une personne consulte votre boutique et effectue une action (consultation de produit, ajout au panier, achat validé), le pixel transmet instantanément l'information à Meta pour affiner vos futures publicités.
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// SCHÉMAS VISUELS : GUIDE FACEBOOK ADS PAS À PAS (ÉCOUTEURS SANS FIL DAKAR)
// ============================================================================

function FbWindowFrame({
  title,
  caption,
  theme,
  children,
}: {
  title: string;
  caption?: string;
  theme: "light" | "sepia" | "dark";
  children: React.ReactNode;
}) {
  const frameBg =
    theme === "dark"
      ? "bg-slate-900/80 border-slate-700 text-slate-100"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#D8CBB8] text-[#2C241E]"
      : "bg-[#FBF9F5] border-slate-300 text-slate-800";

  const barBg =
    theme === "dark"
      ? "bg-slate-900 border-slate-800 text-slate-400"
      : theme === "sepia"
      ? "bg-[#F1E8DA] border-[#DFD3C1] text-[#6B5B4D]"
      : "bg-[#F3F0EA] border-slate-200 text-slate-500";

  return (
    <figure className="my-7">
      <div className={`rounded-2xl border overflow-hidden shadow-xs ${frameBg}`}>
        <div className={`px-4 py-2.5 border-b flex items-center gap-3 ${barBg}`}>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>
          <span className="text-xs font-medium truncate">{title}</span>
        </div>
        <div className="p-4 sm:p-5">{children}</div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-slate-500 dark:text-slate-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function StepBadge({ num }: { num: number }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold shrink-0">
      {num}
    </span>
  );
}

// Schéma 1 — Liste de vérification des prérequis
function FbStep1ChecklistSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const items = [
    { checked: true, text: "Une page Facebook professionnelle (nom de la boutique, logo, coordonnées)" },
    { checked: true, text: "Un compte publicitaire Meta rattaché à cette page" },
    { checked: true, text: "Un moyen de paiement accepté par Meta" },
    { checked: false, text: "Un compte Instagram professionnel (facultatif, pour Instagram)" },
    { checked: true, text: "Un lien de commande : fiche produit Shopify ou lien WhatsApp" },
  ];

  return (
    <FbWindowFrame
      title="Ce qu'il faut avoir avant de commencer"
      caption="Schéma 1 — Liste de vérification. Testez votre lien depuis un téléphone avant de continuer."
      theme={theme}
    >
      <ul className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs sm:text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2.5">
            {item.checked ? (
              <CheckSquare className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
            ) : (
              <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            )}
            <span className="leading-snug">{item.text}</span>
          </li>
        ))}
      </ul>
    </FbWindowFrame>
  );
}

// Schéma 2 — Interface simplifiée : bouton Créer, objectif Ventes, nom de campagne
function FbStep2CampaignSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/80 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const otherObjectives = [
    { name: "Notoriété", desc: "Se faire connaître" },
    { name: "Trafic", desc: "Visites sur le site" },
    { name: "Engagement", desc: "Messages, interactions" },
    { name: "Prospects", desc: "Collecter des contacts" },
  ];

  return (
    <FbWindowFrame
      title="Ads Manager › Créer une campagne › Objectif"
      caption="Schéma 2 — Interface simplifiée : bouton Créer, objectif Ventes, nom de campagne."
      theme={theme}
    >
      <div className="space-y-4">
        <div>
          <span className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-3.5 py-2 rounded-lg text-xs font-bold ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent">
            <StepBadge num={1} />
            <span>Créer</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {otherObjectives.map((obj, idx) => (
            <div key={idx} className={`p-3 rounded-xl border ${cardBg}`}>
              <div className="text-xs font-bold text-slate-900 dark:text-white">{obj.name}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{obj.desc}</div>
            </div>
          ))}
        </div>

        <div className="max-w-xs">
          <div className="p-3 rounded-xl border-2 border-[#1877F2] bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-amber-400">
            <div className="flex items-center gap-2">
              <StepBadge num={2} />
              <span className="text-xs font-bold text-slate-900 dark:text-white">Ventes</span>
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 pl-7">
              Achats et commandes
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold text-slate-500 mb-1.5">
            Nom de la campagne
          </div>
          <div className={`p-2.5 rounded-xl border-2 border-amber-400 flex items-center gap-2.5 ${cardBg}`}>
            <StepBadge num={3} />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-900 dark:text-white">
              ECOUTEURS - VENTES DAKAR
            </span>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// Schéma 3 — Destination, budget quotidien et durée
function FbStep3BudgetSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/80 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  return (
    <FbWindowFrame
      title="Ensemble de publicités › Destination et budget"
      caption="Schéma 3 — Destination, budget quotidien et durée."
      theme={theme}
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <StepBadge num={1} />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Où voulez-vous obtenir des ventes ?
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl border-2 border-[#1877F2] bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-amber-400">
              <div className="text-xs font-bold text-slate-900 dark:text-white">Site web</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">Boutique Shopify</div>
            </div>
            <div className={`p-3 rounded-xl border ${cardBg}`}>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Messagerie</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Messenger, Instagram</div>
            </div>
            <div className={`p-3 rounded-xl border ${cardBg}`}>
              <div className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Si proposé</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <StepBadge num={2} />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Budget quotidien
              </span>
            </div>
            <div className={`px-3.5 py-2.5 rounded-xl border-2 border-amber-400 text-xs sm:text-sm font-bold text-slate-900 dark:text-white ${cardBg}`}>
              2 000 FCFA
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <StepBadge num={3} />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Dates
              </span>
            </div>
            <div className={`px-3.5 py-2.5 rounded-xl border-2 border-amber-400 text-xs sm:text-sm font-medium text-slate-900 dark:text-white ${cardBg}`}>
              Début : demain · Fin : +5 jours
            </div>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// Schéma 4 — Audience de départ et emplacements
function FbStep4AudienceSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/80 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  return (
    <FbWindowFrame
      title="Ensemble de publicités › Audience"
      caption="Schéma 4 — Audience de départ et emplacements."
      theme={theme}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <StepBadge num={1} />
              <span className="text-xs font-medium text-slate-500">Lieu</span>
            </div>
            <div className={`px-3.5 py-2 rounded-xl border-2 border-amber-400 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white ${cardBg}`}>
              Dakar, Sénégal
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <StepBadge num={2} />
              <span className="text-xs font-medium text-slate-500">Âge</span>
            </div>
            <div className={`px-3.5 py-2 rounded-xl border-2 border-amber-400 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white ${cardBg}`}>
              18 - 35 ans
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1.5 h-5">
              <span className="text-xs font-medium text-slate-500">Genre</span>
            </div>
            <div className={`px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 ${cardBg}`}>
              Tous
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <StepBadge num={3} />
            <span className="text-xs font-medium text-slate-500">Ciblage</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl border-2 border-[#1877F2] bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-amber-400">
              <div className="text-xs font-bold text-slate-900 dark:text-white">Large (Advantage+)</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                L'algorithme cherche les acheteurs
              </div>
            </div>
            <div className={`p-3 rounded-xl border ${cardBg}`}>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Centres d'intérêt</div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Technologie, smartphones, accessoires
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <StepBadge num={4} />
            <span className="text-xs font-medium text-slate-500">Emplacements</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Facebook Feed", "Instagram Feed", "Stories", "Reels"].map((pl) => (
              <span
                key={pl}
                className={`px-3 py-1.5 rounded-xl border-2 border-amber-400 text-xs font-semibold text-slate-900 dark:text-white ${cardBg}`}
              >
                {pl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// Schéma 5 — Réglages de l'annonce et aperçu sur mobile
function FbStep5AdPreviewSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const fields = [
    { num: 1, label: "Identité", val: "Page : Ma Boutique · Instagram : @maboutique" },
    { num: 2, label: "Format et média", val: "Vidéo 9:16 (ou image 1:1)" },
    { num: 3, label: "Texte principal", val: "Écouteurs sans fil · Bluetooth · livraison à Dakar" },
    { num: 4, label: "Titre", val: "Écouteurs sans fil à 10 000 FCFA" },
    { num: 5, label: "Bouton", val: "Acheter / Commander / Envoyer un message" },
    { num: 6, label: "Lien du site ou de WhatsApp", val: "https://ma-boutique.com/ecouteurs" },
  ];

  return (
    <FbWindowFrame
      title="Annonce › Identité, contenu et aperçu"
      caption="Schéma 5 — Réglages de l'annonce et aperçu sur mobile (illustration)."
      theme={theme}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 space-y-2.5">
          {fields.map((f) => (
            <div key={f.num}>
              <div className="flex items-center gap-1.5 mb-1">
                <StepBadge num={f.num} />
                <span className="text-[11px] font-medium text-slate-500">{f.label}</span>
              </div>
              <div className={`px-3 py-2 rounded-xl border-2 border-amber-400 text-xs font-medium text-slate-900 dark:text-white break-all ${cardBg}`}>
                {f.val}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5">
          <div className={`rounded-2xl border overflow-hidden shadow-xs ${cardBg}`}>
            <div className="p-3.5 space-y-1">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Ma Boutique · <span className="font-normal text-slate-500">Sponsorisé</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                Écouteurs sans fil Bluetooth livrés à Dakar.
              </p>
            </div>
            <div className="h-36 bg-slate-200/70 dark:bg-slate-800/80 flex flex-col items-center justify-center gap-2 border-y border-slate-200/80 dark:border-slate-700">
              <Headphones className="w-11 h-11 text-slate-500 dark:text-slate-300" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Aperçu Vidéo / Visuel
              </span>
            </div>
            <div className="p-3 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">10 000 FCFA</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-semibold">
                Commander
              </span>
            </div>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// Schéma 6 — Dernière vérification avant de cliquer sur Publier
function FbStep6PublishSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const checks = [
    "Le prix de l'annonce est le même que sur la page",
    "Le lien s'ouvre vite sur téléphone",
    "Une commande test a été faite",
    "Le produit est présenté sous son vrai nom, sans marque usurpée",
    "Je peux répondre aux messages dans l'heure",
  ];

  return (
    <FbWindowFrame
      title="Avant de cliquer sur Publier"
      caption="Schéma 6 — Dernière vérification."
      theme={theme}
    >
      <div className="space-y-4">
        <ul className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs sm:text-sm">
          {checks.map((c, idx) => (
            <li key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2.5">
              <CheckSquare className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="pt-1">
          <span className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg text-xs font-bold ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#DC2626] text-white text-[10px] font-black">
              !
            </span>
            <span>Publier</span>
          </span>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// Checklist de lancement finale
function FbStepLaunchChecklistSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const items = [
    "CPA maximal et budget de test calculés",
    "Produit présenté sous son vrai nom, source et garantie vérifiées",
    "Photos, vidéo et texte prêts",
    "Page, compte publicitaire et paiement configurés",
    "Campagne Ventes, budget et audience réglés",
    "Aperçu vérifié, commande test réussie",
    "Date du bilan fixée (3 à 5 jours)",
  ];

  return (
    <div
      className={`my-7 rounded-2xl border p-5 sm:p-6 ${
        theme === "dark"
          ? "bg-slate-900/60 border-slate-700 text-slate-100"
          : theme === "sepia"
          ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
          : "bg-slate-50/70 border-slate-200 text-slate-800"
      }`}
    >
      <ul className="space-y-3 text-xs sm:text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// SCHÉMAS VISUELS : GUIDE ALIBABA RASOIRS ÉLECTRIQUES (SÉNÉGAL)
// ============================================================================

function AlibabaBadge({ num }: { num: number }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#EA580C] text-white text-[11px] font-bold shrink-0">
      {num}
    </span>
  );
}

function ShaverOutlineIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="4" width="24" height="56" rx="12" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="20" cy="18" r="6" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}

// 1. Vue d'ensemble (10 étapes)
function AlibabaOverviewSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const steps = [
    { num: 1, label: "Créer le compte acheteur" },
    { num: 2, label: "Rechercher et filtrer" },
    { num: 3, label: "Comparer les fournisseurs" },
    { num: 4, label: "Poser ses questions" },
    { num: 5, label: "Demander un échantillon" },
    { num: 6, label: "Valider le devis" },
    { num: 7, label: "Payer avec Trade Assurance" },
    { num: 8, label: "Contacter le transitaire" },
    { num: 9, label: "Suivre l'expédition" },
    { num: 10, label: "Contrôler et confirmer" },
  ];

  const cardBg =
    theme === "dark"
      ? "bg-slate-900/70 border-slate-800 text-slate-100"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#2C241E]"
      : "bg-slate-50/70 border-slate-200 text-slate-800";

  return (
    <div className="my-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {steps.map((s) => (
        <div key={s.num} className={`p-3 rounded-xl border flex flex-col gap-1.5 ${cardBg}`}>
          <div className="flex items-start gap-2">
            <AlibabaBadge num={s.num} />
            <span className="text-xs font-semibold leading-snug">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// 2. Création du compte Alibaba (3 écrans)
function AlibabaAccountSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const panelBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";
  const inputBg =
    theme === "dark"
      ? "bg-slate-900 border-slate-700 text-slate-300"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#DFD3C1] text-[#4B3E33]"
      : "bg-slate-50 border-slate-200 text-slate-600";

  return (
    <FbWindowFrame
      title="Création du compte acheteur Alibaba.com"
      caption="1. Cliquer sur « S'inscrire » · 2. Remplir le formulaire · 3. Valider le code reçu par e-mail, puis compléter le profil."
      theme={theme}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
        {/* Écran 1 */}
        <div className={`rounded-xl border p-3.5 space-y-3 ${panelBg}`}>
          <div className="text-[11px] font-mono text-slate-400 border-b border-slate-200/70 dark:border-slate-800 pb-1.5">
            alibaba.com
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">Alibaba.com</div>
          <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] ${inputBg}`}>
            Rechercher des produits...
          </div>
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-[11px] text-slate-500">Connexion</span>
            <span className="inline-flex items-center gap-1.5 bg-[#EA580C] text-white px-2.5 py-1.5 rounded-lg text-[11px] font-bold">
              <AlibabaBadge num={1} />
              <span>S&apos;inscrire</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-500 pt-1 leading-snug">
            Page d&apos;accueil : le bouton se trouve en haut à droite de l&apos;écran.
          </p>
        </div>

        {/* Écran 2 */}
        <div className={`rounded-xl border p-3.5 space-y-2.5 ${panelBg}`}>
          <div className="text-[11px] font-mono text-slate-400 border-b border-slate-200/70 dark:border-slate-800 pb-1.5">
            alibaba.com/inscription
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 dark:text-white">Créer un compte</span>
            <AlibabaBadge num={2} />
          </div>
          <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] ${inputBg}`}>Adresse e-mail</div>
          <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] ${inputBg}`}>Mot de passe</div>
          <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold ${inputBg}`}>Pays : Sénégal</div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Square className="w-3.5 h-3.5 shrink-0" />
            <span>J&apos;accepte les conditions</span>
          </div>
          <div className="bg-[#EA580C] text-white text-center py-1.5 rounded-lg font-bold text-[11px]">
            Créer mon compte
          </div>
          <p className="text-[10px] text-slate-500">Choisissez le profil « acheteur ».</p>
        </div>

        {/* Écran 3 */}
        <div className={`rounded-xl border p-3.5 space-y-2.5 ${panelBg}`}>
          <div className="text-[11px] font-mono text-slate-400 border-b border-slate-200/70 dark:border-slate-800 pb-1.5">
            Vérification
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 dark:text-white">Vérifiez votre e-mail</span>
            <AlibabaBadge num={3} />
          </div>
          <p className="text-[11px] text-slate-500">Entrez le code reçu par message</p>
          <div className="grid grid-cols-6 gap-1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className={`h-7 rounded border ${inputBg}`} />
            ))}
          </div>
          <div className="bg-[#EA580C] text-white text-center py-1.5 rounded-lg font-bold text-[11px]">
            Valider
          </div>
          <div className="pt-1 border-t border-slate-200/70 dark:border-slate-800 text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300">
            <div className="font-bold text-slate-900 dark:text-white">Complétez le profil</div>
            <div>Nom complet</div>
            <div>Téléphone</div>
            <div>Adresse de livraison</div>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// 3. Recherche & Filtres sur Alibaba
function AlibabaSearchSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const products = [
    { name: "Rotary shaver USB", price: "$6.40 - $8.50", moq: "Min. 50 pièces", badge: "Vérifié · Trade Assurance" },
    { name: "Foil shaver IPX7", price: "$9.10 - $12.00", moq: "Min. 100 pièces", badge: "" },
    { name: "Trimmer + shaver", price: "$5.20 - $7.80", moq: "Min. 200 pièces", badge: "" },
  ];

  return (
    <FbWindowFrame
      title="Recherche et filtres sur Alibaba.com"
      caption="1. Barre de recherche · 2. Filtres (vérifié, Trade Assurance, quantité minimale) · 3. Cartes produit : prix, quantité minimale (MOQ), badges."
      theme={theme}
    >
      <div className="space-y-4 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <div className={`flex-1 min-w-[200px] px-3.5 py-2 rounded-full border text-slate-700 dark:text-slate-200 font-medium ${cardBg}`}>
            electric shaver rechargeable
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#EA580C] text-white px-4 py-2 rounded-full font-bold">
            <AlibabaBadge num={1} />
            <span>Rechercher</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <AlibabaBadge num={2} />
              <span>Filtres</span>
            </div>
            {[
              "Fournisseur vérifié",
              "Trade Assurance",
              "Quantité min. ≤ 100",
              "Personnalisable (logo)",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Square className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
            <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] text-slate-500 ${cardBg}`}>
              Prix min - max (US$)
            </div>
            <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-medium text-slate-700 dark:text-slate-200 ${cardBg}`}>
              Livraison vers : Sénégal
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <AlibabaBadge num={3} />
              <span className="font-semibold text-slate-500">Résultats comparables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {products.map((p, i) => (
                <div key={i} className={`rounded-xl border p-2.5 space-y-2 ${cardBg}`}>
                  <div className="h-20 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300">
                    <ShaverOutlineIcon className="w-10 h-14" />
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white leading-tight">{p.name}</div>
                  <div className="font-bold text-slate-900 dark:text-white">{p.price}</div>
                  <div className="text-[11px] text-slate-500">{p.moq}</div>
                  {p.badge && (
                    <div className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                      {p.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// 4. Lire une fiche produit
function AlibabaProductSheetSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  return (
    <FbWindowFrame
      title="Anatomie d'une fiche produit Alibaba"
      caption="1. Titre et profil du fournisseur · 2. Prix dégressifs selon la quantité · 3. Variantes (couleur, chargeur) · 4. Protections de l'acheteur · 5. Actions."
      theme={theme}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start text-xs">
        <div className="md:col-span-4 space-y-2">
          <div className={`h-44 rounded-xl border flex items-center justify-center text-slate-600 dark:text-slate-300 ${cardBg}`}>
            <ShaverOutlineIcon className="w-20 h-28" />
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-9 rounded-lg border ${cardBg}`} />
            ))}
          </div>
        </div>

        <div className="md:col-span-8 space-y-3">
          <div>
            <div className="flex items-start gap-2">
              <AlibabaBadge num={1} />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  Rechargeable Rotary Electric Shaver, IPX7
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Shenzhen ... Co., Ltd. · Vérifié · 6 ans sur Alibaba
                </div>
              </div>
            </div>
          </div>

          <div className={`p-3 rounded-xl border flex items-start gap-2 ${cardBg}`}>
            <AlibabaBadge num={2} />
            <div className="grid grid-cols-3 gap-2 flex-1">
              <div>
                <div className="text-[10px] text-slate-500">1 - 99 pcs</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">$8.50</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500">100 - 499 pcs</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">$7.20</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500">≥ 500 pcs</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">$6.40</div>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <AlibabaBadge num={3} />
              <span className="font-medium text-slate-600 dark:text-slate-300">Couleur :</span>
              <span className="w-4 h-4 rounded-full bg-slate-900 border border-slate-300" />
              <span className="w-4 h-4 rounded-full bg-slate-400 border border-slate-300" />
              <span className="w-4 h-4 rounded-full bg-amber-800 border border-slate-300" />
            </div>
            <div className="pl-7 flex flex-wrap items-center gap-2">
              <span className="text-slate-500">Prise / chargeur :</span>
              <span className={`px-2 py-0.5 rounded border font-semibold ${cardBg}`}>USB-C</span>
              <span className={`px-2 py-0.5 rounded border text-slate-500 ${cardBg}`}>Micro-USB</span>
            </div>
            <div className="pl-7 text-slate-600 dark:text-slate-300">
              Logo / emballage : personnalisable (OEM)
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-start gap-2 ${cardBg}`}>
            <AlibabaBadge num={4} />
            <div className="text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
              <div><strong>Protection :</strong> Trade Assurance · Livraison à date</div>
              <div><strong>Paiement :</strong> carte, virement, autres selon pays</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <AlibabaBadge num={5} />
            <span className="px-3.5 py-2 rounded-full bg-[#EA580C] text-white font-bold text-[11px]">
              Commencer la commande
            </span>
            <span className="px-3.5 py-2 rounded-full border border-[#EA580C] text-[#EA580C] font-bold text-[11px]">
              Contacter le fournisseur
            </span>
          </div>
        </div>
      </div>
    </FbWindowFrame>
  );
}

// 5. Messagerie Alibaba & Bonnes pratiques
function AlibabaChatSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const practices = [
    "Activez la traduction si elle est proposée.",
    "Phrases courtes, un sujet par message.",
    "Exigez un devis écrit avec prix et délai.",
    "Restez dans le chat Alibaba : c'est la preuve.",
    "Commandez ensuite via « Commencer la commande ».",
  ];

  return (
    <FbWindowFrame
      title="Messagerie Alibaba & Bonnes pratiques"
      caption="Exemple de conversation avec un fournisseur chinois : demande de prix, certificats, échantillon, puis devis écrit. Les messages sont fictifs."
      theme={theme}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
        <div className={`lg:col-span-7 rounded-xl border overflow-hidden ${cardBg}`}>
          <div className="px-3.5 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
            <span className="font-bold text-slate-900 dark:text-white">Chat · Shenzhen ... Co., Ltd.</span>
            <span className="text-[11px] text-slate-500">Traduction : activée</span>
          </div>
          <div className="p-3.5 space-y-2.5">
            <div className="ml-auto max-w-[85%] rounded-xl border border-[#EA580C]/40 bg-orange-50/70 dark:bg-orange-950/30 p-2.5 text-slate-800 dark:text-slate-100">
              Hello, I need 100 pcs of this shaver, delivered to Dakar, Senegal.
            </div>
            <div className="mr-auto max-w-[85%] rounded-xl bg-slate-100 dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200">
              Hello! $7.20 per piece for 100 pcs, FOB Shenzhen. Production: 15 days.
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl border border-[#EA580C]/40 bg-orange-50/70 dark:bg-orange-950/30 p-2.5 text-slate-800 dark:text-slate-100">
              Please send CE/RoHS certificates and a sample price with shipping to Dakar.
            </div>
            <div className="mr-auto max-w-[85%] rounded-xl bg-slate-100 dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200">
              Sample $12 + shipping. I send you the quotation now.
            </div>
            <div className="p-2.5 rounded-xl border-2 border-[#EA580C] bg-white dark:bg-slate-900">
              <div className="font-bold text-slate-900 dark:text-white">Devis / Proforma Invoice</div>
              <div className="text-[11px] text-slate-500 mt-0.5">100 pcs · $720 · FOB · PDF</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-2.5">
          <div className="font-bold text-slate-900 dark:text-white text-sm">Bonnes pratiques</div>
          {practices.map((txt, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <AlibabaBadge num={idx + 1} />
              <span className="text-slate-700 dark:text-slate-300 leading-snug">{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </FbWindowFrame>
  );
}

// 6. Cinq écrans du processus de commande
function AlibabaOrderFlowSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const cols = [
    {
      num: 1,
      title: "Produit",
      lines: ["Quantité", "Couleur", "Chargeur", "Logo", "Emballage", "Prix total hors transport"],
    },
    {
      num: 2,
      title: "Adresse",
      lines: ["Nom", "Téléphone", "Pays : Sénégal", "Ville : Dakar", "Adresse du transitaire ou la vôtre"],
    },
    {
      num: 3,
      title: "Livraison",
      lines: ["Transitaire Chine - Dakar", "Devis transport", "76 134 39 04"],
    },
    {
      num: 4,
      title: "Paiement",
      lines: ["Trade Assurance", "Carte ou virement", "Facture pro forma"],
    },
    {
      num: 5,
      title: "Suivi",
      lines: ["Production", "Expédié", "En transit", "Livré", "N° de suivi dans « Mes commandes »"],
    },
  ];

  return (
    <FbWindowFrame
      title="Processus de commande sur Alibaba (5 écrans)"
      caption="Les cinq écrans du processus de commande, du choix des options au suivi."
      theme={theme}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
        {cols.map((col) => (
          <div key={col.num} className={`rounded-xl border p-3 flex flex-col gap-2 ${cardBg}`}>
            <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/70 dark:border-slate-800">
              <AlibabaBadge num={col.num} />
              <span className="font-bold text-slate-900 dark:text-white">{col.title}</span>
            </div>
            <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
              {col.lines.map((l, idx) => (
                <li key={idx} className={l.includes("76 134") ? "font-bold text-emerald-700 dark:text-emerald-400" : ""}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FbWindowFrame>
  );
}

// 7. Paiement protégé Trade Assurance
function AlibabaTradeAssuranceSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  const steps = [
    { num: 1, title: "Vous payez", desc: "sur Alibaba, pas en dehors" },
    { num: 2, title: "Paiement", desc: "protégé selon les conditions Trade Assurance" },
    { num: 3, title: "Production", desc: "le fournisseur fabrique et expédie" },
    { num: 4, title: "Réception", desc: "vous contrôlez la marchandise" },
    { num: 5, title: "Confirmation", desc: "vous validez si tout est conforme" },
  ];

  return (
    <FbWindowFrame
      title="Circuit d'un paiement protégé Trade Assurance"
      caption="Les étapes d'un paiement protégé. Les garanties exactes dépendent des conditions de chaque commande : lisez-les avant de payer."
      theme={theme}
    >
      <div className="space-y-3 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {steps.map((s) => (
            <div key={s.num} className={`rounded-xl border p-3 ${cardBg}`}>
              <div className="mb-1.5">
                <AlibabaBadge num={s.num} />
              </div>
              <div className="font-bold text-slate-900 dark:text-white">{s.title}</div>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl border border-red-400/80 bg-red-50/50 dark:bg-red-950/20 text-center text-[11px] font-medium text-red-800 dark:text-red-300">
          Un problème ? Ouvrez le litige dans « Mes commandes » avant de confirmer la réception.
        </div>
      </div>
    </FbWindowFrame>
  );
}

// 8. Transitaire Chine-Dakar + Numéro officiel
function AlibabaForwarderSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const cardBg =
    theme === "dark"
      ? "bg-slate-950/70 border-slate-800"
      : theme === "sepia"
      ? "bg-white/85 border-[#DFD3C1]"
      : "bg-white border-slate-200";

  return (
    <div className="space-y-4">
      <FbWindowFrame
        title="Chaîne logistique Chine - Dakar"
        caption="Le transitaire fait le lien entre le fournisseur en Chine et vous à Dakar."
        theme={theme}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className={`rounded-xl border p-3.5 text-center ${cardBg}`}>
            <div className="mb-1.5 flex justify-center"><AlibabaBadge num={1} /></div>
            <div className="font-bold text-slate-900 dark:text-white">Fournisseur</div>
            <div className="text-[11px] text-slate-500 mt-1">Chine · prépare la commande</div>
          </div>
          <div className={`rounded-xl border-2 border-[#EA580C] p-3.5 text-center ${cardBg}`}>
            <div className="mb-1.5 flex justify-center"><AlibabaBadge num={2} /></div>
            <div className="font-bold text-slate-900 dark:text-white">Transitaire</div>
            <div className="text-[11px] text-slate-500 mt-1">Chine - Dakar · transport et formalités</div>
          </div>
          <div className={`rounded-xl border p-3.5 text-center ${cardBg}`}>
            <div className="mb-1.5 flex justify-center"><AlibabaBadge num={3} /></div>
            <div className="font-bold text-slate-900 dark:text-white">Vous</div>
            <div className="text-[11px] text-slate-500 mt-1">Dakar · reçoit la marchandise</div>
          </div>
        </div>
      </FbWindowFrame>

      <div className="my-5 rounded-xl border-l-4 border-emerald-700 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 text-center">
        <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">
          Transitaire Chine–Dakar
        </div>
        <div className="text-2xl font-black text-[#EA580C] tracking-wide my-1">
          76 134 39 04
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Appelez avant de payer votre commande pour demander un devis de transport.
        </p>
      </div>
    </div>
  );
}

// =========================================================================
// SCHÉMAS INTERACTIFS : GUIDE LE CLOSING (PROSPECTS -> CLIENTS)
// =========================================================================
function Closing7StepsSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const steps = [
    { num: 1, title: "Accueillir", sub: "répondre vite" },
    { num: 2, title: "Qualifier", sub: "poser les bonnes questions" },
    { num: 3, title: "Présenter", sub: "bénéfices et preuves" },
    { num: 4, title: "Objections", sub: "écouter, rassurer" },
    { num: 5, title: "Conclure", sub: "proposer la prochaine étape" },
    { num: 6, title: "Encaisser", sub: "paiement simple" },
    { num: 7, title: "Suivre", sub: "livraison, avis, réachat" },
  ];
  const cardBg =
    theme === "dark"
      ? "bg-slate-900 border-slate-700"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#DFD3C1]"
      : "bg-slate-50 border-slate-200";
  return (
    <div className={`my-6 rounded-2xl border p-4 sm:p-5 ${cardBg}`}>
      <div className="text-[11px] font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-400 mb-3">
        Le parcours complet en 7 étapes
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {steps.map((s) => (
          <div
            key={s.num}
            className={`rounded-xl border p-2.5 text-center ${
              theme === "dark"
                ? "bg-slate-950/60 border-slate-800"
                : theme === "sepia"
                ? "bg-[#FDFBF7] border-[#E8DCC8]"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-[#9F1239] text-white text-xs font-extrabold flex items-center justify-center">
              {s.num}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{s.title}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{s.sub}</div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 italic text-center">
        Chaque étape prépare la suivante. Une vente se perd rarement à la dernière : elle se perd souvent à la deuxième ou à la quatrième.
      </p>
    </div>
  );
}

function ClosingObjectionLoopSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const steps = [
    { num: "1.", title: "Écouter", sub: "sans couper", highlight: false },
    { num: "2.", title: "Reformuler", sub: "« Si je comprends bien… »", highlight: false },
    { num: "3.", title: "Répondre", sub: "avec une preuve", highlight: false },
    { num: "4.", title: "Vérifier", sub: "« Ça répond ? »", highlight: true },
  ];
  const cardBg =
    theme === "dark"
      ? "bg-slate-900 border-slate-700"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#DFD3C1]"
      : "bg-slate-50 border-slate-200";
  return (
    <div className={`my-6 rounded-2xl border p-4 sm:p-5 ${cardBg}`}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((s) => (
          <div
            key={s.num}
            className={`rounded-xl p-3 text-center ${
              s.highlight
                ? "border-2 border-[#9F1239] bg-rose-50/60 dark:bg-rose-950/20"
                : theme === "dark"
                ? "border border-slate-800 bg-slate-950/60"
                : theme === "sepia"
                ? "border border-[#E8DCC8] bg-[#FDFBF7]"
                : "border border-slate-200 bg-white"
            }`}
          >
            <div className="text-xs font-extrabold text-slate-900 dark:text-white">
              {s.num} {s.title}
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 italic text-center">
        Si le doute revient, retournez à l&apos;étape 1 : posez une question pour trouver la vraie raison.
      </p>
    </div>
  );
}

function ClosingRelanceTimelineSchema({ theme }: { theme: "light" | "sepia" | "dark" }) {
  const milestones = [
    { day: "J0", title: "Offre", sub: "envoyée" },
    { day: "J+1", title: "Rappel utile", sub: "vidéo, réponse à une question" },
    { day: "J+3", title: "Preuve", sub: "avis client, photo livraison" },
    { day: "J+7", title: "Dernier message", sub: "« je clôture le dossier ? »" },
    { day: "J+14", title: "Porte ouverte", sub: "nouveauté ou offre utile" },
  ];
  const cardBg =
    theme === "dark"
      ? "bg-slate-900 border-slate-700"
      : theme === "sepia"
      ? "bg-[#FAF5EC] border-[#DFD3C1]"
      : "bg-slate-50 border-slate-200";
  return (
    <div className={`my-6 rounded-2xl border p-4 sm:p-5 ${cardBg}`}>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {milestones.map((m) => (
          <div
            key={m.day}
            className={`rounded-xl border p-3 text-center ${
              theme === "dark"
                ? "bg-slate-950/60 border-slate-800"
                : theme === "sepia"
                ? "bg-[#FDFBF7] border-[#E8DCC8]"
                : "bg-white border-slate-200"
            }`}
          >
            <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#9F1239] text-white text-[11px] font-bold mb-1.5">
              {m.day}
            </span>
            <div className="text-xs font-bold text-slate-900 dark:text-white">{m.title}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bloc de code moderne et sobre avec bouton de copie
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

  // 4. Mockup : Audiences Personnalisées Facebook
  if (code.includes("AUDIENCES PERSONNALISEES FACEBOOK")) {
    return <FacebookCustomAudienceMockup theme={theme} />;
  }

  // 5. Mockup : Placements Publicitaires Facebook
  if (code.includes("PLACEMENTS PUBLICITAIRES FACEBOOK")) {
    return <FacebookPlacementsMockup theme={theme} />;
  }

  // 6. Mockup : Budget et Calendrier Facebook
  if (code.includes("BUDGET ET CALENDRIER FACEBOOK")) {
    return <FacebookBudgetMockup theme={theme} />;
  }

  // 7. Infographie : Formats Publicitaires Facebook
  if (code.includes("FORMATS PUBLICITAIRES FACEBOOK")) {
    return <FacebookFormatsInfographic theme={theme} />;
  }

  // 9. Graphique Résultats Tests A/B Facebook
  if (code.includes("TESTS AB RESULTATS FACEBOOK")) {
    return <FacebookABTestResultsChart theme={theme} />;
  }

  // 10. Carte Pixel Facebook Architecture
  if (code.includes("PIXEL FACEBOOK ARCHITECTURE")) {
    return <FacebookPixelArchitectureCard theme={theme} />;
  }

  // 8. Mockup : Tests A/B Facebook
  if (code.includes("TESTS AB FACEBOOK")) {
    return <FacebookABTestMockup theme={theme} />;
  }

  // 11. Nouveaux Schémas du Guide Facebook Ads Pas à Pas (Écouteurs Dakar)
  if (code.includes("FB_PAS_A_PAS_SCHEMA_1")) {
    return <FbStep1ChecklistSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_SCHEMA_2")) {
    return <FbStep2CampaignSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_SCHEMA_3")) {
    return <FbStep3BudgetSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_SCHEMA_4")) {
    return <FbStep4AudienceSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_SCHEMA_5")) {
    return <FbStep5AdPreviewSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_SCHEMA_6")) {
    return <FbStep6PublishSchema theme={theme} />;
  }
  if (code.includes("FB_PAS_A_PAS_CHECKLIST")) {
    return <FbStepLaunchChecklistSchema theme={theme} />;
  }

  // 12. Schémas du Guide Alibaba Rasoirs Électriques (Sénégal)
  if (code.includes("ALIBABA_RASOIRS_VUE_ENSEMBLE")) {
    return <AlibabaOverviewSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_COMPTE")) {
    return <AlibabaAccountSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_RECHERCHE")) {
    return <AlibabaSearchSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_FICHE")) {
    return <AlibabaProductSheetSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_CHAT")) {
    return <AlibabaChatSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_COMMANDE")) {
    return <AlibabaOrderFlowSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_PAIEMENT")) {
    return <AlibabaTradeAssuranceSchema theme={theme} />;
  }
  if (code.includes("ALIBABA_RASOIRS_TRANSITAIRE")) {
    return <AlibabaForwarderSchema theme={theme} />;
  }

  // 13. Schémas du Guide Le Closing (Prospects -> Clients)
  if (code.includes("CLOSING_7_ETAPES")) {
    return <Closing7StepsSchema theme={theme} />;
  }
  if (code.includes("CLOSING_OBJECTION_4_ETAPES")) {
    return <ClosingObjectionLoopSchema theme={theme} />;
  }
  if (code.includes("CLOSING_RELANCE_TIMELINE")) {
    return <ClosingRelanceTimelineSchema theme={theme} />;
  }

  return (
    <div
      className={`my-6 rounded-xl overflow-hidden border ${
        theme === "dark"
          ? "border-slate-800 bg-slate-950 text-slate-200"
          : theme === "sepia"
          ? "border-[#DFD3C1] bg-[#FAF5EC] text-[#2C241E]"
          : "border-slate-200 bg-slate-50 text-slate-800"
      }`}
    >
      <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100/60 dark:bg-slate-900/60">
        <span className="text-xs font-mono font-medium text-slate-500">
          Modèle de texte
        </span>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors"
          title="Copier le texte"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Copié</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px]">Copier</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
        <pre className="whitespace-pre font-mono">{code}</pre>
      </div>
    </div>
  );
}

// Tableau Haute Définition épuré et lisible
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
        className={`overflow-x-auto rounded-xl border ${
          theme === "dark"
            ? "border-slate-800 bg-slate-900/50"
            : theme === "sepia"
            ? "border-[#DFD3C1] bg-[#FAF5EC]"
            : "border-slate-200 bg-white"
        }`}
      >
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr
              className={`border-b ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-900 text-slate-200"
                  : theme === "sepia"
                  ? "border-[#DFD3C1] bg-[#F2EAE0] text-[#332A24]"
                  : "border-slate-200 bg-slate-100/70 text-slate-800"
              }`}
            >
              {header.map((col, idx) => (
                <th
                  key={idx}
                  className="p-3.5 sm:p-4 text-xs font-bold uppercase tracking-wider"
                >
                  {renderFormattedInlineText(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`divide-y ${
              theme === "dark"
                ? "divide-slate-800/80 text-slate-300"
                : theme === "sepia"
                ? "divide-[#DFD3C1]/60 text-[#3B3029]"
                : "divide-slate-100 text-slate-700"
            }`}
          >
            {body.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`transition-colors ${
                  theme === "dark"
                    ? "hover:bg-slate-800/40"
                    : theme === "sepia"
                    ? "hover:bg-[#F2EAE0]/50"
                    : "hover:bg-slate-50/80"
                }`}
              >
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-3.5 sm:p-4 align-middle">
                    <div className="leading-relaxed">
                      {renderFormattedInlineText(cell)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Composant pour rendre le texte riche avec typographie moderne et zéro emoji
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
    // 1. Blocs de code
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
        <hr
          key={index}
          className="my-8 border-slate-200 dark:border-slate-800"
        />
      );
      return;
    }

    // 4. Citation éditoriale
    if (line.startsWith("> QUOTE:") || line.startsWith("> QUOTE :") || line.includes("QUOTE:")) {
      const quoteText = line.replace(/>.*QUOTE\s*:/, "").trim();
      elements.push(<IllustratedPunchlineQuote key={index} quote={quoteText} />);
      return;
    }

    // 5. Bannière d'objectif
    if (line.startsWith("> GOAL:") || line.startsWith("> GOAL :") || line.includes("GOAL:")) {
      const goalText = line.replace(/>.*GOAL\s*:/, "").trim();
      elements.push(<SparkleGoalBanner key={index} text={goalText} />);
      return;
    }

    // 6. Titres H2 sobres et élégants
    if (line.startsWith("## ")) {
      elements.push(
        <div key={index} className="mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {renderFormattedInlineText(line.replace("## ", ""))}
          </h2>
        </div>
      );
      return;
    }

    // 7. Titres H3 sobres
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={index}
          className="text-base sm:text-lg font-bold mt-7 mb-2 tracking-tight text-slate-800 dark:text-slate-100"
        >
          {renderFormattedInlineText(line.replace("### ", ""))}
        </h3>
      );
      return;
    }

    // 8. Boîtes de Callout sobres (Notion/Stripe style)
    if (line.startsWith("> [!TIP]") || line.startsWith("> Conseil :") || line.startsWith("> **Conseil")) {
      const text = line
        .replace(/^>\s*\[\!TIP\]\s*/i, "")
        .replace(/^>\s*(?:\*\*)?\s*(?:Conseil[^:]*:\s*)+(?:\*\*)?\s*/i, "")
        .trim();
      elements.push(
        <div
          key={index}
          className="my-6 pl-4 border-l-4 border-slate-900 dark:border-slate-100 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-r-xl"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Conseil Pratique
          </span>
          <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderFormattedInlineText(text)}
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!WARNING]") || line.startsWith("> Attention :") || line.startsWith("> **Attention")) {
      const text = line
        .replace(/^>\s*\[\!WARNING\]\s*/i, "")
        .replace(/^>\s*(?:\*\*)?\s*(?:Attention[^:]*:\s*)+(?:\*\*)?\s*/i, "")
        .trim();
      elements.push(
        <div
          key={index}
          className="my-6 pl-4 border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-r-xl"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
            Attention Importante
          </span>
          <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderFormattedInlineText(text)}
          </div>
        </div>
      );
      return;
    }

    if (line.startsWith("> [!NOTE]") || line.startsWith("> À retenir :") || line.startsWith("> **À retenir")) {
      const text = line
        .replace(/^>\s*\[\!NOTE\]\s*/i, "")
        .replace(/^>\s*(?:\*\*)?\s*(?:À retenir[^:]*:\s*)+(?:\*\*)?\s*/i, "")
        .trim();
      elements.push(
        <div
          key={index}
          className="my-6 pl-4 border-l-4 border-[#0066FF] bg-blue-50/40 dark:bg-blue-950/20 p-4 rounded-r-xl"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
            À Retenir
          </span>
          <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderFormattedInlineText(text)}
          </div>
        </div>
      );
      return;
    }

    // 8b. Citations / Encadrés génériques (> ...)
    if (line.trim().startsWith("> ")) {
      const bqText = line.trim().replace(/^>\s*/, "");
      const isAlert =
        bqText.includes("À lire avant tout") ||
        bqText.includes("contrefaçon") ||
        bqText.includes("Méfiez-vous") ||
        bqText.includes("Batteries lithium");
      const isGreen =
        bqText.includes("WhatsApp") ||
        bqText.includes("rassurer l’acheteur") ||
        bqText.includes("rassurer l'acheteur") ||
        bqText.includes("Cochez au minimum");
      const isOrange =
        bqText.includes("À savoir") ||
        bqText.includes("Utilisez le même nom") ||
        bqText.includes("Pour une première commande");
      elements.push(
        <div
          key={index}
          className={`my-6 pl-4 border-l-4 p-4 rounded-r-xl ${
            isAlert
              ? "border-red-700 bg-red-50/50 dark:bg-red-950/20"
              : isGreen
              ? "border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/20"
              : isOrange
              ? "border-[#EA580C] bg-amber-50/60 dark:bg-amber-950/20"
              : "border-slate-400 bg-slate-50/70 dark:bg-slate-900/40"
          }`}
        >
          <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderFormattedInlineText(bqText)}
          </div>
        </div>
      );
      return;
    }

    // 9. Listes à puces (- ou *) et cases à cocher (- [x] ou - [ ])
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const bulletText = line.trim().replace(/^[-*]\s+/, "");
      if (bulletText.startsWith("[x] ") || bulletText.startsWith("[X] ")) {
        return elements.push(
          <div key={index} className="flex items-start gap-2.5 my-2 pl-1">
            <CheckSquare className="w-4 h-4 text-[#0066FF] mt-1 shrink-0" />
            <div className="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {renderFormattedInlineText(bulletText.slice(4))}
            </div>
          </div>
        );
      }
      if (bulletText.startsWith("[ ] ")) {
        return elements.push(
          <div key={index} className="flex items-start gap-2.5 my-2 pl-1">
            <Square className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
            <div className="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {renderFormattedInlineText(bulletText.slice(4))}
            </div>
          </div>
        );
      }
      elements.push(
        <div key={index} className="flex items-start gap-3 my-2 pl-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
          <div className="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {renderFormattedInlineText(bulletText)}
          </div>
        </div>
      );
      return;
    }

    // 10. Listes numérotées (1. , 2. )
    if (/^\d+\.\s/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s(.*)/);
      if (match) {
        const num = match[1];
        const contentText = match[2];
        elements.push(
          <div key={index} className="flex items-start gap-3 my-2.5 pl-1">
            <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 mt-0.5">
              {num}
            </span>
            <div className="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {renderFormattedInlineText(contentText)}
            </div>
          </div>
        );
        return;
      }
    }

    // 11. Paragraphe standard
    if (line.trim().length > 0) {
      elements.push(
        <p key={index} className="my-4 leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
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

  // Styles selon le thème
  const themeClasses = {
    light: "bg-[#F8FAFC] text-slate-800",
    sepia: "bg-[#F5EFE6] text-[#2C241E]",
    dark: "bg-[#090E17] text-slate-100",
  };

  const contentBgClasses = {
    light: "bg-white text-slate-800 border border-slate-200/90 shadow-sm",
    sepia: "bg-[#FAF5EC] text-[#2D241E] border border-[#DFD3C1] shadow-sm",
    dark: "bg-[#0F172A] text-slate-100 border border-slate-800 shadow-sm",
  };

  const headerBgClasses = {
    light: "bg-white/95 border-slate-200 text-slate-800",
    sepia: "bg-[#F5EDE1]/95 border-[#DFD3C1] text-[#2D241E]",
    dark: "bg-[#0F172A]/95 border-slate-800 text-white",
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${theme === "dark" ? "dark" : ""} ${themeClasses[theme]}`}>
      {/* 1. Barre Supérieure de Lecture */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md px-4 py-2.5 flex items-center justify-between transition-colors ${headerBgClasses[theme]}`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/ebooks"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Retour à mes formations"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-xs font-bold truncate max-w-xs md:max-w-md">
              {product.title}
            </h1>
            <p className="text-[11px] opacity-60">
              Module {activeChapter.order}/{chapters.length} · {progressPercent}% terminé
            </p>
          </div>
        </div>

        {/* Contrôles de Confort de Lecture */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Progression */}
          <div className="hidden md:flex items-center gap-2 mr-2">
            <div className="w-24 h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0066FF] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-mono opacity-60">{progressPercent}%</span>
          </div>

          {/* Ajustement Taille Police */}
          <button
            onClick={cycleFontSize}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-bold flex items-center gap-1"
            title="Ajuster la taille de la police"
          >
            <Type className="w-4 h-4" />
            <span className="text-[10px] uppercase">{fontSize}</span>
          </button>

          {/* Sélecteur de Thème */}
          <div className="flex items-center border border-black/10 dark:border-white/10 rounded-lg p-0.5">
            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-md transition-colors ${
                theme === "light"
                  ? "bg-black/10 text-slate-900 font-bold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Thème Clair"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("sepia")}
              className={`p-1.5 rounded-md transition-colors ${
                theme === "sepia"
                  ? "bg-[#DFD3C1] text-[#2C241E] font-bold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Thème Sépia (Confort papier)"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`p-1.5 rounded-md transition-colors ${
                theme === "dark"
                  ? "bg-white/20 text-white font-bold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Thème Sombre"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Plein Écran */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Basculer plein écran"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Bascule Sommaire */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Sommaire du cours"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 2. Corps Principal : Sommaire + Contenu du Livre */}
      <div className="flex-1 flex overflow-hidden">
        {/* Barre Latérale Sommaire */}
        {sidebarOpen && (
          <aside
            className={`w-72 sm:w-80 shrink-0 border-r overflow-y-auto flex flex-col justify-between transition-colors ${
              theme === "dark"
                ? "bg-[#090E17] border-slate-800"
                : theme === "sepia"
                ? "bg-[#F0E6D8] border-[#DFD3C1]"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/5 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Sommaire du cours
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5">
                  {chapters.length} modules
                </span>
              </div>

              <div className="space-y-1">
                {chapters.map((ch) => {
                  const isActive = ch.order === currentOrder;
                  const isCompleted = ch.order < currentOrder;

                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setCurrentOrder(ch.order);
                        if (window.innerWidth < 768) setSidebarOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 ${
                        isActive
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-xs"
                          : "hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          isActive
                            ? "bg-white/20 text-white dark:bg-slate-900 dark:text-white"
                            : isCompleted
                            ? "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            : "bg-black/5 dark:bg-white/5"
                        }`}
                      >
                        {isCompleted ? <Check className="w-3.5 h-3.5" /> : ch.order.toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs leading-snug line-clamp-2">
                        {ch.title.replace(/^\d+\.\s*/, "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Certificat Nominatif en bas de barre latérale */}
            <div className="p-4 border-t border-black/5 dark:border-white/5 text-[11px] opacity-60">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>Licence nominative vérifiée</span>
              </div>
              <p className="truncate">{user.name} ({user.email})</p>
            </div>
          </aside>
        )}

        {/* 3. Zone de Lecture du Document */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 flex justify-center">
          <div
            className={`max-w-4xl w-full rounded-2xl p-6 sm:p-12 md:p-16 my-4 transition-all relative ${contentBgClasses[theme]}`}
          >
            {/* En-tête du Module */}
            <div className="relative z-10 mb-8 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                  <BookmarkCheck className="w-3.5 h-3.5 text-slate-500" />
                  Module {activeChapter.order} sur {chapters.length}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  ~10 min de lecture
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                {activeChapter.title}
              </h1>
            </div>

            {/* Contenu formaté avec typographie soignée et zéro emoji */}
            <div className={`relative z-10 ${fontSizeClasses[fontSize]}`}>
              <FormattedChapterContent content={activeChapter.content} theme={theme} />
            </div>

            {/* Pagination et Certification en bas */}
            <div className="relative z-10 mt-14 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Document officiel · Propriété de <strong>{user.name}</strong></span>
              </div>
              <div className="font-medium text-slate-600 dark:text-slate-400">
                Page {activeChapter.order} sur {chapters.length}
              </div>
            </div>

            {/* Boutons Suivant / Précédent */}
            <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
              <button
                disabled={currentOrder <= 1}
                onClick={() => setCurrentOrder(currentOrder - 1)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                  currentOrder <= 1
                    ? "opacity-30 cursor-not-allowed border-slate-200 dark:border-slate-800"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Module précédent
              </button>

              <button
                disabled={currentOrder >= chapters.length}
                onClick={() => setCurrentOrder(currentOrder + 1)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  currentOrder >= chapters.length
                    ? "opacity-30 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-500"
                    : "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-sm"
                }`}
              >
                Module suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
