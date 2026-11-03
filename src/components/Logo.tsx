import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showSlogan?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: { container: "w-12 h-12", img: 48 },
  md: { container: "w-16 h-16", img: 64 },
  lg: { container: "w-24 h-24", img: 96 },
  xl: { container: "w-32 h-32", img: 128 },
};

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showSlogan = false,
  size = "md",
  className = "",
}) => {
  const s = sizeMap[size];
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className={`relative ${s.container} flex items-center justify-center shrink-0`}>
        <Image
          src="/images/logo.png"
          alt="Ecom Mastery"
          width={s.img}
          height={s.img}
          className="object-contain"
          priority
        />
      </div>
      {showSlogan && (
        <span
          className={`text-[11px] uppercase tracking-widest font-semibold ${
            variant === "light" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Learn. Grow. Succeed.
        </span>
      )}
    </Link>
  );
};
