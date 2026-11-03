import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ShoppingBag, Clock, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

const statusConfig: Record<string, { label: string; className: string; icon: React.ElementType }> = {
  PAID: { label: "Payée", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
  PENDING: { label: "En attente", className: "bg-yellow-100 text-yellow-700", icon: Clock },
  FAILED: { label: "Échouée", className: "bg-red-100 text-red-700", icon: XCircle },
  REFUNDED: { label: "Remboursée", className: "bg-gray-100 text-gray-600", icon: AlertCircle },
};

export default async function CommandesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    include: {
      orders: {
        include: { product: true, payment: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!user) redirect("/login");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Commandes</h1>
        <p className="text-gray-500 mt-1">
          Historique de vos {user.orders.length} commande
          {user.orders.length > 1 ? "s" : ""}
        </p>
      </div>

      {user.orders.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">Aucune commande pour l&apos;instant.</p>
          <Link href="/boutique" className="mt-4 inline-block text-blue-600 hover:underline text-sm">
            Découvrir la boutique →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-gray-100">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 tracking-wider">Réf. commande</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 tracking-wider">Ebook</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 tracking-wider">Montant</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 tracking-wider">Statut</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 tracking-wider">Date</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {user.orders.map((order) => {
                  const cfg = statusConfig[order.status] ?? statusConfig.PENDING;
                  const Icon = cfg.icon;
                  return (
                    <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-semibold text-gray-900">
                          #{order.orderNumber}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">{order.product.title}</p>
                        <p className="text-xs text-gray-400">{order.product.category}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">
                          {order.amount.toLocaleString("fr-FR")} FCFA
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${cfg.className}`}>
                          <Icon className="w-3 h-3" />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        {order.status === "PAID" && (
                          <Link
                            href={`/lecteur/${order.product.slug}`}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Lire <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
