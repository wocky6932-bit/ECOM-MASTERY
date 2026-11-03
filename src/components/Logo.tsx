import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showSlogan?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { container: "w-10 h-10", img: 40 },
  md: { container: "w-14 h-14", img: 56 },
  lg: { container: "w-20 h-20", img: 80 },
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
      <div className={`relative ${s.container} flex items-center justify-center`}>
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
          className={`text-[10px] uppercase tracking-widest font-semibold ${
            variant === "light" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Learn. Grow. Succeed.
        </span>
      )}
    </Link>
  );
};
