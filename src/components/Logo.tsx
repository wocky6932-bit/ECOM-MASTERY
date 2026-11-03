import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showSlogan?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showSlogan = false,
  className = "",
}) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 group select-none ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Ecom Mastery"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      {showSlogan && (
        <span
          className={`text-[9px] uppercase tracking-widest font-semibold ${
            variant === "light" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Learn. Grow. Succeed.
        </span>
      )}
    </Link>
  );
};
