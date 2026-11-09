import React from "react";
import Image from "next/image";
import { ShoppingCart, Megaphone, TrendingUp, Code2, BookOpen, Package } from "lucide-react";

export interface BookCoverProps {
  title: string;
  subtitle?: string;
  category?: string;
  coverImage?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  theme?: "ecommerce" | "marketing" | "productivity" | "development" | "sourcing" | "auto";
}

// Thèmes visuels des livres adaptés à la maquette
const themes = {
  ecommerce: {
    bg: "linear-gradient(145deg, #071329 0%, #0A2558 50%, #050E1F 100%)",
    accent: "#0066FF",
    glow: "rgba(0, 102, 255, 0.25)",
    icon: ShoppingCart,
    subColor: "text-blue-300",
  },
  marketing: {
    bg: "linear-gradient(145deg, #1877F2 0%, #0A4EB5 50%, #082F6D 100%)",
    accent: "#1877F2",
    glow: "rgba(24, 119, 242, 0.35)",
    icon: Megaphone,
    subColor: "text-blue-200",
  },
  sourcing: {
    bg: "linear-gradient(145deg, #FF6A00 0%, #E64A00 50%, #A82E00 100%)",
    accent: "#FF6A00",
    glow: "rgba(255, 106, 0, 0.35)",
    icon: Package,
    subColor: "text-amber-200",
  },
  productivity: {
    bg: "linear-gradient(145deg, #04241B 0%, #06543F 50%, #021B14 100%)",
    accent: "#10B981",
    glow: "rgba(16, 185, 129, 0.25)",
    icon: TrendingUp,
    subColor: "text-emerald-300",
  },
  development: {
    bg: "linear-gradient(145deg, #2C1108 0%, #78350F 50%, #1D0A04 100%)",
    accent: "#F97316",
    glow: "rgba(249, 115, 22, 0.25)",
    icon: Code2,
    subColor: "text-amber-300",
  },
};

export const BookCover: React.FC<BookCoverProps> = ({
  title,
  subtitle = "Le guide pratique",
  category = "",
  coverImage,
  className = "",
  size = "md",
  theme = "auto",
}) => {
  // Détection automatique de la couverture ou du thème
  let resolvedCoverImage = coverImage;
  const text = (title + " " + category).toLowerCase();
  
  if (!resolvedCoverImage) {
    if (text.includes("facebook") || text.includes("meta ads")) {
      resolvedCoverImage = "/images/facebook-ads-cover.png";
    } else if (text.includes("alibaba") || text.includes("1688") || text.includes("sourcing")) {
      resolvedCoverImage = "/images/alibaba-cover.png";
    }
  }

  let activeThemeKey: keyof typeof themes = "ecommerce";
  if (theme !== "auto" && themes[theme]) {
    activeThemeKey = theme;
  } else {
    if (text.includes("sourcing") || text.includes("alibaba") || text.includes("1688") || text.includes("import")) {
      activeThemeKey = "sourcing";
    } else if (text.includes("market") || text.includes("ads") || text.includes("facebook") || text.includes("vente")) {
      activeThemeKey = "marketing";
    } else if (text.includes("productiv") || text.includes("organis") || text.includes("succes")) {
      activeThemeKey = "productivity";
    } else if (text.includes("dev") || text.includes("web") || text.includes("code") || text.includes("stack")) {
      activeThemeKey = "development";
    } else {
      activeThemeKey = "ecommerce";
    }
  }

  const currentTheme = themes[activeThemeKey];
  const IconComponent = currentTheme.icon;

  const sizeClasses = {
    sm: "w-32 h-44 text-xs",
    md: "w-52 h-72 text-sm",
    lg: "w-64 h-88 md:w-72 md:h-96 text-base",
    hero: "w-72 h-[410px] md:w-80 md:h-[450px] text-base",
  };

  const badgeWidth = {
    sm: "w-16 px-1.5 py-0.5",
    md: "w-24 px-2 py-1",
    lg: "w-32 px-3 py-1.5",
    hero: "w-32 px-3 py-1.5",
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] border border-white/15 flex flex-col justify-between p-4 sm:p-6 text-white select-none ${sizeClasses[size]} ${className}`}
      style={{
        background: currentTheme.bg,
      }}
    >
      {/* Reliure 3D & reflets latéraux (effet livre réaliste) */}
      <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-black/70 via-white/15 to-transparent pointer-events-none z-30" />
      <div className="absolute top-0 bottom-0 left-3.5 w-[1px] bg-white/20 pointer-events-none z-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/25 pointer-events-none z-30" />
      
      {/* Reflet de lumière diagonale (vernis livre brillant) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20" />

      {resolvedCoverImage ? (
        <>
          {/* Image de Couverture Graphique Dédiée */}
          <div className="absolute inset-0 z-0">
            <Image
              src={resolvedCoverImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            {/* Dégradé doux pour garder la lisibilité du badge logo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Logo EM en haut contrasté */}
          <div className="flex flex-col items-center pt-1 text-center z-20">
            <div className={`bg-white rounded-xl shadow-lg flex items-center justify-center ${badgeWidth[size]} mb-1.5 border border-white/50`}>
              <Image
                src="/images/logo.png"
                alt="Ecom Mastery"
                width={120}
                height={42}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Badge discret au bas */}
          <div className="z-20 mt-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
              Guide Pratique Officiel
            </span>
          </div>
        </>
      ) : (
        <>
          {/* Header avec Logo EM contrasté */}
          <div className="flex flex-col items-center pt-1 text-center z-10">
            <div className={`bg-white rounded-xl shadow-lg flex items-center justify-center ${badgeWidth[size]} mb-1.5 border border-white/40`}>
              <Image
                src="/images/logo.png"
                alt="Ecom Mastery"
                width={120}
                height={42}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Titre et Sous-titre au centre */}
          <div className="my-auto text-center z-10 px-2">
            <h3 className="font-black uppercase tracking-tight text-white leading-tight drop-shadow-md text-sm sm:text-base md:text-lg">
              {title}
            </h3>
            {subtitle && (
              <p className={`${currentTheme.subColor} text-[11px] sm:text-xs mt-1.5 font-medium italic opacity-95`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Illustration vectorielle thématique au bas */}
          <div className="z-10 flex flex-col items-center pb-1">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-1.5 border transition-transform group-hover:scale-110 shadow-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <IconComponent
                className="w-6 h-6 text-white"
              />
            </div>
          </div>

          {/* Lueur d'ambiance colorée au bas */}
          <div
            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{ backgroundColor: currentTheme.accent }}
          />
        </>
      )}
    </div>
  );
};
