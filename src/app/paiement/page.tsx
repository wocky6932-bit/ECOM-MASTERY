"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/Logo";
import { BookCover } from "@/components/BookCover";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "@/lib/seed-data";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Loader2,
  CheckCircle2,
  Zap,
  Smartphone,
  KeyRound,
  User,
  Mail,
  Phone,
} from "lucide-react";

function PaiementContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || searchParams.get("ebook") || "lancer-sa-boutique-en-ligne";

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
      setErrorMessage("Veuillez renseigner tous les champs obligatoires.");
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

      if (data.waveLaunchUrl) {
        window.location.href = data.waveLaunchUrl;
      } else {
        throw new Error("URL de paiement Wave non reçue.");
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] flex flex-col justify-between font-sans text-slate-800">
      {/* Top Header du tunnel d'achat */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 py-3.5 px-4 sm:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo showSlogan={false} size="sm" />

          {/* Étapes du tunnel */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="text-slate-400">1. Catalogue</span>
            <span>›</span>
            <span className="text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              2. Paiement Wave
            </span>
            <span>›</span>
            <span className="text-slate-400">3. Lecture immédiate</span>
          </div>

          <Link
            href={`/ebook/${selectedProduct.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour</span>
          </Link>
        </div>
      </header>

      {/* Corps du tunnel de paiement */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Colonne Gauche : Récapitulatif & Visuel Produit */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Votre commande
                </span>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  En stock
                </span>
              </div>

              {/* Présentation du livre */}
              <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
                <div className="shrink-0">
                  <BookCover
                    title={selectedProduct.title}
                    category={selectedProduct.category}
                    size="sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-1.5 leading-snug">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">1× Licence personnelle à vie</p>
                  <p className="text-xs font-bold text-[#0066FF] mt-2">
                    {selectedProduct.price.toLocaleString("fr-FR")} FCFA
                  </p>
                </div>
              </div>

              {/* Détails du tarif */}
              <div className="py-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span className="font-semibold text-slate-800">
                    {selectedProduct.price.toLocaleString("fr-FR")} FCFA
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de transaction Wave</span>
                  <span className="text-emerald-600 font-bold">Offerts (0 FCFA)</span>
                </div>
                <div className="flex justify-between">
                  <span>Accès lecteur web sécurisé</span>
                  <span className="text-emerald-600 font-bold">Inclus</span>
                </div>
              </div>

              {/* Total final */}
              <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Total à payer</p>
                  <p className="text-[11px] text-slate-400">Paiement unique · Aucun abonnement</p>
                </div>
                <p className="text-2xl sm:text-3xl font-black text-[#0B1528]">
                  {selectedProduct.price.toLocaleString("fr-FR")} <span className="text-sm font-bold text-[#0066FF]">FCFA</span>
                </p>
              </div>
            </div>

            {/* Carte des garanties */}
            <div className="bg-gradient-to-br from-[#0B1528] to-[#0A2558] rounded-3xl p-6 text-white shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
                Ce que vous recevez immédiatement :
              </h4>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>Accès immédiat et illimité après confirmation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <KeyRound className="w-3.5 h-3.5" />
                  </div>
                  <span>Code d&apos;accès personnel généré automatiquement</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <span>Lecture optimisée sur smartphone, tablette et PC</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Facture et reçu officiel transmis par e-mail</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne Droite : Formulaire d'achat et Paiement Wave */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100">
              
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-extrabold text-[#0B1528]">
                  Coordonnées de livraison numérique
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Renseignez vos informations pour recevoir votre code d&apos;accès unique et votre confirmation de commande.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nom complet */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ousmane Diop"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Adresse e-mail */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Adresse e-mail *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="ousmane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5">
                    Votre lien de connexion et votre code unique seront envoyés à cette adresse.
                  </p>
                </div>

                {/* Téléphone Wave */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Numéro de téléphone Wave *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="+221 77 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5">
                    Utilisé pour identifier votre compte et faciliter la validation du paiement Wave.
                  </p>
                </div>

                {/* Bouton de paiement officiel Wave */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052CC] text-white py-4 px-8 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Connexion à Wave en cours...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm shrink-0 overflow-hidden">
                        <Image
                          src="/images/wave-penguin.png"
                          alt="Wave"
                          width={24}
                          height={24}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <span>
                        Payer {selectedProduct.price.toLocaleString("fr-FR")} FCFA avec Wave
                      </span>
                    </>
                  )}
                </button>

                {/* Réassurance sous le bouton */}
                <div className="pt-2 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Transaction 100% sécurisée via Wave API · Chiffrement SSL 256 bits</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </main>

      {/* Footer minimaliste et rassurant */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Ecom Mastery — Paiements sécurisés traités par Wave Checkout API.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/cgv" className="hover:underline">CGV</Link>
            <span>·</span>
            <Link href="/confidentialite" className="hover:underline">Confidentialité</Link>
            <span>·</span>
            <a href="https://wockytech.xyz" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">
              WockyTech
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PaiementPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400 text-sm">Chargement du tunnel sécurisé...</div>}>
      <PaiementContent />
    </Suspense>
  );
}
