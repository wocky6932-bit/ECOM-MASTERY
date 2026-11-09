const fs = require('fs');
const path = require('path');

// Extract chapters from update-alibaba-cheikh-akhmad.js
const sourceFile = fs.readFileSync(path.join(__dirname, 'update-alibaba-cheikh-akhmad.js'), 'utf8');
const match = sourceFile.match(/const ALIBABA_CHAPTERS = (\[[\s\S]*?\n\]);/);

if (!match) {
  console.error("Could not find ALIBABA_CHAPTERS in source script");
  process.exit(1);
}

const chaptersRaw = match[1];
const chapters = eval(chaptersRaw);

const newAlibabaEbook = `export const ALIBABA_EBOOK: EbookData = {
  "id": "prod-alibaba-sourcing-2026",
  "slug": "formation-sourcing-alibaba-1688",
  "title": "Formation Alibaba — Trouver des fournisseurs, négocier et importer",
  "subtitle": "Par Cheikh Akhmad • Guide pratique, exemples & exercices pour le Sénégal et l'Afrique",
  "category": "Sourcing & Import",
  "price": 5000,
  "badge": "Bestseller",
  "shortDesc": "Le guide pratique officiel de Cheikh Akhmad pour trouver des fabricants fiables, négocier en anglais, sécuriser vos paiements et importer avec succès vers le Sénégal.",
  "fullDesc": "Apprenez pas à pas avec Cheikh Akhmad à trouver les vraies usines sur Alibaba, négocier des MOQ accessibles, utiliser Trade Assurance, maîtriser le transport maritime/aérien vers Dakar et calculer votre coût de revient au franc près.",
  "learnPoints": JSON.stringify([
    "Comprendre Alibaba et préparer un budget d'importation réaliste",
    "Recherches ciblées en anglais et filtres indispensables (Verified, Trade Assurance)",
    "Vérifier le profil d'un fournisseur et repérer les signaux d'alerte",
    "Scripts de négociation prêts à l'emploi pour obtenir de petits MOQ",
    "Sécuriser son argent via Alibaba Trade Assurance sans aucun risque",
    "Fret Aérien (au kg) vs Maritime (au m³) vers Dakar et calcul du poids volumétrique",
    "Calcul du coût rendu unitaire et de la rentabilité nette avant de vendre",
    "Plan d'action concret sur 7 jours pour lancer sa première commande"
  ]),
  "targetAudience": JSON.stringify([
    "Commerçants et boutiquiers voulant s'approvisionner directement à la source en Chine",
    "Débutants en e-commerce souhaitant maximiser leurs marges bénéficiaires",
    "Entrepreneurs voulant créer leur propre marque au Sénégal ou en Afrique de l'Ouest",
    "Revendeurs locaux désireux de s'émanciper des intermédiaires"
  ]),
  "chapters": ${JSON.stringify(chapters, null, 4)}
};`;

const seedDataPath = path.join(__dirname, '../src/lib/seed-data.ts');
let seedData = fs.readFileSync(seedDataPath, 'utf8');

const regex = /export const ALIBABA_EBOOK: EbookData = \{[\s\S]*?\n\};/;
if (!regex.test(seedData)) {
  console.error("Could not find ALIBABA_EBOOK in seed-data.ts");
  process.exit(1);
}

seedData = seedData.replace(regex, newAlibabaEbook);
fs.writeFileSync(seedDataPath, seedData, 'utf8');
console.log("✅ src/lib/seed-data.ts updated successfully with 10 modules from Cheikh Akhmad!");
