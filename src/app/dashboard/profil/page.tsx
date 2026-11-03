import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ProfilClient } from "./ProfilClient";

export default async function ProfilPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { name: true, email: true, phone: true, createdAt: true },
  });
  if (!user) redirect("/login");

  const memberSince = user.createdAt
    ? new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(user.createdAt)
    : "Récemment";

  return (
    <ProfilClient
      user={{
        name: user.name || "Client",
        email: user.email,
        phone: user.phone || "",
        memberSince,
      }}
    />
  );
}
