import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { KeyRound, CheckCircle2, XCircle, Clock, Slash } from "lucide-react";

export default async function AdminCodesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const codes = await prisma.accessCode.findMany({
    include: { user: true, product: true },
    orderBy: { createdAt: "desc" },
  });

  const active = codes.filter((c) => c.status === "ACTIVE").length;
  const revoked = codes.filter((c) => c.status === "REVOKED").length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Codes d&apos;Accès</h1>
        <p className="text-gray-500 mt-1">{codes.length} codes générés — {active} actifs · {revoked} révoqués</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <CheckCircle2 className="w-4 h-4" /><span className="text-sm font-medium">Actifs</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{active}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-red-500 mb-2">
            <Slash className="w-4 h-4" /><span className="text-sm font-medium">Révoqués</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{revoked}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <KeyRound className="w-4 h-4" /><span className="text-sm font-medium">Total</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{codes.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-gray-100">
              <tr>
                {["Code", "Ebook", "Client", "Statut", "Expiration", "Généré le"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase px-5 py-3.5 tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {codes.map((code) => {
                const isActive = code.status === "ACTIVE";
                const Icon = isActive ? CheckCircle2 : code.status === "REVOKED" ? XCircle : Clock;
                return (
                  <tr key={code.id} className="hover:bg-slate-50/50">
                    <td className="px-5 py-3.5 font-mono text-sm font-bold text-[#0B1528] tracking-wider">
                      {code.code}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 max-w-[160px] truncate">
                      {code.product.title}
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="text-sm font-medium text-gray-900">{code.user.name}</p>
                      <p className="text-xs text-gray-400">{code.user.email}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isActive
                            ? "bg-green-100 text-green-700"
                            : code.status === "REVOKED"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        {code.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">
                      {code.expiresAt
                        ? new Date(code.expiresAt).toLocaleDateString("fr-FR")
                        : "Illimité"}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">
                      {new Date(code.createdAt).toLocaleDateString("fr-FR")}
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
