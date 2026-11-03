"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, BookOpen, ArrowRight, KeyRound, Copy, Check } from "lucide-react";
import { Logo } from "@/components/Logo";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "CMD-20261027";
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  React.useEffect(() => {
    // Récupérer les détails de la commande et le code d'accès généré
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/lookup?orderNumber=${orderNumber}`);
        if (res.ok) {
          const data = await res.json();
          setOrderDetails(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (orderNumber) fetchOrder();
  }, [orderNumber]);

  const accessCode = orderDetails?.accessCode?.code || "NEX-7F9K-2M8X-P4QD";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accessCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <header className="bg-white border-b border-slate-100 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Logo />
          <Link href="/boutique" className="text-xs font-semibold text-slate-500 hover:text-slate-800">
            Retour à la boutique
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Paiement Wave Confirmé
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight mt-3">
            Félicitations pour votre achat !
          </h1>

          <p className="text-slate-600 text-sm mt-3 max-w-lg mx-auto">
            Votre commande <strong className="text-slate-800 font-mono">#{orderNumber}</strong> a été validée avec succès. Votre accès personnel est maintenant prêt.
          </p>

          {/* Bloc Code Unique */}
          <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-[#0066FF]" />
                Votre code d&apos;accès personnel
              </span>
              <button
                onClick={copyToClipboard}
                className="text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] inline-flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copié !" : "Copier le code"}</span>
              </button>
            </div>

            <div className="text-2xl font-mono font-black text-[#0B1528] tracking-wider py-2">
              {accessCode}
            </div>

            <p className="text-[11px] text-slate-400 mt-2">
              Conservez précieusement ce code. Il est également sauvegardé dans votre tableau de bord et vous a été envoyé par email.
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Accéder à mon tableau de bord & Lire maintenant</span>
            </Link>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center text-xs font-semibold text-slate-500 hover:text-slate-800 py-2.5 transition-colors"
            >
              <span>Revenir à l&apos;accueil</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 bg-white border-t border-slate-100">
        © {new Date().getFullYear()} Ecom Mastery — Support disponible 7j/7 via WhatsApp
      </footer>
    </div>
  );
}

export default function PaiementSuccesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Chargement de votre commande...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
