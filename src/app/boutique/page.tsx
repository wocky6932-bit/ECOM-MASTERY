"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCover } from "@/components/BookCover";
import { Search } from "lucide-react";

interface EbookItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  price: number;
  badge?: string;
}

const ALL_EBOOKS: EbookItem[] = [
  {
    id: "1",
    slug: "lancer-sa-boutique-en-ligne",
    title: "Lancer sa boutique en ligne",
    shortDesc: "Le guide pratique pour choisir un produit, trouver ses premiers clients et développer son activité e-commerce.",
    category: "E-commerce",
    price: 5000,
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "strategies-marketing-digital",
    title: "Stratégies Marketing Digital",
    shortDesc: "Attirez plus de clients grâce au marketing digital, la création de contenu viral et la publicité ciblée.",
    category: "Marketing",
    price: 5000,
  },
  {
    id: "3",
    slug: "boostez-votre-productivite",
    title: "Boostez votre productivité",
    shortDesc: "Organisez-vous, éliminez les distractions et atteignez vos objectifs entrepreneuriaux avec méthode.",
    category: "Productivité",
    price: 5000,
  },
  {
    id: "4",
    slug: "developpeur-web-full-stack",
    title: "Développeur Web Full Stack",
    shortDesc: "Maîtrisez le développement web moderne de A à Z avec TypeScript, React, Next.js et bases de données SQL.",
    category: "Développement",
    price: 5000,
  },
];

const CATEGORIES = ["Tous", "E-commerce", "Marketing", "Productivité", "Développement"];

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEbooks = ALL_EBOOKS.filter((ebook) => {
    const matchesCat = selectedCategory === "Tous" || ebook.category === selectedCategory;
    const matchesSearch =
      ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header de la boutique */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1528] tracking-tight">
            Explorez nos ressources.
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Des contenus pratiques et actionnables pour passer de l&apos;idée à l&apos;action.
          </p>
        </div>

        {/* Barre de recherche et Filtres par catégorie */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          {/* Recherche */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un ebook..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
            />
          </div>

          {/* Boutons Catégories (Fidèle à la maquette) */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0066FF] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des Ebooks en Grille */}
        {filteredEbooks.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-slate-500 text-sm">Aucun ebook ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredEbooks.map((ebook) => (
              <div
                key={ebook.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-400 hover:shadow-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-center mb-5">
                    <BookCover
                      title={ebook.title}
                      subtitle="Le guide pratique"
                      size="md"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {ebook.category}
                    </span>
                    {ebook.badge && (
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                        {ebook.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0066FF] transition-colors leading-tight">
                    {ebook.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {ebook.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Tarif</span>
                    <span className="text-base font-black text-[#0B1528]">
                      {ebook.price.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                  <Link
                    href={`/ebook/${ebook.slug}`}
                    className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Voir détails →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
