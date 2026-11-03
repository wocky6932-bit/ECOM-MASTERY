# 🚀 ECOM MASTERY

**Plateforme de vente d'ebooks numériques pour l'Afrique francophone.**

Paiement Wave · Lecteur sécurisé · Dashboard client & admin · TiDB Cloud

---

## 🔧 Stack Technique

| Technologie | Usage |
|---|---|
| **Next.js 15** | Framework fullstack (App Router, SSR) |
| **TypeScript** | Typage strict |
| **Tailwind CSS** | Styling utilitaire |
| **Prisma 5** | ORM base de données |
| **TiDB Cloud** | MySQL compatible (production) |
| **Wave Checkout** | Paiement mobile (FCFA) |
| **Resend** | Emails transactionnels |
| **bcryptjs + JWT** | Authentification sécurisée |

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── boutique/                # Catalogue ebooks
│   ├── ebook/[slug]/            # Page produit détaillée
│   ├── paiement/                # Tunnel de paiement Wave
│   ├── login/                   # Connexion
│   ├── activer-code/            # Activation code d'accès
│   ├── lecteur/[slug]/          # Lecteur sécurisé (watermark)
│   ├── dashboard/               # Espace client
│   │   ├── ebooks/              # Mes ebooks
│   │   ├── commandes/           # Historique commandes
│   │   ├── codes/               # Codes d'accès
│   │   ├── appareils/           # Gestion appareils (2 max)
│   │   └── profil/              # Mon profil
│   ├── admin/                   # Console administration
│   │   ├── produits/            # Gestion catalogue
│   │   ├── commandes/           # Toutes les commandes
│   │   ├── utilisateurs/        # Liste clients
│   │   ├── codes/               # Codes d'accès
│   │   ├── paiements/           # Transactions Wave
│   │   └── statistiques/        # Analytics & KPIs
│   └── api/                     # Routes API
├── components/                  # Composants réutilisables
└── lib/                         # Services (auth, wave, email, prisma)
```

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/wocky6932-bit/ECOM-MASTERY.git
cd ECOM-MASTERY

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env

# Générer le client Prisma
npx prisma generate

# Synchroniser la base de données
npx prisma db push

# Seed (données de test)
node scripts/seed.js

# Lancer en développement
npm run dev
```

## 🔐 Sécurité

- Cookies `HttpOnly`, `Secure`, `SameSite=Lax`
- Watermark dynamique sur le lecteur d'ebook
- Limite de 2 appareils par compte
- Codes d'accès cryptographiquement générés (`NEX-XXXX-XXXX-XXXX`)
- Vérification de signature webhook Wave
- Contrôle d'accès serveur-side sur toutes les routes protégées

## 💳 Paiement

Intégration **Wave Checkout** (Sénégal/Afrique de l'Ouest).
Simulateur de développement inclus à `/wave-checkout-simulator`.

## 📧 Emails

Emails transactionnels via **Resend** :
- Confirmation de commande avec code d'accès
- Notification admin nouvelle vente
- Email de bienvenue

---

**Réalisé par [WockyTech](https://wockytech.xyz)**
