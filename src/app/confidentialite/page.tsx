import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 text-slate-800">
        <h1 className="text-3xl font-black text-[#0B1528] mb-6">Politique de Confidentialité</h1>
        <div className="prose prose-slate text-sm space-y-4">
          <p>Dernière mise à jour : Novembre 2026</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">1. Données collectées</h2>
          <p>Nous collectons uniquement les informations nécessaires au traitement de vos commandes et à la sécurisation de vos accès : nom, adresse e-mail, numéro de téléphone et empreinte d&apos;appareil de connexion.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">2. Sécurité des Paiements</h2>
          <p>Aucune coordonnée bancaire ou identifiant de paiement sensible n&apos;est stocké sur nos serveurs. L&apos;ensemble des transactions financières est géré directement par les serveurs certifiés de Wave Checkout.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">3. Vos Droits</h2>
          <p>Conformément aux réglementations sur la protection des données personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données sur simple demande.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
