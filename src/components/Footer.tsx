import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070F1E] text-slate-400 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Marque & Présentation */}
          <div className="md:col-span-4 space-y-4">
            <div className="bg-white/10 p-2 rounded-xl inline-block backdrop-blur-sm border border-white/10">
              <Logo showSlogan={false} size="sm" variant="light" />
            </div>
            <p className="text-xs tracking-widest uppercase font-semibold text-slate-300">
              Learn. Grow. Succeed.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              Plateforme francophone spécialisée dans les ebooks, guides pratiques et stratégies concrètes pour réussir son commerce et ses projets digitaux.
            </p>
          </div>

          {/* Col 2: Navigation rapide */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-white transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/#a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Informations légales */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Informations légales
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/cgv" className="hover:text-white transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/remboursement" className="hover:text-white transition-colors">
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Paiement & Réseaux */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Paiement sécurisé
              </h4>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                <Image
                  src="/images/wave-penguin.png"
                  alt="Wave Secure"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">Wave</p>
                  <p className="text-[10px] text-blue-400 font-medium">Checkout 100% Vérifié</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Restons connectés
              </h4>
              <div className="flex items-center gap-2.5 text-slate-300">
                <a
                  href="https://wa.me/221770000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
                  title="WhatsApp"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                  title="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-all"
                  title="X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne inférieure */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ecom Mastery. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <p>Monnaie officielle : <span className="text-slate-300 font-medium">FCFA (XOF)</span></p>
            <span className="text-slate-700">|</span>
            <a
              href="https://wockytech.xyz"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Réalisé par WockyTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
