"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Lock, Mail, ArrowRight, Loader2, KeyRound } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("makhou@example.sn");
  const [password, setPassword] = useState("Client2026!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Identifiants invalides");
      }

      if (data.user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <header className="bg-white border-b border-slate-100 py-4 px-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo />
          <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-800">
            Retour au site
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full px-4 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-subtle">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-[#0B1528] tracking-tight">
              Connexion à votre espace
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Accédez à vos ebooks achetés et à votre lecteur sécurisé.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Adresse e-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white py-3 px-4 rounded-xl font-bold text-sm shadow transition-all disabled:opacity-50 mt-6"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Se connecter</span>}
            </button>
          </form>

          {/* Quick presets for testing */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 text-center">
              Comptes de test pré-configurés
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setEmail("makhou@example.sn");
                  setPassword("Client2026!");
                }}
                className="p-2 rounded-lg bg-blue-50 text-[#0066FF] font-medium hover:bg-blue-100 transition-colors text-center"
              >
                Compte Client (Makhou)
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("admin@ecommastery.sn");
                  setPassword("AdminMastery2026!");
                }}
                className="p-2 rounded-lg bg-slate-100 text-slate-800 font-medium hover:bg-slate-200 transition-colors text-center"
              >
                Compte Admin
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/activer-code"
              className="text-xs font-semibold text-[#0066FF] hover:underline inline-flex items-center gap-1"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Vous avez déjà un code d&apos;accès ? Activez-le ici</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 bg-white border-t border-slate-100">
        © {new Date().getFullYear()} Ecom Mastery — Accès sécurisé
      </footer>
    </div>
  );
}
