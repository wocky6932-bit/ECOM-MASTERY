"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookCover } from "@/components/BookCover";
import { Search, Star, ArrowRight, ShoppingBag, Eye } from "lucide-react";

export interface CatalogEbook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  category: string;
  theme: "ecommerce" | "marketing" | "productivity" | "development" | "sourcing" | "auto";
  badge?: string;
  badgeColor?: string;
  rating: string;
  reviews: string;
  price: number;
  coverImage?: string;
}

export const ALL_HOMEPAGE_EBOOKS: CatalogEbook[] = [
  {
    id: "lancer-sa-boutique",
    slug: "lancer-sa-boutique-en-ligne",
    title: "Le Closing : transformer vos prospects en clients",
    subtitle: "Scripts WhatsApp, téléphone & face-à-face",
    shortDesc: "Conclure vos ventes avec méthode, sans pression ni mensonge : qualification, objections, encaissement, relances et plan de 14 jours.",
    category: "E-commerce",
    theme: "ecommerce",
    badge: "Bestseller",
    badgeColor: "bg-rose-700 text-white",
    rating: "4.9",
    reviews: "1,2k avis",
    price: 5000,
    coverImage: "/images/cover-closing-pro.jpg",
  },
  {
    id: "facebook-ads-mastery",
    slug: "publicite-facebook-ads-de-a-a-z",
    title: "Lancer sa campagne Facebook Ads, pas à pas",
    subtitle: "Exemple complet à Dakar avec Meta Ads Manager",
    shortDesc: "Méthode pas à pas illustrée pour lancer votre campagne Meta Ads à Dakar : calcul du CPA maximal, prérequis, création, budget, ciblage Advantage+, annonce et analyse.",
    category: "Marketing & Ads",
    theme: "marketing",
    badge: "Nouveau",
    badgeColor: "bg-[#0866FF] text-white",
    rating: "4.9",
    reviews: "840 avis",
    price: 5000,
    coverImage: "/images/cover-facebook-ads.jpg",
  },
  {
    id: "alibaba-sourcing-cheikh-akhmad",
    slug: "formation-sourcing-alibaba-1688",
    title: "Commander des rasoirs électriques sur Alibaba",
    subtitle: "Guide pas à pas, avec schémas • Sénégal",
    shortDesc: "Guide pratique avec 8 schémas illustrés pour commander sur Alibaba vers le Sénégal : compte acheteur, recherche, fiche produit, négociation, Trade Assurance et transitaire.",
    category: "Sourcing & Import",
    theme: "sourcing",
    badge: "Bestseller",
    badgeColor: "bg-[#FF6A00] text-white",
    rating: "4.9",
    reviews: "950 avis",
    price: 5000,
    coverImage: "/images/cover-alibaba-sourcing.jpg",
  },
  {
    id: "marketing-digital",
    slug: "strategies-marketing-digital",
    title: "Stratégies Marketing Digital",
    subtitle: "Acquisition & Ventes directes",
    shortDesc: "Attirez plus de clients qualifiés grâce aux meilleures techniques de copywriting, contenu viral et Meta Ads ciblées.",
    category: "Marketing & Ads",
    theme: "marketing",
    badge: "Populaire",
    badgeColor: "bg-purple-600 text-white",
    rating: "4.8",
    reviews: "856 avis",
    price: 5000,
    coverImage: "/images/cover-marketing-digital.jpg",
  },
  {
    id: "developpeur-fullstack",
    slug: "developpeur-web-full-stack",
    title: "Produits à tester : dropshipping depuis le Sénégal et 50 produits Alibaba → Dakar",
    subtitle: "73 idées ciblées Sénégal & Chine",
    shortDesc: "23 produits sénégalais à vendre sans gros stock et 50 produits légers (< 500 g) à sourcer sur Alibaba pour le marché de Dakar.",
    category: "Sourcing & Import",
    theme: "sourcing",
    badgeColor: "bg-amber-600 text-white",
    rating: "4.9",
    reviews: "684 avis",
    price: 5000,
    coverImage: "/images/cover-produits-senegal-alibaba.jpg",
  },
];

const CATEGORIES = ["Tous", "E-commerce", "Marketing & Ads", "Sourcing & Import"];

export const HomeCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEbooks = ALL_HOMEPAGE_EBOOKS.filter((ebook) => {
    const matchesCat = selectedCategory === "Tous" || ebook.category === selectedCategory;
    const matchesSearch =
      ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="ebooks" className="py-16 md:py-24 bg-slate-50/70 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-blue-100/80 text-[#0066FF] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Catalogue complet des formations & ebooks
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1528] tracking-tight">
            Tous nos livres pratiques pour passer à l&apos;action
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Des guides étape par étape, illustrés et conçus spécifiquement pour réussir vos projets au Sénégal et en Afrique francophone.
          </p>
        </div>

        {/* Barre de recherche & Filtres de catégories */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          {/* Champ de recherche */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par titre, mot-clé ou sujet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all shadow-sm"
            />
          </div>

          {/* Filtres par boutons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-[#0B1528] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de TOUS les livres */}
        {filteredEbooks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold text-base">Aucun ebook trouvé pour cette recherche.</p>
            <button
              onClick={() => {
                setSelectedCategory("Tous");
                setSearchTerm("");
              }}
              className="mt-3 text-xs font-bold text-[#0066FF] hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEbooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Couverture 3D avec badge de catégorie */}
                <div className="relative mb-6 flex justify-center pt-2">
                  <div className="flex items-center gap-1.5 absolute -top-2 right-2 z-20">
                    {book.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm bg-amber-500 text-white uppercase tracking-wider">
                        {book.badge}
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm ${
                        book.badgeColor || "bg-slate-800 text-white"
                      }`}
                    >
                      {book.category}
                    </span>
                  </div>

                  <BookCover
                    title={book.title}
                    subtitle={book.subtitle}
                    category={book.category}
                    coverImage={book.coverImage}
                    theme={book.theme}
                    size="md"
                  />
                </div>

                {/* Métadonnées & Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-[#0066FF] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {book.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {book.shortDesc}
                    </p>
                  </div>

                  {/* Avis & Étoiles */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      <span className="text-xs font-bold text-slate-700 ml-1">
                        {book.rating}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({book.reviews})
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-[10px]">
                        Tarif unique
                      </span>
                      <p className="text-base font-black text-[#0B1528] leading-tight">
                        {book.price.toLocaleString("fr-FR")} FCFA
                      </p>
                    </div>
                  </div>

                  {/* Boutons d'action : Voir détails & Acheter */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/ebook/${book.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all text-center"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>Détails</span>
                    </Link>

                    <Link
                      href={`/paiement?ebook=${book.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0066FF] hover:bg-[#0052CC] text-white px-3.5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all text-center"
                    >
                      <span>Acheter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
