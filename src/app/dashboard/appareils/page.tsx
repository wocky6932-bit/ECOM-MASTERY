import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AppareilsClient } from "./AppareilsClient";

export default async function AppareilsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    include: {
      sessions: {
        where: { revokedAt: null },
        orderBy: { lastActivity: "desc" },
      },
    },
  });
  if (!user) redirect("/login");

  // Serialize for client component
  const sessions = user.sessions.map((s) => ({
    id: s.id,
    userAgent: s.userAgent,
    ipAddress: s.ipAddress,
    lastActivity: s.lastActivity.toISOString(),
  }));

  return <AppareilsClient sessions={sessions} maxDevices={2} />;
}
