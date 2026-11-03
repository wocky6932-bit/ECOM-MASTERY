import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { KeyRound, Copy, CheckCircle2, XCircle, Clock } from "lucide-react";

export default async function CodesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    include: {
      accessCodes: {
        include: { product: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!user) redirect("/login");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Codes d&apos;Accès</h1>
        <p className="text-gray-500 mt-1">
          Vos codes personnels pour accéder à vos ebooks.
        </p>
      </div>

      {user.accessCodes.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
          <KeyRound className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">Aucun code d&apos;accès pour l&apos;instant.</p>
          <p className="text-sm text-gray-400 mt-2">
            Un code est généré automatiquement après chaque achat validé.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {user.accessCodes.map((code) => {
            const isActive = code.status === "ACTIVE" && (!code.expiresAt || new Date(code.expiresAt) > new Date());
            return (
              <div
                key={code.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {code.product.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      Pour : {code.product.category}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Généré le{" "}
                      {new Date(code.createdAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl px-5 py-3">
                      <p className="font-mono text-lg font-bold text-[#0B1528] tracking-widest">
                        {code.code}
                      </p>
                    </div>

                    <button
                      className="p-2 rounded-lg hover:bg-slate-100 text-gray-500 hover:text-gray-800 transition-colors"
                      title="Copier le code"
                    >
                      <Copy className="w-4 h-4" />
                    </button>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                        isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          ACTIVE
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" />
                          EXPIRÉE
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {code.expiresAt && (
                  <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-50">
                    Expiration :{" "}
                    {new Date(code.expiresAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <div className="flex gap-3">
          <KeyRound className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-blue-900">
              Comment utiliser un code d&apos;accès ?
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Partagez votre code avec un proche ou utilisez-le sur un autre
              appareil via la page d&apos;activation. Le code reste personnel et
              lié à votre compte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
