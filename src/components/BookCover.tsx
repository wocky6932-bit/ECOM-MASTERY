import React from "react";
import Image from "next/image";

interface BookCoverProps {
  title: string;
  subtitle?: string;
  category?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BookCover: React.FC<BookCoverProps> = ({
  title,
  subtitle = "Le guide pratique",
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-28 h-40 text-xs",
    md: "w-48 h-64 text-sm",
    lg: "w-64 h-88 md:w-72 md:h-96 text-base",
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-hover border border-slate-700/30 flex flex-col justify-between p-5 text-white ${sizeClasses[size]} ${className}`}
      style={{
        background: "linear-gradient(135deg, #070F1E 0%, #0F1E3A 50%, #0A1428 100%)",
      }}
    >
      {/* Effet reflet reliure livre */}
      <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-3 w-[1px] bg-white/10 pointer-events-none" />

      {/* Header du livre avec Logo EM */}
      <div className="flex flex-col items-center pt-2 text-center z-10">
        <div className="relative w-8 h-8 mb-1">
          <Image
            src="/images/logo.png"
            alt="EM"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">
          Ecom Mastery
        </span>
      </div>

      {/* Titre & Sous-titre au centre */}
      <div className="my-auto text-center z-10 px-2">
        <h3 className="font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-md text-base sm:text-lg">
          {title}
        </h3>
        <p className="text-blue-300 text-xs mt-1 font-medium italic opacity-90">
          {subtitle}
        </p>
      </div>

      {/* Graphique / Icône E-commerce stylisée */}
      <div className="z-10 flex flex-col items-center pb-2">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 border-t border-slate-700/60 pt-1 w-full text-center">
          Ecom Mastery
        </div>
      </div>

      {/* Accent de brillance bleu électrique au bas */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
};
