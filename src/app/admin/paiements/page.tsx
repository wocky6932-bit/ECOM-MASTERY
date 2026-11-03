import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CreditCard, CheckCircle2, Clock, XCircle, TrendingUp } from "lucide-react";

export default async function AdminPaiementsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const payments = await prisma.payment.findMany({
    include: { order: { include: { user: true, product: true } } },
    orderBy: { createdAt: "desc" },
  });

  const totalCollected = payments
    .filter((p) => p.status === "SUCCESS")
    .reduce((sum, p) => sum + p.amount, 0);

  const statusCfg: Record<string, { label: string; className: string; icon: React.ElementType }> = {
    SUCCESS: { label: "Réussi", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
    PENDING: { label: "En attente", className: "bg-yellow-100 text-yellow-700", icon: Clock },
    FAILED: { label: "Échoué", className: "bg-red-100 text-red-700", icon: XCircle },
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Paiements Wave</h1>
        <p className="text-gray-500 mt-1">
          {payments.length} transaction{payments.length > 1 ? "s" : ""} · Total collecté :{" "}
          <span className="font-bold text-green-600">
            {totalCollected.toLocaleString("fr-FR")} FCFA
          </span>
        </p>
      </div>

      {/* Revenue banner */}
      <div className="bg-gradient-to-r from-[#0B1528] to-[#0066FF] rounded-2xl p-6 mb-6 flex items-center gap-6 text-white">
        <div className="p-4 rounded-2xl bg-white/10">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-blue-200">Chiffre d&apos;affaires total collecté via Wave</p>
          <p className="text-4xl font-bold mt-1">
            {totalCollected.toLocaleString("fr-FR")} FCFA
          </p>
          <p className="text-sm text-blue-200 mt-1">
            {payments.filter((p) => p.status === "SUCCESS").length} paiements confirmés
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-gray-100">
              <tr>
                {["Transaction Wave", "Client", "Ebook", "Montant", "Statut", "Date"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase px-5 py-3.5 tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payments.map((pay) => {
                const cfg = statusCfg[pay.status] ?? statusCfg.PENDING;
                const Icon = cfg.icon;
                return (
                  <tr key={pay.id} className="hover:bg-slate-50/50">
                    <td className="px-5 py-4 font-mono text-xs text-gray-500">
                      {pay.waveTransactionId ?? "—"}
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-gray-900">{pay.order.user.name}</p>
                      <p className="text-xs text-gray-400">{pay.order.user.email}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-700 max-w-[160px] truncate">
                      {pay.order.product.title}
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                      {pay.amount.toLocaleString("fr-FR")} FCFA
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.className}`}>
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(pay.createdAt).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
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
