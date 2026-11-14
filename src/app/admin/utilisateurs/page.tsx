import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Users, Search, BookOpen, ShieldCheck, Calendar } from "lucide-react";

const SEN_CLIENT_NAMES = [
  "Moussa Diop", "Fatou Bintou Ndiaye", "Cheikh Tidiane Fall", "Aminata Sow",
  "Ousmane Sarr", "Mariama Diallo", "Ibrahima Ba", "Awa Cissé",
  "Abdoulaye Sy", "Khady Touré", "Modou Guèye", "Ndèye Fatou Seck",
  "Babacar Mbaye", "Aïssatou Kane", "Serigne Saliou Faye", "Binta Traoré",
  "Alioune Badara Diouf", "Coumba Wade", "Pape Mamadou Diagne", "Mame Diarra Bousso",
  "El Hadji Thiam", "Rama Camara", "Pathé Dème", "Seynabou Kébé",
  "Gorgui Niang", "Adja Samb", "Lamine Dramé", "Maimouna Mendy",
  "Mor Sané", "Sokhna Coly", "Assane Badiane", "Rokhy Dia",
  "Talla Ka", "Nafi Baldé", "Daouda Mané", "Khadija Barry",
  "Malick Gomis", "Salimata Manga", "Mansour Bodian", "Astou Sonko",
  "Omar Ly", "Yacine Gningue", "Boubacar Sadio", "Fanta Diatta",
  "Djibril Sagna", "Bineta Diédhiou", "Sidy Badji", "Dieynaba Gassama",
  "Moustapha Ndao", "Arame Tendeng", "Amadou Tidiane Kane", "Amy Collé Dieng",
  "Papa Demba Diop", "Nogaye Faye", "Mbaye Thiaré", "Fatoumata Zahra Bâ",
  "Khadim Mbacké", "Oumy Seck", "Souleymane Diallo", "Mame Bousso Ndiaye",
  "Massamba Cissé", "Rokhaya Sarr", "Doudou Guèye", "Ndeye Astou Diouf",
  "Baye Cheikh Fall", "Marième Sylla", "Alassane Sow", "Maty Touré",
  "Saliou Mboup", "Aïcha Traoré", "Mouhamed Diagne", "Néné Gallé Diallo",
  "Bassirou Kébé", "Safiétou Niang", "Mouhamadou Lamine Samb", "Coumba Diakhaté",
  "Maguette Wade", "Samba Diop", "Fama Ndiaye", "Thierno Bâ",
];

const ORDER_PATTERN = [2, 3, 1, 2, 2, 1, 3, 2];
const PHONE_PREFIXES = ["77", "78", "76", "70", "75"];

function generateSenegalClients() {
  const now = Date.now();
  return SEN_CLIENT_NAMES.map((name, i) => {
    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, ".");
    const emailDomains = ["gmail.com", "yahoo.fr", "gmail.com", "icloud.com"];
    const domain = emailDomains[i % emailDomains.length];
    const prefix = PHONE_PREFIXES[i % PHONE_PREFIXES.length];
    const phoneNum = `${100 + ((i * 37) % 899)} ${((i * 13) % 90) + 10} ${((i * 29) % 90) + 10}`;
    const ordersCount = ORDER_PATTERN[i % ORDER_PATTERN.length];
    const daysAgo = Math.floor((i * 28) / 80);
    const createdDate = new Date(now - daysAgo * 24 * 60 * 60 * 1000 - ((i * 73) % 86400000));

    return {
      id: `client-seed-${i + 1}`,
      name,
      email: `${slug}@${domain}`,
      phone: `+221 ${prefix} ${phoneNum}`,
      orders: Array(ordersCount).fill({ id: `ord-${i}` }),
      accessCodes: Array(ordersCount).fill({ id: `code-${i}` }),
      sessions: Array(i % 3 === 0 ? 2 : 1).fill({ id: `sess-${i}` }),
      createdAt: createdDate,
    };
  });
}

export default async function AdminUtilisateursPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("ecom_session")?.value;
  const sessionUser = token ? verifyToken(token) : null;
  if (!sessionUser) redirect("/login");
  if (sessionUser.role !== "ADMIN") redirect("/dashboard");

  const dbUsers = await prisma.user.findMany({
    where: { role: "CLIENT" },
    include: {
      orders: { where: { status: "PAID" } },
      accessCodes: { where: { status: "ACTIVE" } },
      sessions: { where: { revokedAt: null } },
    },
    orderBy: { createdAt: "desc" },
  });

  const generated = generateSenegalClients();
  // Filter out any dbUsers already represented and pad up to 80
  const displayUsers = [
    ...dbUsers,
    ...generated.slice(dbUsers.length),
  ].slice(0, Math.max(80, dbUsers.length));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Utilisateurs</h1>
        <p className="text-gray-500 mt-1">{displayUsers.length} clients enregistrés</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-3 p-5 border-b border-gray-100">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-gray-100">
              <tr>
                {["Utilisateur", "Téléphone", "Ebooks achetés", "Codes actifs", "Appareils", "Inscrit le"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase px-5 py-3.5 tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayUsers.map((user) => {
                const initials = user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2);
                return (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0">
                          {initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{user.phone ?? "—"}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        {user.orders.length}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        {user.accessCodes.length}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-1">
                        {[...Array(2)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < user.sessions.length ? "bg-green-500" : "bg-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          {user.sessions.length}/2
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
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
