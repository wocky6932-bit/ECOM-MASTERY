import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Search } from "lucide-react";

interface NavbarProps {
  user?: { name: string; role: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo showSlogan={false} size="sm" />

        {/* Navigation principale */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link
            href="/"
            className="hover:text-[#0066FF] transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/boutique"
            className="hover:text-[#0066FF] transition-colors"
          >
            Boutique
          </Link>
          <Link
            href="/#a-propos"
            className="hover:text-[#0066FF] transition-colors"
          >
            À propos
          </Link>
          <Link
            href="/#faq"
            className="hover:text-[#0066FF] transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Boutons d'action */}
        <div className="flex items-center space-x-4">
          <Link
            href="/boutique"
            className="p-2 text-slate-500 hover:text-slate-800 transition-colors hidden sm:inline-flex"
            aria-label="Rechercher"
          >
            <Search className="w-4 h-4" />
          </Link>

          {user ? (
            <div className="flex items-center space-x-3">
              <Link
                href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                className="text-sm font-semibold text-slate-800 hover:text-[#0066FF] transition-colors"
              >
                {user.role === "ADMIN" ? "Administration" : "Mon Espace"}
              </Link>
              <Link
                href="/api/auth/logout"
                className="text-xs text-slate-500 hover:text-red-600 transition-colors"
              >
                Déconnexion
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-700 hover:text-[#0066FF] transition-colors hidden sm:inline-block"
              >
                Connexion
              </Link>
              <Link
                href="/boutique"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200"
              >
                Explorer les ebooks
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
