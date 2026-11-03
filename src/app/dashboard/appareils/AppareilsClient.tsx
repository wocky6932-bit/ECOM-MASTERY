"use client";
import React, { useState } from "react";
import { Laptop, Monitor, Smartphone, AlertTriangle, ShieldCheck, Trash2 } from "lucide-react";

interface Session {
  id: string;
  userAgent: string | null;
  ipAddress: string | null;
  lastActivity: string;
}

interface AppareilsClientProps {
  sessions: Session[];
  maxDevices: number;
}

function parseDevice(ua: string | null): { icon: React.ElementType; name: string } {
  if (!ua) return { icon: Monitor, name: "Appareil inconnu" };
  if (/iPhone|iPad|iPod/i.test(ua)) return { icon: Smartphone, name: ua.match(/iPhone \d+/)?.[0] ?? "iPhone" };
  if (/Android/i.test(ua)) return { icon: Smartphone, name: "Android" };
  if (/Macintosh/i.test(ua)) return { icon: Monitor, name: "Mac" };
  if (/Windows/i.test(ua)) return { icon: Laptop, name: "Windows PC" };
  return { icon: Monitor, name: "Navigateur" };
}

export function AppareilsClient({ sessions, maxDevices }: AppareilsClientProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [revoked, setRevoked] = useState<Set<string>>(new Set());

  const activeSessions = sessions.filter((s) => !revoked.has(s.id));

  async function revokeDevice(sessionId: string) {
    setLoading(sessionId);
    try {
      await fetch(`/api/devices/${sessionId}`, { method: "DELETE" });
      setRevoked((prev) => new Set([...prev, sessionId]));
    } catch {
      alert("Erreur lors de la révocation");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Appareils</h1>
        <p className="text-gray-500 mt-1">
          {activeSessions.length} / {maxDevices} appareils autorisés actifs
        </p>
      </div>

      {/* Warning if at limit */}
      {activeSessions.length >= maxDevices && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900">
              Limite d&apos;appareils atteinte
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Vous avez atteint la limite de {maxDevices} appareils. Révoquez un
              appareil pour en connecter un nouveau.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4 mb-6">
        {activeSessions.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <Laptop className="w-12 h-12 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-500">Aucun appareil actif.</p>
          </div>
        ) : (
          activeSessions.map((session, idx) => {
            const { icon: Icon, name } = parseDevice(session.userAgent);
            const isCurrent = idx === 0;
            return (
              <div
                key={session.id}
                className={`bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-4 ${
                  isCurrent ? "border-blue-200 bg-blue-50/30" : "border-gray-100"
                }`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    isCurrent ? "bg-blue-100" : "bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isCurrent ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    {isCurrent && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                        Cet appareil
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    IP : {session.ipAddress ?? "inconnue"} · Dernière activité :{" "}
                    {new Date(session.lastActivity).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  {session.userAgent && (
                    <p className="text-xs text-gray-300 mt-0.5 truncate">
                      {session.userAgent.slice(0, 80)}
                    </p>
                  )}
                </div>

                {!isCurrent && (
                  <button
                    onClick={() => revokeDevice(session.id)}
                    disabled={loading === session.id}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    title="Révoquer cet appareil"
                  >
                    {loading === session.id ? (
                      <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <div className="flex gap-3">
          <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Protection anti-partage
            </p>
            <p className="text-sm text-slate-600 mt-1">
              La limite de {maxDevices} appareils protège votre compte contre le
              partage illicite. Si vous reconnaissez un appareil suspect, révoquez-le
              immédiatement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
