import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  ShoppingBag,
  CalendarDays,
  Award,
} from "lucide-react";

export default async function AdminStatistiquesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const [orders, products, users, payments] = await Promise.all([
    prisma.order.findMany({ include: { product: true }, orderBy: { createdAt: "asc" } }),
    prisma.product.findMany({ include: { _count: { select: { orders: true } } } }),
    prisma.user.findMany({ where: { role: "CLIENT" } }),
    prisma.payment.findMany({ where: { status: "SUCCESS" } }),
  ]);

  const paidOrders = orders.filter((o) => o.status === "PAID");
  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);

  // Revenue by product
  const revenueByProduct = products.map((p) => {
    const productOrders = paidOrders.filter((o) => o.productId === p.id);
    const revenue = productOrders.reduce((sum, o) => sum + o.amount, 0);
    return { ...p, revenue, sales: productOrders.length };
  }).sort((a, b) => b.revenue - a.revenue);

  // Revenue by day (last 7 days)
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  const dailyRevenue = last7.map((day) => {
    const dayStr = day.toISOString().slice(0, 10);
    const dayOrders = paidOrders.filter(
      (o) => o.createdAt.toISOString().slice(0, 10) === dayStr
    );
    return {
      label: day.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric" }),
      revenue: dayOrders.reduce((sum, o) => sum + o.amount, 0),
      count: dayOrders.length,
    };
  });

  const maxDailyRevenue = Math.max(...dailyRevenue.map((d) => d.revenue), 1);

  const kpis = [
    { label: "Chiffre d'affaires", value: `${totalRevenue.toLocaleString("fr-FR")} FCFA`, icon: TrendingUp, color: "text-green-600 bg-green-100" },
    { label: "Ventes totales", value: paidOrders.length, icon: ShoppingBag, color: "text-blue-600 bg-blue-100" },
    { label: "Clients", value: users.length, icon: Users, color: "text-purple-600 bg-purple-100" },
    { label: "Ebooks actifs", value: products.filter((p) => p.isActive).length, icon: BookOpen, color: "text-orange-600 bg-orange-100" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Statistiques</h1>
        <p className="text-gray-500 mt-1">Vue d&apos;ensemble de votre activité.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className={`inline-flex p-2 rounded-xl mb-3 ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Revenue chart (7 days) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <CalendarDays className="w-5 h-5 text-gray-400" />
          <h2 className="text-base font-semibold text-gray-900">
            Revenus des 7 derniers jours
          </h2>
        </div>
        <div className="flex items-end gap-3 h-40">
          {dailyRevenue.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full">
                <div
                  className="w-full bg-[#0066FF] rounded-t-lg transition-all"
                  style={{
                    height: `${Math.max((d.revenue / maxDailyRevenue) * 120, d.revenue > 0 ? 8 : 2)}px`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 text-center whitespace-nowrap">{d.label}</p>
              {d.count > 0 && (
                <p className="text-xs font-semibold text-gray-700">{d.count} vente{d.count > 1 ? "s" : ""}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sales by product */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-5">
          <Award className="w-5 h-5 text-gray-400" />
          <h2 className="text-base font-semibold text-gray-900">Ventes par ebook</h2>
        </div>
        <div className="space-y-4">
          {revenueByProduct.map((p, idx) => {
            const maxRev = revenueByProduct[0]?.revenue ?? 1;
            return (
              <div key={p.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 w-5">#{idx + 1}</span>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{p.title}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="text-sm font-bold text-gray-900">
                      {p.revenue.toLocaleString("fr-FR")} FCFA
                    </span>
                    <span className="text-xs text-gray-400 ml-2">({p.sales} ventes)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-[#0066FF] rounded-full h-2 transition-all"
                    style={{ width: `${maxRev > 0 ? (p.revenue / maxRev) * 100 : 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
