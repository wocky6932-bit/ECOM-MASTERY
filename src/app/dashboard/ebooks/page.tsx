import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookCover } from "@/components/BookCover";
import { BookOpen, Play, Clock, CheckCircle2, ShoppingCart } from "lucide-react";

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

  const readingMap = new Map(user.readings.map((r) => [r.productId, r]));
  const codeMap = new Map(user.accessCodes.map((c) => [c.productId, c]));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Ebooks</h1>
        <p className="text-gray-500 mt-1">
          {user.orders.length} ebook{user.orders.length > 1 ? "s" : ""} acheté
          {user.orders.length > 1 ? "s" : ""}
        </p>
      </div>

      {user.orders.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Aucun ebook pour l&apos;instant
          </h2>
          <p className="text-gray-500 mb-6">
            Explorez notre boutique et commencez votre apprentissage.
          </p>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.orders.map((order) => {
            const reading = readingMap.get(order.productId);
            const code = codeMap.get(order.productId);
            const progress = reading?.progressPct ?? 0;
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-r from-[#0B1528] to-slate-700 p-6 flex gap-5">
                  <BookCover size="md" title={order.product.title} />
                  <div className="text-white">
                    <p className="text-xs text-blue-300 font-medium mb-1">
                      Ecom Mastery
                    </p>
                    <h2 className="text-lg font-bold leading-tight">
                      {order.product.title}
                    </h2>
                    <p className="text-sm text-slate-300 mt-1">
                      {order.product.category}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Acheté le{" "}
                      {new Date(order.createdAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  {/* Progression */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progression</span>
                      <span className="font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-[#0066FF] rounded-full h-2 transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Code */}
                  {code && (
                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-xs font-mono text-gray-700 tracking-wider">
                        {code.code}
                      </span>
                      <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        ACTIVE
                      </span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Link
                      href={`/lecteur/${order.product.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0066FF] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Lire maintenant
                    </Link>
                    <Link
                      href={`/ebook/${order.product.slug}`}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Détails
                    </Link>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Licence #{order.orderNumber}
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
