import type { Metadata } from "next";
import "./globals.css";
import { VisitorTracker } from "@/components/VisitorTracker";

export const metadata: Metadata = {
  title: "Ecom Mastery — Plateforme de Vente de Produits Numériques",
  description:
    "Learn. Grow. Succeed. Découvrez des ebooks et des ressources pratiques pour développer vos compétences, entreprendre et progresser dans le digital.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col antialiased">
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
