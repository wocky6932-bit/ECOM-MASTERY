import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Marque & Présentation */}
          <div className="md:col-span-1 space-y-4">
            <Logo showSlogan={true} size="lg" />
            <p className="text-sm text-slate-500 leading-relaxed pt-2">
              Plateforme spécialisée dans les ebooks, guides pratiques et ressources de pointe pour entreprendre et réussir dans le digital en Afrique francophone.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/221770000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Support WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#0066FF] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-[#0066FF] transition-colors">
                  Boutique d&apos;ebooks
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0066FF] transition-colors">
                  Foire aux questions
                </Link>
              </li>
              <li>
                <Link href="/activer-code" className="hover:text-[#0066FF] transition-colors">
                  Activer un code d&apos;accès
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Informations légales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528] mb-4">
              Informations légales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cgv" className="hover:text-[#0066FF] transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-[#0066FF] transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/remboursement" className="hover:text-[#0066FF] transition-colors">
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Paiement & Sécurité */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528] mb-4">
              Paiement Sécurisé
            </h4>
            <p className="text-sm text-slate-500 mb-3">
              Règlement instantané via Wave Checkout. Accès immédiat et personnel dès confirmation cryptographique.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/60 p-2.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Wave Checkout 100% Vérifié & Sécurisé
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Ecom Mastery. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <p className="font-medium">Monnaie officielle : FCFA (XOF)</p>
            <span className="text-slate-200">|</span>
            <a
              href="https://wockytech.xyz"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors"
            >
              Réalisé par WockyTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
