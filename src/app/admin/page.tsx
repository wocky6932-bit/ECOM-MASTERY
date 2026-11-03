import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  BookOpen,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const [orders, products, users, codes] = await Promise.all([
    prisma.order.findMany({
      include: { user: true, product: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.product.findMany({ where: { status: "ACTIVE" } }),
    prisma.user.findMany({ where: { role: "CLIENT" } }),
    prisma.accessCode.findMany({ where: { status: "ACTIVE" } }),
  ]);

  const allOrders = await prisma.order.findMany({ where: { status: "PAID" } });
  const totalRevenue = allOrders.reduce((sum, o) => sum + o.amount, 0);
  const pendingOrders = await prisma.order.count({ where: { status: "PENDING" } });

  const stats = [
    {
      label: "Chiffre d'affaires",
      value: `${totalRevenue.toLocaleString("fr-FR")} FCFA`,
      sub: "Wave Checkout 100% collecté",
      icon: TrendingUp,
      href: "/admin/paiements",
      color: "green",
    },
    {
      label: "Ventes",
      value: allOrders.length,
      sub: `${pendingOrders} en attente`,
      icon: ShoppingBag,
      href: "/admin/commandes",
      color: "blue",
    },
    {
      label: "Clients",
      value: users.length,
      sub: `${codes.length} codes actifs`,
      icon: Users,
      href: "/admin/utilisateurs",
      color: "purple",
    },
    {
      label: "Ebooks",
      value: products.length,
      sub: "Catalogue actif",
      icon: BookOpen,
      href: "/admin/produits",
      color: "orange",
    },
  ];

  const colorMap: Record<string, string> = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  const statusCfg: Record<string, { label: string; className: string; icon: React.ElementType }> = {
    PAID: { label: "Payée", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
    PENDING: { label: "En attente", className: "bg-yellow-100 text-yellow-700", icon: Clock },
    FAILED: { label: "Échouée", className: "bg-red-100 text-red-700", icon: XCircle },
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Administration Ecom Mastery</h1>
        <p className="text-gray-500 mt-1">
          Gérez votre plateforme, vos ventes Wave et vos ebooks en toute simplicité.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, sub, icon: Icon, href, color }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-xl ${colorMap[color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="text-xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
            <p className="text-xs text-gray-400 mt-1">{sub}</p>
          </Link>
        ))}
      </div>

      {/* Latest orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Dernières commandes</h2>
            <p className="text-sm text-gray-400 mt-0.5">5 dernières commandes reçues</p>
          </div>
          <Link
            href="/admin/commandes"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-gray-100">
              <tr>
                {["Réf. commande", "Client", "Ebook", "Montant", "Statut", "Date"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase px-5 py-3 tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => {
                const cfg = statusCfg[order.status] ?? statusCfg.PENDING;
                const Icon = cfg.icon;
                return (
                  <tr key={order.id} className="hover:bg-slate-50/50">
                    <td className="px-5 py-3 font-mono text-sm font-semibold text-gray-900">
                      #{order.orderNumber}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900">{order.user.name}</td>
                    <td className="px-5 py-3 text-sm text-gray-600 max-w-[160px] truncate">
                      {order.product.title}
                    </td>
                    <td className="px-5 py-3 text-sm font-bold text-gray-900">
                      {order.amount.toLocaleString("fr-FR")} FCFA
                    </td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.className}`}>
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
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
