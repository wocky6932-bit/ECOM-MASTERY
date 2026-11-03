export interface Chapter {
  id: string;
  title: string;
  order: number;
  content: string; // Markdown or rich text with structured paragraphs
}

export interface EbookData {
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  learnPoints: string[];
  targetAudience: string;
  price: number;
  category: string;
  coverImage: string;
  chapters: Chapter[];
}

export const INITIAL_EBOOK: EbookData = {
  title: "Lancer sa boutique en ligne",
  slug: "lancer-sa-boutique-en-ligne",
  shortDesc: "Le guide pratique pour choisir un produit, trouver ses premiers clients et développer son activité e-commerce.",
  description: "Le guide complet pour créer une boutique en ligne rentable en Afrique de l'Ouest et à l'international. Découvrez les stratégies, les outils et les techniques éprouvées pour attirer vos premiers clients, encaisser vos paiements simplement (Wave, Mobile Money, Carte) et développer votre business.",
  learnPoints: [
    "Créer une boutique professionnelle et crédible",
    "Trouver les produits gagnants et vos premiers clients",
    "Intégrer les paiements mobiles (Wave, Orange Money) et bancaires",
    "Mettre en place des stratégies marketing directes rentables",
    "Augmenter vos ventes et fidéliser votre clientèle"
  ],
  targetAudience: "Entrepreneurs, commerçants, créateurs de contenu et toute personne souhaitant lancer un business e-commerce rentable au Sénégal et en Afrique francophone.",
  price: 5000,
  category: "E-commerce",
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "chapitre-1",
      title: "1. Introduction",
      order: 1,
      content: `Le e-commerce est aujourd'hui une opportunité réelle pour tous ceux qui veulent entreprendre en ligne en Afrique francophone.

Avec les bonnes stratégies, vous pouvez créer une boutique rentable et durable, même avec un petit budget de départ. L'essor fulgurant des moyens de paiement mobiles comme Wave et la connectivité mobile croissante ouvrent des opportunités sans précédent pour vendre directement aux consommateurs.

Ce livre a été conçu pour vous fournir un guide étape par étape, sans jargon inutile, fondé sur les réalités du terrain ouest-africain.`
    },
    {
      id: "chapitre-2",
      title: "2. Créer votre boutique",
      order: 2,
      content: `Avant de penser au design ou aux aspects techniques, votre priorité absolue est de valider le besoin réel du marché.

Une boutique en ligne réussie repose sur trois piliers fondamentaux :
1. **L'offre de valeur :** Quel problème résolvez-vous pour votre client ?
2. **La simplicité de commande :** Votre visiteur doit pouvoir comprendre, choisir et payer en moins de deux minutes.
3. **La confiance immédiate :** Des coordonnées claires, un service client réactif (notamment via WhatsApp) et un paiement instantané sécurisé.`
    },
    {
      id: "chapitre-3",
      title: "3. Attirer des clients",
      order: 3,
      content: `Le trafic est le carburant de votre boutique. Sans visiteurs qualifiés, aucune vente n'est possible.

Nous analysons ici les leviers les plus rentables en 2026 :
- **Les formats courts verticaux (TikTok, Reels, Shorts) :** La meilleure manière d'obtenir une visibilité organique massive sans budget publicitaire.
- **La publicité Facebook / Instagram ciblée :** Comment structurer une campagne avec un petit budget (à partir de 2 000 FCFA/jour) et tester vos visuels.
- **Le canal WhatsApp Business :** Pourquoi le closing sur WhatsApp convertit 4 à 6 fois mieux que les tunnels classiques en Afrique de l'Ouest.`
    },
    {
      id: "chapitre-4",
      title: "4. Augmenter vos ventes",
      order: 4,
      content: `Une fois vos premières commandes enregistrées, la rentabilité provient de l'optimisation de votre panier moyen et de la fidélisation.

- **Vente croisée (Cross-selling) et Upselling :** Proposer un produit complémentaire au moment du paiement.
- **Livraison et logistique :** Partenariats avec des livreurs fiables à Dakar, Abidjan et dans les capitales régionales.
- **Service après-vente et relances :** Réactiver un client existant coûte 5 fois moins cher que d'en acquérir un nouveau.`
    },
    {
      id: "chapitre-5",
      title: "5. Conclusion",
      order: 5,
      content: `La clé du succès dans le commerce digital n'est pas la perfection initiale, mais la constance dans l'exécution et l'écoute attentive de vos clients.

Passez à l'action dès aujourd'hui : appliquez un premier concept dès cette semaine, analysez vos retours, et réitérez. Votre succès se construit un pas après l'autre.`
    }
  ]
};

export const OTHER_EBOOKS: EbookData[] = [
  {
    title: "Stratégies Marketing Digital",
    slug: "strategies-marketing-digital",
    shortDesc: "Attirez plus de clients grâce au marketing digital.",
    description: "Le guide stratégique pour dominer le marketing sur les réseaux sociaux, maîtriser les algorithmes et transformer des abonnés en acheteurs réguliers.",
    learnPoints: ["Maîtriser Meta Ads", "Stratégie de contenu viral", "Copywriting persuasif"],
    targetAudience: "Marketeurs et freelances",
    price: 5000,
    category: "Marketing",
    coverImage: "/images/mockups-reference.jpg",
    chapters: INITIAL_EBOOK.chapters
  },
  {
    title: "Boostez votre productivité",
    slug: "boostez-votre-productivite",
    shortDesc: "Organisez-vous et atteignez vos objectifs professionnels.",
    description: "Les méthodes modernes de gestion du temps, d'automatisation des tâches récurrentes et de concentration profonde.",
    learnPoints: ["Gestion du temps", "Automatisation", "Focus profond"],
    targetAudience: "Professionnels et créateurs",
    price: 5000,
    category: "Productivité",
    coverImage: "/images/mockups-reference.jpg",
    chapters: INITIAL_EBOOK.chapters
  },
  {
    title: "Développeur Web Full Stack",
    slug: "developpeur-web-full-stack",
    shortDesc: "Maîtrisez le développement web de A à Z.",
    description: "Devenez autonome dans la création d'applications web modernes de haute performance avec TypeScript, Next.js et bases de données sécurisées.",
    learnPoints: ["Next.js & React", "APIs & Sécurité", "Bases de données SQL"],
    targetAudience: "Développeurs débutants et intermédiaires",
    price: 5000,
    category: "Développement",
    coverImage: "/images/mockups-reference.jpg",
    chapters: INITIAL_EBOOK.chapters
  }
];
