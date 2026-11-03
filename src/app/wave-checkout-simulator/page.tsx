"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, ArrowRight, Loader2, XCircle } from "lucide-react";

function SimulatorContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id") || "cos_sim_test";
  const orderNumber = searchParams.get("order") || "CMD-EXAMPLE";
  const amount = searchParams.get("amount") || "5000";

  const [status, setStatus] = useState<"idle" | "processing" | "success" | "failed">("idle");
  const [phone, setPhone] = useState("+221 77 123 45 67");

  const handleSimulatePayment = async (success: boolean) => {
    setStatus("processing");
    try {
      if (success) {
        // Envoi de la notification Webhook simulée au serveur
        const res = await fetch("/api/webhooks/wave", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "checkout.session.completed",
            status: "complete",
            client_reference: orderNumber,
            data: {
              id: sessionId,
              client_reference: orderNumber,
              amount,
              currency: "XOF",
            },
          }),
        });

        if (res.ok) {
          setStatus("success");
          setTimeout(() => {
            window.location.href = `/paiement/succes?order=${orderNumber}`;
          }, 1500);
        } else {
          setStatus("failed");
        }
      } else {
        setStatus("failed");
        setTimeout(() => {
          window.location.href = `/paiement/erreur?order=${orderNumber}`;
        }, 1500);
      }
    } catch {
      setStatus("failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#00A9E0]/10 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header Wave officiel */}
        <div className="bg-[#00A9E0] p-6 text-white text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center shadow-md mb-2">
            <Image
              src="/images/wave-penguin.png"
              alt="Wave Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-black">Wave Checkout</h2>
          <p className="text-xs text-white/90 mt-0.5">Paiement marchand sécurisé</p>
        </div>

        {/* Corps du formulaire */}
        <div className="p-6 space-y-6">
          <div className="text-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="text-xs text-slate-400 block font-medium">Montant à régler</span>
            <span className="text-3xl font-black text-[#0B1528]">
              {parseInt(amount, 10).toLocaleString("fr-FR")} FCFA
            </span>
            <div className="mt-2 text-xs text-slate-500 font-mono">
              Référence : {orderNumber}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Numéro de compte Wave</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleSimulatePayment(true)}
              disabled={status === "processing"}
              className="w-full flex items-center justify-center gap-2 bg-[#00A9E0] hover:bg-[#0095c7] text-white py-3.5 rounded-xl font-bold text-sm shadow transition-all disabled:opacity-50"
            >
              {status === "processing" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Traitement Wave en cours...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirmer le paiement (Simulateur Wave)</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleSimulatePayment(false)}
              disabled={status === "processing"}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-xl font-semibold text-xs transition-all"
            >
              <XCircle className="w-4 h-4 text-slate-400" />
              <span>Annuler le paiement</span>
            </button>
          </div>

          <div className="border-t border-slate-100 pt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Environnement de test Wave conforme Checkout API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WaveSimulatorPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Chargement simulateur Wave...</div>}>
      <SimulatorContent />
    </Suspense>
  );
}
