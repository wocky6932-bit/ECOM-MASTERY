import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AdminShell } from "./AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;

  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const admin = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { name: true, email: true },
  });
  if (!admin) redirect("/login");

  return (
    <AdminShell
      admin={{
        name: admin.name,
        email: admin.email,
      }}
    >
      {children}
    </AdminShell>
  );
}
