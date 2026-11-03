const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { INITIAL_EBOOK, OTHER_EBOOKS } = require("./dist/seed-data");

async function main() {
  console.log("Updating all ebooks in TiDB Cloud with detailed courses...");
  const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];

  for (const book of allBooks) {
    console.log(`Updating ${book.title} (${book.slug})...`);
    await prisma.product.upsert({
      where: { slug: book.slug },
      update: {
        title: book.title,
        shortDesc: book.shortDesc,
        description: book.description,
        learnPoints: JSON.stringify(book.learnPoints),
        targetAudience: book.targetAudience,
        price: book.price,
        category: book.category,
        chapters: JSON.stringify(book.chapters),
        status: "ACTIVE",
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
        coverImage: book.coverImage || "/images/mockups-reference.jpg",
        category: book.category,
        chapters: JSON.stringify(book.chapters),
        status: "ACTIVE",
      },
    });
    console.log(`✓ ${book.title} updated with ${book.chapters.length} detailed modules.`);
  }

  console.log("All ebooks successfully updated in TiDB Cloud!");
}

main()
  .catch((e) => {
    console.error("Error updating DB:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
