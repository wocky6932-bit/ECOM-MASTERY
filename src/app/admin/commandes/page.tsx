import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ShoppingBag, Clock, CheckCircle2, XCircle, AlertCircle, Search, Filter } from "lucide-react";

const statusConfig: Record<string, { label: string; className: string; icon: React.ElementType }> = {
  PAID: { label: "Payée", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
  PENDING: { label: "En attente", className: "bg-yellow-100 text-yellow-700", icon: Clock },
  FAILED: { label: "Échouée", className: "bg-red-100 text-red-700", icon: XCircle },
  REFUNDED: { label: "Remboursée", className: "bg-gray-100 text-gray-600", icon: AlertCircle },
};

export default async function AdminCommandesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const orders = await prisma.order.findMany({
    include: { user: true, product: true, payment: true },
    orderBy: { createdAt: "desc" },
  });

  const totalRevenue = orders
    .filter((o) => o.status === "PAID")
    .reduce((sum, o) => sum + o.amount, 0);

  const byStatus = {
    PAID: orders.filter((o) => o.status === "PAID").length,
    PENDING: orders.filter((o) => o.status === "PENDING").length,
    FAILED: orders.filter((o) => o.status === "FAILED").length,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Commandes</h1>
        <p className="text-gray-500 mt-1">Total : {orders.length} commandes</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Chiffre d&apos;affaires</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {totalRevenue.toLocaleString("fr-FR")} FCFA
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Payées</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{byStatus.PAID}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">En attente</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">{byStatus.PENDING}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-3 p-5 border-b border-gray-100">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une commande, un client..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filtrer
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-gray-100">
              <tr>
                {["Réf. commande", "Client", "Ebook", "Montant", "Statut", "Date", "Transaction Wave"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase px-5 py-3.5 tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => {
                const cfg = statusConfig[order.status] ?? statusConfig.PENDING;
                const Icon = cfg.icon;
                return (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-sm font-bold text-gray-900">
                      #{order.orderNumber}
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="text-sm font-medium text-gray-900">{order.user.name}</p>
                      <p className="text-xs text-gray-400">{order.user.email}</p>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 max-w-[160px]">
                      <p className="truncate">{order.product.title}</p>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-bold text-gray-900 whitespace-nowrap">
                      {order.amount.toLocaleString("fr-FR")} FCFA
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${cfg.className}`}>
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(order.createdAt).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-xs text-gray-400">
                      {order.payment?.waveTransactionId ?? "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
