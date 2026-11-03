import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecom Mastery — Plateforme de Vente de Produits Numériques",
  description: "Learn. Grow. Succeed. Découvrez des ebooks et des ressources pratiques pour développer vos compétences, entreprendre et progresser dans le digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
