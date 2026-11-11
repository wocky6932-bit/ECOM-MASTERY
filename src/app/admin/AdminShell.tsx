"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import {
  LayoutDashboard,
  Package,
  BookOpen,
  ShoppingBag,
  Users,
  KeyRound,
  CreditCard,
  BarChart3,
  LogOut,
  ShieldCheck,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

interface AdminShellProps {
  admin: {
    name: string;
    email: string;
  };
  children: React.ReactNode;
}

export function AdminShell({ admin, children }: AdminShellProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
    { href: "/admin/produits", label: "Produits & Ebooks", icon: Package },
    { href: "/dashboard/ebooks", label: "Lire les ebooks (Accès Gratuit)", icon: BookOpen },
    { href: "/admin/commandes", label: "Commandes", icon: ShoppingBag },
    { href: "/admin/utilisateurs", label: "Utilisateurs", icon: Users },
    { href: "/admin/codes", label: "Codes d'accès", icon: KeyRound },
    { href: "/admin/paiements", label: "Paiements Wave", icon: CreditCard },
    { href: "/admin/statistiques", label: "Statistiques", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <header className="md:hidden bg-[#0B1528] text-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-40 border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-2.5">
          <Link href="/">
            <Logo variant="light" size="sm" showSlogan={false} />
          </Link>
          <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <span>Admin</span>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Menu admin"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-[#0B1528] text-white flex flex-col justify-between transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Logo variant="light" size="sm" />
            </Link>
            <div className="flex items-center gap-1.5 mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-blue-400 font-semibold">Administration</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#0066FF] text-white font-semibold shadow-md"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 mt-4">
            <Link
              href="/#ebooks"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-300 hover:bg-blue-900/30 transition-all"
            >
              <span>Voir le site public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-white/10 bg-[#070F1E]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white shrink-0">
              A
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">{admin.name}</p>
              <p className="text-xs text-slate-400 truncate">{admin.email}</p>
            </div>
          </div>
          <a
            href="/api/auth/logout"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors pt-2 border-t border-white/5"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </a>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#0B1528] text-white flex-col fixed h-full z-10 shrink-0">
        <div className="p-6 border-b border-white/10">
          <Link href="/">
            <Logo variant="light" size="sm" />
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <p className="text-xs text-blue-400 font-semibold">Administration</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#0066FF] text-white font-semibold shadow-md"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 mt-4">
            <Link
              href="/#ebooks"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-300 hover:bg-blue-900/30 transition-all"
            >
              <span>Site public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-white/10 bg-[#070F1E]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white shrink-0">
              A
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{admin.name}</p>
              <p className="text-xs text-slate-400 truncate">{admin.email}</p>
            </div>
          </div>
          <a
            href="/api/auth/logout"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 flex-1 min-w-0 p-4 sm:p-6 md:p-8 max-w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
