import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  Search,
  ShieldCheck,
  Zap,
  Lock,
  Headphones,
  ArrowRight,
} from "lucide-react";

interface NavbarProps {
  user?: { name: string; role: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Top bar sombre de réassurance (conforme à la maquette de référence) */}
      <div className="bg-[#070F1E] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Badges gauche */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Paiement sécurisé Wave</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Accès immédiat</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Lecture personnelle protégée</span>
            </span>
          </div>

          {/* Contact & Réseaux sociaux droite */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://wa.me/221770000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Headphones className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium">Support 24/7</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2.5 text-slate-400">
              <a href="https://wa.me/221770000000" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" title="WhatsApp">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors" title="YouTube">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="X">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
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
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all duration-200 inline-flex items-center gap-1.5"
              >
                <span>Explorer les ebooks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
