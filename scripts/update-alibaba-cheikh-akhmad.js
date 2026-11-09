const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ALIBABA_CHAPTERS = [
  {
    id: "ali-chap-1",
    order: 1,
    title: "1. Bienvenue dans la formation — Trouver des fournisseurs, négocier et importer",
    content: `## Bienvenue dans la formation Alibaba
**Auteur :** Cheikh Akhmad  
**Édition :** Pédagogique • Guide pratique • Exemples • Exercices

---

### Table des matières
1. **Comprendre Alibaba et préparer son projet**
2. **Créer son compte et rechercher un produit**
3. **Vérifier un fournisseur avant l’achat**
4. **Négocier efficacement avec le fournisseur**
5. **Passer commande et sécuriser le paiement**
6. **Transport, douane et réception au Sénégal**
7. **Exercices pratiques et checklist**
8. **10 Pièges classiques du débutant et solutions concrètes**
9. **Logistique Chine-Afrique : Adresses Guangzhou & Yiwu**
10. **Conclusion et plan d’action sur 7 jours (« Dream Big, Act Now ! »)**

---

### Pourquoi cette formation ?
Alibaba.com met en relation des acheteurs professionnels et des fournisseurs internationaux. La plateforme peut aider un entrepreneur à comparer des produits, demander des devis et préparer des achats en gros directement à la source.

Mais un prix affiché sur la page d'accueil **n’est jamais le coût final** : il faut impérativement vérifier :
- La fiabilité réelle du fournisseur
- Les quantités minimales exigées (MOQ)
- Les frais de transport international (fret aérien ou maritime)
- Les taxes de dédouanement et le transport local
- La qualité réelle et la conformité des produits

### À qui s’adresse-t-elle ?
Aux débutants, commerçants, revendeurs, propriétaires de boutiques physiques et entrepreneurs e-commerce qui veulent apprendre à acheter auprès de fournisseurs internationaux, notamment pour importer et revendre avec profit au **Sénégal** et en **Afrique de l'Ouest**.

### Objectif du parcours
À la fin de ce parcours pratique, vous saurez :
- Préparer une recherche méthodique sans vous disperser
- Comparer objectivement les offres dans un tableau
- Poser les bonnes questions aux commerciaux d'usine
- Sécuriser votre commande et votre argent
- Calculer votre coût de revient exact avant de fixer vos prix de vente

> 📌 **À retenir :** Cette formation est éducative : vérifiez toujours les règles d’importation et les frais applicables à votre type de marchandise.`
  },
  {
    id: "ali-chap-2",
    order: 2,
    title: "2. Comprendre Alibaba et préparer son projet",
    content: `## Comprendre le fonctionnement d'Alibaba

### Alibaba, c’est quoi ?
Alibaba.com est une **place de marché B2B** (Business-to-Business) : elle sert principalement aux transactions commerciales entre entreprises.

Elle est très différente d’une boutique de détail classique (comme Amazon ou AliExpress) :
- Les fournisseurs proposent des prix dégressifs selon le volume commandé.
- Des options de personnalisation de marque (logo, emballage, couleurs) sont proposées (OEM/ODM).
- Les conditions d'expédition et les Incoterms (EXW, FOB, CIF, DDP) doivent être convenus à l'avance.

---

### Préparer son budget avec lucidité
Avant de contacter le moindre fournisseur, fixez un budget maximum global. **Ne dépensez jamais tout votre capital dans le prix d’achat des articles.**

Votre budget global doit impérativement financer :
1. **Le coût d'achat des produits** chez le fabricant
2. **L’échantillon test initial** (sample)
3. **Le transport international** (fret aérien au kg ou maritime au CBM)
4. **L’assurance et les frais de manutention transitaire**
5. **Les frais de dédouanement et taxes locales**
6. **La livraison locale au client à Dakar / Abidjan**
7. **Une réserve de sécurité de 15% pour les imprévus**

---

### Choisir un produit adapté pour débuter
Pour un premier import, privilégiez un produit :
- **Facile à comprendre** et sans complexité technique excessive
- **Peu fragile** (évitez le verre fin ou les céramiques sensibles aux chocs de transport)
- **Compact et léger** (pour réduire la facture de fret aérien)
- **Dont la demande locale est déjà vérifiée** sur votre marché
- **Dont la marge brute est supérieure à 50% - 60%**

---

### Exemple pratique : Accessoires de téléphone à Dakar
Vous envisagez d'importer et revendre des accessoires de téléphone (écouteurs sans fil, coques renforcées, supports voiture) :
- Comparez la demande réelle à Dakar (Sandaga, Colobane, réseaux sociaux, boutiques de quartier).
- Relevez les prix de vente moyens pratiqués localement (ex: 10 000 FCFA à 15 000 FCFA la paire d'écouteurs).
- Analysez les caractéristiques techniques recherchées (autonomie, réduction de bruit, Bluetooth 5.3).
- Anticipez les risques de défauts et les frais d'expédition avant de verser le moindre acompte.

> 📌 **À retenir :** Ne choisissez jamais un produit uniquement parce qu’il est très bon marché en ligne.`
  },
  {
    id: "ali-chap-3",
    order: 3,
    title: "3. Créer son compte et rechercher un produit",
    content: `## Bien démarrer sur la plateforme

### Créer son compte acheteur
1. Rendez-vous sur [Alibaba.com](https://www.alibaba.com).
2. Choisissez l’inscription en tant qu’**Acheteur** (Buyer Account).
3. Utilisez une adresse e-mail professionnelle ou active (que vous consultez quotidiennement).
4. Complétez les informations de votre entreprise ou projet commercial.
5. Activez l'authentification à deux facteurs (**2FA**) pour sécuriser l'accès à vos transactions.

---

### Effectuer une recherche précise en anglais
La grande majorité des usines et commerciaux chinois utilisent des outils de traduction anglais-chinois. Chercher en anglais vous donne **5 à 10 fois plus de résultats pertinents** qu'en français.

Ajoutez toujours des mots-clés techniques précis :
- La matière (silicone, aluminum, leather, cotton)
- Les dimensions ou la capacité (10000mAh, 65W, 30ml)
- La technologie ou l'usage (fast charging, waterproof IPX7, wireless)

> 💡 **Exemple concret :**  
> Au lieu de taper simplement *"écouteur"*, tapez :  
> \`wireless earbuds charging case bluetooth 5.3\`

---

### Utiliser les filtres intelligents d'Alibaba
Ne naviguez pas à l'aveugle parmi des millions d'annonces. Cochez impérativement ces filtres :
1. **Trade Assurance :** Garantit la protection de votre paiement jusqu'à réception de la commande conforme.
2. **Verified Supplier :** Usine auditée sur place par un organisme de contrôle indépendant (SGS, TÜV, Bureau Veritas).
3. **MOQ (Minimum Order Quantity) :** Ajustez le filtre selon votre capacité financière (ex: 10 à 50 pièces).
4. **Customization :** Si vous souhaitez apposer votre propre logo ou boîte personnalisée.

---

### La méthode du tableau comparatif
Avant d'écrire, notez au moins 3 à 5 offres concurrentes dans un tableau :
- Lien de l'offre et nom de l'usine
- Prix unitaire selon quantité (ex: 20 pcs, 50 pcs, 100 pcs)
- Délai de fabrication annoncé
- Spécifications précises du modèle

> 📌 **À retenir :** Enregistrez toujours au moins trois offres comparables dans un tableau avant de contacter un commercial.`
  },
  {
    id: "ali-chap-4",
    order: 4,
    title: "4. Vérifier un fournisseur avant l’achat",
    content: `## Déjouer les pièges et auditer son fournisseur

### 1. Contrôler minutieusement le profil
- **Ancienneté du compte :** Privilégiez les fournisseurs avec au moins **3 ans d'ancienneté (Gold Supplier)**. Les comptes de moins d'un an présentent un risque plus élevé.
- **Type d'entreprise :** Faites la distinction entre un vrai fabricant (**Manufacturer / Factory**) et un simple intermédiaire (**Trading Company**). Le fabricant a des machines de production et propose de meilleurs prix.
- **Cohérence du catalogue :** Une usine sérieuse est spécialisée dans une catégorie précise (ex: câbles et chargeurs). Méfiez-vous des profils qui vendent à la fois des robes, des montres et des tondeuses à gazon.
- **Avis et transactions vérifiées :** Regardez les notes (minimum 4.7/5) et les commentaires détaillés d'acheteurs réels avec photos.

---

### 2. Demander des preuves concrètes
Ne vous fiez jamais aux photos de catalogue retouchées sur fond blanc :
- Demandez des **photos et vidéos récentes prises en direct** dans l'atelier de fabrication.
- Exigez une fiche technique écrite (**Data Sheet**) avec les dimensions, poids net et tolérances.
- Demandez les options d'emballage individuel et les cartons d'expédition (Master Carton).
- Exigez les certificats officiels (CE, RoHS, FCC) et vérifiez le numéro d'enregistrement.

---

### 3. La règle d'or : Commander un échantillon (Sample)
Avant d'engager vos économies sur 100 ou 500 unités, **commandez toujours un échantillon** :
- Testez la qualité du plastique, des soudures, des boutons et des finitions.
- Mesurez le temps d'utilisation et vérifiez la solidité.
- Évaluez la résistance du packaging pendant le transport.

*Certes, l’échantillon coûte plus cher à l’unité en raison des frais de livraison express, mais il vous évite de recevoir 100 articles défectueux invendables.*

---

### 4. Signaux d’alerte majeurs (Red Flags)
Fuyez immédiatement si vous observez l'un de ces comportements :
- ❌ Le commercial insiste lourdement pour que vous payiez par **Western Union**, MoneyGram ou virement sur un compte bancaire individuel privé.
- ❌ Changement de coordonnées bancaires à la dernière minute sur WhatsApp.
- ❌ Prix 70% inférieur à tous les autres concurrents du marché (souvent contrefaçon ou arnaque).
- ❌ Refus de fournir un contrat ou une facture pro forma détaillée.

> 📌 **À retenir :** Un profil bien présenté n’est pas une garantie : vérifiez toujours les informations et conservez précieusement chaque échange écrit.`
  },
  {
    id: "ali-chap-5",
    order: 5,
    title: "5. Négocier efficacement avec le fournisseur",
    content: `## L'art de la négociation professionnelle

### Préparer sa négociation
En Chine, la négociation fait partie intégrante du commerce. Cependant, les commerciaux respectent les acheteurs précis et professionnels.

Avant d'envoyer votre premier message, préparez :
- La quantité test souhaitée (ex: 30 à 50 unités)
- La référence exacte du produit
- Vos exigences de qualité ou d'emballage
- La destination finale (ex: Dakar, Sénégal via entrepôt à Guangzhou)

---

### Le message modèle en anglais (Prêt à copier-coller)
Copiez et personnalisez ce script éprouvé :

\`\`\`
Hello,

My name is [Votre Prénom], Purchasing Manager at [Nom de votre entreprise].
We distribute consumer electronics in West Africa (Senegal).

We are very interested in your product [Lien du produit ou référence].
Could you please provide:
1. Your best EXW / FOB unit price for 50, 100 and 200 pieces?
2. The Minimum Order Quantity (MOQ) for a first test order?
3. Full product specifications & packaging details (weight and dimensions of the master carton)?
4. Production lead time?
5. Shipping cost to our freight forwarder warehouse in Guangzhou?
6. Can we order 1-2 samples first to evaluate product quality?

Looking forward to building a long-term business cooperation.
WhatsApp: +221 [Votre Numéro]
Best regards,
[Votre Nom]
\`\`\`

---

### Comparer le coût total (Facture Pro Forma)
Ne vous arrêtez jamais au seul prix unitaire affiché :
- Vérifiez si les frais d'expédition vers l'entrepôt de votre transitaire en Chine sont inclus.
- Demandez si le packaging de vente est inclus ou s'il s'agit d'un emballage neutre (sac OPP).
- Faites préciser par écrit le délai de fabrication (**Lead Time**) en jours ouvrés.
- Exigez une **Facture Pro Forma (PI)** tamponnée et signée par l'entreprise.

---

### Rester courtois et formel
- Confirmez toujours par écrit sur le chat d'Alibaba chaque point validé oralement ou sur WhatsApp.
- Ne soyez jamais agressif : valorisez la relation à long terme et le potentiel de commandes mensuelles régulières.

> 📌 **À retenir :** La meilleure négociation est celle qui clarifie toutes les conditions à l'avance et protège votre marge nette.`
  },
  {
    id: "ali-chap-6",
    order: 6,
    title: "6. Passer commande et sécuriser le paiement",
    content: `## Valider et sécuriser sa commande

### 1. Relire la commande dans les moindres détails
Avant de payer un centime, vérifiez les clauses du contrat de commande :
- **Raison sociale :** Le nom de la société doit correspondre exactement au compte vérifié sur Alibaba.
- **Description exhaustive :** Couleur exacte, type de prise électrique (prise européenne EU Plug pour le Sénégal), voltage, version du logiciel, packaging.
- **Quantité totale et prix convenu :** Aucun frais surprise ne doit être ajouté.
- **Date limite d'expédition :** Date précise au-delà de laquelle vous pouvez demander un dédommagement.
- **Politique de retour ou de remboursement en cas de marchandise défectueuse.**

---

### 2. Utiliser impérativement Alibaba Trade Assurance
**Alibaba Trade Assurance** est un service de protection gratuit pour l'acheteur :
- Votre paiement est consigné sur un compte séquestre sécurisé d'Alibaba.
- Le fournisseur ne touche l'argent que si les délais d'expédition sont respectés et que les produits correspondent aux spécifications écrites du contrat.
- En cas de litige ou de marchandise non conforme, Alibaba arbitre et vous rembourse.

---

### 3. Les modes de paiement recommandés
- ✅ **Carte Bancaire (Visa / Mastercard) via Alibaba :** Rapide, traçable et protégée par Trade Assurance.
- ✅ **Virement bancaire T/T vers le compte officiel de l'entreprise :** Le nom de l'entreprise bénéficiaire doit être STRICTEMENT identique au nom sur Alibaba.
- ❌ **À proscrire formellement :** Western Union, MoneyGram, PayPal entre proches, ou transfert vers des comptes bancaires de personnes physiques.

---

### 4. Conserver toutes les preuves d'achat
Téléchargez et archivez :
- Le bon de commande signé et la facture pro forma
- Les captures d'écran de la discussion confirmant les spécifications techniques
- Le reçu de paiement bancaire
- Les photos des cartons et étiquettes d'expédition prises par le fournisseur avant le départ de l'usine

> 📌 **À retenir :** Ne confirmez jamais une commande si les caractéristiques du produit ou les délais ne sont pas écrites noir sur blanc.`
  },
  {
    id: "ali-chap-7",
    order: 7,
    title: "7. Transport, douane et réception au Sénégal",
    content: `## Acheminer sa marchandise vers le Sénégal

### Fret Aérien vs Fret Maritime : Le grand comparatif

| Critère | Fret Aérien Express (Avion) | Fret Maritime (Bateau au CBM) |
|---|---|---|
| **Délai moyen** | **7 à 12 jours** | **35 à 55 jours** |
| **Facturation** | Au kilogramme (**7 500 à 9 500 FCFA / kg**) | Au mètre cube (**180 000 à 250 000 FCFA / m³**) |
| **Dédouanement** | Inclus dans le tarif au kg chez le transitaire | Inclus dans le tarif au m³ chez le transitaire |
| **Produits adaptés** | Montres, écouteurs, bijoux, vêtements légers | Chaussures, sacs volumineux, électroménager, meubles |
| **Recommandation** | 🚀 Idéal pour tester rapidement sans attendre | 🚢 Idéal pour maximiser les profits sur gros volumes |

---

### La formule du Poids Volumétrique (Avion)
En avion, les compagnies aériennes facturent l'espace occupé si le colis est léger mais volumineux :

$$\\text{Poids Volumétrique (kg)} = \\frac{\\text{Longueur (cm)} \\times \\text{Largeur (cm)} \\times \\text{Hauteur (cm)}}{5000}$$

*Le tarif appliqué sera toujours le montant le plus élevé entre le poids réel sur la balance et le poids volumétrique. Demandez toujours à votre usine de compacter les emballages au maximum !*

---

### Anticiper le dédouanement avec un transitaire de groupage
Pour éviter de gérer vous-même les déclarations de douane complexes au port ou à l'aéroport de Dakar :
- Passez par un **transitaire de groupage Chine-Sénégal**.
- Le transitaire réceptionne votre marchandise dans son entrepôt à **Guangzhou** ou **Yiwu**.
- Il regroupe vos colis avec ceux d'autres commerçants et s'occupe de toutes les formalités douanières.
- Vous payez le fret et le dédouanement directement en FCFA lors du retrait du colis à Dakar.

---

### Procédure de contrôle à la réception
Le jour où votre transitaire vous appelle pour récupérer votre marchandise :
1. Examinez l'état extérieur des cartons (absence de déchirures ou de traces d'humidité).
2. Vérifiez le poids total sur la balance du transitaire avant de signer le bon de retrait.
3. Ouvrez un carton sur place et testez quelques pièces.
4. Photographiez immédiatement tout carton endommagé ou produit manquant pour faire jouer l'assurance.

> 📌 **À retenir :** Ne fixez jamais votre prix de revente avant d’avoir estimé l’intégralité des coûts réels d’importation.`
  },
  {
    id: "ali-chap-8",
    order: 8,
    title: "8. Exercices pratiques et checklist",
    content: `## Passer à l'action : Exercices pratiques

### Exercice 1 — Trouver et comparer 3 fournisseurs
Choisissez un produit que vous maîtrisez bien. Effectuez une recherche ciblée sur Alibaba et comparez trois fournisseurs :
- **Fournisseur A :** Nom de l'usine, prix unitaire, MOQ, délai.
- **Fournisseur B :** Nom de l'usine, prix unitaire, MOQ, délai.
- **Fournisseur C :** Nom de l'usine, prix unitaire, MOQ, délai.

*Question de réflexion : Pourquoi le fournisseur le moins cher sur la page n'est-il pas toujours le meilleur choix (qualité médiocre, emballage fragile, délais non respectés) ?*

---

### Exercice 2 — Rédiger son premier message de prise de contact
Adaptez le modèle fourni au chapitre 5 pour le produit de votre choix. Posez les questions clés (MOQ, spécifications, coût de livraison vers l'entrepôt de Guangzhou, commande d'échantillon). Notez la rapidité et la clarté des réponses obtenues.

---

### Exercice 3 — Calculer son Coût de Revient Unitaire
Remplissez ce tableau avec vos données estimées :

| Poste de dépense | Montant estimé (FCFA) |
|---|---|
| Achat des produits chez l'usine en Chine | ______ FCFA |
| Frais de fret Chine - Sénégal (Avion ou Bateau) | ______ FCFA |
| Assurance et frais de manutention transitaire | ______ FCFA |
| Dédouanement et taxes locales | ______ FCFA |
| Frais de livraison locale coursier à Dakar | ______ FCFA |
| **TOTAL RENDU À DAKAR** | **______ FCFA** |
| Nombre d'unités vendables reçues | ______ unités |
| **COÛT RENDU PAR UNITÉ** | **______ FCFA** |

---

### Checklist complète avant de valider le paiement
Cochez chaque point avant de valider votre virement :
- [x] Fournisseur vérifié (Gold Supplier, badge Verified, avis clients positifs)
- [x] Caractéristiques et finitions du produit décrites par écrit dans le contrat
- [x] Quantité minimale (MOQ) et prix total confirmés sans frais cachés
- [x] Échantillon évalué et validé si commande importante
- [x] Incoterm et mode de transport convenus (EXW / FOB / DDP)
- [x] Coordonnées exactes de l'entrepôt du transitaire transmises à l'usine
- [x] Commande couverte par la garantie Alibaba Trade Assurance
- [x] Facture pro forma et captures d'écran des accords sauvegardées

> 📌 **À retenir :** Votre objectif prioritaire : commencer par une commande test raisonnable pour apprendre le cycle complet avant d’augmenter les volumes.`
  },
  {
    id: "ali-chap-9",
    order: 9,
    title: "9. 10 Pièges classiques du débutant et solutions concrètes",
    content: `## Éviter les erreurs fatales en sourcing international

### 1. Importer des contrefaçons de grandes marques
Nike, Apple, Samsung, Louis Vuitton... C'est la garantie quasi certaine de voir son colis intercepté et détruit par les douanes, avec une amende en prime. Vendez des marques génériques fiables ou lancez votre propre marque locale (Private Label) !

### 2. Oublier de commander un échantillon
Commander 200 pièces sans avoir touché le produit de ses propres mains est le moyen le plus rapide de perdre son argent. Validez toujours la matière, le fonctionnement et l'emballage.

### 3. Ignorer les restrictions sur les batteries et liquides
Les batteries au lithium et les liquides nécessitent des déclarations MSDS spécifiques pour le transport aérien. Avertissez toujours votre transitaire avant d'acheter ce type d'articles.

### 4. Ne pas négocier la quantité minimale (MOQ)
Si un fournisseur affiche un MOQ de 100 unités, demandez-lui poliment s'il accepte une commande d'essai de 20 ou 30 unités pour tester le marché sénégalais. La plupart acceptent volontiers.

### 5. Se fier uniquement aux photos du site
Les photos de vitrine d'Alibaba sont souvent empruntées à d'autres marques. Demandez toujours des photos réelles prises dans l'atelier avec le smartphone du commercial.

### 6. Payer en dehors de la plateforme
Ne cédez jamais aux commerciaux qui vous demandent de payer hors d'Alibaba pour "vous faire une remise de 5%". Vous perdez instantanément toute protection Trade Assurance.

### 7. Oublier les frais de livraison locale au client
À Dakar ou Abidjan, la livraison au client final coûte entre 1 500 et 2 500 FCFA par course. Intégrez ce coût dans votre prix de vente dès le départ.

### 8. Négliger le calcul du poids volumétrique
Un carton de peluches ou de coussins très légers mais très volumineux peut vous coûter trois fois plus cher que prévu en avion. Demandez toujours à l'usine de compacter sous vide les articles mous.

### 9. Fixer son prix de vente avant de recevoir la marchandise
Attendez d'avoir la facture finale du transitaire avec le poids exact avant de lancer vos campagnes publicitaires et de communiquer vos prix au public.

### 10. Abandonner à la première difficulté
Un retard de 4 jours sur un vol cargo ou un carton un peu froissé fait partie intégrante du métier d'importateur. Analysez chaque cycle pour optimiser le suivant !`
  },
  {
    id: "ali-chap-10",
    order: 10,
    title: "10. Conclusion — De la recherche à votre première importation",
    content: `## De la théorie à la pratique : Votre plan d'action

### Les points essentiels
Alibaba vous ouvre les portes des plus grandes usines de la planète, mais le succès d'un importateur repose sur la rigueur et la méthode :
- Choisissez un produit dont la demande locale est réelle.
- Comparez méthodiquement au moins trois fournisseurs vérifiés.
- Exigez des preuves écrites et des photos réelles d'atelier.
- Négociez les conditions et protégez vos paiements via Trade Assurance.
- Calculez scrupuleusement votre coût rendu à Dakar avant de vendre.

---

### Votre plan d'action sur 7 jours

| Jour | Action prioritaire à réaliser |
|---|---|
| **Jour 1** | Choisissez une niche précise et identifiez votre client cible à Dakar ou en Afrique de l'Ouest. |
| **Jour 2** | Étudiez les prix pratiqués sur le marché local (Sandaga, boutiques, e-commerce). |
| **Jour 3** | Recherchez 3 à 5 fournisseurs vérifiés sur Alibaba et créez votre tableau comparatif. |
| **Jour 4** | Envoyez le script de négociation en anglais, demandez les fiches techniques et les devis pour 3 quantités. |
| **Jour 5** | Contactez votre transitaire Chine-Dakar pour obtenir ses tarifs au kg/m³ et son adresse d'entrepôt en Chine. |
| **Jour 6** | Calculez votre coût unitaire rendu et simulez votre marge bénéficiaire nette. |
| **Jour 7** | Passez votre première commande test sécurisée via Trade Assurance ! |

---

### À propos de l’auteur
**Cheikh Akhmad** s’intéresse passionnément à l’entrepreneuriat, au commerce international et aux outils numériques. Cette formation vise à rendre les premières étapes de l’approvisionnement international simples, accessibles et rentables pour tous les porteurs de projets en Afrique de l'Ouest.

---

### Note pédagogique
*Ce document constitue un support de formation pratique et général. Il ne remplace pas un conseil juridique, fiscal ou douanier personnalisé. Les fonctionnalités d’Alibaba, les conditions de protection et les barèmes tarifaires des douanes peuvent évoluer. Vérifiez toujours les réglementations en vigueur auprès des autorités compétentes.*

---

> 🌟 **« Dream Big, Act Now ! »**  
> *Le commerce international appartient à ceux qui passent à l'action avec méthode et persévérance.*  
> **— Cheikh Akhmad**`
  }
];

async function main() {
  console.log("Updating Alibaba Course by Cheikh Akhmad in TiDB & Seed Data...");

  // 1. Update DB product
  const updatedProduct = await prisma.product.upsert({
    where: { slug: "formation-sourcing-alibaba-1688" },
    update: {
      title: "Formation Alibaba — Trouver des fournisseurs, négocier et importer",
      shortDesc: "Le guide pratique officiel de Cheikh Akhmad pour trouver des fabricants fiables, négocier en anglais, sécuriser vos paiements et importer avec succès vers le Sénégal.",
      description: "Apprenez pas à pas avec Cheikh Akhmad à trouver les vraies usines sur Alibaba, négocier des MOQ accessibles, utiliser Trade Assurance, maîtriser le transport maritime/aérien vers Dakar et calculer votre coût de revient au franc près.",
      category: "Sourcing & Import",
      price: 5000,
      currency: "FCFA",
      coverImage: "/images/alibaba-cover.png",
      chapters: JSON.stringify(ALIBABA_CHAPTERS),
      status: "ACTIVE"
    },
    create: {
      id: "prod-alibaba-sourcing-2026",
      slug: "formation-sourcing-alibaba-1688",
      title: "Formation Alibaba — Trouver des fournisseurs, négocier et importer",
      shortDesc: "Le guide pratique officiel de Cheikh Akhmad pour trouver des fabricants fiables, négocier en anglais, sécuriser vos paiements et importer avec succès vers le Sénégal.",
      description: "Apprenez pas à pas avec Cheikh Akhmad à trouver les vraies usines sur Alibaba, négocier des MOQ accessibles, utiliser Trade Assurance, maîtriser le transport maritime/aérien vers Dakar et calculer votre coût de revient au franc près.",
      category: "Sourcing & Import",
      price: 5000,
      currency: "FCFA",
      coverImage: "/images/alibaba-cover.png",
      learnPoints: JSON.stringify([
        "Comprendre Alibaba et préparer un budget d'importation réaliste",
        "Recherches ciblées en anglais et filtres indispensables (Verified, Trade Assurance)",
        "Vérifier le profil d'un fournisseur et repérer les signaux d'alerte",
        "Scripts de négociation prêts à l'emploi pour obtenir de petits MOQ",
        "Sécuriser son argent via Alibaba Trade Assurance sans aucun risque",
        "Fret Aérien (au kg) vs Maritime (au m³) vers Dakar et calcul du poids volumétrique",
        "Calcul du coût rendu unitaire et de la rentabilité nette avant de vendre",
        "Plan d'action concret sur 7 jours pour lancer sa première commande"
      ]),
      targetAudience: JSON.stringify([
        "Commerçants et boutiquiers voulant s'approvisionner directement à la source en Chine",
        "Débutants en e-commerce souhaitant maximiser leurs marges bénéficiaires",
        "Entrepreneurs voulant créer leur propre marque au Sénégal ou en Afrique de l'Ouest",
        "Revendeurs locaux désireux de s'émanciper des intermédiaires"
      ]),
      chapters: JSON.stringify(ALIBABA_CHAPTERS),
      status: "ACTIVE"
    }
  });

  console.log("✅ TiDB Database updated successfully:", updatedProduct.title);
  console.log("Total chapters in DB:", ALIBABA_CHAPTERS.length);
}

main()
  .catch((e) => {
    console.error("❌ Error updating:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
