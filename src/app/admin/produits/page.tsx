import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Package, BookOpen, Globe, Tag, ToggleLeft, ToggleRight } from "lucide-react";

export default async function AdminProduitsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const products = await prisma.product.findMany({
    include: {
      _count: { select: { orders: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produits</h1>
          <p className="text-gray-500 mt-1">{products.length} ebook{products.length > 1 ? "s" : ""} dans le catalogue</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0066FF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
          <Package className="w-4 h-4" />
          Ajouter un ebook
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-5"
          >
            {/* Book visual */}
            <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-[#0B1528] to-[#0066FF] flex items-center justify-center shrink-0">
              <BookOpen className="w-8 h-8 text-white/80" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {product.isActive ? "Actif" : "Inactif"}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Tag className="w-3 h-3" />{product.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-[#0066FF]">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.originalPrice.toLocaleString("fr-FR")} FCFA
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Package className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold">{product._count.orders}</span> ventes
                </div>
                {product.language && (
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Globe className="w-4 h-4 text-purple-500" />
                    {product.language}
                  </div>
                )}
                {product.pageCount && (
                  <div className="text-sm text-gray-600">
                    {product.pageCount} pages
                  </div>
                )}
                <div className="text-sm text-gray-400">
                  Slug : <span className="font-mono">{product.slug}</span>
                </div>

                <div className="ml-auto flex gap-3">
                  <button className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Modifier
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors">
                    {product.isActive ? <ToggleRight className="w-4 h-4 text-green-500" /> : <ToggleLeft className="w-4 h-4" />}
                    {product.isActive ? "Désactiver" : "Activer"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
