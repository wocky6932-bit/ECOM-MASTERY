"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookCover } from "@/components/BookCover";
import {
  Package,
  Plus,
  Pencil,
  Trash2,
  Search,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  X,
  Save,
  Loader2,
  Eye,
} from "lucide-react";

export interface AdminProduct {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  coverImage: string;
  status: string;
  learnPoints: string;
  targetAudience: string;
  createdAt: string;
  _count?: {
    orders: number;
  };
}

interface AdminProductsClientProps {
  initialProducts: AdminProduct[];
}

export function AdminProductsClient({ initialProducts }: AdminProductsClientProps) {
  const [products, setProducts] = useState<AdminProduct[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("ALL");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<AdminProduct | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Formulaire d'édition / création
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "E-commerce",
    price: 5000,
    shortDesc: "",
    description: "",
    learnPoints: "",
    targetAudience: "",
    status: "ACTIVE",
  });

  const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);

  // Filtrage
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === "ALL" || p.category === filterCategory;
    return matchSearch && matchCat;
  });

  function openCreateModal() {
    setSelectedProduct(null);
    setFormData({
      title: "",
      slug: "",
      category: "E-commerce",
      price: 5000,
      shortDesc: "",
      description: "",
      learnPoints: "Apprendre les bases du e-commerce\nTrouver des clients qualifiés\nEncaisser via Wave et Mobile Money",
      targetAudience: "Commerçants, entrepreneurs et créateurs de projets en Afrique francophone.",
      status: "ACTIVE",
    });
    setErrorMsg("");
    setModalOpen(true);
  }

  function openEditModal(prod: AdminProduct) {
    setSelectedProduct(prod);

    let parsedLearnPoints = "";
    try {
      const arr = JSON.parse(prod.learnPoints);
      if (Array.isArray(arr)) parsedLearnPoints = arr.join("\n");
      else parsedLearnPoints = String(prod.learnPoints || "");
    } catch {
      parsedLearnPoints = String(prod.learnPoints || "");
    }

    setFormData({
      title: prod.title,
      slug: prod.slug,
      category: prod.category || "E-commerce",
      price: prod.price || 5000,
      shortDesc: prod.shortDesc || "",
      description: prod.description || "",
      learnPoints: parsedLearnPoints,
      targetAudience: prod.targetAudience || "",
      status: prod.status || "ACTIVE",
    });
    setErrorMsg("");
    setModalOpen(true);
  }

  function openDeleteModal(prod: AdminProduct) {
    setSelectedProduct(prod);
    setDeleteModalOpen(true);
  }

  // Soumission Ajout / Modification
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      if (selectedProduct) {
        // Modification (PATCH)
        const res = await fetch(`/api/admin/products/${selectedProduct.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Erreur de mise à jour");

        setProducts((prev) =>
          prev.map((p) => (p.id === selectedProduct.id ? { ...p, ...data.product } : p))
        );
        setSuccessMsg("Ebook modifié avec succès !");
      } else {
        // Création (POST)
        const res = await fetch("/api/admin/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Erreur lors de la création");

        setProducts((prev) => [data.product, ...prev]);
        setSuccessMsg("Nouvel ebook ajouté avec succès au catalogue !");
      }

      setModalOpen(false);
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Basculer le statut Actif / Inactif
  async function toggleStatus(prod: AdminProduct) {
    const newStatus = prod.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    try {
      const res = await fetch(`/api/admin/products/${prod.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Erreur de statut");

      setProducts((prev) =>
        prev.map((p) => (p.id === prod.id ? { ...p, status: newStatus } : p))
      );
    } catch (err) {
      alert("Impossible de modifier le statut du produit.");
    }
  }

  // Suppression définitive
  async function handleDeleteConfirm() {
    if (!selectedProduct) return;
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/admin/products/${selectedProduct.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur de suppression");

      setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      setDeleteModalOpen(false);
      setSuccessMsg("Ebook supprimé avec succès.");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Erreur lors de la suppression");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      {/* Toast de succès */}
      {successMsg && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-white" />
          {successMsg}
        </div>
      )}

      {/* En-tête de section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Ebooks</h1>
          <p className="text-gray-500 mt-1">
            {products.length} ebook{products.length > 1 ? "s" : ""} enregistré{products.length > 1 ? "s" : ""} dans votre catalogue.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md transition-all shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Ajouter un nouvel ebook
        </button>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par titre, catégorie, slug..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setFilterCategory("ALL")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              filterCategory === "ALL"
                ? "bg-[#0B1528] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tous ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? "bg-[#0066FF] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des livres */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Aucun ebook trouvé</h2>
          <p className="text-gray-400 text-sm mb-6">Modifiez vos critères de recherche ou ajoutez un livre.</p>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Créer un ebook
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredProducts.map((product) => {
            const isActive = product.status === "ACTIVE";
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-all"
              >
                {/* Couverture Livre 3D */}
                <div className="shrink-0 flex items-center justify-center">
                  <BookCover title={product.title} size="sm" />
                </div>

                {/* Détails du livre */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isActive ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isActive ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {isActive ? "Actif & En vente" : "Inactif / Masqué"}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-md">
                      {product.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      /{product.slug}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.shortDesc || product.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">
                    <span className="font-semibold text-gray-900 bg-blue-50 text-[#0066FF] px-2.5 py-1 rounded-lg">
                      {product.price.toLocaleString("fr-FR")} FCFA
                    </span>
                    <span>
                      Ventes enregistrées : <strong>{product._count?.orders ?? 0}</strong>
                    </span>
                    <span>
                      Ajouté le {new Date(product.createdAt).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap md:flex-col gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <Link
                    href={`/lecteur/${product.slug}`}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0066FF] hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors"
                    title="Lire directement cet ebook sans payer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Lire l&apos;ebook (Accès Admin)</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(product)}
                      className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                      title="Modifier cet ebook"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      Modifier
                    </button>

                    <button
                      onClick={() => toggleStatus(product)}
                      className={`flex-1 md:flex-initial inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                      title={isActive ? "Masquer de la boutique" : "Activer dans la boutique"}
                    >
                      {isActive ? "Désactiver" : "Activer"}
                    </button>

                    <button
                      onClick={() => openDeleteModal(product)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      title="Supprimer définitivement"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <Link
                      href={`/ebook/${product.slug}`}
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Fiche produit
                    </Link>
                    <span className="text-gray-300">·</span>
                    <Link
                      href={`/lecteur/${product.slug}`}
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      Aperçu lecteur
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Ajout / Modification */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {selectedProduct ? "Modifier l'ebook" : "Ajouter un nouvel ebook"}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Remplissez les détails ci-dessous pour mettre à jour votre catalogue en ligne.
            </p>

            {errorMsg && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-xs p-3.5 rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Titre */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Titre de l&apos;ebook *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    const autoSlug = newTitle
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "");
                    setFormData({
                      ...formData,
                      title: newTitle,
                      slug: selectedProduct ? formData.slug : autoSlug,
                    });
                  }}
                  placeholder="Ex: Lancer sa boutique en ligne"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Slug & Catégorie */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Identifiant URL (Slug) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="lancer-sa-boutique"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Catégorie
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="E-commerce, Marketing, Dropshipping..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Prix & Statut */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Prix (en FCFA) *
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={500}
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Statut de publication
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  >
                    <option value="ACTIVE">Actif (Visible dans la boutique)</option>
                    <option value="INACTIVE">Inactif (Brouillon masqué)</option>
                  </select>
                </div>
              </div>

              {/* Description courte */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Résumé court (affiché sur les cartes)
                </label>
                <input
                  type="text"
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  placeholder="En 1 ou 2 phrases percutantes..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Description complète */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Description complète
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Présentation détaillée du contenu de l'ebook..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Ce que vous allez apprendre */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Ce que vous allez apprendre (1 point par ligne)
                </label>
                <textarea
                  rows={3}
                  value={formData.learnPoints}
                  onChange={(e) => setFormData({ ...formData, learnPoints: e.target.value })}
                  placeholder="Point 1&#10;Point 2&#10;Point 3"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Boutons d'action */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      {selectedProduct ? "Sauvegarder les modifications" : "Créer l'ebook"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Confirmation de Suppression */}
      {deleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-center">
            <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Supprimer cet ebook ?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Êtes-vous sûr de vouloir supprimer définitivement <strong>&quot;{selectedProduct.title}&quot;</strong> ?
              Cette action est irréversible et supprimera également les accès associés.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Suppression..." : "Oui, supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
