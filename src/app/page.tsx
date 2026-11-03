import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCover } from "@/components/BookCover";
import {
  ShieldCheck,
  Zap,
  Smartphone,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne gauche (Textes et Actions) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-semibold text-[#0066FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Des ressources pour avancer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1528] tracking-tight leading-[1.12]">
                Apprenez aujourd’hui. <br />
                <span className="text-[#0066FF]">Construisez votre réussite demain.</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Découvrez des ebooks et des ressources pratiques pour développer vos compétences, entreprendre et progresser dans le monde du digital.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/boutique"
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Découvrir les ebooks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#a-propos"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  Notre approche
                </Link>
              </div>

              {/* Badges de réassurance sous Hero */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Paiement sécurisé Wave</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Accès immédiat garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Lecture personnelle protégée</span>
                </div>
              </div>
            </div>

            {/* Colonne droite (Visuel 3D / Livre en vedette) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
                  <BookCover
                    title="Lancer sa boutique en ligne"
                    subtitle="Le guide pratique e-commerce"
                    size="lg"
                  />
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-[#0B1528] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      Prix : 5 000 FCFA
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Produits Populaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Nos ebooks populaires
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Des livres pratiques pour passer de l&apos;idée à l&apos;action concrète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Produit 1 (En vedette) */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-400 hover:shadow-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-5">
                  <BookCover
                    title="Lancer sa boutique en ligne"
                    subtitle="Le guide pratique"
                    size="md"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full">
                  E-commerce
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 group-hover:text-[#0066FF] transition-colors">
                  Lancer sa boutique en ligne
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                  Le guide pratique pour choisir un produit, trouver ses premiers clients et développer son activité e-commerce.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Tarif unique</span>
                  <span className="text-lg font-black text-[#0B1528]">5 000 FCFA</span>
                </div>
                <Link
                  href="/ebook/lancer-sa-boutique-en-ligne"
                  className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </div>

            {/* Produit 2 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-400 hover:shadow-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-5">
                  <BookCover
                    title="Stratégies Marketing Digital"
                    subtitle="Attirez plus de clients"
                    size="md"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
                  Marketing
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 group-hover:text-[#0066FF] transition-colors">
                  Stratégies Marketing Digital
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                  Attirez plus de clients grâce aux meilleures techniques de copywriting, contenu viral et Meta Ads.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Tarif unique</span>
                  <span className="text-lg font-black text-[#0B1528]">5 000 FCFA</span>
                </div>
                <Link
                  href="/ebook/strategies-marketing-digital"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Voir détails
                </Link>
              </div>
            </div>

            {/* Produit 3 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-400 hover:shadow-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-5">
                  <BookCover
                    title="Boostez votre productivité"
                    subtitle="Organisez vos journées"
                    size="md"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Productivité
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 group-hover:text-[#0066FF] transition-colors">
                  Boostez votre productivité
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                  Organisez-vous, éliminez la procrastination et atteignez vos objectifs professionnels.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Tarif unique</span>
                  <span className="text-lg font-black text-[#0B1528]">5 000 FCFA</span>
                </div>
                <Link
                  href="/ebook/boostez-votre-productivite"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Voir détails
                </Link>
              </div>
            </div>

            {/* Produit 4 */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 hover:border-blue-400 hover:shadow-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-5">
                  <BookCover
                    title="Développeur Web Full Stack"
                    subtitle="Le parcours complet"
                    size="md"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                  Développement
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 group-hover:text-[#0066FF] transition-colors">
                  Développeur Web Full Stack
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                  Maîtrisez le développement web de A à Z : Next.js, API sécurisées, PostgreSQL et déploiement pro.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Tarif unique</span>
                  <span className="text-lg font-black text-[#0B1528]">5 000 FCFA</span>
                </div>
                <Link
                  href="/ebook/developpeur-web-full-stack"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Voir détails
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section id="a-propos" className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">
              L&apos;expérience Ecom Mastery
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1528] tracking-tight mt-3">
              Une plateforme pensée pour votre confort et votre sécurité
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Chaque détail a été calibré pour vous garantir une expérience d&apos;apprentissage fluide et instantanée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Accès immédiat</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Votre accès est activé automatiquement dès la confirmation de votre paiement Wave.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Paiement par Wave</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Réglez en toute confiance en 1 clic via votre compte Wave sans aucuns frais cachés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Lecture sécurisée</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Lecteur web haute lisibilité, protégé par filigrane dynamique et gestion de sessions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Mobile & Ordinateur</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Interface responsive adaptée aux smartphones, tablettes et ordinateurs portables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Contenu pédagogique</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Des guides étape par étape, des cas concrets et des plans d&apos;action immédiatement applicables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Foire aux questions
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Toutes les réponses à vos questions sur vos achats et votre accès.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Comment acheter un ebook sur Ecom Mastery ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Sélectionnez l&apos;ebook de votre choix, cliquez sur « Acheter maintenant », renseignez votre nom, e-mail et numéro de téléphone, puis validez votre paiement via Wave. Votre compte et votre accès sont créés dans la seconde.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Comment payer avec Wave ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Vous êtes redirigé vers la page sécurisée officielle Wave Checkout. Vous pouvez valider en un clic depuis votre application mobile Wave ou en scannant le QR code sur votre écran d&apos;ordinateur.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Comment recevoir mon accès personnel ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Dès la confirmation du paiement par Wave, vous êtes connecté à votre tableau de bord personnel. Vous recevez simultanément par email votre récapitulatif de commande et votre code d&apos;accès unique au format NEX-XXXX-XXXX-XXXX.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Puis-je lire l&apos;ebook sur mon téléphone et ma tablette ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Oui. Le lecteur web Ecom Mastery est conçu pour s&apos;adapter parfaitement aux smartphones et tablettes. Votre progression de lecture est automatiquement sauvegardée entre vos appareils autorisés (jusqu&apos;à 2 appareils actifs).
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Puis-je partager mon compte ou mon code d&apos;accès ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Non. Les codes et accès sont strictement nominatifs et rattachés à votre compte personnel. Des mesures de sécurité (limitation d&apos;appareils, filigrane dynamique et détection des sessions simultanées) empêchent le partage public non autorisé.
              </p>
            </details>

            <details className="group bg-slate-50 border border-slate-200/80 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm">
                <span>Que faire si je perds mon code ou mes accès ?</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                Vous pouvez à tout moment vous connecter avec votre adresse e-mail ou utiliser la fonction de récupération d&apos;accès pour recevoir un lien sécurisé par email. Notre support WhatsApp est également disponible 7j/7 pour vous assister.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-[#0B1528] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Prêt à lancer votre projet dès aujourd&apos;hui ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Rejoignez des centaines d&apos;entrepreneurs qui développent leur boutique et leurs compétences avec nos méthodes.
          </p>
          <div>
            <Link
              href="/ebook/lancer-sa-boutique-en-ligne"
              className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <span>Commencer avec le guide e-commerce (5 000 FCFA)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
