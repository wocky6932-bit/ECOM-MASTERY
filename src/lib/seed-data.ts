export interface Chapter {
 id: string;
 title: string;
 order: number;
 content: string;
}

export interface EbookData {
  id?: string;
  title: string;
  slug: string;
  subtitle?: string;
  shortDesc: string;
  description?: string;
  fullDesc?: string;
  learnPoints: string[] | string;
  targetAudience: string[] | string;
  price: number;
  badge?: string;
  category: string;
  coverImage: string;
  chapters: Chapter[];
  [key: string]: any;
}

// =========================================================================
// LIVRE 1 : LE CLOSING — TRANSFORMER VOS PROSPECTS EN CLIENTS
// =========================================================================
export const INITIAL_EBOOK: EbookData = {
 title: "Le Closing : transformer vos prospects en clients",
 slug: "lancer-sa-boutique-en-ligne",
 shortDesc: "Comment conclure vos ventes avec méthode, sans pression ni mensonge : accueillir, qualifier, lever les objections, encaisser et fidéliser sur WhatsApp, par téléphone et en face-à-face.",
 description: "Comment conclure vos ventes avec méthode, sans pression ni mensonge : accueillir, qualifier, convaincre, lever les objections, encaisser et fidéliser, avec des scripts prêts à copier pour WhatsApp, le téléphone et le face-à-face, des tableaux d'objections et de techniques de closing, 4 prompts pour s'entraîner avec Claude et un plan d'action sur 14 jours.",
 learnPoints: [
 "Le parcours complet du closing en 7 étapes : de l'accueil au suivi après-vente",
 "Accueillir, qualifier rapidement avec les 4 questions utiles et présenter son offre par les bénéfices",
 "Répondre aux 7 objections courantes (« C'est trop cher », « Je vais réfléchir », confiance, délai...)",
 "Maîtriser les 7 techniques de closing, l'encaissement simple (Wave / Orange Money) et la relance J+1 à J+14",
 "Mesurer ses taux de conversion, s'entraîner avec Claude (4 prompts) et appliquer le plan de 14 jours"
 ],
 targetAudience: "Commerçants, e-commerçants, vendeurs sur WhatsApp, conseillers par téléphone et entrepreneurs souhaitant conclure plus de ventes avec éthique et régularité.",
 price: 5000,
 category: "E-commerce",
 coverImage: "/images/cover-closing-pro.jpg",
 chapters: [
  {
   id: "chapitre-1",
   title: "1. Qu'est-ce que le closing ? & Le parcours en 7 étapes",
   order: 1,
   content: `## Le Closing : transformer vos prospects en clients

Comment conclure vos ventes avec méthode, sans pression ni mensonge : accueillir, qualifier, convaincre, lever les objections, encaisser et fidéliser, avec des scripts prêts à copier pour WhatsApp, le téléphone et le face-à-face.

> [!NOTE] À savoir. Ce guide donne des méthodes, pas des garanties : le taux de conclusion dépend de votre produit, de votre prix, de votre confiance et de votre secteur. Les messages sont des modèles à adapter à votre voix, à votre clientèle et à votre langue (français, wolof...).

## 1. Qu'est-ce que le closing ?

Le closing, c'est l'art d'aider un client à prendre sa décision d'achat, jusqu'au paiement.

Beaucoup de vendeurs pensent que le closing est « le dernier mot » qui arrache une vente. En réalité, **on ferme une vente comme on ouvre une porte : en douceur, au bon moment, parce que le client est prêt.** Le travail commence dès le premier message.

| Le bon closing | Le mauvais closing |
|---|---|
| Comprendre le besoin du client | Pousser le produit sans écouter |
| Rassurer et lever les doutes réels | Mettre la pression, inventer une rareté |
| Proposer une prochaine étape claire | Laisser la conversation s'éteindre |
| Rendre le paiement simple | Compliquer l'achat |
| Suivre le client après la vente | Disparaître une fois payé |

## 2. Le parcours en 7 étapes

\`\`\`
CLOSING_7_ETAPES
\`\`\`

Chaque étape prépare la suivante. Une vente se perd rarement à la dernière : elle se perd souvent à la deuxième ou à la quatrième.`
  },
  {
   id: "chapitre-2",
   title: "2. Préparer le terrain, Accueillir et Qualifier",
   order: 2,
   content: `## 3. Préparer le terrain

Avant de closer, rendez la décision facile.

- **Une offre claire :** ce qui est inclus, le prix en FCFA, le délai de livraison, ce qui se passe en cas de problème.
- **Des preuves prêtes :** photos et vidéos réelles, avis de clients (avec leur accord), captures de livraisons réussies.
- **Un catalogue ou une fiche :** WhatsApp Business permet de présenter produits et prix.
- **Des réponses rapides enregistrées :** prix, livraison, paiement, adresse, horaires.
- **De la rapidité :** un client qui écrit est chaud. Plus vous tardez à répondre, plus il refroidit ou se tourne vers un autre vendeur.
- **Un moyen de paiement simple :** mobile money, paiement à la livraison ou acompte, selon votre activité.

## 4. Accueillir et qualifier

Qualifier, c'est comprendre **qui est le client, ce qu'il veut, pour quand et avec quel budget.** Sans cela, vous vendez à l'aveugle.

### Exemple de conversation WhatsApp

> **VOUS :** Bonjour Awa ! Merci pour votre message. Je suis Moussa de [Boutique]. Pour bien vous conseiller : c'est pour vous ou pour offrir ?

> **CLIENT :** C'est pour ma sœur, son anniversaire.

> **VOUS :** Super idée ! Elle aime plutôt le style classique ou moderne ? Et pour quelle date en avez-vous besoin ?

> **CLIENT :** Moderne. Samedi.

### Les 4 questions utiles

1. **Le besoin :** « Qu'est-ce que vous cherchez exactement ? »
2. **Le contexte :** « C'est pour quelle occasion ? Qui va l'utiliser ? »
3. **Le délai :** « Vous en avez besoin pour quand ? »
4. **Le budget :** « Vous avez un budget en tête pour que je vous propose le bon modèle ? »`
  },
  {
   id: "chapitre-3",
   title: "3. Présenter son offre & Traiter les objections",
   order: 3,
   content: `## 5. Présenter son offre

- **Reliez le produit à ce que le client a dit :** « Vous cherchez quelque chose de moderne pour samedi, donc je vous conseille celui-ci. »
- **Parlez bénéfices avant caractéristiques :** ce que le client gagne, pas seulement la fiche technique.
- **Montrez une preuve :** vidéo du produit, avis d'un client, photo de livraison.
- **Donnez le prix avec la valeur :** prix, ce qui est inclus, délai, garantie.
- **Proposez 2 ou 3 options au maximum :** trop de choix fait hésiter.

> **VOUS :** D'après ce que vous me dites, je vous conseille le modèle B : moderne, livré avant samedi, 18 000 FCFA livraison à Dakar incluse. Voici la vidéo et l'avis d'une cliente. Je vous le prépare ?

## 6. Traiter les objections

Une objection n'est pas un refus : c'est une question ou un doute que le client n'a pas encore résolu.

\`\`\`
CLOSING_OBJECTION_4_ETAPES
\`\`\`

Une méthode simple pour chaque objection :

| Objection | Ce qu'elle cache souvent | Réponse type |
|---|---|---|
| « C'est trop cher » | Doute sur la valeur ou le budget | « Je comprends. C'est plutôt le budget ou vous avez un doute sur la qualité ? » puis comparer la valeur ou proposer une option moins chère ou un paiement en deux fois. |
| « Je vais réfléchir » | Un doute non dit | « Bien sûr. Qu'est-ce qui vous fait encore hésiter : le prix, la qualité, la livraison ? » Je peux vous aider à y voir clair. |
| « Je n'ai pas confiance » | Peur des arnaques en ligne | Montrez avis, vidéos de clients, adresse, paiement à la livraison ou acompte limité, vérification du colis à la réception si possible. |
| « Je dois demander à… » | La décision se prend à plusieurs | « Très bien. Voulez-vous que je vous prépare un récapitulatif à lui envoyer ? » |
| « Je n'ai pas l'argent maintenant » | Trésorerie | Proposer un acompte, une date de paiement ou une offre plus petite, sans pression. |
| « J'ai trouvé moins cher ailleurs » | Comparaison | Demander ce qui est comparé (qualité, garantie, délai), puis expliquer ce qui change réellement. Ne cassez pas votre prix par réflexe. |
| « La livraison est trop longue » | Urgence réelle | Proposer une livraison plus rapide, un retrait ou une alternative honnête. |

> [!WARNING] Ne faites jamais de promesse que vous ne pouvez pas tenir pour calmer un doute : une fausse garantie coûte plus cher qu'une vente perdue.`
  },
  {
   id: "chapitre-4",
   title: "4. Les techniques de closing & Encaisser",
   order: 4,
   content: `## 7. Les techniques de closing

| Technique | Quand l'utiliser | Exemple |
|---|---|---|
| Question directe | Le client a tout compris et semble prêt | « Je vous le prépare ? » |
| Choix entre deux options | Il hésite entre deux versions | « Vous préférez le noir ou le beige ? Livraison demain ou jeudi ? » |
| Récapitulatif | Après une longue discussion | « Donc : modèle B, couleur noire, livré samedi à Dakar, 18 000 FCFA. C'est bien ça ? » |
| Réduction du risque | Peur de se tromper | Garantie réelle, échange possible, vérification à la livraison, essai. |
| Acompte ou paiement en deux fois | Budget serré | « Vous pouvez payer la moitié maintenant et la moitié à la livraison. » |
| Urgence légitime | Un vrai délai ou un vrai stock limité | « Il me reste 3 pièces de ce modèle. Je peux vous en réserver une jusqu'à ce soir. » |
| Prochaine étape claire | Le client n'est pas encore prêt | « Je vous envoie la vidéo ce soir et je vous écris demain à 10 h. » |

> [!WARNING] L'urgence doit être vraie. Une fausse rareté (« plus que 2 ! » alors que vous en avez 50) ou une pression excessive peuvent donner une vente aujourd'hui et des remboursements, de mauvais avis et des clients perdus demain.

## 8. Encaisser

- **Donnez un seul geste à faire :** « Envoyez 18 000 FCFA par Wave ou Orange Money au [numéro]. Dès réception, je confirme et je prépare votre colis. »
- **Confirmez par écrit :** produit, quantité, prix, adresse, jour et créneau de livraison.
- **Vérifiez le paiement** dans votre application avant de livrer, et gardez les preuves.
- **Pour le paiement à la livraison :** appelez ou écrivez la veille pour confirmer que le client sera présent et prêt à payer.
- **Remerciez tout de suite :** le client doit sentir qu'il a bien fait.`
  },
  {
   id: "chapitre-5",
   title: "5. La relance & Après la vente",
   order: 5,
   content: `## 9. La relance

La plupart des clients ne disent pas non : ils disent « plus tard », puis oublient. Une relance polie rappelle la conversation.

\`\`\`
CLOSING_RELANCE_TIMELINE
\`\`\`

Une séquence légère : chaque message apporte quelque chose de nouveau. Adaptez les délais à votre produit.

> **J+1 :** Bonjour Awa, avez-vous eu le temps de regarder ? Je vous envoie la vidéo du modèle B en main, c'est plus parlant.

> **J+3 :** Une cliente de Dakar l'a reçu hier : voici sa photo et son avis. Si vous avez une question, je suis là.

> **J+7 :** Bonjour Awa, je clôture les demandes de la semaine. Voulez-vous que je vous réserve le modèle B, ou préférez-vous qu'on en reste là ? Aucun souci dans les deux cas.

### Règles de bonne relance

- **Relancez avec de la valeur** (information, preuve, réponse), pas avec « Alors ? ».
- **Alternez textes et notes vocales courtes.**
- **Après le dernier message, arrêtez poliment.** Insister devient du harcèlement.
- **Notez la raison du blocage :** elle améliore votre offre.

## 10. Après la vente

La vente suivante se prépare après la première.

1. **Jour de la commande :** confirmation et remerciement.
2. **Jour de la livraison :** message de suivi, puis « tout est bon ? »
3. **2 à 3 jours après :** demande d'avis ou de photo, avec accord.
4. **Plus tard :** proposez un produit complémentaire, une offre de réachat, une recommandation à une amie contre un petit avantage.
5. **En cas de problème :** réglez-le vite et avec le sourire : un problème bien résolu fidélise souvent plus qu'une livraison sans histoire.`
  },
  {
   id: "chapitre-6",
   title: "6. Mesurer ses progrès & Éthique et erreurs à éviter",
   order: 6,
   content: `## 11. Mesurer ses progrès

| Indicateur | Comment le noter | Si c'est faible |
|---|---|---|
| Temps de première réponse | Heure du message client, heure de votre réponse | Réponses rapides, notifications, horaires clairs |
| Conversations → offres | Offres envoyées ÷ conversations | Meilleure qualification |
| Offres → ventes | Ventes ÷ offres envoyées | Preuves, prix, objections |
| Relances qui répondent | Réponses ÷ relances | Contenu des relances |
| Objection n° 1 | Carnet des objections | Corrigez l'offre ou la fiche produit |
| Avis après vente | Avis obtenus ÷ clients livrés | Demandez plus tôt et plus simplement |

> [!TIP] Astuce : tenez un petit carnet (papier ou tableur) où vous notez chaque conversation perdue et pourquoi. Après 30 conversations, vous saurez où vous perdez vos clients.

## 12. Éthique et erreurs à éviter

- **Mentir sur le stock, le délai ou la qualité :** la réputation se construit lentement et se perd vite.
- **Presser une personne fragile** ou qui n'a clairement pas les moyens : ce n'est pas du closing, c'est abuser.
- **Ignorer un « non » clair :** remerciez et laissez la porte ouverte.
- **Répondre tard et sans réponse précise :** « Inbox » n'est pas une réponse.
- **Parler plus que le client :** écoutez deux fois plus que vous ne parlez.
- **Baisser le prix trop vite :** proposez d'abord de la valeur (bonus, livraison, paiement en deux fois).
- **Utiliser les numéros des clients sans accord :** respectez leurs données et leur choix.`
  },
  {
   id: "chapitre-7",
   title: "7. S'entraîner avec Claude & Plan de 14 jours",
   order: 7,
   content: `## 13. S'entraîner avec Claude

Claude peut jouer le client, analyser vos conversations et améliorer vos messages. Ne collez jamais de données personnelles : retirez noms et numéros.

### 1. Jeu de rôle

\`\`\`
Joue le rôle d'une cliente de Dakar qui hésite à acheter mon produit :
[produit], [prix] FCFA. Fais-moi 3 objections différentes (prix,
confiance, délai). Réponds comme un vrai client, par messages courts.
Après 10 échanges, note mon closing sur 10, dis ce que j'ai bien fait
et ce que je dois améliorer.
\`\`\`

### 2. Analyse d'une vente perdue

\`\`\`
Voici une conversation WhatsApp où le client a disparu :
[collez sans noms ni numéros].
Dis à quel moment j'ai perdu la vente, quelles questions j'aurais dû
poser et réécris mes 3 messages les plus importants.
\`\`\`

### 3. Bibliothèque de scripts

\`\`\`
Je vends [produit] à [clientèle]. Écris-moi : un message d'accueil,
5 questions de qualification, la présentation de l'offre en 4 phrases,
une réponse à chacune de ces objections : [liste], et une séquence
de relance J+1, J+3, J+7. Ton chaleureux, court, adapté à WhatsApp.
\`\`\`

### 4. Bilan hebdomadaire

\`\`\`
Cette semaine : [nombre] conversations, [nombre] offres,
[nombre] ventes, objections principales : [liste].
Analyse mes chiffres et propose 3 actions pour la semaine prochaine.
\`\`\`

> [!WARNING] Claude peut se tromper et ne connaît pas votre clientèle mieux que vous. Adaptez ses scripts à votre style, relisez-les, et testez sur de vraies conversations.

## 14. Plan de 14 jours

| Jours | Objectif | Actions |
|---|---|---|
| 1–2 | Préparer | Offre claire, preuves, catalogue, moyen de paiement, réponses rapides |
| 3–5 | Écrire vos scripts | Accueil, qualification, présentation, 5 objections, relances (avec Claude si besoin) |
| 6–9 | Pratiquer | 3 jeux de rôle avec Claude ; appliquez la méthode à toutes vos vraies conversations |
| 10–12 | Relancer | Reprenez toutes les conversations en suspens avec la séquence J+1, J+3, J+7 |
| 13–14 | Mesurer | Comptez conversations, offres, ventes, objections ; choisissez 3 améliorations |

Le closing s'apprend par répétition. Chaque conversation, gagnée ou perdue, vous donne un enseignement. Notez-le, ajustez, recommencez.

---

*Guide pédagogique à titre indicatif, fondé sur des pratiques de vente courantes. Aucun résultat n'est garanti. Respectez les règles de protection du consommateur et des données personnelles de votre pays.*`
  }
 ]
};

// =========================================================================
// LIVRE 2 : STRATÉGIES MARKETING DIGITAL (Marketing)
// =========================================================================
const MARKETING_EBOOK: EbookData = {
 title: "Stratégies Marketing Digital",
 slug: "strategies-marketing-digital",
 shortDesc: "Attirez un flux continu de clients qualifiés grâce aux publicités Meta Ads ciblées, au contenu viral et au copywriting persuasif.",
 description: "Le guide stratégique complet pour dominer le marketing sur les réseaux sociaux en Afrique francophone. Apprenez à créer des publicités qui rapportent, maîtriser les algorithmes TikTok et Meta, et bâtir une audience fidèle qui achète vos offres à chaque publication.",
 learnPoints: [
 "Structurer des campagnes Meta Ads rentables dès 2 000 FCFA par jour",
 "La formule de Copywriting AIDA adaptée aux mentalités d'achat africaines",
 "Méthode pour produire des vidéos courtes virales avec un simple smartphone",
 "Tunnel de vente omnicanal : Instagram, Facebook, TikTok et WhatsApp",
 "Calculer son ROI et scaler son budget publicitaire sans gaspiller d'argent"
 ],
 targetAudience: "Commerçants, créateurs, community managers et agences digitales souhaitant générer des prospects et des ventes en continu.",
 price: 5000,
 category: "Marketing",
 coverImage: "/images/cover-marketing-digital.jpg",
 chapters: [
 {
 id: "mkt-1",
 title: "1. Psychologie d'achat et déclencheurs de confiance en Afrique",
 order: 1,
 content: `## Comprendre pourquoi et comment vos clients achètent

Le consommateur en Afrique de l'Ouest est pragmatique, connecté et sollicité en permanence. La méfiance face aux arnaques en ligne est le premier obstacle que votre marketing doit pulvériser.

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│ L'ÉCHELLE DE LA CONFIANCE CLIENT │
│ │
│ [Étape 4: L'Achat & la Recommandation] ◄── Preuve sociale + Wave │
│ [Étape 3: La Clarté de l'Offre] ◄── Prix affiché, pas d'inbox │
│ [Étape 2: L'Autorité & Visibilité] ◄── Vidéos de démonstration │
│ [Étape 1: La Découverte] ◄── Accroche (Hook) 3 secondes│
└──────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 4 déclencheurs émotionnels majeurs :
1. **La preuve sociale locale (Social Proof) :** Montrez des visages, des accents locaux et des avis authentiques enregistrés sur le terrain à Dakar, Abidjan ou Douala.
2. **La transparence des prix :** Arrêtez la pratique toxique du « Prix en inbox ». Les acheteurs sérieux détestent perdre du temps. Affichez clairement vos tarifs et la valeur offerte.
3. **La garantie sans risque :** « Satisfait ou échangé sous 48h », « Vérifiez votre colis avant de payer ».
4. **L'urgence légitime :** « Seulement 15 exemplaires reçus dans ce container ».

> **Conseil Pro du Terrain :** Une capture d'écran d'un client disant merci sur WhatsApp avec un message vocal est 10x plus convaincante qu'un graphique de designer professionnel.`
 },
 {
 id: "mkt-2",
 title: "2. Meta Ads (Facebook & Instagram) : Configuration et ciblage rentable",
 order: 2,
 content: `## Dominer la publicité Facebook avec un budget maîtrisé

Vous n'avez pas besoin de millions pour commencer sur Meta Ads. Avec 3 000 à 5 000 FCFA par jour, vous pouvez toucher entre 3 000 et 8 000 personnes ultra-ciblées chaque jour.

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│ STRUCTURE D'UNE CAMPAGNE CIBLÉE │
│ │
│ [CAMPAGNE : Ventes / WhatsApp CBO] │
│ │ │
│ ├──► [Ensemble 1 : Ciblage Large (Sénégal, 22-45 ans)] │
│ │ ├── Créatif A (Vidéo démonstration) │
│ │ └── Créatif B (Carrousel témoignages) │
│ │ │
│ └──► [Ensemble 2 : Intérêts (E-commerce, Mode, Shopping)] │
│ ├── Créatif A │
│ └── Créatif C (Offre Promo limitée) │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

### Le protocole de test publicitaire en 72 heures :
- **Budget initial :** 3 000 FCFA / jour par ensemble de publicités.
- **Objectif de campagne :** Choisissez "Prospects" avec destination WhatsApp ou "Ventes" avec Pixel si vous avez une boutique.
- **Règle d'or des 3 jours :** Laissez tourner la campagne au moins 72 heures sans modifier les paramètres pour permettre à l'algorithme d'optimiser la diffusion.

| Métrique clé | Objectif sain | Action corrective si hors cible |
|---|---|---|
| Coût par Clic (CPC) | < 35 FCFA | Améliorer le visuel et l'accroche |
| Taux de Clic (CTR) | > 2.5% | Tester une vidéo plus dynamique |
| Coût par Message WhatsApp | < 250 FCFA | Clarifier l'offre et l'avantage prix |
| Taux de conversion final | > 15% des messages | Former les réponses de closing |

> **Attention : Erreur fréquente à éviter :** Ne cliquez jamais sur le bouton bleu « Booster la publication » depuis votre page Facebook. Utilisez toujours le **Gestionnaire de Publicités (Meta Ads Manager)** sur ordinateur pour avoir un contrôle total sur vos audiences et vos placements.`
 },
 {
 id: "mkt-3",
 title: "3. La formule Copywriting AIDA appliquée à l'Afrique francophone",
 order: 3,
 content: `## L'art d'écrire des textes qui vendent

Le copywriting n'est pas de la belle littérature : c'est de la psychologie appliquée à la persuasion commerciale.

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│ LE MODÈLE A.I.D.A EN PRATIQUE │
│ │
│ A - Attention : Arrêter le scroll en 2 secondes │
│ I - Intérêt : Révéler le secret ou la solution au problème │
│ D - Désir : Faire visualiser le bénéfice concret dans sa vie │
│ A - Action : Dire exactement quoi faire (Cliquer, Commander) │
└──────────────────────────────────────────────────────────────────────┘
\`\`\`

### Exemple réel d'un texte d'annonce ultra-performant :

*(Attention)*
Fatigué de perdre des clients parce qu'ils n'ont pas de monnaie à la livraison ?

*(Intérêt)*
Plus de 70% des abandons de commande à Dakar se produisent au moment où le client et le livreur cherchent la monnaie exacte. Avec la nouvelle passerelle Wave Checkout sur votre boutique, vos clients paient en un clic avec zéro friction.

*(Désir)*
Imaginez recevoir vos notifications d'encaissement Wave directement sur votre téléphone pendant que vous dormez, et ne confier aux livreurs que des colis déjà payés à 100%.

*(Action)*
Cliquez sur le bouton ci-dessous pour commander votre exemplaire et installer ce système avant ce soir ! Stock limité.

> **Conseil Pro du Terrain :** Rédigez toujours vos textes comme si vous parliez à un ami assis en face de vous autour d'un thé. Bannissez les expressions ampoulées et le jargon abstrait.`
 },
 {
 id: "mkt-4",
 title: "4. Création de contenu viral TikTok & Reels sans équipement de cinéma",
 order: 4,
 content: `## Générer 50 000 vues organiques par semaine gratuitement

L'algorithme de TikTok et des Reels Instagram est la plus formidable opportunité de trafic gratuit de la décennie. Il ne juge pas votre notoriété passée, mais l'attention que retient chaque seconde de votre vidéo.

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│ ANATOMIE D'UNE VIDÉO COURTE VIRALE (30s) │
│ │
│ [00s - 03s] : LE HOOK (Visuel inattendu / Question provocante) │
│ [03s - 15s] : LA DÉMONSTRATION DU PROBLÈME ET DE LA SOLUTION │
│ [15s - 25s] : LES RÉSULTATS VISIBLES EN DIRECT │
│ [25s - 30s] : CALL TO ACTION CLAIR ("Lien en bio pour commander") │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 3 types de vidéos qui explosent les statistiques :
1. **Le "Avant / Après" sans filtre :** Montrez le désordre ou la difficulté, puis la transformation immédiate grâce au produit.
2. **Le "Behind the Scenes" (Coulisses de préparation des commandes) :** Emballez un colis, écrivez le mot de remerciement pour un client de Thiès ou Cocody. Ce format humanise votre marque et rassure sur votre existence physique.
3. **Le déballage / Test d'endurance :** Montrez la solidité et l'authenticité de l'article en condition réelle.

> **À retenir impérativement :** Les 3 premières secondes déterminent 80% du succès d'une vidéo. Si rien de surprenant ou d'intéressant ne se produit pendant les 3 premiers battements de cœur, l'internaute aura déjà balayé vers la vidéo suivante.`
 },
 {
 id: "mkt-5",
 title: "5. Métriques, KPIs et Passage à l'échelle (Scaling vertical et horizontal)",
 order: 5,
 content: `## Passer de 10 à 100 commandes par jour sans exploser en vol

Quand une campagne publicitaire fonctionne, comment augmenter votre budget sans détruire sa rentabilité ?

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│ SCALING HORIZONTAL VS VERTICAL │
│ │
│ Scaling Vertical : Augmenter le budget de +20% toutes les 48h │
│ Scaling Horizontal : Dupliquer l'annonce sur de nouvelles villes, │
│ nouvelles tranches d'âge ou pays voisins │
│ (Ex: Sénégal ──► Côte d'Ivoire ──► Cameroun) │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

### La règle mathématique du ROAS (Return On Ad Spend) :
Si vous dépensez 10 000 FCFA en publicité et générez 5 ventes à 10 000 FCFA de marge brute (soit 50 000 FCFA), votre ROAS est de :
**ROAS = 50 000 FCFA ÷ 10 000 FCFA = 5,0**
Tout ROAS supérieur à 2.5 en e-commerce de détail vous permet de réinvestir massivement vos bénéfices dans la croissance.

### Plan de déploiement immédiat :
- Définissez votre client idéal (Persona).
- Tournez 3 variations de vidéos avec des accroches différentes.
- Lancez un test A/B à 3 000 FCFA/jour.
- Conservez la version gagnante et augmentez de 20% tous les 2 jours !`
 }
 ]
};

// =========================================================================
// LIVRE 4 : PRODUITS À TESTER (Dropshipping Sénégal & Alibaba → Dakar)
// =========================================================================
const DEV_EBOOK: EbookData = {
 title: "Produits à tester : dropshipping depuis le Sénégal et 50 produits Alibaba → Dakar",
 slug: "developpeur-web-full-stack",
 shortDesc: "Deux listes pratiques : 23 produits sénégalais à vendre sans gros stock et 50 produits légers et peu courants à commander en Chine pour Dakar.",
 description: "Deux listes pratiques conçues pour le terrain : des produits sénégalais à vendre en dropshipping local ou vers la diaspora sans gros stock, et 50 produits légers (< 500 g) et peu courants à commander sur Alibaba pour le marché de Dakar, avec méthode de validation, calcul du prix de revient et prompt Claude prêt à copier.",
 learnPoints: [
  "23 produits sénégalais à vendre en dropshipping (Dakar & diaspora) sans immobiliser de stock",
  "50 produits légers (< 500 g) et peu courants à sourcer sur Alibaba avec mots-clés en anglais",
  "Méthode en 5 étapes pour valider un produit avant d'acheter en gros",
  "Calcul exact du prix de revient (Alibaba, transport, douane, transitaire, livraison, pub)",
  "Prompt Claude prêt à copier pour calculer votre marge et rédiger 3 annonces TikTok + WhatsApp"
 ],
 targetAudience: "E-commerçants au Sénégal, débutants en dropshipping local, importateurs à petit budget et vendeurs ciblant Dakar et la diaspora.",
 price: 5000,
 category: "Sourcing & Import",
 coverImage: "/images/cover-produits-senegal-alibaba.jpg",
 chapters: [
  {
   id: "prod-1",
   title: "1. Introduction & critères de sélection",
   order: 1,
   content: `## Deux listes pratiques pour passer à l'action

Ce guide rassemble deux répertoires opérationnels pensés pour démarrer ou élargir votre catalogue au Sénégal :

1. **Partie 1 — 23 produits sénégalais à vendre en dropshipping :** vous vendez en ligne sans gros stock ; un producteur ou un artisan local prépare la commande et un livreur l'achemine à Dakar ou vers la diaspora.
2. **Partie 2 — 50 produits légers (< 500 g) et peu courants sur Alibaba :** sélectionnés pour leur lien direct avec le quotidien dakarois et leur faible encombrement au transport.

> [!NOTE] Lisez ceci d'abord. Personne ne peut garantir qu'un produit est « gagnant » avant de l'avoir testé. Ces listes sont des **candidats à valider**, choisis selon trois critères : poids faible, utilité réelle à Dakar (chaleur, soleil, tradition, coupures de courant, religion, cheveux, voyage) et risque de transport limité. Les poids sont approximatifs : confirmez-les toujours avec le fournisseur.

### Comment utiliser ce guide efficacement

- **Si vous démarrez avec zéro stock :** commencez par la Partie 1 avec des producteurs et coopératives locales (alimentation, soins naturels, artisanat, mode).
- **Si vous voulez importer en petite quantité :** piochez 2 à 3 idées de niche dans la Partie 2, vérifiez la demande à Dakar avant de commander, puis testez avec un échantillon ou un petit lot.
- **Avant toute commande en gros :** appliquez la méthode de validation en 5 étapes et le calcul complet du prix de revient présentés dans le dernier chapitre.`
  },
  {
   id: "prod-2",
   title: "2. Partie 1 : 23 produits sénégalais en dropshipping",
   order: 2,
   content: `## Partie 1. Produits sénégalais à vendre en dropshipping

Ici, le produit vient du Sénégal : vous vendez en ligne, un producteur ou un artisan prépare la commande, et un livreur la remet au client.

**Cibles :** clients de Dakar et diaspora (France, Europe, États-Unis, etc.).

### Alimentaire et boissons (#1 à #9)

| # | Produit | Pour qui | Où chercher le fournisseur | Points d'attention |
|---|---|---|---|---|
| 1 | Moringa en poudre ou feuilles séchées | Bien-être, diaspora | Coopératives de productrices, marchés de Dakar | Hygiène, étiquetage, aucune promesse médicale |
| 2 | Hibiscus séché (bissap) en sachets | Boisson locale, diaspora | Transformatrices, marchés | Emballage hermétique, date limite |
| 3 | Poudre de pain de singe (bouye) | Jus, bouillies, bien-être | Marchés, coopératives | Mêmes précautions, conservation au sec |
| 4 | Mélanges d'épices pour thiéboudienne, yassa | Diaspora, cadeaux | Transformatrices, marchés | Étiquette claire, allergènes |
| 5 | Noix de cajou de Casamance | Snack, cadeaux | Producteurs et groupements de Casamance | Qualité constante, emballage |
| 6 | Fonio | Cuisine saine, diaspora | Producteurs, groupements | Règles d'import du pays de destination |
| 7 | Sel rose du lac Retba | Cuisine, cadeaux | Producteurs du Lac Rose | Étiquetage, emballage étanche |
| 8 | Café Touba en sachets | Diaspora, cadeaux | Torréfacteurs locaux | Goût constant, règles d'export alimentaire |
| 9 | Miel local | Cadeaux, bien-être | Apiculteurs | Traçabilité, méfiez-vous des mélanges |

### Soins et parfums (#10 à #13)

| # | Produit | Pour qui | Où chercher le fournisseur | Points d'attention |
|---|---|---|---|---|
| 10 | Beurre de karité | Peau et cheveux | Coopératives de femmes | Pureté vérifiable, autorisations cosmétiques |
| 11 | Huile de baobab | Peau et cheveux | Coopératives | Même vérification, flacons qui ne fuient pas |
| 12 | Savons artisanaux naturels | Cadeaux, soins | Savonniers locaux | Composition écrite, autorisations |
| 13 | Thiouraye (encens traditionnel) | Culture, cadeaux, diaspora | Fabricantes locales, marchés | Odeur forte : emballage hermétique |

### Mode et artisanat (#14 à #18)

| # | Produit | Pour qui | Où chercher le fournisseur | Points d'attention |
|---|---|---|---|---|
| 14 | Tenues sur mesure (boubous, ensembles en wax ou bazin) | Cérémonies, diaspora | Couturiers de Dakar | Prise de mesures, délais, retouches |
| 15 | Tissus teints à la main, wax en coupons | Couture, décoration | Marché HLM, ateliers de teinture | Tenue des couleurs au lavage |
| 16 | Sacs et sandales en cuir | Mode, cadeaux | Artisans, village artisanal de Soumbédioune | Finition, vraies photos |
| 17 | Bijoux en argent, perles, filigrane | Cadeaux, mariages | Bijoutiers et artisans | Pureté du métal, poinçon |
| 18 | Perles de taille (bin-bin) artisanales | Tradition, cadeaux | Fabricantes locales | Longueur, solidité du fil |

### Maison et culture (#19 à #23)

| # | Produit | Pour qui | Où chercher le fournisseur | Points d'attention |
|---|---|---|---|---|
| 19 | Paniers en raphia ou paille tressée | Décoration, rangement | Artisans | Volume important : calculez la livraison |
| 20 | Peintures sous verre, tableaux | Décoration, cadeaux | Artistes de Dakar | Fragile : emballage rigide |
| 21 | Instruments (djembé, tama, kora) | Musiciens, diaspora | Facteurs d'instruments | Lourd et fragile : expédition spécialisée |
| 22 | T-shirts, sacs et mugs avec expressions en wolof | Jeunes, diaspora, cadeaux | Imprimeurs locaux, impression à la demande | Droits sur les textes et images |
| 23 | Kit attaya (thé) en coffret compact | Diaspora, cadeaux | Commerçants locaux | Poids, verres fragiles |

### Comment travailler avec un fournisseur local

1. Commandez d'abord un **échantillon** et jugez qualité, emballage et délai.
2. Obtenez par écrit (message WhatsApp suffit) le prix, le délai de préparation et la quantité disponible.
3. Prenez vos propres photos et vidéos du produit : ce sont elles qui vendent.
4. Choisissez un livreur fiable pour Dakar et un transporteur pour l'international.
5. Pour la nourriture et les soins, renseignez-vous sur les **autorisations** au Sénégal et sur les règles d'entrée dans le pays du client.

> [!WARNING] Évitez les produits éclaircissants pour la peau et toute promesse de guérison : ils sont très encadrés et peuvent faire fermer vos comptes publicitaires.`
  },
  {
   id: "prod-3",
   title: "3. Partie 2 : Alibaba → Dakar — Cheveux, Bijoux & Foi (#1 à #22)",
   order: 3,
   content: `## Partie 2. 50 produits légers et peu courants : Alibaba → Dakar

Produits de moins de **500 g**, choisis pour leur lien avec la vie à Dakar. Beaucoup sont des produits « de niche » : moins visibles sur les gros sites que les gadgets du moment, mais à vérifier avant d'acheter.

> [!NOTE] Alibaba, c'est du gros. La plupart des fournisseurs demandent une quantité minimale. Pour tester, demandez un échantillon, puis une petite commande groupée que vous stockez à Dakar et vendez avec livraison locale. Mot-clé en anglais à taper dans la barre de recherche d'Alibaba : colonne « Mots-clés Alibaba ».

> [!WARNING] Mention « Pile / Batterie » : plusieurs références (#19, #38, #39, #50) contiennent une pile ou une batterie. Demandez impérativement à votre transitaire si le transport est possible et à quel tarif avant de commander.

### Cheveux et beauté (#1 à #8)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 1 | Peigne démêleur à dents larges | Soin des cheveux crépus et naturels | 50 | wide tooth detangling comb afro | — |
| 2 | Brosse à bords double face | Finitions de coiffures et tresses | 30 | edge brush double sided | Tester l'échantillon |
| 3 | Bouteille applicatrice à bec peigne | Huiles et soins du cuir chevelu | 60 | root comb applicator bottle | Vendre vide, sans liquide |
| 4 | Boucles sans chaleur (ruban) | Coiffure sans fer, avant les fêtes | 100 | heatless curling rod headband | — |
| 5 | Anneaux pour locks et tresses | Coiffures personnalisées | 10 | loc jewelry hair cuffs | Alliage non ternissant |
| 6 | Perles à tresses pour enfants | Fêtes, rentrée | 50 | hair beads braids kids | Petites pièces |
| 7 | Masseur de cuir chevelu en silicone | Shampoing, soins | 40 | silicone scalp massager | — |
| 8 | Bandeau spa en microfibre | Routine visage, maquillage | 40 | spa headband makeup | — |

### Bijoux et mode (#9 à #15)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 9 | Kit de perles de taille (bin-bin) à enfiler | Tradition forte, loisirs créatifs, cadeaux | 100 | waist beads kit seed beads | Solidité du fil |
| 10 | Collier prénom en arabe personnalisé | Cadeaux, mariages, baptêmes | 15 | custom Arabic name necklace stainless | Orthographe et quantité minimale |
| 11 | Bagues et bracelets ajustables en inox | Bijoux qui ne noircissent pas | 5 | adjustable stainless steel ring | Pas de faux logos de marque |
| 12 | Kit de bracelets à lettres | Cadeaux, animations | 120 | letter beads bracelet kit | Petites pièces |
| 13 | Foulard carré en satin | Cheveux, mode, cadeaux | 60 | square satin scarf | — |
| 14 | Porte-cartes en aluminium anti-RFID | Cadeau pratique | 30 | RFID blocking card holder aluminum | — |
| 15 | Pochette banane antivol | Marchés, transports, voyages | 100 | anti theft waist bag | — |

### Foi et culture (#16 à #22)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 16 | Tapis de prière de voyage pliable | Travail, voyage | 200 | foldable travel prayer mat pouch | Taille et épaisseur |
| 17 | Boussole Qibla de poche | Voyage, hôtels | 50 | qibla compass pocket | — |
| 18 | Chapelet de 99 perles | Ramadan, Tabaski, cadeaux | 60 | tasbih 99 beads | — |
| 19 | Anneau compteur de chapelet numérique | Pratique et discret | 20 | smart tasbih ring counter | [Batterie] Pile bouton |
| 20 | Aimants pour hijab | Voile sans épingles | 20 | hijab magnet pins | — |
| 21 | Planche d'écriture arabe réutilisable | Apprentissage des enfants | 150 | reusable Arabic writing board kids | Vérifier les textes |
| 22 | Douchette hygiénique en inox | Usage quotidien d'hygiène | 300 | handheld bidet sprayer stainless | Tester étanchéité et raccords |`
  },
  {
   id: "prod-4",
   title: "4. Partie 2 (suite) : Chaleur, Maison, Électricité & Emballage (#23 à #50)",
   order: 4,
   content: `## Suite des 50 produits Alibaba → Dakar (#23 à #50)

### Chaleur et soleil (#23 à #28)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 23 | Serviette rafraîchissante | Chaleur, sport, chantiers | 60 | cooling towel | — |
| 24 | Manches anti-UV | Deux-roues, plein soleil | 40 | UV protection arm sleeves | — |
| 25 | Mini parapluie anti-UV pliable | Soleil et saison des pluies | 250 | UV mini umbrella foldable | Qualité variable |
| 26 | Couvre-plats pliable anti-mouches | Repas, cuisine, extérieur | 80 | mesh food cover foldable | — |
| 27 | Moules à glaçons en silicone avec couvercle | Boissons fraîches | 150 | silicone ice cube tray lid | Qualité alimentaire |
| 28 | Sac étanche 5 L | Plage, pirogue, pluie | 80 | dry bag waterproof 5L | — |

### Maison et cuisine (#29 à #33)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 29 | Hachoir manuel à ficelle | Oignons, piment, ail sans électricité | 200 | manual food chopper pull string | — |
| 30 | Couvercles en silicone extensibles | Plats et restes par forte chaleur | 100 | silicone stretch lids set | Qualité alimentaire |
| 31 | Écailleur à poisson | Cuisine du poisson | 80 | fish scale remover scraper | Emballage sécurisé |
| 32 | Passoire pliable en silicone | Petits espaces, voyage | 150 | collapsible silicone colander | — |
| 33 | Entonnoir pliable en silicone | Huiles, épices, bouteilles | 40 | foldable silicone funnel | — |

### Électricité et connectivité (#34 à #39)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 34 | Adaptateur de voyage universel | Voyageurs, diaspora | 100 | universal travel adapter | Choisir des produits certifiés |
| 35 | Support de téléphone pliable en aluminium | Vidéos, TikTok, bureau | 100 | foldable aluminum phone stand | — |
| 36 | Support voiture magnétique à grille d'aération | Taxis, VTC, livreurs | 60 | magnetic phone car mount vent | Aimant : emballer à part |
| 37 | Pochette de téléphone étanche IPX8 | Pluie, plage | 40 | waterproof phone pouch IPX8 | — |
| 38 | Lampe LED solaire rechargeable | Coupures de courant | 150 | solar rechargeable LED lamp | [Batterie] Batterie |
| 39 | Mini ventilateur de cou ou de poche | Chaleur | 250 | portable neck fan USB | [Batterie] Batterie |

### Bébé et enfants (#40 à #44)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 40 | Bavoir en silicone à poche | Repas de bébé | 60 | silicone baby bib pocket | Qualité alimentaire |
| 41 | Alimentateur à fruits en silicone | Diversification alimentaire | 30 | silicone baby fruit feeder | Qualité alimentaire |
| 42 | Attache-tétine | Cadeaux de naissance | 20 | pacifier clip silicone | Pas de cordon long |
| 43 | Brosse à dents doigt en silicone | Hygiène de bébé | 20 | silicone finger toothbrush baby | Qualité alimentaire |
| 44 | Mini moustiquaire pliable poussette ou berceau | Moustiques | 200 | portable stroller mosquito net | — |

### Bureau, école et voyage (#45 à #47)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 45 | Cahier d'écriture rainuré réutilisable | Enfants, écriture, calligraphie | 150 | reusable handwriting practice copybook | Vérifier la langue |
| 46 | Lanières (lanyards) personnalisées | Événements, écoles, associations | 20 | custom lanyard printed logo | Quantité minimale, délai |
| 47 | Étiquettes de bagage en silicone | Voyageurs, pèlerins, diaspora | 20 | silicone luggage tag | — |

### Emballage pour petits entrepreneurs (#48 à #50)

| # | Produit | Pourquoi à Dakar | Poids (g) | Mots-clés Alibaba | Alerte |
|---|---|---|---|---|---|
| 48 | Sachets zip kraft avec fenêtre | Épices, poudres, produits naturels | 5 par sachet | kraft stand up pouch zip window | Matériau alimentaire requis |
| 49 | Étiquettes adhésives personnalisées en rouleau | Produits locaux, soins maison | 100 par rouleau | custom adhesive label roll | Mentions légales à ajouter |
| 50 | Balance de précision 0,01 g | Bijoux, épices, mélanges | 150 | digital pocket scale 0.01g | [Batterie] Piles AAA |

> [!WARNING] Rappel transport : chaque référence marquée **[Batterie]** (#19, #38, #39, #50) contient une pile ou une batterie. Demandez à votre transitaire si l'expédition est autorisée et à quel tarif (aérien vs maritime) avant de passer commande.`
  },
  {
   id: "prod-5",
   title: "5. Validation, prix de revient, prompt Claude & risques à éviter",
   order: 5,
   content: `## Comment valider un produit avant d'acheter en gros

1. **Demande réelle :** regardez si des vendeurs le proposent déjà à Dakar (Facebook, TikTok, Marketplace, sites locaux) et à quel prix. Consultez aussi la Bibliothèque publicitaire de Meta et le Creative Center de TikTok pour voir qui fait de la publicité dessus.
2. **Test sans stock :** publiez des photos ou vidéos et comptez les messages « prix ? » avant de commander.
3. **Échantillon :** commandez 1 à 3 pièces, testez la qualité et filmez-les.
4. **Petit lot :** commandez la plus petite quantité possible, et vendez à vos premiers clients.
5. **Décision :** si le produit se vend sans que vous baissiez trop le prix, recommandez ; sinon passez au suivant.

## Calculer le prix de revient

> [!NOTE] Formule complète : Prix de revient = prix Alibaba + transport vers Dakar + frais à l'arrivée (douane, transitaire) + livraison au client + frais de paiement + publicité. Règle de départ souvent utilisée : un prix de vente d'au moins 2 à 3 fois le prix de revient. Elle ne remplace pas un calcul précis avec vos vrais chiffres.

### Prompt prêt à copier — Avec Claude

\`\`\`
Voici un produit : [nom].
Prix Alibaba : [ ] pour [quantité].
Transport estimé : [ ].
Frais à l'arrivée : [ ].
Livraison locale : [ ].

Calcule mon prix de revient par pièce, le prix de vente minimum pour 40 %
de marge et le nombre de ventes pour couvrir ma commande.
Puis écris 3 annonces TikTok et un message WhatsApp pour le vendre à Dakar.
\`\`\`

## Produits et risques à éviter

- **Contrefaçons et marques :** pas de faux logos, de fausses montres ou de faux vêtements de marque : saisies, litiges, comptes bloqués.
- **Santé et cosmétiques :** pas de crèmes, compléments ou appareils médicaux sans autorisation. Les outils (peignes, brosses) sont plus simples que les produits appliqués sur la peau.
- **Batteries et aimants :** règles de transport strictes, surtout par avion : demandez avant.
- **Appareils électriques sans certificat :** risque de surchauffe et de retours. Demandez les certificats.
- **Produits trop vus :** si tout le monde le vend déjà, la bataille se fait sur le prix : changez de produit ou de variante.
- **Produits fragiles ou lourds :** la casse et le transport mangent la marge.

> [!WARNING] Les prix, les règles de douane et les tendances changent. Vérifiez auprès de votre transitaire et des autorités compétentes avant chaque importation.

---

*Listes établies à partir de critères généraux de sélection de produits (légèreté, faible risque réglementaire, utilité locale) et de guides de produits 2026 consultés en ligne. Les produits sont des idées à tester, pas des promesses de ventes.*`
  }
 ]
};


export const FACEBOOK_ADS_EBOOK: EbookData = {
  "id": "prod-fb-ads-mastery-2026",
  "slug": "publicite-facebook-ads-de-a-a-z",
  "title": "Lancer sa campagne Facebook Ads, pas à pas",
  "subtitle": "Exemple complet : vendre des écouteurs sans fil à Dakar avec Meta Ads Manager",
  "category": "Marketing & Ads",
  "coverImage": "/images/cover-facebook-ads.jpg",
  "price": 5000,
  "badge": "Nouveau",
  "shortDesc": "Méthode pas à pas illustrée pour lancer votre campagne Meta Ads à Dakar : calcul du CPA maximal, prérequis, création, budget, ciblage Advantage+, annonce, publication et analyse des résultats.",
  "fullDesc": "Un guide pratique et clair qui vous accompagne de zéro jusqu'à la publication et l'analyse de votre première campagne rentable avec Meta Ads Manager. À travers un exemple concret — vendre des écouteurs sans fil à Dakar — vous apprendrez à calculer votre marge et votre CPA maximal, préparer vos prérequis, configurer votre campagne Ventes, choisir entre site web et WhatsApp, paramétrer l'audience, rédiger une annonce conforme et analyser vos indicateurs (CTR, CPC, CPA, ROAS) sans perdre d'argent.",
  "learnPoints": [
    "Calculer sa marge disponible, son CPA maximal et son ROAS minimal avant de dépenser un franc",
    "Vérifier tous les prérequis techniques (page pro, compte pub, moyen de paiement, lien de commande)",
    "Configurer la campagne Meta Ads avec l'objectif Ventes et une nomenclature claire",
    "Choisir entre Site web (Shopify) et WhatsApp / Messagerie et planifier un budget de test réaliste",
    "Paramétrer le ciblage géographique à Dakar, l'audience large Advantage+ et les emplacements",
    "Rédiger et structurer une annonce vidéo/image percutante et conforme aux règles Meta",
    "Appliquer la dernière vérification avant de publier et éviter de casser la phase d'apprentissage",
    "Analyser les résultats après 3 à 5 jours avec cas pratique chiffré, diagnostic et checklist finale"
  ],
  "targetAudience": [
    "E-commerçants au Sénégal et en Afrique de l'Ouest voulant lancer des campagnes Meta Ads rentables",
    "Vendeurs sur Shopify ou WhatsApp souhaitant maîtriser le Gestionnaire de Publicités étape par étape",
    "Débutants cherchant une méthode concrète, chiffrée et sans jargon inutile",
    "Commerçants voulant éviter les refus publicitaires et le gaspillage de budget"
  ],
  "chapters": [
    {
      "id": "fb-chap-1",
      "order": 1,
      "title": "Introduction — Lancer sa campagne Facebook Ads, pas à pas",
      "content": "## Lancer sa campagne Facebook Ads, pas à pas\n\n**Exemple complet : vendre des écouteurs sans fil à Dakar avec Meta Ads Manager.**\n\nLes schémas de ce livre sont des illustrations simplifiées de l'interface, pas des captures officielles : Meta modifie souvent ses menus. Si un libellé diffère, choisissez l'option qui a le même rôle. Tous les chiffres sont fictifs.\n\n> **À lire avant tout.** Présentez toujours votre produit sous sa **vraie identité**. Des écouteurs « compatibles » ou d'une autre marque ne doivent jamais être vendus sous le nom d'une marque connue (comme AirPods) : c'est une contrefaçon, Meta refuse ces annonces et peut suspendre votre compte publicitaire. Les chiffres de ce livre (achat 5 000 F, vente 10 000 F) sont fictifs et servent à l'exercice."
    },
    {
      "id": "fb-chap-2",
      "order": 2,
      "title": "1. Préparer l'offre et les chiffres",
      "content": "## 1. Préparer l'offre et les chiffres\n\nAvant d'ouvrir Ads Manager, calculez ce que vous pouvez dépenser pour obtenir une vente sans perdre d'argent.\n\n| Élément | Exemple (FCFA) |\n|---|---|\n| Prix de vente | 10 000 |\n| Prix d'achat | - 5 000 |\n| Livraison à votre charge | - 1 000 |\n| **Marge disponible pour la publicité (CPA maximal)** | **4 000** |\n\nSi une vente vous coûte plus de 4 000 FCFA en publicité, vous perdez de l'argent. Le **ROAS minimal** pour être à l'équilibre est donc **10 000 ÷ 4 000 = 2,5**.\n\n### Ce qu'il faut préparer avant de lancer\n- **4 à 6 photos nettes** du produit\n- **Une vidéo de 15 à 30 secondes** (déballage, connexion Bluetooth, utilisation)\n- **Un prix clair** et des **conditions de garantie** explicites\n- **Un moyen de commander** fonctionnel (boutique Shopify ou WhatsApp)"
    },
    {
      "id": "fb-chap-3",
      "order": 3,
      "title": "2. Vérifier les prérequis",
      "content": "## 2. Vérifier les prérequis\n\nAvant de créer votre première publicité dans Meta Ads Manager, assurez-vous de disposer de tous les éléments indispensables ci-dessous.\n\n```\nFB_PAS_A_PAS_SCHEMA_1\n```\n\n> **À retenir :** Testez toujours votre lien de commande (fiche produit Shopify ou lien WhatsApp) depuis un téléphone avant de continuer."
    },
    {
      "id": "fb-chap-4",
      "order": 4,
      "title": "3. Créer la campagne",
      "content": "## 3. Créer la campagne\n\nOuvrez Meta Ads Manager, cliquez sur « **Créer** », puis choisissez l'objectif.\n\n```\nFB_PAS_A_PAS_SCHEMA_2\n```\n\n### Étapes à suivre\n1. Cliquez sur **Créer**.\n2. Choisissez l'objectif **Ventes**.\n3. Nommez clairement la campagne.\n\nLe nom vous servira à retrouver vos tests. Ajoutez la date ou la version, par exemple : **`ECOUTEURS - VENTES DAKAR - V1`**."
    },
    {
      "id": "fb-chap-5",
      "order": 5,
      "title": "4. Régler l'ensemble de publicités : destination et budget",
      "content": "## 4. Régler l'ensemble de publicités : destination et budget\n\n```\nFB_PAS_A_PAS_SCHEMA_3\n```\n\n### Projection du budget de test\n\n| Budget quotidien | 3 jours | 5 jours | 7 jours |\n|---|---|---|---|\n| 2 000 F | 6 000 F | 10 000 F | 14 000 F |\n| 3 000 F | 9 000 F | 15 000 F | 21 000 F |\n| 1 000 F | 3 000 F | 5 000 F | 7 000 F |\n\n### Quel canal choisir ?\n- **Site web :** suivi précis des ventes et du pixel, idéal avec Shopify.\n- **WhatsApp ou messagerie :** contact direct qui rassure sur un produit à prix élevé, mais il faut répondre en quelques minutes.\n\n> Un échange WhatsApp rapide avec photos et vidéo aide souvent à rassurer l’acheteur. Choisissez le canal que vous pouvez réellement suivre.\n\nLe budget est un montant à risque : prenez une somme que vous pouvez vous permettre de perdre. Le dépensé réel dépend de la diffusion."
    },
    {
      "id": "fb-chap-6",
      "order": 6,
      "title": "5. Définir l'audience et les emplacements",
      "content": "## 5. Définir l'audience et les emplacements\n\n```\nFB_PAS_A_PAS_SCHEMA_4\n```\n\nCe ciblage est un point de départ, pas une promesse de ventes. Testez d'abord une **audience large (Advantage+)** : aujourd'hui, le visuel et l'accroche pèsent souvent plus que 15 centres d'intérêt.\n\nGardez les **emplacements automatiques** si vous débutez, pour laisser Meta répartir le budget là où les résultats sont les meilleurs."
    },
    {
      "id": "fb-chap-7",
      "order": 7,
      "title": "6. Créer l'annonce",
      "content": "## 6. Créer l'annonce\n\nC'est l'étape qui décide si les gens s'arrêtent ou continuent de défiler.\n\n```\nFB_PAS_A_PAS_SCHEMA_5\n```\n\n### Exemple de texte\n\n```\nDécouvrez une nouvelle expérience sonore !\nVous cherchez des écouteurs élégants et pratiques au quotidien ? Profitez de l'offre à 10 000 FCFA.\n\n- Design moderne\n- Connexion Bluetooth\n- Format compact\n- Livraison disponible à Dakar\n\nCommandez maintenant !\n```\n\n### Règles essentielles pour votre annonce\n- **N'écrivez que ce que vous pouvez prouver :** pas de fausse promotion ni de « stock presque épuisé » inventé. Indiquez la vraie marque et la vraie nature du produit.\n- **Montrez le produit en situation**, filmé au téléphone dans une bonne lumière.\n- **Les trois premières secondes de la vidéo décident de tout :** montrez tout de suite le produit ou la connexion Bluetooth.\n- **Préparez deux ou trois variantes de visuel** pour comparer."
    },
    {
      "id": "fb-chap-8",
      "order": 8,
      "title": "7. Vérifier et publier",
      "content": "## 7. Vérifier et publier\n\nPassez en revue chaque élément de sécurité et d'expérience client avant de lancer la diffusion.\n\n```\nFB_PAS_A_PAS_SCHEMA_6\n```\n\nAprès le clic sur **Publier**, Meta examine l'annonce, ce qui prend de quelques minutes à quelques heures.\n\n- Si elle est refusée, **lisez le motif et corrigez avant de relancer**.\n- **Ne modifiez pas la campagne toutes les heures :** chaque grosse modification relance la phase d'apprentissage."
    },
    {
      "id": "fb-chap-9",
      "order": 9,
      "title": "8. Analyser les résultats, cas pratique et checklist",
      "content": "## 8. Analyser les résultats\n\nAttendez **3 à 5 jours** avant de décider, sauf anomalie évidente.\n\n| Indicateur | Signification | À surveiller |\n|---|---|---|\n| **Impressions · Portée** | Affichages · personnes touchées | La diffusion démarre-t-elle ? |\n| **CTR** | Taux de clics | Visuel et accroche |\n| **CPC** | Coût par clic | Prix d'un visiteur |\n| **CPA** | Coût par vente | **À garder sous 4 000 F** |\n| **ROAS** | Chiffre d'affaires ÷ dépense pub | **À garder au-dessus de 2,5** |\n\n---\n\n### Cas pratique (chiffres fictifs)\n\n| Poste | FCFA |\n|---|---|\n| Budget dépensé (2 000 F × 7 jours) | 14 000 |\n| Ventes : 3 × 10 000 | 30 000 |\n| Achat des produits : 3 × 5 000 | - 15 000 |\n| Publicité | - 14 000 |\n| Solde avant livraison | 1 000 |\n| Livraison : 3 × 1 000 | - 3 000 |\n| **Résultat réel** | **- 2 000** |\n\n**Lecture :** le solde de 1 000 F semble positif, mais il est calculé avant la livraison. Une fois la livraison payée, la campagne perd 2 000 F. Les indicateurs le montraient : **CPA = 14 000 ÷ 3 ≈ 4 667 F** (au-dessus du plafond de 4 000 F) et **ROAS = 30 000 ÷ 14 000 ≈ 2,14** (sous le seuil de 2,5). Ce n'est pas un échec : le test montre qu'il faut améliorer le visuel, la page ou la marge (lot, accessoire, prix) avant d'augmenter le budget.\n\n---\n\n### Que faire selon les résultats ?\n\n| Constat | Action |\n|---|---|\n| **Beaucoup d'impressions, peu de clics** | Changer visuel et accroche |\n| **Beaucoup de clics, peu de ventes** | Améliorer la page ou la conversation WhatsApp : preuves d'authenticité, garantie, réponses rapides |\n| **Des ventes mais CPA trop haut** | Améliorer la marge (offre avec accessoire, prix) ou le visuel |\n| **CPA sous le plafond** | Augmenter le budget doucement (environ 20 % à la fois) |\n\n---\n\n### Les erreurs à éviter\n- Lancer sans connaître sa marge et son CPA maximal.\n- Utiliser le nom d'une marque pour un produit qui n'en est pas.\n- Photo sombre, floue ou trouvée en ligne sans droits.\n- Cacher le prix ou les frais de livraison.\n- Modifier sans cesse la campagne.\n- Répondre trop tard aux messages.\n- Confondre clics et ventes.\n\n---\n\n### Checklist de lancement\n\n```\nFB_PAS_A_PAS_CHECKLIST\n```\n\nPour approfondir, la formation gratuite officielle **Meta Blueprint** détaille les fonctions avancées (pixel, audiences personnalisées, tests A/B)."
    }
  ]
};
export const ALIBABA_EBOOK: EbookData = {
  "id": "prod-alibaba-sourcing-2026",
  "slug": "formation-sourcing-alibaba-1688",
  "title": "Commander des rasoirs électriques sur Alibaba",
  "subtitle": "Guide pas à pas, avec schémas : de la création du compte à la réception au Sénégal",
  "category": "Sourcing & Import",
  "coverImage": "/images/cover-alibaba-sourcing.jpg",
  "price": 5000,
  "badge": "Bestseller",
  "shortDesc": "Guide pratique avec schémas illustrés pour importer sur Alibaba vers le Sénégal : création du compte, recherche, lecture de fiche produit, négociation, Trade Assurance et transitaire Chine–Dakar.",
  "fullDesc": "Un guide concret étape par étape, illustré de 8 schémas visuels, pour maîtriser l'importation sur Alibaba depuis le Sénégal à travers un cas réel (rasoirs électriques rechargeables). Vous apprendrez à créer votre compte acheteur, rechercher avec les bons mots-clés anglais et filtres, vérifier chaque fiche produit (MOQ, IPX7, batterie UN38.3, CE/RoHS), contacter le fournisseur avec un script en anglais prêt à l'emploi, payer en sécurité sous Trade Assurance, travailler avec votre transitaire Chine–Dakar (76 134 39 04) et contrôler votre marchandise à l'arrivée.",
  "learnPoints": [
    "Suivre les 10 étapes clés dans l'ordre, de la création du compte acheteur au contrôle final",
    "Configurer un compte Alibaba acheteur complet (Sénégal, code e-mail, adresse de livraison)",
    "Rechercher efficacement en anglais et appliquer les filtres Fournisseur vérifié et Trade Assurance",
    "Analyser une fiche produit : MOQ, prix par paliers, étanchéité IPX7, batterie UN38.3 et certifications",
    "Contacter les usines avec le script en anglais prêt à copier et exiger une facture pro forma",
    "Maîtriser les 5 écrans de commande et sécuriser chaque paiement via Alibaba Trade Assurance",
    "Organiser l'expédition via le transitaire Chine–Dakar (76 134 39 04) et anticiper les batteries lithium",
    "Contrôler la réception (5 % des pièces testées) avant de cliquer sur Confirmer la réception"
  ],
  "targetAudience": [
    "Acheteurs et e-commerçants basés au Sénégal souhaitant importer depuis la Chine sans risque",
    "Débutants cherchant un guide visuel clair étape par étape avec captures simplifiées",
    "Revendeurs voulant vérifier les certifications, les batteries lithium et la qualité avant gros volume",
    "Entrepreneurs cherchant à travailler efficacement avec un transitaire Chine–Dakar"
  ],
  "chapters": [
    {
      "id": "ali-chap-1",
      "order": 1,
      "title": "1. Vue d'ensemble",
      "content": "## Commander des rasoirs électriques sur Alibaba\n\n**Guide pas à pas, avec schémas : de la création du compte à la réception de la marchandise, pour un acheteur basé au Sénégal.**\n\n### Sommaire du guide\n1. **Vue d'ensemble**\n2. **Créer son compte**\n3. **Rechercher les rasoirs**\n4. **Lire une fiche produit**\n5. **Contacter le fournisseur**\n6. **Passer la commande**\n7. **Payer en sécurité**\n8. **Le transitaire Chine–Dakar**\n9. **Réception et contrôle**\n10. **Check-list finale**\n\n> **À savoir.** Les schémas de ce guide sont des illustrations simplifiées, pas des captures d'écran : l'interface d'Alibaba change souvent et diffère selon le pays et l'appareil. Les noms de boutons et menus peuvent donc varier légèrement.\n\n### Vue d'ensemble : dix étapes, dans cet ordre\n\n```\nALIBABA_RASOIRS_VUE_ENSEMBLE\n```\n\n**Règle d'or :** ne commandez jamais un gros volume sans avoir testé un échantillon. Un rasoir se juge à la main : moteur, finition des lames, autonomie de la batterie."
    },
    {
      "id": "ali-chap-2",
      "order": 2,
      "title": "2. Créer son compte",
      "content": "## 1. Créer son compte\n\n- Allez sur **alibaba.com**, puis cliquez sur **« S'inscrire »** en haut de la page.\n- Choisissez le profil **acheteur**, saisissez votre e-mail professionnel ou personnel, puis confirmez-le avec le code reçu.\n- Renseignez votre nom, votre pays (**Sénégal**) et votre numéro de téléphone.\n- Dans votre profil, ajoutez une **adresse de livraison complète** (ou celle de votre transitaire) : elle sert aux devis de transport.\n\n```\nALIBABA_RASOIRS_COMPTE\n```\n\n> Utilisez le même nom que celui de votre pièce d'identité ou de votre entreprise. Cela évite les blocages lors du paiement et de l'expédition."
    },
    {
      "id": "ali-chap-3",
      "order": 3,
      "title": "3. Rechercher les rasoirs",
      "content": "## 2. Rechercher les rasoirs\n\nTapez des mots-clés précis en anglais : **`electric shaver`**, **`men rotary shaver USB rechargeable`**, **`waterproof foil shaver`**. Puis réduisez les résultats avec les filtres.\n\n```\nALIBABA_RASOIRS_RECHERCHE\n```\n\n> Cochez au minimum **Trade Assurance** et **fournisseur vérifié**. Ouvrez ensuite 4 à 6 fiches dans des onglets séparés pour comparer."
    },
    {
      "id": "ali-chap-4",
      "order": 4,
      "title": "4. Lire une fiche produit",
      "content": "## 3. Lire une fiche produit\n\n```\nALIBABA_RASOIRS_FICHE\n```\n\n### Ce qu'il faut vérifier sur la fiche\n\n| Point | Pourquoi |\n|---|---|\n| **Quantité minimale (MOQ)** | Fixe votre budget minimum. Elle est souvent négociable pour un premier achat. |\n| **Prix par paliers** | Calculez le prix réel à votre quantité, pas le prix « à partir de ». |\n| **Étanchéité (IPX)** | IPX7 permet de rincer le rasoir sous l'eau. |\n| **Batterie et charge** | Lithium-ion, capacité (mAh), autonomie, USB-C de préférence. |\n| **Lames** | Acier inoxydable, rotatives ou à grille ; lames de rechange disponibles ? |\n| **Certifications** | CE, RoHS ; pour la batterie, rapport de test UN38.3 pour le transport. |\n| **Avis et profil** | Ancienneté, taux de réponse, avis, commandes passées. |"
    },
    {
      "id": "ali-chap-5",
      "order": 5,
      "title": "5. Contacter le fournisseur",
      "content": "## 4. Contacter le fournisseur\n\nCliquez sur **« Contacter le fournisseur »** et envoyez un message clair. Gardez toute la discussion dans la **messagerie Alibaba** : elle sert de preuve en cas de litige.\n\n```\nALIBABA_RASOIRS_CHAT\n```\n\n### Modèle de message (en anglais)\n\n```\nHello, I am interested in your rotary electric shaver (model ...). I am based in Dakar, Senegal. Could you please send: 1) the price for 100 / 300 / 500 pcs, 2) the MOQ, 3) the lead time, 4) CE/RoHS certificates and the battery UN38.3 report, 5) the warranty and defect policy, 6) one sample with price and shipping cost to Dakar. Thank you.\n```\n\n### Questions à ne pas oublier\n- Le chargeur est-il adapté au **230 V / 50 Hz** du Sénégal ? (la plupart des rasoirs USB le sont, à confirmer).\n- Quel taux de défauts accepté, et qui rembourse ou remplace ?\n- Quelle durée de production après paiement ?\n- Peut-on mettre votre logo et votre emballage (**OEM / marque blanche**) ? Quel coût de personnalisation ?\n- Le prix inclut-il la livraison jusqu'au port chinois ? Le transport vers Dakar sera géré avec le transitaire.\n\n> Méfiez-vous d'un fournisseur qui propose de payer **hors plateforme** (virement direct, application de messagerie) pour « un meilleur prix ». Vous perdez alors la protection Trade Assurance."
    },
    {
      "id": "ali-chap-6",
      "order": 6,
      "title": "6. Passer la commande",
      "content": "## 5. Passer la commande\n\nCommencez par un **échantillon (1 à 3 pièces)**, puis commandez en volume quand il vous convient.\n\n```\nALIBABA_RASOIRS_COMMANDE\n```\n\n1. Sur la fiche, choisissez couleur, chargeur et quantité, puis cliquez sur **« Commencer la commande »**.\n2. Vérifiez l'adresse de livraison et la méthode d'expédition proposée.\n3. Demandez au fournisseur une **facture pro forma** récapitulant produit, quantité, prix, délai et conditions.\n4. Relisez tout, confirmez, puis passez au paiement."
    },
    {
      "id": "ali-chap-7",
      "order": 7,
      "title": "7. Payer en sécurité",
      "content": "## 6. Payer en sécurité\n\n- Payez **uniquement via la plateforme**, avec **Trade Assurance** activée sur la commande.\n- Les moyens de paiement affichés dépendent de votre pays : carte bancaire, virement et d'autres options. Vérifiez à l'écran ce qui est proposé.\n- Gardez la facture et les captures de la discussion jusqu'à la fin de la commande.\n- En cas de problème (retard, produit non conforme), ouvrez un litige depuis **« Mes commandes »** dans les délais indiqués par la plateforme.\n\n```\nALIBABA_RASOIRS_PAIEMENT\n```\n\n> Pour une première commande, évitez les paiements à 100 % hors plateforme et les fournisseurs sans historique ni avis."
    },
    {
      "id": "ali-chap-8",
      "order": 8,
      "title": "8. Le transitaire Chine–Dakar",
      "content": "## 7. Expédition : le transitaire Chine–Dakar\n\nPour faire venir la marchandise jusqu'à Dakar, confiez l'expédition à un transitaire.\n\n```\nALIBABA_RASOIRS_TRANSITAIRE\n```\n\n### Comment procéder\n1. Appelez le transitaire (**76 134 39 04**) et dites-lui : produit (rasoirs électriques), quantité, ville du fournisseur en Chine.\n2. Demandez le devis complet (transport, délai, frais à l'arrivée à Dakar) et le mode d'expédition conseillé.\n3. Donnez au fournisseur les informations d'envoi indiquées par le transitaire.\n4. Gardez le numéro de suivi et suivez l'avancement avec le transitaire jusqu'à la livraison.\n\n> **Batteries lithium.** Les rasoirs rechargeables contiennent une batterie soumise à des règles de transport. Posez la question au transitaire avant de commander."
    },
    {
      "id": "ali-chap-9",
      "order": 9,
      "title": "9. Réception et contrôle",
      "content": "## 8. Réception et contrôle\n\nÀ l'arrivée de votre marchandise à Dakar, appliquez systématiquement ces 5 vérifications :\n\n1. **Vérifiez le nombre de cartons** avant de signer la livraison.\n2. **Ouvrez au moins 5 % des pièces :** finition, lames, chargeur, accessoires, notice.\n3. **Testez la charge, l'autonomie et le fonctionnement sous l'eau** si le produit est annoncé étanche.\n4. **Prenez des photos et vidéos de tout défaut**, avec l'emballage.\n5. **Si tout est conforme**, cliquez sur **« Confirmer la réception »** ; sinon, ouvrez un litige **avant** de confirmer."
    },
    {
      "id": "ali-chap-10",
      "order": 10,
      "title": "10. Check-list finale",
      "content": "## Check-list finale\n\nAvant de valider votre cycle d'importation, passez en revue chaque point :\n\n- [x] Compte créé, profil et adresse complets.\n- [x] Fournisseur vérifié avec Trade Assurance.\n- [x] Certificats CE / RoHS et rapport batterie reçus.\n- [x] Échantillon testé et validé.\n- [x] Facture pro forma signée et conditions claires.\n- [x] Paiement fait sur la plateforme.\n- [x] Transitaire contacté (**76 134 39 04**) et devis de transport reçu.\n- [x] Contrôle à réception avant de confirmer.\n\n---\n\n*Guide pédagogique à titre indicatif. Les prix, délais et règles d'import sont des ordres de grandeur : vérifiez-les avant chaque commande.*"
    }
  ]
};

export const OTHER_EBOOKS: EbookData[] = [
 FACEBOOK_ADS_EBOOK,
 ALIBABA_EBOOK,
 MARKETING_EBOOK,
 DEV_EBOOK,
];
