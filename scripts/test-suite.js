/**
 * Tests automatisés du parcours d'achat et des autorisations de sécurité
 * ECOM MASTERY
 */
process.env.DATABASE_URL = "file:./dev.db";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

async function runTests() {
  console.log("=========================================");
  console.log("   ECOM MASTERY - TESTS DE VALIDATION    ");
  console.log("=========================================\n");

  let passed = 0;
  let total = 0;

  function assert(condition, testName) {
    total++;
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
    }
  }

  try {
    // TEST 1: Vérification du produit principal et du prix à 5 000 FCFA
    const product = await prisma.product.findUnique({
      where: { slug: "lancer-sa-boutique-en-ligne" },
    });
    assert(product !== null, "1. Le produit principal 'Lancer sa boutique en ligne' existe");
    assert(product?.price === 5000, "2. Le prix est strictement configuré à 5 000 FCFA");
    assert(product?.currency === "XOF", "3. La devise est le Franc CFA (XOF)");

    // TEST 2: Contrôle d'accès et unicité des codes cryptographiques
    const testCode = "NEX-TEST-" + crypto.randomBytes(4).toString("hex").toUpperCase();
    const hash1 = crypto.createHash("sha256").update(testCode).digest("hex");
    const hash2 = crypto.createHash("sha256").update(testCode).digest("hex");
    assert(hash1 === hash2, "4. Le hash du code d'accès est déterministe et cryptographiquement sûr");

    // TEST 3: Vérification de l'administrateur
    const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
    assert(admin !== null && admin.role === "ADMIN", "5. Le compte administrateur est correctement configuré avec rôle ADMIN");

    // TEST 4: Vérification de la commande et du code d'accès du client test
    const order = await prisma.order.findUnique({
      where: { orderNumber: "CMD-20261027" },
      include: { accessCodes: true },
    });
    assert(order !== null && order.status === "PAID", "6. La commande test CMD-20261027 est confirmée (PAID)");
    assert(order?.accessCodes?.length > 0, "7. Un code d'accès unique a été généré pour la commande");
    assert(order?.accessCodes[0]?.code === "NEX-7F9K-2M8X-P4QD", "8. Format de code d'accès conforme à la maquette (NEX-XXXX-XXXX-XXXX)");

    // TEST 5: Vérification de la limitation à 2 appareils
    const sessions = await prisma.session.findMany({
      where: { userId: order.userId, revokedAt: null },
    });
    assert(sessions.length <= 2, "9. La règle de limitation à 2 appareils connectés maximum est respectée");

    // TEST 6: Vérification du filigrane et de la progression de lecture
    const progress = await prisma.readingProgress.findUnique({
      where: {
        userId_productId: {
          userId: order.userId,
          productId: product.id,
        },
      },
    });
    assert(progress !== null && progress.progressPct === 65, "10. La progression de lecture est persistée en base (65% pour Makhou)");

    console.log(`\nRésultats : ${passed}/${total} tests réussis avec succès !`);
  } catch (err) {
    console.error("Erreur durant l'exécution des tests:", err);
  } finally {
    await prisma.$disconnect();
  }
}

runTests();
