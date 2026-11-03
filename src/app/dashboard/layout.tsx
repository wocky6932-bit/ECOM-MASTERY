import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Logo } from "@/components/Logo";
import {
  BookOpen,
  ShoppingBag,
  KeyRound,
  Laptop,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  let sessionUser = token ? verifyToken(token) : null;

  if (!sessionUser) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { name: true, email: true, role: true },
  });

  if (!user) redirect("/login");

  const initials = user.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const navLinks = [
    { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { href: "/dashboard/ebooks", label: "Mes ebooks", icon: BookOpen },
    { href: "/dashboard/commandes", label: "Mes commandes", icon: ShoppingBag },
    { href: "/dashboard/codes", label: "Mes codes", icon: KeyRound },
    { href: "/dashboard/appareils", label: "Mes appareils", icon: Laptop },
    { href: "/dashboard/profil", label: "Mon profil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1528] text-white flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-white/10">
          <Link href="/">
            <Logo variant="light" className="h-10" size="md" />
          </Link>
          <p className="text-xs text-slate-400 mt-2">Espace Client</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
              {initials}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>
          <a
            href="/api/auth/logout"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  );
}
