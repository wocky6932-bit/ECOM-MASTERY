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
  sm: { width: 120, height: 42 },
  md: { width: 160, height: 55 },
  lg: { width: 200, height: 69 },
  xl: { width: 260, height: 90 },
};

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showSlogan = false,
  size = "md",
  className = "",
}) => {
  const s = sizeMap[size];
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <Image
        src={isLight ? "/images/logo-white.png" : "/images/logo.png"}
        alt="Ecom Mastery"
        width={s.width}
        height={s.height}
        className="object-contain"
        style={{ width: s.width, height: "auto" }}
        priority
      />
      {showSlogan && (
        <span
          className={`text-[11px] uppercase tracking-widest font-semibold ${
            isLight ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Learn. Grow. Succeed.
        </span>
      )}
    </Link>
  );
};
