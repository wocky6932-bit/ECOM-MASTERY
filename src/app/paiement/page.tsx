"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookCover } from "@/components/BookCover";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "@/lib/seed-data";
import { ArrowLeft, ShieldCheck, Lock, Loader2 } from "lucide-react";

function PaiementContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug") || "lancer-sa-boutique-en-ligne";

  const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];
  const selectedProduct = allBooks.find((b) => b.slug === slug) || INITIAL_EBOOK;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+221 ");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selectedProduct.slug,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Impossible d'initialiser le paiement.");
      }

      // Redirection officielle vers Wave Checkout (ou simulateur de test en dev)
      if (data.waveLaunchUrl) {
        window.location.href = data.waveLaunchUrl;
      } else {
        throw new Error("URL de paiement Wave non reçue.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Une erreur est survenue.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header simplifié du tunnel de paiement */}
      <header className="bg-white border-b border-slate-100 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Logo showSlogan={false} />
          <Link
            href={`/ebook/${selectedProduct.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l&apos;ebook</span>
          </Link>
        </div>
      </header>

      {/* Corps du Paiement - Exactement comme la maquette */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Colonne Gauche : Récapitulatif de commande */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-subtle">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-6">
              Récapitulatif de commande
            </h2>

            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <BookCover
                title={selectedProduct.title}
                subtitle="Guide pratique"
                size="sm"
                className="flex-shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full">
                  {selectedProduct.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                  {selectedProduct.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">1x Licence personnelle</p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Sous-total</span>
                <span>{selectedProduct.price.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Frais de transaction Wave</span>
                <span className="text-emerald-600 font-medium">Offerts (0 FCFA)</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-800">Total à payer</span>
                <span className="text-2xl font-black text-[#0B1528]">
                  {selectedProduct.price.toLocaleString("fr-FR")} FCFA
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Accès instantané après confirmation par Wave. Aucun abonnement caché.</span>
            </div>
          </div>

          {/* Colonne Droite : Formulaire d'achat et Paiement Wave */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-subtle">
            <h2 className="text-base font-bold text-[#0B1528] mb-1">
              Vos informations
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Renseignez vos coordonnées pour recevoir votre accès et votre facture.
            </p>

            {errorMessage && (
              <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ousmane Diop"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Adresse e-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ousmane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Votre lien de connexion et votre code unique seront envoyés à cette adresse.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Numéro de téléphone (Wave) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+221 77 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>

              {/* Bloc Réassurance Wave officiel avec pingouin Wave */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Paiement sécurisé par Wave</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Simple. Rapide. Fiable.</p>
                </div>
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/wave-penguin.png"
                    alt="Wave"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bouton de paiement officiel Wave */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052CC] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Redirection vers Wave...</span>
                  </>
                ) : (
                  <>
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/images/wave-penguin.png"
                        alt="Wave"
                        width={20}
                        height={20}
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <span>Payer {selectedProduct.price.toLocaleString("fr-FR")} FCFA avec Wave</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Vos informations sont chiffrées de bout en bout (SSL/TLS).</span>
              </div>
            </form>
          </div>

        </div>
      </main>

      {/* Footer minimaliste de paiement */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white">
        © {new Date().getFullYear()} Ecom Mastery — Paiements traités par Wave Checkout API.
      </footer>
    </div>
  );
}

export default function PaiementPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Chargement...</div>}>
      <PaiementContent />
    </Suspense>
  );
}
