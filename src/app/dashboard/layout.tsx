import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "./DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;

  if (!sessionUser) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { name: true, email: true, role: true },
  });

  if (!user) redirect("/login");

  const initials = (user.name || "U")
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DashboardShell
      user={{
        name: user.name,
        email: user.email,
        role: user.role,
        initials,
      }}
    >
      {children}
    </DashboardShell>
  );
}
