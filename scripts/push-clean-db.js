const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 1. Transpile seed-data.ts to JS
const tsCode = fs.readFileSync(path.join(__dirname, '../src/lib/seed-data.ts'), 'utf8');
const jsCode = ts.transpileModule(tsCode, {
  compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText;

// 2. Evaluate in module context
const m = { exports: {} };
const fn = new Function('module', 'exports', 'require', jsCode);
fn(m, m.exports, require);

const { INITIAL_EBOOK, OTHER_EBOOKS } = m.exports;

async function executeWithRetry(fn, retries = 5, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`Connection attempt ${i + 1} failed. Retrying in ${delay / 1000}s...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

async function main() {
  console.log("Synchronizing all cleaned ebooks (0 emojis) to TiDB Cloud...");
  const allBooks = [INITIAL_EBOOK, ...OTHER_EBOOKS];

  for (const book of allBooks) {
    console.log(`Syncing ${book.title} (${book.slug})...`);
    await executeWithRetry(() => prisma.product.upsert({
      where: { slug: book.slug },
      update: {
        title: book.title,
        shortDesc: book.shortDesc,
        description: book.fullDesc || book.description,
        learnPoints: typeof book.learnPoints === 'string' ? book.learnPoints : JSON.stringify(book.learnPoints),
        targetAudience: typeof book.targetAudience === 'string' ? book.targetAudience : JSON.stringify(book.targetAudience),
        price: book.price,
        category: book.category,
        chapters: JSON.stringify(book.chapters),
        status: "ACTIVE",
      },
      create: {
        id: book.id || `prod-${book.slug}`,
        title: book.title,
        slug: book.slug,
        shortDesc: book.shortDesc,
        description: book.fullDesc || book.description,
        learnPoints: typeof book.learnPoints === 'string' ? book.learnPoints : JSON.stringify(book.learnPoints),
        targetAudience: typeof book.targetAudience === 'string' ? book.targetAudience : JSON.stringify(book.targetAudience),
        price: book.price,
        currency: "FCFA",
        coverImage: book.coverImage || "/images/mockups-reference.jpg",
        category: book.category,
        chapters: JSON.stringify(book.chapters),
        status: "ACTIVE",
      },
    }));
    console.log(`✓ ${book.title} updated with ${book.chapters.length} chapters.`);
  }

  console.log("✅ All ebooks synchronized in TiDB Cloud without any emojis!");
}

main()
  .catch((e) => {
    console.error("Error updating DB:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
