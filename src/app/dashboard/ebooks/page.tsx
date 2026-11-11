import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookCover } from "@/components/BookCover";
import { BookOpen, Play, Clock, CheckCircle2, ShoppingCart, ShieldCheck } from "lucide-react";

export default async function EbooksPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    include: {
      orders: {
        where: { status: "PAID" },
        include: { product: true },
        orderBy: { createdAt: "desc" },
      },
      readings: { include: { product: true } },
      accessCodes: { include: { product: true } },
    },
  });
  if (!user) redirect("/login");

  const isAdmin = sessionUser.role === "ADMIN";

  // Récupérer les maps d'avancement et de codes
  const readingMap = new Map(user.readings.map((r) => [r.productId, r]));
  const codeMap = new Map(user.accessCodes.map((c) => [c.productId, c]));

  // Si l'utilisateur est administrateur, lui donner accès à TOUS les ebooks du catalogue sans payer !
  let displayItems = user.orders.map((o) => ({
    productId: o.productId,
    product: o.product,
    orderNumber: o.orderNumber,
    createdAt: o.createdAt,
    isAdminAccess: false,
  }));

  if (isAdmin) {
    const allProducts = await prisma.product.findMany({
      where: {
        status: "ACTIVE",
        slug: { not: "boostez-votre-productivite" },
      },
      orderBy: { createdAt: "desc" },
    });

    displayItems = allProducts.map((p) => ({
      productId: p.id,
      product: p,
      orderNumber: "ADMIN-ILLIMITE",
      createdAt: p.createdAt,
      isAdminAccess: true,
    }));
  }

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isAdmin ? "Bibliothèque Ebooks (Accès Administrateur)" : "Mes Ebooks"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isAdmin
              ? "Vous disposez d'un accès illimité et gratuit à tous les ebooks du catalogue pour lecture et révision."
              : `${displayItems.length} ebook${displayItems.length > 1 ? "s" : ""} acheté${displayItems.length > 1 ? "s" : ""}`}
          </p>
        </div>

        {isAdmin && (
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Accès Admin Illimité (Sans paiement)</span>
          </div>
        )}
      </div>

      {displayItems.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Aucun ebook pour l&apos;instant
          </h2>
          <p className="text-gray-500 mb-6">
            Explorez notre catalogue et commencez votre apprentissage.
          </p>
          <Link
            href="/#ebooks"
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Découvrir nos livres
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayItems.map((item) => {
            const reading = readingMap.get(item.productId);
            const code = codeMap.get(item.productId);
            const progress = reading?.progressPct ?? 0;
            return (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="bg-gradient-to-r from-[#0B1528] to-slate-800 p-6 flex gap-5 items-start">
                  <BookCover size="md" title={item.product.title} />
                  <div className="text-white min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-white/10 px-2 py-0.5 rounded-md inline-block mb-1.5">
                      {item.product.category}
                    </span>
                    <h2 className="text-lg font-bold leading-tight">
                      {item.product.title}
                    </h2>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                      {item.product.shortDesc}
                    </p>
                    <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.isAdminAccess ? (
                        <span className="text-emerald-400 font-semibold">Accès illimité actif</span>
                      ) : (
                        <span>Acheté le {new Date(item.createdAt).toLocaleDateString("fr-FR")}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  {/* Progression */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progression de lecture</span>
                      <span className="font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-[#0066FF] rounded-full h-2 transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Badge statut / code */}
                  {item.isAdminAccess ? (
                    <div className="flex items-center gap-2 bg-emerald-50 rounded-xl px-3 py-2 mb-4 border border-emerald-100">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-emerald-800">
                        Compte Administrateur — Licence gratuite à vie
                      </span>
                    </div>
                  ) : code ? (
                    <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2 mb-4 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-mono text-gray-700 tracking-wider">
                        {code.code}
                      </span>
                      <span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                        ACTIVE
                      </span>
                    </div>
                  ) : null}

                  <div className="flex gap-3">
                    <Link
                      href={`/lecteur/${item.product.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-xs transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      <span>Lire maintenant</span>
                    </Link>
                    <Link
                      href={`/ebook/${item.product.slug}`}
                      className="px-4 py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Détails
                    </Link>
                  </div>

                  <p className="text-[11px] text-gray-400 mt-3 text-center">
                    {item.isAdminAccess ? "Accès illimité réservé à l'administrateur" : `Licence #${item.orderNumber}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
