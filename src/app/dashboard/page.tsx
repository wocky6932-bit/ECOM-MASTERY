import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookCover } from "@/components/BookCover";
import {
  BookOpen,
  ShoppingBag,
  KeyRound,
  Laptop,
  Clock,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;

  if (!sessionUser) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    include: {
      orders: {
        include: { product: true },
        orderBy: { createdAt: "desc" },
      },
      accessCodes: {
        include: { product: true },
        orderBy: { createdAt: "desc" },
      },
      readings: {
        include: { product: true },
      },
      sessions: {
        where: { revokedAt: null },
        orderBy: { lastActivity: "desc" },
      },
    },
  });

  if (!user) redirect("/login");

  const paidOrders = user.orders.filter((o) => o.status === "PAID");
  const activeDevices = user.sessions.length;
  const reading = user.readings[0];
  const progressPercent = reading ? reading.progressPct : 0;

  const stats = [
    {
      label: "Ebook acheté",
      value: paidOrders.length,
      icon: BookOpen,
      href: "/dashboard/ebooks",
      color: "blue",
    },
    {
      label: "Commandes",
      value: user.orders.length,
      icon: ShoppingBag,
      href: "/dashboard/commandes",
      color: "green",
    },
    {
      label: "Code d'accès",
      value: user.accessCodes.length,
      icon: KeyRound,
      href: "/dashboard/codes",
      color: "purple",
    },
    {
      label: "Appareils actifs",
      value: `${activeDevices} / 2`,
      icon: Laptop,
      href: "/dashboard/appareils",
      color: "orange",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Bonjour {user.name}
        </h1>
        <p className="text-gray-500 mt-1">
          Bienvenue sur votre espace personnel. Retrouvez vos livres et reprenez
          votre lecture.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, href, color }) => (
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
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </Link>
        ))}
      </div>

      {/* Recent ebooks */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900">Mes ebooks</h2>
          <Link
            href="/dashboard/ebooks"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {paidOrders.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-500">Vous n&apos;avez pas encore d&apos;ebook.</p>
            <Link
              href="/#ebooks"
              className="mt-4 inline-block text-blue-600 hover:underline text-sm"
            >
              Découvrir nos livres →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paidOrders.slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all"
              >
                <BookCover size="sm" title={order.product.title} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-blue-600 font-medium">
                    Ecom Mastery
                  </p>
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {order.product.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {order.product.category}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Acheté le{" "}
                    {new Date(order.createdAt).toLocaleDateString("fr-FR")}
                  </p>
                  <Link
                    href={`/lecteur/${order.product.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-xs bg-[#0066FF] text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Play className="w-3 h-3" />
                    Lire maintenant
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reading progress */}
      {reading && (
        <div className="bg-gradient-to-r from-[#0B1528] to-[#0066FF] rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-blue-200">Votre progression</p>
              <h3 className="text-lg font-semibold mt-1">
                {reading.product.title}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{progressPercent}%</p>
              <p className="text-sm text-blue-200">Complété</p>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <div
              className="bg-white rounded-full h-2 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <Link
            href={`/lecteur/${reading.product.slug}`}
            className="inline-flex items-center gap-2 bg-white text-[#0066FF] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Reprendre votre lecture →
          </Link>
        </div>
      )}
    </div>
  );
}
