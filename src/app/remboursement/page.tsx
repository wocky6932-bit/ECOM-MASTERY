import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RemboursementPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 text-slate-800">
        <h1 className="text-3xl font-black text-[#0B1528] mb-6">Politique de Remboursement</h1>
        <div className="prose prose-slate text-sm space-y-4">
          <p>Dernière mise à jour : Novembre 2026</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">1. Produits numériques à accès immédiat</h2>
          <p>Conformément aux normes applicables au commerce en ligne de biens dématérialisés consultables immédiatement, les achats de produits numériques ne sont en règle générale pas remboursables une fois l&apos;accès activé.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">2. Assistance et Support Client</h2>
          <p>En cas de difficulté technique d&apos;accès ou de dysfonctionnement avéré, notre équipe d&apos;assistance est disponible 7j/7 pour rétablir votre accès immédiat ou procéder à un ajustement manuel.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
