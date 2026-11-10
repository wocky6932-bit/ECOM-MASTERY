import React from "react";
import Image from "next/image";

export interface BookCoverProps {
  title: string;
  subtitle?: string;
  category?: string;
  coverImage?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  theme?: "ecommerce" | "marketing" | "productivity" | "development" | "sourcing" | "auto";
}

export const BookCover: React.FC<BookCoverProps> = ({
  title,
  subtitle,
  category = "",
  coverImage,
  className = "",
  size = "md",
  theme = "auto",
}) => {
  const text = (title + " " + category).toLowerCase();

  // Détection du livre pour appliquer le design sur-mesure digne des plus grands éditeurs
  const isFacebook = text.includes("facebook") || text.includes("meta ads");
  const isAlibaba = text.includes("alibaba") || text.includes("1688") || text.includes("sourcing");
  const isMarketing = !isFacebook && (text.includes("marketing") || text.includes("stratégies"));
  const isProductivity = text.includes("productiv") || text.includes("organis") || text.includes("succes");
  const isDev = text.includes("dev") || text.includes("code") || text.includes("full stack") || text.includes("web");
  // Par défaut : Lancer sa boutique en ligne (E-commerce Bestseller)
  const isEcommerce = !isFacebook && !isAlibaba && !isMarketing && !isProductivity && !isDev;

  // Résolution automatique de la couverture 3D haute définition
  let resolvedCover = coverImage;
  if (!resolvedCover || resolvedCover.includes("mockups-reference") || resolvedCover.includes("-cover.png")) {
    if (isEcommerce) resolvedCover = "/images/cover-boutique-en-ligne.jpg";
    else if (isFacebook) resolvedCover = "/images/cover-facebook-ads.jpg";
    else if (isAlibaba) resolvedCover = "/images/cover-alibaba-sourcing.jpg";
    else if (isMarketing) resolvedCover = "/images/cover-marketing-digital.jpg";
    else if (isProductivity) resolvedCover = "/images/cover-productivite.jpg";
    else if (isDev) resolvedCover = "/images/cover-developpeur-web.jpg";
    else resolvedCover = "/images/cover-boutique-en-ligne.jpg";
  }

  // Tailles proportionnées aux standards de l'édition de luxe (ratio livre ~1:1.43)
  const sizeClasses = {
    sm: "w-32 h-46",
    md: "w-52 h-74 sm:w-56 sm:h-78",
    lg: "w-64 h-90 sm:w-72 sm:h-98",
    hero: "w-72 h-100 sm:w-82 sm:h-112",
  };

  // Si une couverture graphique 3D réaliste est disponible, on l'affiche avec relief studio
  if (resolvedCover) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_22px_48px_rgba(0,0,0,0.28)] transition-all duration-300 transform group-hover:-translate-y-2 select-none border border-slate-200/80 dark:border-slate-800 ${sizeClasses[size]} ${className}`}
      >
        <Image
          src={resolvedCover}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
          priority
        />
      </div>
    );
  }

  const sizeConfig = {
    sm: {
      box: "w-32 h-46",
      title: "text-[11px] leading-tight",
      subtitle: "text-[8px] leading-tight",
      tag: "text-[7px] tracking-wider",
      author: "text-[7px]",
      badge: "text-[7px] px-1.5 py-0.5",
      logoSize: "text-[7px]",
      iconSize: 24,
      paddings: "p-3",
    },
    md: {
      box: "w-52 h-74 sm:w-54 sm:h-78",
      title: "text-sm sm:text-base leading-snug",
      subtitle: "text-[10px] leading-normal",
      tag: "text-[8px] tracking-[0.2em]",
      author: "text-[9px]",
      badge: "text-[8px] px-2.5 py-1",
      logoSize: "text-[9px]",
      iconSize: 36,
      paddings: "p-5",
    },
    lg: {
      box: "w-64 h-92 sm:w-72 sm:h-100",
      title: "text-lg sm:text-xl leading-tight",
      subtitle: "text-xs leading-relaxed",
      tag: "text-[9px] tracking-[0.25em]",
      author: "text-[10px]",
      badge: "text-[9px] px-3 py-1",
      logoSize: "text-[10px]",
      iconSize: 44,
      paddings: "p-6 sm:p-7",
    },
    hero: {
      box: "w-72 h-100 sm:w-84 sm:h-116",
      title: "text-xl sm:text-2xl leading-tight",
      subtitle: "text-xs sm:text-sm leading-relaxed",
      tag: "text-[10px] tracking-[0.25em]",
      author: "text-[11px]",
      badge: "text-[10px] px-3.5 py-1.5",
      logoSize: "text-[11px]",
      iconSize: 52,
      paddings: "p-7 sm:p-8",
    },
  }[size];

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between select-none ${sizeConfig.box} ${className}`}
    >
      {/* 1. RELIURE PHYSIQUE DU LIVRE (Hardcover Spine 3D) */}
      {/* Ombre et reflet sur la tranche gauche du livre */}
      <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-30" />
      {/* Rainure de pliure du livre (crease) */}
      <div className="absolute top-0 bottom-0 left-4 w-[1.5px] bg-black/40 pointer-events-none z-30" />
      <div className="absolute top-0 bottom-0 left-[17.5px] w-[1px] bg-white/20 pointer-events-none z-30" />

      {/* Tranche droite des pages (effet papier superposé) */}
      <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-l from-black/30 via-white/10 to-transparent pointer-events-none z-30" />

      {/* Vernis brillant diagonal subtil (Foil Sheen) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-20" />

      {/* 2. COUVERTURE SPÉCIFIQUE SELON LE LIVRE */}

      {/* A. LIVRE 1 : LANCER SA BOUTIQUE EN LIGNE (Bleu Nuit & Or Champagne) */}
      {isEcommerce && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#06132A] via-[#0A2246] to-[#020A17] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          {/* Cadre or minimaliste raffiné */}
          <div className="absolute inset-2.5 border border-[#D4AF37]/25 rounded-lg pointer-events-none" />
          <div className="absolute inset-3 border border-white/5 rounded-md pointer-events-none" />

          {/* En-tête : Éditeur */}
          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#D4AF37]/90`}>
              ECOM MASTERY PRESS
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              N° 01
            </span>
          </div>

          {/* Centre : Titre & Emblème architectural */}
          <div className="relative z-10 my-auto text-left py-2">
            <div className="w-6 h-[1.5px] bg-[#D4AF37] mb-2" />
            <span className={`font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-semibold ${sizeConfig.tag}`}>
              LE BEST-SELLER E-COMMERCE
            </span>
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              LANCER SA<br />
              BOUTIQUE<br />
              EN LIGNE
            </h3>
            <p className={`text-blue-200/80 font-normal mt-2 ${sizeConfig.subtitle}`}>
              De 25 000 à 100 000 FCFA : Le guide pratique pour bâtir son commerce rentable.
            </p>
          </div>

          {/* Bas : Emblème géométrique & Mention légale */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono uppercase text-white/60 ${sizeConfig.author}`}>
              ÉDITION AFRIQUE
            </span>
            <span className={`font-semibold text-[#D4AF37] border border-[#D4AF37]/40 rounded-full bg-[#D4AF37]/10 ${sizeConfig.badge}`}>
              2026
            </span>
          </div>
        </div>
      )}

      {/* B. LIVRE 2 : FACEBOOK ADS DE A À Z (Indigo Profond & Cyan Électrique Meta) */}
      {isFacebook && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#071330] via-[#0D2660] to-[#040B1D] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          {/* Lignes d'ouverture et réticule technologique Meta */}
          <div className="absolute inset-2.5 border border-[#00C6FF]/20 rounded-lg pointer-events-none" />

          {/* Lueur d'ambiance bleue */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0066FF]/20 blur-2xl pointer-events-none" />

          {/* En-tête : Éditeur */}
          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#00C6FF]`}>
              META ADS MASTERCLASS
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              OFFICIEL
            </span>
          </div>

          {/* Centre : Titre & Réticule de ciblage */}
          <div className="relative z-10 my-auto text-left py-2">
            {/* Symbole Meta stylisé & anneaux concentriques */}
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#00C6FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#00C6FF] to-transparent" />
            </div>

            <span className={`font-mono uppercase text-[#00C6FF] tracking-wider block mb-1 font-semibold ${sizeConfig.tag}`}>
              ACQUISITION & CONVERSIONS
            </span>
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              PUBLICITÉ<br />
              FACEBOOK ADS<br />
              <span className="text-[#00C6FF]">DE A À Z</span>
            </h3>
            <p className={`text-blue-100/80 font-normal mt-2 ${sizeConfig.subtitle}`}>
              Ciblage laser · Advantage+ · Split A/B · Pixel & WhatsApp Closing.
            </p>
          </div>

          {/* Bas : Mention légale */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono uppercase text-white/60 ${sizeConfig.author}`}>
              ECOM MASTERY
            </span>
            <span className={`font-semibold text-[#00C6FF] border border-[#00C6FF]/40 rounded-full bg-[#00C6FF]/10 ${sizeConfig.badge}`}>
              GUIDE COMPLET
            </span>
          </div>
        </div>
      )}

      {/* C. LIVRE 3 : SOURCING ALIBABA & 1688 (Terre de Sienne & Cuivre Chinois) */}
      {isAlibaba && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#24110A] via-[#3E1B0D] to-[#170904] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          {/* Cadre cuivre élégant */}
          <div className="absolute inset-2.5 border border-[#F4A261]/25 rounded-lg pointer-events-none" />

          {/* Lueur chaude */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#E76F51]/20 blur-2xl pointer-events-none" />

          {/* En-tête : Éditeur */}
          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#F4A261]`}>
              GLOBAL SOURCING
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              CHINE-AFRIQUE
            </span>
          </div>

          {/* Centre : Titre & Motif Cargo */}
          <div className="relative z-10 my-auto text-left py-2">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-[#F4A261]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#F4A261] to-transparent" />
            </div>

            <span className={`font-mono uppercase text-[#F4A261] tracking-wider block mb-1 font-semibold ${sizeConfig.tag}`}>
              IMPORTATION & FOURNISSEURS
            </span>
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              FORMATION<br />
              ALIBABA & 1688
            </h3>
            <p className={`text-amber-100/80 font-normal mt-2 ${sizeConfig.subtitle}`}>
              Trouver les usines · Négocier · Fret aérien & maritime vers le Sénégal.
            </p>
          </div>

          {/* Bas : Auteur officiel Cheikh Akhmad */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase text-[#F4A261] ${sizeConfig.author}`}>
              CHEIKH AKHMAD
            </span>
            <span className={`font-semibold text-white/80 border border-white/20 rounded-full bg-white/5 ${sizeConfig.badge}`}>
              10 MODULES
            </span>
          </div>
        </div>
      )}

      {/* D. LIVRE 4 : STRATÉGIES MARKETING DIGITAL (Vert Émeraude & Platine) */}
      {isMarketing && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#051C15] via-[#0A3327] to-[#02100C] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          <div className="absolute inset-2.5 border border-[#34D399]/20 rounded-lg pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#34D399]`}>
              GROWTH MARKETING
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              2026
            </span>
          </div>

          <div className="relative z-10 my-auto text-left py-2">
            <div className="w-6 h-[1.5px] bg-[#34D399] mb-2" />
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              STRATÉGIES<br />
              MARKETING<br />
              DIGITAL
            </h3>
            <p className={`text-emerald-100/80 font-normal mt-2 ${sizeConfig.subtitle}`}>
              Psychologie d'influence, tunnels de conversion et vente en masse.
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono uppercase text-white/60 ${sizeConfig.author}`}>
              ECOM MASTERY
            </span>
            <span className={`font-semibold text-[#34D399] border border-[#34D399]/40 rounded-full bg-[#34D399]/10 ${sizeConfig.badge}`}>
              PRO
            </span>
          </div>
        </div>
      )}

      {/* E. LIVRE 5 : PRODUCTIVITÉ (Graphite Anthracite & Corail) */}
      {isProductivity && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#121620] via-[#1C2333] to-[#0A0D14] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          <div className="absolute inset-2.5 border border-[#FB7185]/20 rounded-lg pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#FB7185]`}>
              HIGH PERFORMANCE
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              MINDSET
            </span>
          </div>

          <div className="relative z-10 my-auto text-left py-2">
            <div className="w-6 h-[1.5px] bg-[#FB7185] mb-2" />
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              BOOSTEZ VOTRE<br />
              PRODUCTIVITÉ
            </h3>
            <p className={`text-slate-300 font-normal mt-2 ${sizeConfig.subtitle}`}>
              Gestion du temps, priorisation et discipline d'exécution pour entrepreneurs.
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono uppercase text-white/60 ${sizeConfig.author}`}>
              ECOM MASTERY
            </span>
            <span className={`font-semibold text-[#FB7185] border border-[#FB7185]/40 rounded-full bg-[#FB7185]/10 ${sizeConfig.badge}`}>
              FOCUS
            </span>
          </div>
        </div>
      )}

      {/* F. LIVRE 6 : DÉVELOPPEUR WEB (Obsidienne & Indigo Cyber) */}
      {isDev && (
        <div className={`absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#141B2D] to-[#05080E] flex flex-col justify-between text-white ${sizeConfig.paddings} pl-7`}>
          <div className="absolute inset-2.5 border border-[#818CF8]/20 rounded-lg pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className={`font-mono font-bold uppercase ${sizeConfig.tag} text-[#818CF8]`}>
              ENGINEERING
            </span>
            <span className={`font-mono uppercase ${sizeConfig.tag} text-white/50`}>
              FULL STACK
            </span>
          </div>

          <div className="relative z-10 my-auto text-left py-2">
            <div className="w-6 h-[1.5px] bg-[#818CF8] mb-2" />
            <h3 className={`font-black uppercase tracking-tight text-white ${sizeConfig.title}`}>
              DÉVELOPPEUR<br />
              WEB FULL STACK
            </h3>
            <p className={`text-indigo-100/80 font-normal mt-2 ${sizeConfig.subtitle}`}>
              Next.js, TypeScript, API et bases de données pour le web moderne.
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className={`font-mono uppercase text-white/60 ${sizeConfig.author}`}>
              ECOM MASTERY
            </span>
            <span className={`font-semibold text-[#818CF8] border border-[#818CF8]/40 rounded-full bg-[#818CF8]/10 ${sizeConfig.badge}`}>
              DEV
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
