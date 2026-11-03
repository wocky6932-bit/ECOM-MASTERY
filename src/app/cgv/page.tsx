import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 text-slate-800">
        <h1 className="text-3xl font-black text-[#0B1528] mb-6">Conditions Générales de Vente (CGV)</h1>
        <div className="prose prose-slate text-sm space-y-4">
          <p>Dernière mise à jour : Novembre 2026</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">1. Objet</h2>
          <p>Les présentes CGV régissent les ventes de contenus numériques (livres électroniques, guides et formations) effectuées sur le site Ecom Mastery.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">2. Prix et Monnaie</h2>
          <p>Tous les prix sont affichés en Francs CFA (XOF). Ecom Mastery se réserve le droit de modifier ses prix à tout moment.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">3. Modalités de Paiement</h2>
          <p>Les paiements sont traités de façon sécurisée via l&apos;API officielle Wave Checkout. L&apos;accès au produit numérique est délivré instantanément dès validation cryptographique du paiement.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">4. Licence d&apos;utilisation personnelle</h2>
          <p>L&apos;achat d&apos;un ebook confère un droit d&apos;accès strictement personnel, non cessible et non exclusif via le lecteur web Ecom Mastery, limité à 2 appareils simultanés autorisés.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
