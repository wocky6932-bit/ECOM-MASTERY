"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  Search,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Menu,
  X,
  BookOpen,
  HelpCircle,
  Info,
  User as UserIcon,
  ShoppingBag,
} from "lucide-react";

interface NavbarProps {
  user?: { name: string; role: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <Logo showSlogan={false} size="sm" />

        {/* Navigation principale Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-[#0066FF] transition-colors">
            Accueil
          </Link>
          <Link href="/boutique" className="hover:text-[#0066FF] transition-colors">
            Boutique
          </Link>
          <Link href="/#a-propos" className="hover:text-[#0066FF] transition-colors">
            À propos
          </Link>
          <Link href="/#faq" className="hover:text-[#0066FF] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Boutons d'action Desktop */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/boutique"
            className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
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
                className="text-sm font-medium text-slate-700 hover:text-[#0066FF] transition-colors"
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

        {/* Bouton Hamburger Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/boutique"
            className="p-2 text-slate-600 hover:text-slate-900"
            aria-label="Recherche"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Tiroir / Déroulant */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-5 py-6 shadow-xl space-y-5 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF] transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#0066FF]" />
              Accueil
            </Link>
            <Link
              href="/boutique"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF] transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#0066FF]" />
              Boutique complète
            </Link>
            <Link
              href="/#a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF] transition-all"
            >
              <Info className="w-4 h-4 text-[#0066FF]" />
              À propos
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF] transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#0066FF]" />
              Foire aux questions
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            {user ? (
              <div className="space-y-2">
                <Link
                  href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0B1528] text-white py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  <UserIcon className="w-4 h-4 text-blue-400" />
                  {user.role === "ADMIN" ? "Panneau d'administration" : "Mon Espace Client"}
                </Link>
                <Link
                  href="/api/auth/logout"
                  className="block text-center text-xs text-red-500 hover:underline py-1 font-semibold"
                >
                  Se déconnecter
                </Link>
              </div>
            ) : (
              <div className="space-y-2.5">
                <Link
                  href="/boutique"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0066FF] text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explorer les ebooks (5 000 FCFA)</span>
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-all"
                >
                  <UserIcon className="w-4 h-4 text-slate-600" />
                  Connexion client / admin
                </Link>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Wave Checkout 100% sécurisé
            </span>
            <a
              href="https://wa.me/221770000000"
              target="_blank"
              rel="noreferrer"
              className="text-[#0066FF] font-bold hover:underline flex items-center gap-1"
            >
              <Headphones className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
