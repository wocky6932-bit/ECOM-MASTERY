import { prisma } from "../src/lib/prisma";
import { hashPassword, generateAccessCode, hashCode, generateOrderNumber } from "../src/lib/auth";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "../src/lib/seed-data";

async function main() {
  console.log("Seeding database...");

  // 1. Créer l'administrateur
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || "admin@ecommastery.sn";
  const adminPass = process.env.ADMIN_DEFAULT_PASSWORD || "AdminMastery2026!";
  const adminHash = await hashPassword(adminPass);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash: adminHash },
    create: {
      name: "Admin Ecom Mastery",
      email: adminEmail,
      phone: "+221 77 000 00 00",
      passwordHash: adminHash,
      role: "ADMIN",
    },
  });
  console.log("Admin ready:", admin.email);

  // 2. Créer l'utilisateur test client (Makhou)
  const clientEmail = "makhou@example.sn";
  const clientPass = "Client2026!";
  const clientHash = await hashPassword(clientPass);

  const client = await prisma.user.upsert({
    where: { email: clientEmail },
    update: { passwordHash: clientHash },
    create: {
      name: "Makhou",
      email: clientEmail,
      phone: "+221 77 123 45 67",
      passwordHash: clientHash,
      role: "CLIENT",
    },
  });
  console.log("Client ready:", client.name, client.email);

  // 3. Créer les Ebooks
  const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];
  const createdProducts = [];

  for (const book of allBooks) {
    const p = await prisma.product.upsert({
      where: { slug: book.slug },
      update: {
        price: book.price,
        shortDesc: book.shortDesc,
        description: book.description,
        learnPoints: JSON.stringify(book.learnPoints),
        chapters: JSON.stringify(book.chapters),
      },
      create: {
        title: book.title,
        slug: book.slug,
        shortDesc: book.shortDesc,
        description: book.description,
        learnPoints: JSON.stringify(book.learnPoints),
        targetAudience: book.targetAudience,
        price: book.price,
        currency: "XOF",
        coverImage: book.coverImage,
        category: book.category,
        chapters: JSON.stringify(book.chapters),
        status: "ACTIVE",
      },
    });
    createdProducts.push(p);
  }
  console.log("Products seeded:", createdProducts.length);

  // 4. Créer un premier achat payé pour Makhou (Lancer sa boutique en ligne)
  const firstProduct = createdProducts[0];
  const orderNumber = "CMD-20261027";

  let order = await prisma.order.findUnique({
    where: { orderNumber },
  });

  if (!order) {
    order = await prisma.order.create({
      data: {
        orderNumber,
        userId: client.id,
        productId: firstProduct.id,
        amount: firstProduct.price,
        currency: "XOF",
        status: "PAID",
        customerName: client.name,
        customerEmail: client.email,
        customerPhone: client.phone || "+221 77 123 45 67",
      },
    });

    // Paiement Wave associé
    await prisma.payment.create({
      data: {
        orderId: order.id,
        provider: "WAVE",
        providerReference: "cos_seed_wave_completed",
        amount: order.amount,
        currency: "XOF",
        status: "PAID",
        paidAt: new Date("2026-10-27T14:30:00Z"),
      },
    });

    // Code d'accès unique
    const sampleCode = "NEX-7F9K-2M8X-P4QD";
    await prisma.accessCode.create({
      data: {
        code: sampleCode,
        codeHash: hashCode(sampleCode),
        userId: client.id,
        productId: firstProduct.id,
        orderId: order.id,
        status: "ACTIVE",
      },
    });

    // Progression de lecture à 65% comme sur la maquette
    await prisma.readingProgress.create({
      data: {
        userId: client.id,
        productId: firstProduct.id,
        lastPosition: 1, // Introduction
        lastChapterId: "chapitre-1",
        progressPct: 65,
      },
    });

    // 2 appareils connectés pour Makhou (comme dans la maquette)
    await prisma.session.create({
      data: {
        userId: client.id,
        token: "session_token_macbook_pro",
        deviceName: "MacBook Pro - Chrome (Dakar, SN)",
        ipAddress: "197.234.221.14",
      },
    });

    await prisma.session.create({
      data: {
        userId: client.id,
        token: "session_token_iphone_15",
        deviceName: "iPhone 15 - Safari Mobile",
        ipAddress: "197.234.221.89",
      },
    });

    console.log("Sample order CMD-20261027 & AccessCode created for Makhou!");
  }

  // 5. Quelques commandes pour le dashboard admin
  const dummyOrders = [
    { num: "CMD-20261026", user: "Fatou Sow", amount: 5000, status: "PAID" },
    { num: "CMD-20261025", user: "Ibrahima Ndiaye", amount: 5000, status: "PAID" },
    { num: "CMD-20261024", user: "Aissatou Diallo", amount: 5000, status: "PAID" },
    { num: "CMD-20261023", user: "Mamadou Ba", amount: 5000, status: "PENDING" },
  ];

  for (const item of dummyOrders) {
    const exists = await prisma.order.findUnique({ where: { orderNumber: item.num } });
    if (!exists) {
      await prisma.order.create({
        data: {
          orderNumber: item.num,
          userId: client.id,
          productId: firstProduct.id,
          amount: item.amount,
          currency: "XOF",
          status: item.status,
          customerName: item.user,
          customerEmail: `${item.user.toLowerCase().replace(" ", ".")}@example.com`,
          customerPhone: "+221 77 555 44 33",
        },
      });
    }
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
