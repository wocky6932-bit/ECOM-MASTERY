import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCover } from "@/components/BookCover";
import { HomeCatalog } from "@/components/HomeCatalog";
import {
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  PlayCircle,
  ShoppingCart,
  Users,
  Smartphone,
  Headphones,
  Laptop,
  Star,
  CheckCircle2,
  HelpCircle,
  Rocket,
} from "lucide-react";

export default function HomePage() {
  const faqItems = [
    {
      q: "Comment acheter un livre sur Ecom Mastery ?",
      a: "Choisissez votre livre sur la page d'accueil, cliquez sur « Acheter », renseignez votre nom, e-mail et numéro de téléphone, puis validez votre paiement instantané via Wave Checkout. Vos accès et votre code d'accès s'affichent immédiatement après validation.",
    },
    {
      q: "Comment payer avec Wave ?",
      a: "Sur la page de commande, cliquez sur 'Payer avec Wave'. Vous serez redirigé vers l'application Wave sur votre mobile ou scannerez le QR code pour confirmer les 5 000 FCFA sans aucun frais additionnel.",
    },
    {
      q: "Puis-je lire l'ebook sur mon téléphone et ma tablette ?",
      a: "Oui, absolument ! Notre lecteur en ligne est 100% responsive et optimisé pour smartphone, tablette et ordinateur. Vous pouvez connecter jusqu'à 2 appareils simultanés en toute sécurité.",
    },
    {
      q: "Que faire si je perds mon code d'accès ?",
      a: "Votre code d'accès vous est envoyé instantanément par e-mail après chaque commande. Vous pouvez aussi le retrouver à tout moment dans votre espace client sous l'onglet 'Mes codes'.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800">
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#F8FAFD] via-white to-white">
        {/* Cercles diffus d'ambiance en arrière-plan */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Colonne gauche : Titres, Description & CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Pilule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/90 text-xs font-semibold text-[#0066FF] shadow-sm">
                <Rocket className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Votre réussite commence ici</span>
              </div>

              {/* Grand Titre */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1528] tracking-tight leading-[1.12]">
                Apprenez aujourd’hui. <br />
                <span className="text-[#0066FF]">Construisez votre réussite demain.</span>
              </h1>

              {/* Paragraphe descriptif */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Découvrez des ebooks et des ressources pratiques pour développer vos compétences, entreprendre et progresser dans le monde du digital.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#ebooks"
                  className="inline-flex items-center gap-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Explorer tous les livres</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/#a-propos"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors"
                >
                  <PlayCircle className="w-4 h-4 text-slate-600" />
                  <span>Notre approche</span>
                </Link>
              </div>

              {/* Badges de réassurance alignés */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Paiement sécurisé Wave</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>Accès immédiat garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span>Lecture personnelle protégée</span>
                </div>
              </div>
            </div>

            {/* Colonne droite : Composition Mockup 3D (Livre + Mobile + Badge Flottant) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[440px] sm:h-[480px] flex items-center justify-center">
                
                {/* Flèche ascendante stylisée bleu ciel en arrière-plan */}
                <div className="absolute -top-6 -right-6 w-48 sm:w-56 h-48 sm:h-56 pointer-events-none opacity-20">
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-blue-600">
                    <path
                      d="M30 170 C 60 140, 100 120, 150 50"
                      stroke="currentColor"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />
                    <path
                      d="M100 50 L 155 50 L 155 105"
                      stroke="currentColor"
                      strokeWidth="24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Badge flottant en haut à droite : +5000 Entrepreneurs */}
                <div className="absolute top-1 right-0 sm:-right-2 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-slate-100 flex items-center gap-2.5 sm:gap-3 animate-bounce-slow">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 leading-none">+5000</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">Entrepreneurs accompagnés</p>
                  </div>
                </div>

                {/* Le Grand Livre 3D incliné */}
                <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <BookCover
                    title="Lancer sa boutique en ligne"
                    subtitle="Le guide pratique e-commerce"
                    size="hero"
                    theme="ecommerce"
                  />
                </div>

                {/* Smartphone iPhone en avant-plan posé devant le livre */}
                <div className="absolute -bottom-2 left-0 sm:-left-6 z-20 w-36 sm:w-48 bg-slate-900 p-2 sm:p-2.5 rounded-[2.2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {/* Notch haut */}
                  <div className="w-14 sm:w-16 h-3 sm:h-3.5 bg-black rounded-b-xl mx-auto mb-2" />
                  
                  {/* Écran iPhone avec miniature ebook */}
                  <div className="bg-gradient-to-b from-[#0B1528] to-[#0A2558] rounded-[1.6rem] sm:rounded-[1.8rem] p-2.5 sm:p-3 text-white text-center flex flex-col justify-between h-48 sm:h-64 overflow-hidden border border-white/10">
                    <div className="pt-1">
                      <div className="bg-white rounded-lg px-2 py-0.5 mx-auto w-16 mb-2">
                        <Image
                          src="/images/logo.png"
                          alt="EM"
                          width={60}
                          height={20}
                          className="object-contain w-full h-auto"
                        />
                      </div>
                      <p className="text-[9px] uppercase font-bold tracking-wider text-blue-300">Ecom Mastery</p>
                    </div>

                    <div className="py-2">
                      <h4 className="text-[11px] font-black uppercase leading-tight">
                        LANCER SA BOUTIQUE EN LIGNE
                      </h4>
                      <p className="text-[9px] text-blue-200 mt-1 italic">Le guide pratique</p>
                    </div>

                    <div className="pb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-1">
                        <ShoppingCart className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300 font-semibold">
                        Version Mobile HD
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== CATALOGUE COMPLET DE TOUS LES LIVRES ===================== */}
      <HomeCatalog />

      {/* ===================== SECTION AVANTAGES ===================== */}
      <section id="a-propos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Colonne gauche : Titre & description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block bg-blue-50 text-[#0066FF] px-3.5 py-1 rounded-full text-xs font-bold">
                Pourquoi choisir Ecom Mastery ?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1528] leading-tight">
                Une plateforme pensée pour votre confort
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Un accès simple, sécurisé et flexible à des contenus de qualité, où que vous soyez.
              </p>
              <div className="pt-2">
                <Link
                  href="/#ebooks"
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
                >
                  <span>Explorer les livres</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Colonne droite : 4 Avantages côte-à-côte avec séparateurs fins */}
            <div className="lg:col-span-7 bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                
                {/* Avantage 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-[#0066FF] flex items-center justify-center mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    Accès immédiat après achat
                  </h4>
                </div>

                {/* Avantage 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    Paiement sécurisé Wave
                  </h4>
                </div>

                {/* Avantage 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100/70 text-sky-600 flex items-center justify-center mb-3">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    Lecture sur tous vos appareils
                  </h4>
                </div>

                {/* Avantage 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100/70 text-purple-600 flex items-center justify-center mb-3">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    Support réactif 24/7
                  </h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== BANNIÈRE CTA CENTRALE ===================== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#070F1E] via-[#0B1E42] to-[#070F1E] text-white p-8 sm:p-12 md:p-16 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Visuel 3D Livres superposés à gauche */}
            <div className="hidden lg:flex items-center justify-center shrink-0 w-48 relative">
              <div className="transform -rotate-12 translate-y-2 opacity-80">
                <BookCover title="Ecom" size="sm" theme="ecommerce" />
              </div>
              <div className="absolute transform rotate-6 translate-x-6 z-10 shadow-2xl">
                <BookCover title="Mastery" size="sm" theme="ecommerce" />
              </div>
            </div>

            {/* Texte et Appel à l'action au centre */}
            <div className="flex-1 text-center lg:text-left space-y-4 max-w-xl">
              <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Passez à l&apos;action dès maintenant
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
                Prêt à lancer votre projet dès aujourd&apos;hui ?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rejoignez des milliers d&apos;apprenants et transformez vos ambitions en réalité.
              </p>
              <div className="pt-2">
                <Link
                  href="/paiement?ebook=lancer-sa-boutique-en-ligne"
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all"
                >
                  <span>Commencer avec le guide e-commerce (5 000 FCFA)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Slogan en calligraphie à droite */}
            <div className="hidden md:flex flex-col items-center justify-center text-right shrink-0">
              <p className="text-2xl sm:text-3xl font-serif italic text-blue-200 tracking-wide font-light select-none">
                Learn. Grow.
              </p>
              <p className="text-2xl sm:text-3xl font-serif italic text-white tracking-wide font-semibold select-none">
                Succeed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SECTION FAQ ===================== */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Colonne gauche : Titre & Bulles 3D */}
            <div className="lg:col-span-5 space-y-4">
              {/* Bulles 3D stylisées */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0066FF] flex items-center justify-center font-black text-xl shadow-sm">
                  ?
                </div>
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-sm shadow-sm">
                  ?
                </div>
              </div>

              <span className="inline-block bg-blue-50 text-[#0066FF] px-3.5 py-1 rounded-full text-xs font-bold">
                Questions fréquentes
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] leading-tight">
                Foire aux questions
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Trouvez rapidement les réponses à vos questions sur nos ebooks et votre accès.
              </p>
            </div>

            {/* Colonne droite : Accordéon moderne */}
            <div className="lg:col-span-7 space-y-4">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-all open:shadow-md open:border-blue-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base list-none select-none">
                    <span>{item.q}</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-open:bg-blue-100 group-open:text-[#0066FF] flex items-center justify-center text-slate-500 font-bold transition-all shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
