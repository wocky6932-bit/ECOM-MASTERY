// Use TiDB Cloud (set in .env)
// process.env.DATABASE_URL is loaded from .env automatically by Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

async function seed() {
  console.log("Seeding database...");
  const adminHash = await bcrypt.hash("AdminMastery2026!", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@ecommastery.sn" },
    update: { passwordHash: adminHash },
    create: {
      name: "Admin Ecom Mastery",
      email: "admin@ecommastery.sn",
      phone: "+221 77 000 00 00",
      passwordHash: adminHash,
      role: "ADMIN",
    },
  });

  const clientHash = await bcrypt.hash("Client2026!", 10);
  const client = await prisma.user.upsert({
    where: { email: "makhou@example.sn" },
    update: { passwordHash: clientHash },
    create: {
      name: "Makhou",
      email: "makhou@example.sn",
      phone: "+221 77 123 45 67",
      passwordHash: clientHash,
      role: "CLIENT",
    },
  });

  const chaptersData = [
    {
      id: "chapitre-1",
      title: "1. Introduction",
      order: 1,
      content: `Le e-commerce est aujourd'hui une opportunité réelle pour tous ceux qui veulent entreprendre en ligne.

Avec les bonnes stratégies, vous pouvez créer une boutique rentable et durable, même avec un petit budget. L'essor fulgurant des moyens de paiement mobiles comme Wave et la connectivité mobile croissante ouvrent des opportunités sans précédent pour vendre directement aux consommateurs en Afrique de l'Ouest.

Ce livre a été conçu pour vous fournir un guide étape par étape, sans jargon inutile, fondé sur les réalités du terrain ouest-africain.`
    },
    {
      id: "chapitre-2",
      title: "2. Créer votre boutique",
      order: 2,
      content: `Avant de penser au design ou aux aspects techniques, votre priorité absolue est de valider le besoin réel du marché.

Une boutique en ligne réussie repose sur trois piliers fondamentaux :
1. L'offre de valeur : Quel problème résolvez-vous pour votre client ?
2. La simplicité de commande : Votre visiteur doit pouvoir comprendre, choisir et payer en moins de deux minutes.
3. La confiance immédiate : Des coordonnées claires, un service client réactif (notamment via WhatsApp) et un paiement instantané sécurisé.`
    },
    {
      id: "chapitre-3",
      title: "3. Attirer des clients",
      order: 3,
      content: `Le trafic est le carburant de votre boutique. Sans visiteurs qualifiés, aucune vente n'est possible.

Nous analysons ici les leviers les plus rentables :
- Les formats courts verticaux (TikTok, Reels, Shorts) : La meilleure manière d'obtenir une visibilité organique massive sans budget publicitaire.
- La publicité Meta Ads ciblée : Comment structurer une campagne avec un petit budget (à partir de 2 000 FCFA/jour) et tester vos visuels.
- Le canal WhatsApp Business : Pourquoi le closing sur WhatsApp convertit 4 à 6 fois mieux que les tunnels classiques en Afrique de l'Ouest.`
    },
    {
      id: "chapitre-4",
      title: "4. Augmenter vos ventes",
      order: 4,
      content: `Une fois vos premières commandes enregistrées, la rentabilité provient de l'optimisation de votre panier moyen et de la fidélisation.

- Vente croisée (Cross-selling) et Upselling : Proposer un produit complémentaire au moment du paiement.
- Livraison et logistique : Partenariats avec des livreurs fiables à Dakar, Abidjan et dans les capitales régionales.
- Service après-vente et relances : Réactiver un client existant coûte 5 fois moins cher que d'en acquérir un nouveau.`
    },
    {
      id: "chapitre-5",
      title: "5. Conclusion",
      order: 5,
      content: `La clé du succès dans le commerce digital n'est pas la perfection initiale, mais la constance dans l'exécution et l'écoute attentive de vos clients.

Passez à l'action dès aujourd'hui : appliquez un premier concept dès cette semaine, analysez vos retours, et réitérez. Votre succès se construit un pas après l'autre.`
    }
  ];

  const product = await prisma.product.upsert({
    where: { slug: "lancer-sa-boutique-en-ligne" },
    update: { chapters: JSON.stringify(chaptersData) },
    create: {
      title: "Lancer sa boutique en ligne",
      slug: "lancer-sa-boutique-en-ligne",
      shortDesc: "Le guide pratique pour choisir un produit, trouver ses premiers clients et développer son activité e-commerce.",
      description: "Le guide complet pour créer une boutique en ligne rentable. Découvrez les stratégies, les outils et les techniques pour attirer vos premiers clients et développer votre business.",
      learnPoints: JSON.stringify([
        "Créer une boutique professionnelle",
        "Trouver vos premiers clients",
        "Augmenter vos ventes"
      ]),
      targetAudience: "Entrepreneurs, commerçants et toute personne souhaitant lancer son activité en ligne.",
      price: 5000,
      currency: "XOF",
      coverImage: "/images/mockups-reference.jpg",
      category: "E-commerce",
      chapters: JSON.stringify(chaptersData),
      status: "ACTIVE",
    },
  });

  // Créer d'autres ebooks pour enrichir le catalogue
  const extraBooks = [
    {
      title: "Stratégies Marketing Digital",
      slug: "strategies-marketing-digital",
      shortDesc: "Attirez plus de clients grâce au marketing digital.",
      category: "Marketing",
      price: 5000,
    },
    {
      title: "Produits à tester : dropshipping depuis le Sénégal et 50 produits Alibaba → Dakar",
      slug: "developpeur-web-full-stack",
      shortDesc: "23 produits sénégalais sans gros stock et 50 produits légers Alibaba → Dakar.",
      category: "Sourcing & Import",
      price: 5000,
    },
  ];

  for (const b of extraBooks) {
    await prisma.product.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        title: b.title,
        slug: b.slug,
        shortDesc: b.shortDesc,
        description: b.shortDesc,
        learnPoints: JSON.stringify(["Techniques avancées", "Pratique guidée"]),
        targetAudience: "Professionnels et apprenants",
        price: b.price,
        currency: "XOF",
        coverImage: "/images/mockups-reference.jpg",
        category: b.category,
        chapters: JSON.stringify(chaptersData),
        status: "ACTIVE",
      },
    });
  }

  // Commande Makhou
  let order = await prisma.order.findUnique({
    where: { orderNumber: "CMD-20261027" },
  });

  if (!order) {
    order = await prisma.order.create({
      data: {
        orderNumber: "CMD-20261027",
        userId: client.id,
        productId: product.id,
        amount: 5000,
        currency: "XOF",
        status: "PAID",
        customerName: client.name,
        customerEmail: client.email,
        customerPhone: client.phone,
        createdAt: new Date("2026-10-27T10:00:00Z"),
      },
    });

    const code = "NEX-7F9K-2M8X-P4QD";
    const codeHash = crypto.createHash("sha256").update(code).digest("hex");

    await prisma.accessCode.create({
      data: {
        code,
        codeHash,
        userId: client.id,
        productId: product.id,
        orderId: order.id,
        status: "ACTIVE",
      },
    });

    await prisma.readingProgress.create({
      data: {
        userId: client.id,
        productId: product.id,
        lastPosition: 1,
        lastChapterId: "chapitre-1",
        progressPct: 65,
      },
    });

    await prisma.session.create({
      data: {
        userId: client.id,
        token: "token_sample_macbook",
        deviceName: "MacBook Pro - Chrome (Dakar, SN)",
        ipAddress: "197.234.221.14",
      },
    });

    await prisma.session.create({
      data: {
        userId: client.id,
        token: "token_sample_iphone",
        deviceName: "iPhone 15 - Safari (Dakar, SN)",
        ipAddress: "197.234.221.89",
      },
    });
  }

  // Autres commandes mockées pour les stats d'admin
  const sampleOrders = [
    { num: "CMD-20261026", name: "Fatou Sow", email: "fatou@example.com", amount: 5000, status: "PAID" },
    { num: "CMD-20261025", name: "Ibrahima Ndiaye", email: "ibrahima@example.com", amount: 5000, status: "PAID" },
    { num: "CMD-20261024", name: "Awa Cisse", email: "awa@example.com", amount: 5000, status: "PAID" },
    { num: "CMD-20261023", name: "Mamadou Kane", email: "mamadou@example.com", amount: 5000, status: "PAID" },
    { num: "CMD-20261022", name: "Aminata Toure", email: "aminata@example.com", amount: 5000, status: "PENDING" },
  ];

  for (const o of sampleOrders) {
    const exists = await prisma.order.findUnique({ where: { orderNumber: o.num } });
    if (!exists) {
      await prisma.order.create({
        data: {
          orderNumber: o.num,
          userId: client.id,
          productId: product.id,
          amount: o.amount,
          currency: "XOF",
          status: o.status,
          customerName: o.name,
          customerEmail: o.email,
          customerPhone: "+221 77 888 99 00",
        },
      });
    }
  }

  console.log("Seeding completed successfully!");
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
