"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { KeyRound, Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ActiverCodePage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/activate-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code.trim().toUpperCase(),
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Code invalide ou déjà utilisé.");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
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
            <div className="w-12 h-12 bg-blue-50 text-[#0066FF] rounded-2xl flex items-center justify-center mx-auto mb-3">
              <KeyRound className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-[#0B1528] tracking-tight">
              Activer mon code d&apos;accès
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Renseignez votre code unique (reçu après votre paiement Wave) et votre adresse email.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-xl">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Accès validé avec succès ! Redirection vers votre tableau de bord...</span>
            </div>
          )}

          <form onSubmit={handleActivate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Code d&apos;accès unique *
              </label>
              <input
                type="text"
                required
                placeholder="NEX-XXXX-XXXX-XXXX"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Votre adresse email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white py-3 px-4 rounded-xl font-bold text-sm shadow transition-all disabled:opacity-50 mt-6"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Valider mon accès</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link href="/login" className="text-xs text-slate-500 hover:text-[#0066FF]">
              Vous avez déjà un mot de passe ? Se connecter
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 bg-white border-t border-slate-100">
        © {new Date().getFullYear()} Ecom Mastery — Accès et vérification sécurisée
      </footer>
    </div>
  );
}
