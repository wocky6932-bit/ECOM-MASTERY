export interface Chapter {
  id: string;
  title: string;
  order: number;
  content: string;
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

// =========================================================================
// LIVRE 1 : LANCER SA BOUTIQUE EN LIGNE (E-commerce)
// =========================================================================
export const INITIAL_EBOOK: EbookData = {
  title: "Lancer sa boutique en ligne",
  slug: "lancer-sa-boutique-en-ligne",
  shortDesc: "Le guide pratique pour choisir un produit gagnant, trouver ses premiers clients et développer son activité e-commerce en Afrique francophone.",
  description: "Le guide complet pour créer une boutique en ligne rentable en Afrique de l'Ouest et à l'international. Découvrez les stratégies, les outils et les techniques éprouvées pour attirer vos premiers clients, encaisser vos paiements simplement (Wave, Mobile Money, Carte) et développer votre business.",
  learnPoints: [
    "Créer une boutique professionnelle et crédible sans compétences techniques",
    "Méthode de sourcing : fournisseurs locaux (Dakar, Abidjan) et internationaux (Chine, Turquie)",
    "Intégrer les paiements mobiles instantanés (Wave Checkout) et gérer le Cash on Delivery",
    "Mettre en place une logistique de livraison du dernier kilomètre sans litiges",
    "Scripts WhatsApp Business exacts pour clôturer 4x plus de ventes"
  ],
  targetAudience: "Entrepreneurs, commerçants, créateurs de contenu et toute personne souhaitant lancer un business e-commerce rentable au Sénégal et en Afrique francophone.",
  price: 5000,
  category: "E-commerce",
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "chapitre-1",
      title: "1. Fondations et validation du marché en Afrique francophone",
      order: 1,
      content: `## Bienvenue dans l'e-commerce rentable en 2026

Le marché du commerce digital en Afrique de l'Ouest (Sénégal, Côte d'Ivoire, Cameroun, Mali, Bénin) vit une révolution historique. L'explosion du paiement mobile via **Wave** et la connectivité 4G/5G ont éliminé le principal frein historique : la friction bancaire.

Cependant, 90% des débutants commettent la même erreur : ils créent un site web complexe avant même de savoir si quelqu'un veut acheter leur produit.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   LE CYCLE DE VALIDATION RAPIDE                        │
│                                                                        │
│  [1. Identifier un problème] ──► [2. Trouver le produit solution]     │
│             ▲                                      │                   │
│             │                                      ▼                   │
│  [4. Réinvestir le profit]  ◄─── [3. Test pré-vente sur WhatsApp/Meta] │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 3 critères d'un produit gagnant (Winning Product) :
1. **L'effet "Painkiller" (analgésique) :** Le produit résout une douleur aiguë (beauté, minceur, organisation, sécurité, gain de temps).
2. **Une marge brute minimale de 3x :** Si vous achetez le produit à 3 000 FCFA, vous devez pouvoir le vendre à au moins 10 000 FCFA ou 12 000 FCFA pour absorber la publicité et la livraison.
3. **Difficile à trouver au marché du coin :** Le client ne doit pas pouvoir descendre à Sandaga ou Adjamé et trouver exactement le même article au même prix.

| Produit exemple | Coût d'achat | Prix de vente cible | Marge brute estimée | Verdict |
|---|---|---|---|---|
| Sac à main générique | 4 000 FCFA | 7 500 FCFA | 3 500 FCFA (trop faible) | ❌ Éviter |
| Épilateur laser compact | 4 500 FCFA | 18 000 FCFA | 13 500 FCFA | ✅ Excellent |
| Correcteur de posture | 2 000 FCFA | 9 500 FCFA | 7 500 FCFA | ✅ Très rentable |
| Mini blender rechargeable | 3 500 FCFA | 14 000 FCFA | 10 500 FCFA | ✅ Fort volume |

> 💡 **Conseil Pro du Terrain :** Ne cherchez pas à réinventer la roue. Regardez les publicités qui tournent depuis plus de 30 jours sur la bibliothèque publicitaire Meta (Facebook Ad Library) au Sénégal et en Côte d'Ivoire : si un concurrent dépense de l'argent depuis un mois, c'est que son produit est rentable !`
    },
    {
      id: "chapitre-2",
      title: "2. Sourcing : Fournisseurs locaux, Turquie et Chine (Alibaba / 1688)",
      order: 2,
      content: `## Comment s'approvisionner sans risque de capital

Le nerf de la guerre dans le commerce de détail, c'est le prix d'achat et la rapidité d'approvisionnement.

\`\`\`
┌───────────────────────────────────────────────────────────────────┐
│                 LES 3 VOIES D'APPROVISIONNEMENT                   │
│                                                                   │
│ 1. Local (Stock immédiat) ──► Délais: 24h   ──► Marge: x2.5       │
│ 2. Turquie (Textile/Mode) ──► Délais: 5-7j  ──► Marge: x3.5       │
│ 3. Chine (Gadgets/Tech)   ──► Délais: 10-15j ──► Marge: x4 à x6   │
└───────────────────────────────────────────────────────────────────┘
\`\`\`

### Option A : Le sourcing local (Recommandé pour démarrer à zéro)
À Dakar (Marché Sandaga, HLM, Colobane) ou Abidjan (Adjamé, Treichville), des importateurs grossistes ont déjà absorbé les frais de douane et le fret maritime. 
- Vous négociez un tarif par lot de 5 ou 10 pièces.
- Vous photographiez les échantillons.
- Vous lancez vos tests immédiatement, sans attendre 3 semaines de livraison maritime.

### Option B : Le sourcing en Chine via transitaire GP (Groupage Postal)
Pour maximiser vos marges, vous commandez directement sur **1688.com** ou **Alibaba**.
- N'expédiez jamais par DHL ou Fedex pour des marchandises lourdes (les frais douaniers détruiront votre marge).
- Utilisez un transitaire local spécialisé Chine-Sénégal ou Chine-Côte d'Ivoire (fret aérien : 6 000 à 8 500 FCFA/kg avec dédouanement inclus ; fret maritime : 150 000 à 250 000 FCFA le mètre cube CBM).

> ⚠️ **Erreur fréquente à éviter :** Ne commandez jamais 500 pièces d'un coup sans avoir vendu au moins 20 pièces au préalable via une campagne test. Le stock invendu est le cimetière de l'e-commerçant débutant.`
    },
    {
      id: "chapitre-3",
      title: "3. La boutique à haute conversion et l'intégration Wave Checkout",
      order: 3,
      content: `## Transformer les visiteurs en acheteurs en moins de 90 secondes

En Afrique francophone, 88% des visites web se font sur smartphone avec des connexions parfois instables. Votre boutique doit être ultra-légère et épurée.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   STRUCTURE D'UNE PAGE DE VENTE GAGNANTE               │
│                                                                        │
│  [ Titre Choc : Résultat immédiat promis ]                            │
│  [ Vidéo de démonstration 15s / GIF montrant l'utilisation ]           │
│  [ Les 3 bénéfices majeurs prouvés par l'exemple ]                    │
│  [ Témoignages clients locaux en photo / capture WhatsApp ]           │
│  [ BOUTON D'ACHAT RAPIDE WAVE & PAIEMENT À LA LIVRAISON ]             │
│  [ Garanties : Échange sous 48h, Support WhatsApp joignable ]         │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Pourquoi Wave Checkout est votre meilleur atout :
Le paiement à la livraison (Cash on Delivery) présente un taux d'échec de 25% à 40% (clients injoignables au moment où le livreur arrive).
En proposant **Wave Checkout** en prépaiement avec une réduction incitative (ex: "Payez via Wave et recevez la livraison offerte ou 1 000 FCFA de remise"), vous :
1. Verrouillez l'argent immédiatement sur votre compte marchand.
2. Éliminez les refus de colis fantômes à la porte.
3. Supprimez le risque de manipulation de monnaie liquide par les livreurs tiers.

> 💡 **Conseil Pro du Terrain :** Placez toujours un bouton flottant WhatsApp en bas à droite de votre boutique. Les clients aiment vérifier qu'il y a un être humain derrière la boutique avant de valider leur paiement.`
    },
    {
      id: "chapitre-4",
      title: "4. Maîtriser le Closing sur WhatsApp Business et doubler son taux de conversion",
      order: 4,
      content: `## WhatsApp Business : Votre machine à encaisser

En Afrique, WhatsApp n'est pas une simple messagerie : c'est le centre commercial numéro 1. 

\`\`\`
┌─────────────────────────────────────────────────────────────────────────┐
│               LE SCRIPT DE CLOSING WHATSAPP EN 4 ÉTAPES                 │
│                                                                         │
│  Visiteur clique sur l'annonce ──► Message pré-rempli reçu             │
│                                           │                             │
│  Étape 1 : Accueil chaleureux + prénom    ▼                             │
│  Étape 2 : Confirmation du besoin ("Vous cherchez à résoudre X ?")      │
│  Étape 3 : Offre spéciale limitée + Lien Wave sécurisé                  │
│  Étape 4 : Prise d'adresse pour expédition le jour même                 │
└─────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Le script de réponse instantanée qui convertit :
*« Bonjour [Prénom] ! Merci de votre intérêt pour [Nom du Produit]. Il nous reste exactement 4 coffrets disponibles pour la livraison aujourd'hui à Dakar/Abidjan.*

*Pour vous remercier, nous offrons la livraison gratuite si vous confirmez avant 14h.*

*Préférez-vous recevoir votre colis à domicile ou au bureau ? »*

### Les relances automatiques à ne jamais oublier :
- **Relance à H+2 :** « Bonjour [Prénom], le livreur prépare sa tournée pour votre quartier, souhaitez-vous que nous incluions votre colis ? »
- **Relance à H+24 :** Photo d'un client satisfait tenant le produit avec son avis vocal.

> 📌 **À retenir impérativement :** Ne répondez jamais avec de longs pavés de texte impersonnels. Utilisez de courts messages aérés et, dès que possible, un message vocal chaleureux de 15 secondes : la voix humaine brise immédiatement la méfiance en ligne.`
    },
    {
      id: "chapitre-5",
      title: "5. Logistique, gestion des livreurs et passage à l'échelle (Scaling)",
      order: 5,
      content: `## Bâtir un réseau de distribution sans faille

La réputation d'une boutique en ligne se joue au moment où le livreur frappe à la porte.

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                 TABLEAU DE BORD DE RENTABILITÉ MENSUELLE            │
│                                                                     │
│  Ventes mensuelles (300 commandes à 15 000 FCFA)  : 4 500 000 FCFA  │
│  Coût des marchandises vendues (COGS)            : -1 200 000 FCFA  │
│  Budget publicitaire Meta / TikTok               : -800 000 FCFA   │
│  Frais logistiques de livraison (2 000 FCFA/colis): -600 000 FCFA   │
│  Frais Wave et divers                            : -50 000 FCFA    │
│  ─────────────────────────────────────────────────────────────────  │
│  BÉNÉFICE NET EN POCHE                           : 1 850 000 FCFA  │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

### Protocole anti-litiges avec les prestataires de livraison :
1. **Ne travaillez jamais avec un seul livreur :** Si votre livreur a une panne de moto, vos commandes stagnent et vos clients annulent. Travaillez toujours avec 2 ou 3 coursiers indépendants ou une agence structurée.
2. **Appel de courtoisie avant expédition :** Avant de remettre le colis au livreur, un assistant appelle le client pour valider : « Êtes-vous bien présent à l'adresse indiquée entre 13h et 16h ? ». Cet appel de 30 secondes réduit les taux de retour de 60%.
3. **Paiement immédiat des encaissements :** Exigez que les sommes encaissées en Cash on Delivery vous soient transférées sur Wave le jour même avant 20h.

### Conclusion & Plan d'action pour les 7 prochains jours :
- **Jour 1-2 :** Valider un produit avec au moins 3x de marge.
- **Jour 3-4 :** Créer la fiche produit et configurer WhatsApp Business.
- **Jour 5 :** Tester avec 5 000 FCFA de publicité ciblée ou 3 vidéos TikTok virales.
- **Jour 6-7 :** Livrer vos 5 premières commandes et fidéliser vos premiers ambassadeurs !`
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
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "mkt-1",
      title: "1. Psychologie d'achat et déclencheurs de confiance en Afrique",
      order: 1,
      content: `## Comprendre pourquoi et comment vos clients achètent

Le consommateur en Afrique de l'Ouest est pragmatique, connecté et sollicité en permanence. La méfiance face aux arnaques en ligne est le premier obstacle que votre marketing doit pulvériser.

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│                    L'ÉCHELLE DE LA CONFIANCE CLIENT                  │
│                                                                      │
│ [Étape 4: L'Achat & la Recommandation] ◄── Preuve sociale + Wave     │
│ [Étape 3: La Clarté de l'Offre]        ◄── Prix affiché, pas d'inbox │
│ [Étape 2: L'Autorité & Visibilité]     ◄── Vidéos de démonstration   │
│ [Étape 1: La Découverte]               ◄── Accroche (Hook) 3 secondes│
└──────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 4 déclencheurs émotionnels majeurs :
1. **La preuve sociale locale (Social Proof) :** Montrez des visages, des accents locaux et des avis authentiques enregistrés sur le terrain à Dakar, Abidjan ou Douala.
2. **La transparence des prix :** Arrêtez la pratique toxique du « Prix en inbox ». Les acheteurs sérieux détestent perdre du temps. Affichez clairement vos tarifs et la valeur offerte.
3. **La garantie sans risque :** « Satisfait ou échangé sous 48h », « Vérifiez votre colis avant de payer ».
4. **L'urgence légitime :** « Seulement 15 exemplaires reçus dans ce container ».

> 💡 **Conseil Pro du Terrain :** Une capture d'écran d'un client disant merci sur WhatsApp avec un message vocal est 10x plus convaincante qu'un graphique de designer professionnel.`
    },
    {
      id: "mkt-2",
      title: "2. Meta Ads (Facebook & Instagram) : Configuration et ciblage rentable",
      order: 2,
      content: `## Dominer la publicité Facebook avec un budget maîtrisé

Vous n'avez pas besoin de millions pour commencer sur Meta Ads. Avec 3 000 à 5 000 FCFA par jour, vous pouvez toucher entre 3 000 et 8 000 personnes ultra-ciblées chaque jour.

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│                  STRUCTURE D'UNE CAMPAGNE CIBLÉE                   │
│                                                                    │
│  [CAMPAGNE : Ventes / WhatsApp CBO]                                │
│       │                                                            │
│       ├──► [Ensemble 1 : Ciblage Large (Sénégal, 22-45 ans)]       │
│       │        ├── Créatif A (Vidéo démonstration)                 │
│       │        └── Créatif B (Carrousel témoignages)               │
│       │                                                            │
│       └──► [Ensemble 2 : Intérêts (E-commerce, Mode, Shopping)]    │
│                ├── Créatif A                                       │
│                └── Créatif C (Offre Promo limitée)                 │
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

> ⚠️ **Erreur fréquente à éviter :** Ne cliquez jamais sur le bouton bleu « Booster la publication » depuis votre page Facebook. Utilisez toujours le **Gestionnaire de Publicités (Meta Ads Manager)** sur ordinateur pour avoir un contrôle total sur vos audiences et vos placements.`
    },
    {
      id: "mkt-3",
      title: "3. La formule Copywriting AIDA appliquée à l'Afrique francophone",
      order: 3,
      content: `## L'art d'écrire des textes qui vendent

Le copywriting n'est pas de la belle littérature : c'est de la psychologie appliquée à la persuasion commerciale.

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│                    LE MODÈLE A.I.D.A EN PRATIQUE                     │
│                                                                      │
│  A - Attention  : Arrêter le scroll en 2 secondes                    │
│  I - Intérêt    : Révéler le secret ou la solution au problème       │
│  D - Désir      : Faire visualiser le bénéfice concret dans sa vie   │
│  A - Action     : Dire exactement quoi faire (Cliquer, Commander)    │
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

> 💡 **Conseil Pro du Terrain :** Rédigez toujours vos textes comme si vous parliez à un ami assis en face de vous autour d'un thé. Bannissez les expressions ampoulées et le jargon abstrait.`
    },
    {
      id: "mkt-4",
      title: "4. Création de contenu viral TikTok & Reels sans équipement de cinéma",
      order: 4,
      content: `## Générer 50 000 vues organiques par semaine gratuitement

L'algorithme de TikTok et des Reels Instagram est la plus formidable opportunité de trafic gratuit de la décennie. Il ne juge pas votre notoriété passée, mais l'attention que retient chaque seconde de votre vidéo.

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│               ANATOMIE D'UNE VIDÉO COURTE VIRALE (30s)             │
│                                                                    │
│ [00s - 03s] : LE HOOK (Visuel inattendu / Question provocante)     │
│ [03s - 15s] : LA DÉMONSTRATION DU PROBLÈME ET DE LA SOLUTION       │
│ [15s - 25s] : LES RÉSULTATS VISIBLES EN DIRECT                     │
│ [25s - 30s] : CALL TO ACTION CLAIR ("Lien en bio pour commander") │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 3 types de vidéos qui explosent les statistiques :
1. **Le "Avant / Après" sans filtre :** Montrez le désordre ou la difficulté, puis la transformation immédiate grâce au produit.
2. **Le "Behind the Scenes" (Coulisses de préparation des commandes) :** Emballez un colis, écrivez le mot de remerciement pour un client de Thiès ou Cocody. Ce format humanise votre marque et rassure sur votre existence physique.
3. **Le déballage / Test d'endurance :** Montrez la solidité et l'authenticité de l'article en condition réelle.

> 📌 **À retenir impérativement :** Les 3 premières secondes déterminent 80% du succès d'une vidéo. Si rien de surprenant ou d'intéressant ne se produit pendant les 3 premiers battements de cœur, l'internaute aura déjà balayé vers la vidéo suivante.`
    },
    {
      id: "mkt-5",
      title: "5. Métriques, KPIs et Passage à l'échelle (Scaling vertical et horizontal)",
      order: 5,
      content: `## Passer de 10 à 100 commandes par jour sans exploser en vol

Quand une campagne publicitaire fonctionne, comment augmenter votre budget sans détruire sa rentabilité ?

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                       SCALING HORIZONTAL VS VERTICAL                │
│                                                                     │
│  Scaling Vertical   : Augmenter le budget de +20% toutes les 48h    │
│  Scaling Horizontal : Dupliquer l'annonce sur de nouvelles villes,   │
│                       nouvelles tranches d'âge ou pays voisins       │
│                       (Ex: Sénégal ──► Côte d'Ivoire ──► Cameroun)  │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

### La règle mathématique du ROAS (Return On Ad Spend) :
Si vous dépensez 10 000 FCFA en publicité et générez 5 ventes à 10 000 FCFA de marge brute (soit 50 000 FCFA), votre ROAS est de :
$$\text{ROAS} = \frac{50\,000}{10\,000} = 5.0$$
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
// LIVRE 3 : BOOSTEZ VOTRE PRODUCTIVITÉ (Productivité)
// =========================================================================
const PRODUCTIVITY_EBOOK: EbookData = {
  title: "Boostez votre productivité",
  slug: "boostez-votre-productivite",
  shortDesc: "Organisez vos journées, éliminez définitivement la procrastination et atteignez vos objectifs entrepreneuriaux avec méthode.",
  description: "Le système complet d'organisation personnelle et de gestion du temps pour les entrepreneurs, indépendants et créateurs modernes. Apprenez à vous concentrer sur ce qui produit 80% des résultats et à automatiser les tâches répétitives.",
  learnPoints: [
    "La méthode Time-Blocking : bloquer des plages de concentration absolue",
    "La Matrice d'Eisenhower adaptée aux priorités de l'entrepreneur moderne",
    "Éliminer les distractions numériques et les voleurs d'attention",
    "Mettre en place une routine matinale et nocturne calibrée",
    "Déléguer et automatiser les processus pour gagner 15h par semaine"
  ],
  targetAudience: "Entrepreneurs, freelances, étudiants ambitieux et managers submergés par le travail.",
  price: 5000,
  category: "Productivité",
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "prod-1",
      title: "1. Diagnostic du temps et élimination des voleurs d'énergie",
      order: 1,
      content: `## Pourquoi vous n'avez jamais le temps (et comment changer cela)

Nous disposons tous exactement des mêmes 24 heures chaque jour. La différence entre l'entrepreneur qui génère des résultats et celui qui court partout sans avancer ne réside pas dans l'effort, mais dans **l'architecture de son attention**.

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│                    LES 4 VOLEURS D'ATTENTION MAJEURS                 │
│                                                                      │
│ 1. Les notifications instantanées (WhatsApp, réseaux) ──► Défocus    │
│ 2. L'absence de plan clair le matin                   ──► Flottement │
│ 3. Le multitâche (Multitasking illusoire)             ──► Épuisement │
│ 4. L'incapacité à dire "Non" aux sollicitations       ──► Dispersion │
└──────────────────────────────────────────────────────────────────────┘
\`\`\`

### L'audit de vos 168 heures hebdomadaires :
Pendant 3 jours, notez sur un carnet chaque tranche de 30 minutes de votre journée :
- Temps réel de travail productif (Deep Work).
- Temps passé à faire défiler passivement les réseaux sociaux.
- Temps passé en discussions informelles sans finalité.

La plupart des professionnels découvrent avec stupeur qu'ils ne consacrent en réalité que **1h30 à 2h par jour** à de véritables tâches créatrices de valeur !

> 💡 **Conseil Pro du Terrain :** Désactivez toutes les notifications sonores et bannières de votre téléphone, à l'exception des appels urgents. Décidez de consulter WhatsApp à heures fixes (ex: 11h, 14h, 18h). Vous récupérerez immédiatement 2 heures de focus chaque jour.`
    },
    {
      id: "prod-2",
      title: "2. La méthode Time-Blocking et la Matrice d'Eisenhower",
      order: 2,
      content: `## Organiser sa journée par blocs de puissance

Le multitâche est un mythe neurologique. Chaque changement de contexte coûte en moyenne 15 minutes à votre cerveau pour retrouver son niveau d'attention maximal.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                        LA MATRICE D'EISENHOWER                         │
│                                                                        │
│                      URGENT                    NON URGENT              │
│            ┌──────────────────────────┬──────────────────────────┐     │
│  IMPORTANT │  1. FAIRE TOUT DE SUITE  │  2. PLANIFIER & FOCUS    │     │
│            │  (Crises, livraisons)    │  (Stratégie, prospection)│     │
│            ├──────────────────────────┼──────────────────────────┤     │
│  NON IMP.  │  3. DÉLÉGUER / AUTOMAT.  │  4. ÉLIMINER TOTALEMENT  │     │
│            │  (Tâches administratives)│  (Débats stériles, scroll│     │
│            └──────────────────────────┴──────────────────────────┘     │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Votre journée idéale découpée en 3 blocs :
1. **Bloc 1 - Deep Work matinal (8h30 - 11h30) :** Aucune réunion, aucun appel. Vous traitez la tâche la plus difficile et la plus rémunératrice de votre journée (création d'offre, campagne pub, développement).
2. **Bloc 2 - Opérations & Réponses (11h30 - 13h00) :** Réponses aux clients, WhatsApp, gestion des commandes et logistique.
3. **Bloc 3 - Relations & Suivi (15h00 - 17h30) :** Réunions, appels partenariats, bilan de la journée et préparation du lendemain.

> 📌 **À retenir impérativement :** Si vous ne planifiez pas votre journée la veille au soir, vous vous réveillerez en exécutant les priorités des autres.`
    },
    {
      id: "prod-3",
      title: "3. Vaincre la procrastination avec la règle des 5 secondes et le Pomodoro",
      order: 3,
      content: `## Le pont entre l'intention et l'action immédiate

La procrastination n'est pas de la paresse : c'est un mécanisme de défense émotionnelle face à une tâche perçue comme trop vaste, floue ou intimidante.

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│                    LE CYCLE D'ACTION IMMÉDIATE                     │
│                                                                    │
│  [Idée / Tâche] ──► Compte à rebours : 5, 4, 3, 2, 1 ──► DÉMARRER  │
│                                                            │       │
│  25 min de travail ininterrompu (Pomodoro) ◄───────────────┘       │
│         │                                                          │
│         ▼                                                          │
│  5 min de pause réelle (Marcher, boire de l'eau)                   │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

### La technique du "Premier pas ridicule" :
Quand vous devez rédiger une offre ou analyser vos comptes et que vous n'en avez aucune envie :
- Ne vous dites pas : « Je dois travailler pendant 4 heures ».
- Dites-vous : « Je m'assois et j'écris seulement 3 phrases pendant 2 minutes ».
Une fois l'inertie brisée, le principe d'élan psychologique (momentum) prend le relais et vous continuerez naturellement pendant une heure.

> ⚠️ **Erreur fréquente à éviter :** Ne prenez pas vos pauses devant l'écran de votre téléphone. Regarder des vidéos TikTok pendant une pause fatigue votre cortex visuel au lieu de le régénérer.`
    },
    {
      id: "prod-4",
      title: "4. Rituels du matin, gestion de l'énergie et rythme biologique",
      order: 4,
      content: `## Gérer son énergie plutôt que son temps

Le temps est fixe, mais votre énergie est variable. Deux heures de travail lorsque vous êtes reposé et lucide valent dix heures de travail lorsque vous êtes épuisé et distrait.

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                    LE RITUEL DU MATIN EN 4 ÉTAPES                   │
│                                                                     │
│  1. Réveil sans écran pendant les 30 premières minutes             │
│  2. Hydratation immédiate : 500ml d'eau pour réactiver le corps    │
│  3. Mouvement / Marche de 10-15 minutes au soleil                  │
│  4. Définition des 3 victoires indispensables de la journée        │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

### Le sommeil : Le multiplicateur secret des entrepreneurs
Dormir 7 heures de qualité chaque nuit n'est pas une perte de temps : c'est la condition sine qua non de la clarté mentale, de la mémoire de travail et de la régulation émotionnelle face au stress des affaires.

| Mauvaise habitude | Impact sur vos journées | Alternative recommandée |
|---|---|---|
| Téléphone au lit jusqu'à minuit | Sommeil agité, réveil lourd | Poser le téléphone hors de la chambre |
| Café dès le saut du lit | Pic de cortisol puis coup de pompe à 11h | Boire d'abord de l'eau, café à 9h30 |
| Commencer par vérifier ses e-mails | Mode réactif et stress immédiat | Traiter d'abord sa priorité numéro 1 |`
    },
    {
      id: "prod-5",
      title: "5. Systèmes d'automatisation et délégation intelligente",
      order: 5,
      content: `## Passer d'exécutant à chef d'orchestre

Votre valeur horaire ne doit pas être gaspillée sur des tâches administratives à faible impact.

\`\`\`
┌───────────────────────────────────────────────────────────────────────┐
│                      L'ÉCHELLE DE LA DÉLÉGATION                       │
│                                                                       │
│  1. ÉLIMINER  : Cette tâche est-elle réellement nécessaire ?         │
│  2. AUTOMATISER: Un outil ou logiciel peut-il la faire ? (Zapier, IA) │
│  3. DÉLÉGUER  : Un assistant ou prestataire peut-il la réaliser ?    │
│  4. OPTIMISER : Ce qui reste sous votre responsabilité directe        │
└───────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les outils essentiels de la productivité moderne :
- **Notion :** Votre second cerveau pour documenter vos processus (SOP - Standard Operating Procedures).
- **Google Drive / Workspace :** Centraliser vos documents et modèles partagés.
- **WhatsApp Business avec réponses rapides enregistrées :** Répondre en 2 touches aux 20 questions récurrentes de vos clients.

### Votre engagement :
Choisissez dès aujourd'hui **une seule habitude** de ce cours et pratiquez-la avec rigueur pendant 14 jours consécutifs. La constance bat toujours l'intensité temporaire !`
    }
  ]
};

// =========================================================================
// LIVRE 4 : DÉVELOPPEUR WEB FULL STACK (Développement)
// =========================================================================
const DEV_EBOOK: EbookData = {
  title: "Développeur Web Full Stack",
  slug: "developpeur-web-full-stack",
  shortDesc: "Maîtrisez le développement web moderne de A à Z avec TypeScript, React, Next.js, API sécurisées et bases de données SQL.",
  description: "Le parcours pratique complet pour concevoir, coder et déployer des applications web complètes, rapides et sécurisées. De la modélisation de données à l'intégration des passerelles de paiement et au déploiement cloud sur Vercel et TiDB.",
  learnPoints: [
    "Architecture moderne Next.js 15 App Router et Server Actions",
    "Modélisation de données SQL relationnelles avec Prisma ORM",
    "Authentification sécurisée par JWT, cookies HttpOnly et RBAC",
    "Intégration d'API tierces (Wave Checkout, Webhooks avec signatures cryptographiques)",
    "Déploiement en production, monitoring, optimisation des performances et CI/CD"
  ],
  targetAudience: "Développeurs débutants et intermédiaires, étudiants en informatique et concepteurs d'applications web.",
  price: 5000,
  category: "Développement",
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "dev-1",
      title: "1. Architecture moderne : Next.js App Router, SSR et React 19",
      order: 1,
      content: `## L'état de l'art du développement web moderne

Le développement web a profondément évolué. Nous ne construisons plus des sites avec un backend PHP séparé d'un côté et un frontend lourd de l'autre : l'architecture unifiée basée sur **Next.js (App Router)** et **TypeScript** permet de concevoir des applications ultra-performantes où le code serveur et le code client cohabitent harmonieusement.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│               ARCHITECTURE CLIENT / SERVEUR NEXT.JS                    │
│                                                                        │
│  [Navigateur Client] ──────── Requête HTTP / Hydratation ────────►     │
│          ▲                                                       │     │
│          │                                                       ▼     │
│  [Composants Client]   ◄──── JSON Sérialisé / HTML SSR ──── [Serveur]  │
│  ("use client")                                              (Node/Edge)│
│  Interactivité, State,                                           │     │
│  Events DOM                                                      ▼     │
│                                                            [Base de    │
│                                                             Données]   │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Différence fondamentale : Server Components vs Client Components :
- **Server Components (par défaut) :** S'exécutent exclusivement sur le serveur. Ils accèdent directement à la base de données sans exposer vos clés secrètes ni alourdir le bundle JavaScript téléchargé par le visiteur.
- **Client Components (\`"use client"\`) :** Nécessaires uniquement pour l'interactivité utilisateur (formulaires dynamiques, modales, \`useState\`, \`useEffect\`, écouteurs d'événements).

| Critère | Server Components (RSC) | Client Components ("use client") |
|---|---|---|
| Exécution | 100% sur le serveur | Serveur (SSR initial) + Navigateur |
| Poids JS client | 0 Ko supplémentaire | Ajouté au bundle client |
| Accès DB directe | ✅ Oui (Prisma, SQL direct) | ❌ Non (doit passer par une API) |
| Variables secrètes | ✅ Sûres (jamais divulguées) | ⚠️ Exposées si préfixées NEXT_PUBLIC |

> 💡 **Conseil Pro du Terrain :** Gardez toujours un maximum de composants côté serveur. N'ajoutez \`"use client"\` qu'aux feuilles de votre arbre de composants qui ont réellement besoin d'interactivité.`
    },
    {
      id: "dev-2",
      title: "2. Bases de données relationnelles SQL et modélisation Prisma ORM",
      order: 2,
      content: `## Concevoir un schéma de données robuste et évolutif

Une application robuste repose d'abord sur un schéma de données sain. Nous utilisons ici **MySQL / TiDB Cloud** associé à **Prisma ORM** pour bénéficier d'un typage strict de bout en bout.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   MODÈLE RELATIONNEL DU PROJET ECOM                    │
│                                                                        │
│   ┌──────────────┐         1:N          ┌──────────────┐               │
│   │     User     │ ───────────────────► │    Order     │               │
│   │ (id, email)  │                      │ (id, status) │               │
│   └──────────────┘                      └──────────────┘               │
│          │                                     │                       │
│          │ 1:N                          1:1    ▼                       │
│          ▼                              ┌──────────────┐               │
│   ┌──────────────┐                      │   Payment    │               │
│   │  AccessCode  │                      │  (waveTxId)  │               │
│   │(code, status)│                      └──────────────┘               │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les règles d'or de l'indexation SQL :
1. **Indexez toujours les colonnes de recherche fréquentes :** Vos champs \`slug\`, \`email\`, \`orderNumber\` doivent être marqués \`@unique\` ou \`@@index\`.
2. **Utilisez les bons types de colonnes :** 
   - Pour les textes courts : \`VARCHAR(255)\`
   - Pour les résumés : \`TEXT\`
   - Pour les contenus longs de chapitres : \`LONGTEXT\`
3. **RelationMode sur TiDB Cloud Serverless :**
   Sur les clusters distribués comme TiDB Serverless, définissez \`relationMode = "prisma"\` dans votre schéma pour que Prisma gère la cohérence relationnelle sans verrouillage distribué lourd.

> 📌 **À retenir impérativement :** Ne modifiez jamais votre schéma de base de données en production à la main. Utilisez toujours \`npx prisma db push\` ou les migrations versionnées pour maintenir la synchronisation avec votre code TypeScript.`
    },
    {
      id: "dev-3",
      title: "3. Sécurité de pointe : Authentification JWT, Cookies HttpOnly et RBAC",
      order: 3,
      content: `## Protéger votre application contre les attaques réelles

Ne stockez jamais de tokens d'authentification dans le \`localStorage\` du navigateur : ils sont vulnérables aux attaques XSS (Cross-Site Scripting).

\`\`\`
┌─────────────────────────────────────────────────────────────────────────┐
│               FLUX D'AUTHENTIFICATION SÉCURISÉ PAR COOKIE               │
│                                                                         │
│ [Client Navigateur] ──► POST /api/auth/login (email + mot de passe)     │
│                                     │                                   │
│ [Serveur API]       ──► bcrypt.compare() mot de passe haché             │
│                     ──► Génère JWT signé cryptographiquement             │
│                     ──► Répond avec Header : Set-Cookie                 │
│                         ecom_session=JWT; HttpOnly; Secure; SameSite=Lax│
│                                     │                                   │
│ [Requêtes futures]  ──► Cookie transmis automatiquement au serveur      │
│                         Inaccessible par document.cookie (Anti-XSS)     │
└─────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Le contrôle d'accès basé sur les rôles (RBAC) :
Toute route protégée côté serveur (comme \`/admin/*\` ou \`/api/admin/*\`) doit vérifier :
1. La validité de la signature cryptographique du JWT.
2. L'expiration du token.
3. Le rôle de l'utilisateur (\`role === "ADMIN"\`).

Si l'une de ces conditions n'est pas remplie, le serveur renvoie immédiatement une redirection ou une erreur HTTP \`403 Forbidden\` sans jamais divulguer les données de la page.

> ⚠️ **Erreur fréquente à éviter :** Ne stockez jamais de mots de passe en clair dans votre base de données. Utilisez toujours l'algorithme de hachage adaptatif **bcrypt** avec un facteur de coût d'au moins 10.`
    },
    {
      id: "dev-4",
      title: "4. Intégration de passerelles de paiement et gestion des Webhooks",
      order: 4,
      content: `## Encaisser de l'argent en direct avec Wave Checkout API

L'intégration d'une passerelle de paiement repose sur deux piliers : l'initialisation de la session de paiement et la confirmation asynchrone par Webhook.

\`\`\`
┌───────────────────────────────────────────────────────────────────────┐
│                    CYCLE COMPLET DE PAIEMENT WAVE                     │
│                                                                       │
│ 1. Client clique "Payer" ──► POST /api/checkout                       │
│ 2. Serveur appelle Wave  ──► Crée Checkout Session Wave               │
│ 3. Client est redirigé   ──► Valide sur l'application Wave mobile     │
│ 4. Wave notifie webhook  ──► POST /api/webhooks/wave (Serveur à serv.)│
│ 5. Serveur valide        ──► Vérifie signature HMAC, passe commande à │
│                              PAID, génère code d'accès et envoie email│
└───────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 3 impératifs absolus d'un Webhook de production :
1. **La vérification de signature cryptographique :** Vous devez vérifier le header de signature envoyé par Wave pour vous assurer que la requête provient bien des serveurs officiels de Wave et non d'un pirate.
2. **L'idempotence :** Un webhook peut être réémis plusieurs fois par le réseau en cas de latence. Si la commande est déjà marquée \`PAID\`, le webhook doit répondre avec succès immédiatement sans recréer un code en double.
3. **Le traitement non-bloquant des tâches secondaires :** Les envois d'e-mails ou de notifications ne doivent jamais bloquer la réponse HTTP \`200 OK\` renvoyée à Wave.

> 💡 **Conseil Pro du Terrain :** En environnement de développement local, mettez toujours en place un simulateur de checkout qui reproduit fidèlement la payload du webhook pour tester tout votre tunnel d'achat sans consommer de vrais soldes bancaires.`
    },
    {
      id: "dev-5",
      title: "5. Déploiement Cloud Vercel, Optimisation Core Web Vitals et CI/CD",
      order: 5,
      content: `## Mettre son application en production mondiale avec haute disponibilité

Déployer du code ne consiste pas à le copier sur un serveur FTP : c'est construire un pipeline continu d'intégration et de livraison (CI/CD).

\`\`\`
┌──────────────────────────────────────────────────────────────────────┐
│                    LE PIPELINE CI/CD VERS LA PRODUCTION              │
│                                                                      │
│ [Git Commit / Push] ──► [GitHub Repository (main)]                   │
│                                   │                                  │
│ Vercel Webhook Déclenché ◄────────┘                                  │
│          │                                                           │
│          ├──► npm install & prisma generate                          │
│          ├──► next build (Vérification TypeScript & Pages statiques)  │
│          └──► Déploiement mondial sur le réseau Edge CDN             │
└──────────────────────────────────────────────────────────────────────┘
\`\`\`

### Optimisation des Core Web Vitals :
- **LCP (Largest Contentful Paint) :** Utilisez le composant \`next/image\` avec la propriété \`priority\` sur votre logo et couverture au-dessus de la ligne de flottaison pour précharger les images critiques.
- **CLS (Cumulative Layout Shift) :** Définissez toujours les dimensions \`width\` et \`height\` ou le ratio d'aspect sur vos conteneurs pour éviter que la page ne saute au chargement.
- **Font Optimization :** Servez vos polices de caractères localement avec \`next/font\` pour éliminer les allers-retours vers Google Fonts.

### Félicitations !
Vous avez désormais toutes les clés techniques, architecturales et opérationnelles pour concevoir des applications web complètes, monétisables et sécurisées.`
    }
  ]
};

export const OTHER_EBOOKS: EbookData[] = [
  MARKETING_EBOOK,
  PRODUCTIVITY_EBOOK,
  DEV_EBOOK,
];
