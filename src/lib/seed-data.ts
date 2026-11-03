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
  shortDesc: "Le guide complet de référence pour lancer son e-commerce rentable en Afrique de A à Z avec 25 000 à 100 000 FCFA.",
  description: "Le guide pratique et complet de référence pour lancer, développer et rentabiliser une activité e-commerce en Afrique francophone (Sénégal, Côte d'Ivoire, Cameroun, Mali, etc.). Découvrez comment démarrer avec 25 000 à 100 000 FCFA, dénicher des produits gagnants parmi 50 idées testées sur le terrain, commander sur Alibaba/1688, maîtriser le transit aérien et maritime, créer des campagnes rentables sur Facebook et TikTok sans gaspiller votre budget, et convertir en masse sur WhatsApp Business avec les 50 techniques de persuasion et le dictionnaire complet.",
  learnPoints: [
    "Lancer un e-commerce avec petit budget : plans d'action chiffrés pour 25 000, 30 000, 50 000 et 100 000 FCFA",
    "Méthodologie exacte du Produit Gagnant (Winning Product) et liste des 50 idées rentables en Afrique",
    "Formation complète Sourcing Alibaba, 1688 et Transit vers l'Afrique (Fret Aérien au kg et Maritime au CBM)",
    "Campagnes publicitaires rentables de A à Z sur Facebook Ads, Instagram Ads et TikTok Ads",
    "Création de contenu vidéo vendeur (UGC) : le script de 30 secondes pour stopper le scroll",
    "Comment éviter de perdre de l'argent en publicité : règles strictes de coupe et calcul du ROAS seuil",
    "WhatsApp Business pour la vente en masse : tunnels directs et scripts de closing mot pour mot",
    "Les 50 techniques psychologiques d'influence et de persuasion pour convaincre n'importe quel prospect",
    "Techniques de vente pendant les fêtes : stratégies pour Tabaski, Korité, Ramadan, Noël et Saint-Valentin",
    "Les 100 erreurs de débutant en e-commerce et le Dictionnaire Complet du E-commerce de A à Z"
],
  targetAudience: "Entrepreneurs, commerçants, créateurs de contenu et toute personne souhaitant lancer un business e-commerce rentable au Sénégal et en Afrique francophone.",
  price: 5000,
  category: "E-commerce",
  coverImage: "/images/mockups-reference.jpg",
  chapters: [
    {
      id: "chapitre-1",
      title: "1. Démarrer avec petit budget (25 000, 30 000, 50 000 ou 100 000 FCFA) & Modèles économiques",
      order: 1,
      content: `## Démarrer son e-commerce sans gros capital en Afrique de l'Ouest

L'une des plus grandes illusions en entrepreneuriat digital est de croire qu'il faut disposer de plusieurs millions pour se lancer. En Afrique francophone (Sénégal, Côte d'Ivoire, Cameroun, Mali, Bénin), la vitesse d'exécution et la rotation rapide du cash priment toujours sur le montant de départ.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   LE CYCLE VERTUEUX DU PETIT BUDGET                    │
│                                                                        │
│  [Petit Stock Test] ──► [Publicité Ciblée] ──► [Closing WhatsApp]      │
│          ▲                                             │               │
│          │                                             ▼               │
│  [Réinvestissement du Profit] ◄── [Encaissement Wave / Cash Delivery]  │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 2 modèles économiques expliqués simplement :

1. **Le modèle Cash on Delivery (COD) local avec stock tampon :**
   Vous achetez une petite quantité de produits (localement à Sandaga, Adjamé ou via des grossistes), vous faites la promotion en ligne, vous livrez par coursier et vous encaissez en espèces ou par Wave à la livraison. C'est le modèle N°1 en Afrique car il lève le frein de la méfiance.
2. **Le modèle Dropshipping ou Pré-commande :**
   Vous créez les visuels et lancez la publicité avant même d'avoir le stock en main. Dès que les premières commandes fermes tombent, vous achetez immédiatement chez le grossiste pour livrer le client dans les 24h à 48h. Ce modèle permet de tester sans immobiliser son argent.

---

### Allocation exacte du budget au franc près :

| Budget de départ | Achat stock test | Budget publicitaire Meta/TikTok | Avance logistique & Livraisons | Trésorerie de sécurité | Objectif de vente |
|---|---|---|---|---|---|
| **25 000 FCFA** | 12 000 FCFA (4 unités à 3 000 FCFA) | 8 000 FCFA (2 000 FCFA/jour sur 4 jours) | 3 000 FCFA (frais coursier initial) | 2 000 FCFA | 4 ventes à 12 500 FCFA = 50 000 FCFA |
| **30 000 FCFA** | 15 000 FCFA (5 unités à 3 000 FCFA) | 10 000 FCFA (2 500 FCFA/jour sur 4 jours) | 3 000 FCFA | 2 000 FCFA | 5 ventes à 13 000 FCFA = 65 000 FCFA |
| **50 000 FCFA** | 25 000 FCFA (8 unités à 3 000 FCFA) | 15 000 FCFA (3 000 FCFA/jour sur 5 jours) | 5 000 FCFA | 5 000 FCFA | 8 ventes à 14 000 FCFA = 112 000 FCFA |
| **100 000 FCFA** | 50 000 FCFA (15 unités + fret avion) | 30 000 FCFA (5 000 FCFA/jour sur 6 jours) | 10 000 FCFA | 10 000 FCFA | 15 ventes à 15 000 FCFA = 225 000 FCFA |

> 💡 **La règle d'or de la trésorerie :** Ne réinjectez jamais 100% de vos gains dans des dépenses personnelles. Pendant les 3 premiers mois, réinvestissez 70% des bénéfices dans l'achat de stock et l'augmentation progressive de votre budget publicitaire.`
    },
    {
      id: "chapitre-2",
      title: "2. Créer une boutique en ligne ultra-rapide et crédible",
      order: 2,
      content: `## Concevoir une boutique qui convertit sans complexité inutile

En Afrique de l'Ouest, plus de 85% du trafic internet provient de smartphones connectés en 3G ou 4G parfois instable. Un site qui met plus de 3 secondes à charger perd immédiatement la moitié de ses visiteurs.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   STRUCTURE DE LA LANDING PAGE GAGNANTE                │
│                                                                        │
│ 1. [En-tête épuré : Logo EM + Reassurance Wave + Contact WhatsApp]     │
│ 2. [Titre Choc orienté RÉSULTAT : Résoudre une douleur précise]        │
│ 3. [Vidéo Démonstration produit : 30 secondes en situation réelle]     │
│ 4. [3 Bénéfices majeurs en puces avec icônes contrastées]              │
│ 5. [Preuves Sociales : Captures WhatsApp d'avis clients locaux]        │
│ 6. [Offre Irrésistible : Prix barré + Cadeau offert + Livraison 24h]   │
│ 7. [Formulaire Simplifié 3 champs : Nom + Téléphone + Ville/Quartier]  │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 5 éléments de réassurance indispensables sur votre boutique :
1. **Le badge officiel Wave Checkout & Paiement à la livraison :** Rassurer immédiatement le client qu'il ne paiera aucun frais caché.
2. **Le bouton flottant WhatsApp :** Permet à l'acheteur d'échanger en direct avec vous pour poser une question avant de commander.
3. **La promesse de livraison claire :** "Livraison express en 24h à Dakar / Abidjan et 48h dans les régions".
4. **La garantie satisfait ou remplacé :** "Testez votre produit à la réception devant le livreur".
5. **Formulaire de commande direct sans inscription préalable :** Ne demandez jamais de mot de passe ou d'adresse postale complexe (qui n'existe pas dans la plupart de nos quartiers).`
    },
    {
      id: "chapitre-3",
      title: "3. Trouver le produit gagnant, 5 sites indispensables & 50 idées de produits en Afrique",
      order: 3,
      content: `## La science du Winning Product pour le marché africain

Un produit gagnant (Winning Product) n'est pas un produit que vous trouvez "joli" : c'est un produit qui résout un problème douloureux, avec une marge confortable, et qui déclenche une émotion d'achat immédiate.

### Les 4 critères mathématiques obligatoires :
1. **L'effet "Painkiller" (Analgésique) :** Le produit soulage une souffrance réelle (douleurs physiques, complexe esthétique, gain de temps en cuisine, sécurité du foyer).
2. **La règle de marge minimale de 3x :**
   Si vous achetez le produit à 3 000 FCFA, vous devez le vendre au minimum à 10 000 FCFA ou 12 000 FCFA. Pourquoi ?
   - Coût d'achat : 3 000 FCFA
   - Coût pub moyen par vente (CPA) : 2 500 FCFA
   - Coût de livraison moyenne : 1 500 FCFA
   - Marge nette restante : 3 000 à 5 000 FCFA de pur bénéfice net.
3. **L'effet visuel "Waouh" :** Le produit doit surprendre dès les 3 premières secondes d'une vidéo.
4. **Introuvable au coin de la rue :** Si votre client peut descendre à la boutique du quartier ou au marché central et trouver le même article au même prix, vous ne vendrez pas.

---

### Les 5 sites incontournables pour dénicher des produits :
1. **Alibaba.com :** La référence mondiale pour négocier avec les fabricants et commander en gros.
2. **1688.com :** La plateforme chinoise locale (prix usine 30% à 50% moins cher qu'Alibaba). Utilisez Google Traduction ou l'application mobile avec recherche par photo.
3. **AliExpress.com :** Parfait pour commander 1 ou 2 échantillons rapides afin de vérifier la qualité avant de faire un stock.
4. **Taobao.com :** Idéal pour repérer les toutes dernières tendances virales asiatiques avant tout le monde.
5. **CJ Dropshipping :** Pour le traitement automatisé des commandes et l'emballage personnalisé de vos colis.

*Outils d'espionnage gratuits complémentaires :* **Facebook Ad Library** (Bibliothèque publicitaire Meta) et **TikTok Creative Center**.

---

### Les 50 Idées de Produits Gagnants à Fort Potentiel en Afrique :

#### 🍳 Maison, Cuisine & Vie Quotidienne (10 produits) :
1. **Mini blender portable USB rechargeable** (Smoothies, jus frais pour le bureau)
2. **Balai magique essoreur 360° avec seau compartimenté** (Lavage des carreaux sans se mouiller les mains)
3. **Scelleur thermique de sachets portable** (Conserver les aliments entamés contre l'humidité)
4. **Hachoir manuel et électrique multifonction** (Oignons, piment, viande hachée sans larmes)
5. **Pompe à eau électrique automatique pour bonbonne** (Remplacer les pompes manuelles dures)
6. **Bouchons de vidange anti-odeurs et anti-cafards pour douche** (Problème récurrent des salles de bain)
7. **Organisateur d'épices rotatif suspendu** (Gain de place dans les cuisines modernes)
8. **Poêle antiadhésive à 4 compartiments ronds** (Préparer des crêpes et œufs parfaits en 3 minutes)
9. **Lampe solaire extérieure avec détecteur de mouvement** (Sécuriser les cours et couloirs sans facture d'électricité)
10. **Défroisseur vapeur vertical portable** (Repasser les boubous et chemises rapidement sans table à repasser)

#### 💄 Beauté, Soins & Minceur (10 produits) :
11. **Épilateur laser compact à lumière pulsée (IPL)** (Épilation définitive à domicile)
12. **Brosse soufflante séchante 3-en-1** (Brushing rapide sans aller au salon)
13. **Ceinture de sudation amincissante en néoprène triple compression** (Ventre plat immédiat sous les vêtements)
14. **Gaine sculptante invisible sans couture** (Remodeler la silhouette sous les robes de cérémonie)
15. **Kit complet de soin et pousse pour barbe d'homme avec sérum et dermaroller**
16. **Patchs amincissants détox à base de plantes**
17. **Masque facial purifiant en stick au thé vert** (Nettoyer les points noirs en 10 minutes)
18. **Aspirateur d'impuretés et comédons à aspiration sous vide**
19. **Lisseur professionnel plaques en titane pour cheveux crépus et texturés**
20. **Vernis semi-permanent avec mini-lampe UV portative rechargeable**

#### 🩺 Santé, Posture & Confort Physique (8 produits) :
21. **Correcteur de posture dorsal magnétique réglable** (Soulage les douleurs de dos des employés de bureau)
22. **Coussin d'assise ergonomique en mousse à mémoire de forme** (Pour chauffeurs et longues heures assises)
23. **Pistolet de massage musculaire à percussion 6 vitesses**
24. **Genouillère de compression articulée avec ressorts latéraux** (Soutien pour personnes âgées et sportifs)
25. **Semelles orthopédiques anti-choc et anti-fatigue** (Pour ceux qui marchent beaucoup)
26. **Oreiller ergonomique cervical anti-torticolis**
27. **Appareil d'électrostimulation EMS pour massage des pieds et jambes lourdes**
28. **Tensiomètre électronique parlant au poignet ou bras** (Pour surveiller la tension des parents à domicile)

#### 🚗 Automobile & Mobilité (8 produits) :
29. **Support de téléphone pour voiture avec capteur automatique et charge induction sans fil**
30. **Mini compresseur d'air numérique portable rechargeable** (Gonfler les pneus de voiture/moto en cas de crevaison lente)
31. **Kit de rénovation et polissage pour phares jaunis**
32. **Aspirateur sans fil ultra-puissant pour habitacle de voiture**
33. **Caméra embarquée Dashcam avant et arrière grand angle HD**
34. **Émetteur Bluetooth FM pour voiture avec charge rapide USB-C**
35. **Pare-soleil rétractable pliable pour pare-brise** (Protéger du soleil ardent d'Afrique de l'Ouest)
36. **Bâche de protection anti-poussière et imperméable pour véhicules**

#### 🔒 Sécurité, High-Tech & Gadgets Pratiques (7 produits) :
37. **Mini caméra de surveillance Wi-Fi invisible avec vision nocturne** (Surveiller sa boutique ou sa maison depuis son téléphone)
38. **Cadenas connecté intelligent à empreinte digitale étanche** (Plus besoin de clés pour les magasins et valises)
39. **Traceur GPS antivol miniature pour moto et voiture** (Localisation en direct par SMS et application)
40. **Batterie externe solaire haute capacité 30 000 mAh avec câbles intégrés**
41. **Écouteurs sans fil étanches avec réduction de bruit et boîtier miroir indicateur de batterie**
42. **Mini projecteur vidéo portable cinéma maison HDMI/Wi-Fi**
43. **Prise électrique connectée intelligente contrôlable à distance par smartphone**

#### 👶 Enfants, Famille & Organisation (7 produits) :
44. **Tapis d'éveil pour bébé pliable, étanche et anti-choc 200x180 cm**
45. **Tondeuse à cheveux ultra-silencieuse et sécurisée pour nourrissons et enfants**
46. **Sac à dos à langer multifonctionnel avec lit berceau pliable intégré**
47. **Chauffe-biberon nomade USB pour déplacements et voyages**
48. **Montre intelligente de géolocalisation pour enfant avec appel SOS et bouton d'urgence**
49. **Tablette d'écriture LCD magique réutilisable pour enfants** (Dessiner sans tacher les murs)
50. **Organisateur suspendu de penderie avec compartiments transparents anti-poussière**`
    },
    {
      id: "chapitre-4",
      title: "4. Formation Sourcing Alibaba, 1688 et Transit vers l'Afrique (Air & Mer)",
      order: 4,
      content: `## Maîtriser la chaîne d'approvisionnement internationale

Acheter directement en usine en Chine permet d'obtenir des marges insolentes de 400% à 800%. Mais pour réussir, il faut comprendre le fonctionnement des transitaires et la vérification des fournisseurs.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│               LE PROCESSUS COMPLET DU SOURCING CHINE ──► AFRIQUE       │
│                                                                        │
│ 1. [Recherche produit sur 1688 / Alibaba]                             │
│ 2. [Vérification fournisseur : Gold Supplier + Trade Assurance]        │
│ 3. [Négociation prix + Demande de vidéos réelles du stock]             │
│ 4. [Paiement sécurisé Alipay / WeChat / Carte / Compte Pro]            │
│ 5. [Expédition par le fournisseur vers l'entrepôt Guangzhou / Yiwu]    │
│ 6. [Transit international vers Dakar / Abidjan : Fret Aérien ou Mer]   │
│ 7. [Réception et dédouanement simplifié au bureau local du transitaire]│
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 3 règles anti-arnaques sur Alibaba :
1. **Toujours exiger la "Trade Assurance" :** Votre argent est séquestré par Alibaba tant que vous n'avez pas confirmé la réception du stock conforme.
2. **Vérifier l'âge du compte :** Ne traitez qu'avec des fournisseurs ayant au moins 2 ou 3 ans d'ancienneté.
3. **Le test de l'échantillon vidéo :** Demandez au fournisseur d'écrire votre prénom sur un papier à côté du produit et de vous envoyer une vidéo WhatsApp. S'il refuse, c'est un intermédiaire qui n'a pas le stock.

---

### Tout comprendre sur les transitaires vers l'Afrique :

Il existe 2 modes d'expédition principaux vers Dakar, Abidjan, Douala, Bamako, Cotonou :

| Type de Fret | Délai moyen | Mode de facturation | Coût moyen estimé | Idéal pour quel type de produit ? |
|---|---|---|---|---|
| **Fret Aérien (Air Cargo)** | 7 à 12 jours | Au Kilogramme (kg) | 6 500 à 9 000 FCFA / kg | Produits légers, forte valeur, haute technologie, tests rapides |
| **Fret Maritime (Sea Cargo)** | 35 à 55 jours | Au Mètre Cube (CBM) | 180 000 à 250 000 FCFA / CBM | Produits volumineux, lourds (machines, matelas, chaises, gros cartons) |

*Comment faire concrètement ?*
Vous contactez une agence de transit locale à Dakar ou Abidjan (ex: GP Chine, Sahel Transit, Transfret, etc.). Ils vous donnent une adresse d'entrepôt à Guangzhou ou Yiwu avec votre code client unique (ex: \`DAK-7749\`). Vous donnez cette adresse à votre fournisseur chinois. Dès que le colis arrive en Afrique, le transitaire vous appelle pour récupérer votre carton au bureau !`
    },
    {
      id: "chapitre-5",
      title: "5. Lancer une campagne publicitaire rentable de A à Z (Facebook Ads, Instagram & TikTok)",
      order: 5,
      content: `## Construire un système d'acquisition de clients automatique

La publicité payante est l'accélérateur ultime de votre e-commerce. Elle transforme 5 000 FCFA investis le matin en 25 000 FCFA de chiffre d'affaires le soir.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   STRUCTURE PRO D'UNE CAMPAGNE META ADS                │
│                                                                        │
│ [CAMPAGNE] ──► Objectif : Ventes (Conversions) ou Prospects WhatsApp   │
│       │        Budget Advantage (CBO) : 5 000 FCFA / jour              │
│       │                                                                │
│       ├──► [ENSEMBLE DE PUB 1] : Ciblage Large Sénégal (22 - 50 ans)   │
│       │         ├──► Créatif A : Vidéo Démonstration problème/solution │
│       │         ├──► Créatif B : Vidéo Témoignage client face caméra   │
│       │         └──► Créatif C : Carrousel 3 images avec prix choc     │
│       │                                                                │
│       └──► [ENSEMBLE DE PUB 2] : Ciblage Centres d'intérêt affinitaires│
│                 └──► Mêmes créatifs A, B, C pour comparer les coûts    │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### TikTok Ads : La pépite sous-exploitée en Afrique francophone
TikTok possède un coût publicitaire (CPM) jusqu'à **3 fois moins cher que Facebook**. Les jeunes actifs et les femmes y passent des heures chaque jour.
- Pour performer sur TikTok, n'utilisez jamais une publicité qui ressemble à une affiche de supermarché.
- Votre vidéo doit ressembler à un contenu organique tourné avec un smartphone ordinaire.

---

### Création de contenu pour la vente : L'anatomie d'une vidéo virale en 30 secondes

\`\`\`
[00s - 03s] : LE HOOK (L'accroche visuelle et sonore)
              "Arrêtez de gaspiller de l'argent dans..." ou "Si vous avez mal au dos, regardez ça !"
              Mouvement rapide ou situation choquante pour forcer l'arrêt du scroll.

[04s - 10s] : LE PROBLÈME RÉEL (Toucher la douleur)
              Montrer la frustration quotidienne du client (la fatigue, le désordre, la douleur).

[11s - 22s] : LA SOLUTION (Démonstration du produit en action)
              Résultat magique et instantané. Gros plan sur l'utilisation facile.

[23s - 30s] : L'OFFRE IRRÉSISTIBLE + APPEL À L'ACTION (CTA)
              "Commandez aujourd'hui pour 12 500 FCFA au lieu de 20 000 FCFA !
              Paiement à la livraison ou par Wave. Cliquez sur le lien sous la vidéo !"
\`\`\``
    },
    {
      id: "chapitre-6",
      title: "6. Comment éviter de perdre de l'argent en publicité (Règles strictes de coupe & KPIs)",
      order: 6,
      content: `## Protéger son capital publicitaire : Les règles strictes des pros

La plupart des débutants qui perdent de l'argent en publicité commettent une erreur fatale : ils laissent tourner des publicités déficitaires par espoir, ou ils modifient leurs campagnes toutes les 4 heures.

### Les 3 règles d'or de coupe (Kill Rules) :
1. **Règle 1 : La limite de dépense sans résultat**
   Si une publicité a dépensé l'équivalent de votre CPA cible (ex: 2 500 FCFA) sans générer aucun contact WhatsApp ou commande, **COUPEZ-LA IMMÉDIATEMENT**. Ne cherchez pas à comprendre.
2. **Règle 2 : Ne jamais modifier une annonce qui gagne**
   Si une publicité fonctionne bien, ne touchez à rien ! Si vous voulez changer le texte ou augmenter le budget de plus de 20%, **dupliquez la publicité**, ne modifiez jamais l'original sous peine de réinitialiser l'algorithme d'apprentissage.
3. **Règle 3 : Le temps d'apprentissage obligatoire de 24h à 48h**
   Laissez tourner une nouvelle campagne au moins 24 à 48 heures avant de tirer des conclusions. Le matin, les coûts sont souvent plus élevés qu'en fin d'après-midi.

---

### Le calcul mathématique du ROAS Seuil (Break-even ROAS) :

Pour savoir exactement quand vous gagnez de l'argent :

\`\`\`
Prix de vente : 15 000 FCFA
Coût du produit (achat + port) : 4 000 FCFA
Coût moyen de livraison : 1 500 FCFA
--------------------------------------------------
Marge brute réelle disponible : 15 000 - 4 000 - 1 500 = 9 500 FCFA

Votre CPA Cible maximal acceptable est de 4 500 FCFA (pour conserver 5 000 FCFA de bénéfice net par vente).

Break-even ROAS = 15 000 / 9 500 = 1.58
\`\`\`

Si votre publicité génère un ROAS supérieur à **2.0**, vous gagnez de l'argent à chaque commande enregistrée !`
    },
    {
      id: "chapitre-7",
      title: "7. WhatsApp Business pour la vente & Les 50 techniques pour convaincre un client",
      order: 7,
      content: `## Transformer WhatsApp en machine à encaisser des commandes

En Afrique de l'Ouest, le closing sur WhatsApp convertit 4 à 5 fois plus qu'un simple formulaire web anonyme. Le client veut parler à un être humain, entendre une voix rassurante et avoir la certitude qu'il sera livré.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│                   LE TUNNEL PUBLICITÉ ──► WHATSAPP ──► ENCAISSEMENT    │
│                                                                        │
│ 1. [Publicité Facebook/TikTok avec bouton "Discuter sur WhatsApp"]     │
│ 2. [Message pré-rempli automatique du prospect]                        │
│ 3. [Réponse automatique instantanée avec photo & tarif officiel]       │
│ 4. [Closing humain : Message vocal court et chaleureux]                │
│ 5. [Validation de l'adresse et expédition coursier]                    │
│ 6. [Encaissement Wave / Espèces et fidélisation]                       │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les scripts exacts de closing mot pour mot :

#### Script face à l'objection "C'est trop cher" :
> *"Je comprends parfaitement votre remarque Monsieur [Nom]. La différence avec les modèles bas de gamme que l'on trouve parfois sur le marché, c'est que le nôtre est garanti d'origine avec [Bénéfice clé]. Si vous avez le moindre souci sous 30 jours, nous vous le remplaçons gratuitement à domicile. De plus, nous vous offrons la livraison aujourd'hui !"*

#### Script face à l'objection "Je vais réfléchir" :
> *"Bien sûr Monsieur [Nom], prenez le temps de réfléchir. Sachez juste que notre stock pour cette promotion à [Prix] FCFA est limité à 5 unités pour la journée de livraison de demain. Si vous validez avant 18h, je vous réserve votre colis et vous êtes livré dès demain matin. Préférez-vous être livré le matin ou l'après-midi ?"*

---

### Les 50 Techniques Psychologiques pour Convaincre un Client :

1. **L'ancrage de prix :** Toujours afficher le prix régulier barré (ex: ~~25 000 FCFA~~ 15 000 FCFA).
2. **La rareté quantitative :** "Il ne reste que 4 pièces disponibles à notre dépôt de Dakar".
3. **L'urgence temporelle :** "Tarif promotionnel réservé aux 10 premières commandes du jour".
4. **La preuve sociale visuelle :** Partager une capture d'écran d'un client qui dit merci sur WhatsApp.
5. **La garantie "Zéro Risque" :** Ouvrez le colis devant le coursier avant de payer.
6. **Le cadeau bonus gratuit :** Offrir un petit accessoire d'une valeur perçue de 2 000 FCFA.
7. **La voix humaine (Message vocal) :** Envoyer un vocal poli de 15 secondes en wolof/français crée une confiance immédiate.
8. **L'offre groupée (Bundle 1+1=3) :** "1 unité à 14 000 FCFA, les 2 à 22 000 FCFA (soit 6 000 FCFA d'économie immédiate)".
9. **Le contraste perceptif :** Comparer le coût du produit au prix d'une consultation médicale ou d'un restaurant.
10. **L'effet de meute :** "Plus de 1 450 familles à Dakar utilisent déjà ce modèle".
11. **L'exclusivité VIP :** Traiter le prospect comme un client privilégié.
12. **La question à double choix :** "Préférez-vous être livré chez vous ou à votre bureau ?" (Ne demandez jamais "Voulez-vous acheter ?").
13. **La simplification extrême :** "Donnez-moi simplement votre quartier et votre numéro, le livreur s'occupe de tout".
14. **Le traitement préventif de l'objection :** Aborder le doute du client avant même qu'il ne le formule.
15. **Le rappel de la douleur :** "Continuer à supporter ce mal de dos vous empêche de bien dormir chaque nuit".
16. **L'histoire vécue (Storytelling) :** Raconter comment le produit a aidé une maman à économiser 2h par jour.
17. **L'autorité de certification :** Mettre en avant les normes de fabrication (CE, ISO, RoHS).
18. **La rapidité de prise en charge :** Répondre sur WhatsApp en moins de 3 minutes.
19. **L'étiquette de statut :** Valoriser le client ("Pour les personnes exigeantes sur la qualité").
20. **Le silence stratégique :** Après avoir donné le prix, laisser le prospect répondre en premier.
21. **La personnalisation du prénom :** Répéter le prénom du prospect avec respect.
22. **L'essai sans engagement :** "Si l'article ne correspond pas à la photo, vous le refusez sans payer 1 franc".
23. **La métaphore parlante :** Comparer un blender puissant à un moteur de moto compact.
24. **Le compte à rebours visuel :** Utiliser des stickers ou émojis sablier ⏳ pour marquer le temps.
25. **La franchise désarmante :** Admettre un petit défaut mineur pour rendre les gros points forts 100% crédibles.
26. **L'engagement graduel :** Faire dire "oui" 3 fois sur des détails évidents avant de clore la vente.
27. **Le sentiment de dette (Réciprocité) :** Donner un conseil gratuit de valeur avant de proposer le produit.
28. **L'effet de surprise :** Glisser une carte de remerciement personnalisée dans le carton.
29. **La relance non agressive :** "Bonjour Aminata, j'ai mis votre colis de côté, confirmez-vous l'envoi pour aujourd'hui ?".
30. **L'appel à la fierté familiale :** "Vos enfants vont adorer apprendre avec cet outil ludique".
31. **Le calcul d'amortissement journalier :** "15 000 FCFA sur 1 an, cela revient à seulement 40 FCFA par jour".
32. **Le pack cadeau prêt à offrir :** Emballage soigné pour les anniversaires et fêtes.
33. **La validation par photo réelle :** Envoyer une photo du colis prêt à partir avec le nom du client dessus.
34. **La flexibilité de paiement :** "Vous pouvez payer en espèces ou par Wave au livreur".
35. **L'accompagnement post-achat :** "Dès réception, écrivez-moi et je vous enverrai la vidéo d'utilisation en français".
36. **La peur de regretter (FOMO) :** "La dernière fois, la rupture de stock a duré 6 semaines".
37. **L'argument économique direct :** "Vous économiserez 25 000 FCFA de réparateur dès la première semaine".
38. **La recommandation chaleureuse :** "C'est exactement le modèle que j'ai offert à ma propre mère".
39. **Le cadrage temporel :** "D'ici ce week-end, votre problème sera totalement réglé".
40. **La mise en avant de l'effort évité :** "Fini de passer 2 heures à frotter le sol à genoux".
41. **L'appel à l'identité moderne :** "Adoptez la méthode moderne que tous les professionnels utilisent".
42. **La clarté sur la provenance :** Être transparent sur les caractéristiques techniques.
43. **La formulation affirmative :** Utiliser "Quand vous recevrez votre colis" plutôt que "Si vous commandez".
44. **L'échantillon d'avis négatif résolu :** Montrer comment votre service client a réglé un problème rapidement.
45. **Le sentiment d'appartenance :** "Bienvenue dans la communauté des clients satisfaits d'Ecom Mastery".
46. **La vente croisée naturelle :** "90% de nos clients prennent également l'accessoire de rechange pour 3 000 FCFA".
47. **Le choix par défaut valorisé :** Cocher d'office l'option "Pack 2 articles (Meilleure vente)".
48. **La promesse d'assistance 7j/7 :** Le client sait qu'il n'est pas abandonné après l'achat.
49. **La tonalité polie et professionnelle :** L'usage de formules de politesse impeccables ("Avec plaisir cher Monsieur").
50. **La clôture par validation d'expédition :** "C'est bien noté ! Votre commande est transmise au service expédition pour livraison demain."`
    },
    {
      id: "chapitre-8",
      title: "8. Techniques de vente pendant les Fêtes (Tabaski, Korité, Noël, Ramadan, St-Valentin)",
      order: 8,
      content: `## Maximiser son chiffre d'affaires sur les périodes festives

Les périodes de fête représentent plus de **40% du chiffre d'affaires annuel** de nombreux e-commerçants en Afrique francophone. Durant ces semaines, les ménages dépensent avec enthousiasme, mais la concurrence est féroce.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│               LE CALENDRIER D'OR DU COMMERCE AFRICAIN                  │
│                                                                        │
│ • RAMADAN & KORITÉ : Cuisine, Déco, Vêtements, Parfums, Cadeaux        │
│ • TABASKI (AÏD)    : Aiguiseurs, Barbecues, Hachoirs, Épices, Couteaux │
│ • FIN D'ANNÉE/NOËL : Jouets enfants, Gadgets high-tech, Montres        │
│ • ST-VALENTIN      : Coffrets beauté, Parfumerie, Bijoux, Sacs         │
│ • RENTRÉE SCOLAIRE : Sacs à dos, Tablettes d'apprentissage, Luminaires │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Les 4 leviers pour exploser vos ventes pendant les fêtes :
1. **Créer des "Packs Festifs" (Bundles) :**
   Ne vendez jamais un produit seul pendant les fêtes. Associez 2 ou 3 articles complémentaires dans un joli coffret pour faire passer votre panier moyen de 12 000 FCFA à 28 000 FCFA.
2. **Le levier psychologique de la date butoir :**
   "Commandez avant mardi 18h pour une livraison garantie chez vous avant la fête de la Tabaski". Les acheteurs ont une peur panique de ne pas être prêts le jour J.
3. **Réactiver sa base de clients existants par message WhatsApp/SMS :**
   Vous avez déjà les numéros de téléphone de tous vos clients passés. Envoyez-leur une offre privée exclusive de fête : **coût d'acquisition = 0 FCFA** !
4. **Organiser des créneaux de livraison dédiés :**
   Les 3 jours avant une grande fête sont saturés de trafic. Définissez des livreurs réservés exclusivement à votre boutique pour éviter les annulations de dernière minute.`
    },
    {
      id: "chapitre-9",
      title: "9. Les 100 erreurs de débutant en e-commerce (et comment les éviter)",
      order: 9,
      content: `## Le catalogue complet des 100 pièges qui ruinent les boutiques débutantes

La plupart des échecs en e-commerce ne sont pas dus au manque de chance, mais à des erreurs évitables répétées. Voici les 100 erreurs recensées sur le terrain :

### I. Erreurs sur le Produit & le Sourcing (1 à 25) :
1. Choisir un produit parce qu'on l'aime personnellement, sans valider le besoin du marché.
2. Vendre un produit trop fragile qui casse pendant le transport des livreurs en moto.
3. Vendre un produit trop lourd dont le coût de fret aérien détruit toute votre marge.
4. Choisir un produit avec une marge brute inférieure à 3x son coût d'achat.
5. Vendre des produits qui existent déjà partout au marché local au même prix.
6. Ne pas commander d'échantillon pour tester soi-même la qualité avant de lancer la pub.
7. Commander 200 unités d'un produit jamais testé sur le marché.
8. Commander chez un fournisseur sans badge Trade Assurance sur Alibaba.
9. Ne pas négocier le prix de gros et la quantité minimale (MOQ).
10. Choisir un produit saisonnier trop tard (commander les articles de Noël en décembre).
11. Vendre des produits avec des tailles complexes de vêtements générant 50% de retours.
12. Vendre des contrefaçons de grandes marques risquant le blocage de compte Facebook.
13. Ne pas vérifier que le voltage des appareils électriques est adapté à l'Afrique (220V).
14. Oublier de demander au fournisseur des vidéos et photos d'usine exploitables.
15. Ne pas avoir un deuxième fournisseur de secours en cas de rupture de stock.
16. Sous-estimer le délai de livraison du fret maritime (45 jours réels).
17. Ne pas vérifier le sérieux du transitaire local avant de lui confier ses colis en Chine.
18. Confondre le poids réel et le poids volumétrique lors du calcul du fret aérien.
19. Ne pas demander d'emballage renforcé (cartons double cannelure) pour le transport.
20. Changer de produit tous les 3 jours sans persévérer sur un créneau précis.
21. Ne pas vérifier si le produit nécessite des piles ou un adaptateur spécifique non fourni.
22. Choisir un produit avec un mode d'emploi uniquement en chinois sans traduction.
23. Oublier d'inspecter chaque article avant de le transmettre au livreur.
24. Vendre des produits cosmétiques sans composition claire ni garantie d'innocuité.
25. Vendre un produit technique sans savoir expliquer son fonctionnement au client.

### II. Erreurs sur la Publicité & le Marketing (26 à 50) :
26. Lancer une campagne publicitaire avec un budget trop faible pour que l'IA apprenne.
27. Modifier son annonce toutes les 4 heures en paniquant.
28. Ne pas avoir installé correctement le Pixel Meta sur sa boutique.
29. Utiliser des images floues ou des photos professionnelles occidentales impersonnelles.
30. Oublier d'insérer un appel à l'action clair dans sa vidéo ("Cliquez ici pour commander").
31. Cibler trop d'intérêts restreints au lieu de laisser l'algorithme élargir son audience.
32. Mettre du texte sur 80% de l'image de la publicité.
33. Ne pas tester au moins 3 à 5 créatifs publicitaires différents pour un même produit.
34. Rédiger un texte publicitaire trop long, sans puces ni mise en page aérée.
35. Promettre des résultats miraculeux mensongers qui font bloquer son Business Manager.
36. Ignorer les commentaires sous ses publicités Facebook sans modération quotidienne.
37. Laisser tourner une publicité déficitaire par simple attachement affectif.
38. Augmenter le budget d'une pub de 300% d'un coup au lieu de l'augmenter de 20% par 20%.
39. Ne pas exclure les acheteurs récents pour éviter de payer de la pub pour rien.
40. Faire de la publicité sans avoir vérifié que son formulaire de commande fonctionne.
41. Utiliser une musique protégée par des droits sur TikTok Ads entraînant la coupure du son.
42. Ne pas analyser son taux de clic sortant (CTR) pour détecter si l'accroche est bonne.
43. Arrêter la publicité le week-end alors que les gens ont le plus de temps pour commander.
44. Copier mot pour mot la publicité d'un concurrent sans adapter le ton au marché local.
45. Oublier de faire du retargeting (reciblage) des personnes ayant visité la page sans acheter.
46. Ne pas mettre en avant le moyen de paiement Wave et le paiement à la livraison.
47. Ne pas afficher le prix clairement dans l'annonce pour éviter les curieux non qualifiés.
48. Utiliser un compte publicitaire personnel au lieu d'un Business Manager professionnel.
49. Ne pas avoir de compte publicitaire de secours en cas de restriction temporaire.
50. Penser que la publicité est magique alors que le produit ou l'offre est médiocre.

### III. Erreurs sur la Logistique & les Livreurs (51 à 75) :
51. Travailler avec des livreurs indépendants sans contrat ni engagement de tarif clair.
52. Ne pas confirmer les commandes par appel vocal ou message WhatsApp avant l'envoi.
53. Laisser partir un coursier sans numéro de téléphone secondaire du client.
54. Avoir un taux de retour supérieur à 20% sans chercher à comprendre les motifs.
55. Promettre une livraison en 2h alors que le coursier met 6h à cause des embouteillages.
56. Ne pas former ses livreurs à être polis, propres et ponctuels face aux clients.
57. Laisser le livreur garder l'argent liquide encaissé plus de 24h sans versement Wave.
58. Ne pas disposer de monnaie sur le livreur (rendre la monnaie sur un billet de 10 000 FCFA).
59. Envoyer un colis sans emballage protecteur discret.
60. Ne pas informer le client quand le livreur prend la route vers son domicile.
61. Ne pas avoir au moins 2 ou 3 services de livraison partenaires pour faire jouer la concurrence.
62. Accepter de livrer des zones lointaines non rentables sans supplément de transport convenu.
63. Oublier de noter les numéros de suivi ou les décharges de livraison signées.
64. Ne pas relancer immédiatement un client injoignable par un SMS poli.
65. Blâmer le client pour un retard causé en réalité par le livreur.
66. Ne pas prévoir de livraisons le dimanche pour les clients qui ne sont chez eux que le week-end.
67. Laisser traîner des cartons ouverts et abîmés chez soi sans inventaire précis.
68. Ne pas compter son stock physique chaque fin de semaine.
69. Livrer un produit sans facture ou bon de livraison officiel avec son logo.
70. Refuser le paiement Wave au pied de l'immeuble pour exiger uniquement du cash papier.
71. Ne pas tester les piles ou le moteur avant que le coursier ne parte.
72. Perdre des clients parce que le coursier s'est perdu sans GPS ni indications claires.
73. Payer le livreur à l'heure plutôt qu'à la course livrée avec succès.
74. Oublier d'indiquer clairement les horaires de passage souhaités par le client.
75. Négliger le service après-vente quand un client signale un produit endommagé en route.

### IV. Erreurs sur la Trésorerie, Gestion & Mindset (76 à 100) :
76. Mélanger l'argent de la boutique avec son argent de poche personnel.
77. Dépenser les bénéfices du jour en sorties avant d'avoir racheté le stock suivant.
78. Ne pas tenir un tableau Excel ou un carnet rigoureux des entrées et sorties d'argent.
79. Oublier d'intégrer les frais de transaction Wave ou bancaires dans son calcul de marge.
80. Ne pas prévoir de trésorerie tampon pour faire face aux retards de décaissement des livreurs.
81. Croire que le chiffre d'affaires est égal au bénéfice net.
82. Fixer ses prix par rapport à ses propres moyens au lieu de la valeur perçue par le client.
83. Baisser ses prix dès qu'une vente tarde au lieu d'améliorer son offre et sa réassurance.
84. Ne pas réclamer son argent aux livreurs le jour même ou le lendemain matin.
85. Vouloir déléguer tout le travail dès le premier mois sans maîtriser soi-même les bases.
86. Travailler sans objectifs chiffrés quotidiens (ex: 5 ventes nettes par jour).
87. Se décourager après 3 jours sans commande alors qu'on est en phase de test.
88. Payer des abonnements logiciels mensuels coûteux en dollars dont on n'a pas besoin.
89. Ne pas demander les avis des premiers clients pour alimenter sa preuve sociale.
90. Ignorer la puissance de la recommandation de bouche-à-oreille entre collègues de bureau.
91. Ne pas constituer de réserve pour les imprévus (colis endommagé, retard de bateau).
92. Oublier de fidéliser sa clientèle avec des promotions réservées aux anciens acheteurs.
93. Négliger son image de marque en envoyant des messages WhatsApp avec plein de fautes.
94. Vouloir vendre 15 produits différents en même temps au lieu de dominer 1 seul produit gagnant.
95. Ne pas sécuriser ses accès informatiques (mots de passe faibles, pas de double authentification).
96. Sous-estimer le temps nécessaire pour répondre aux clients le soir et le week-end.
97. Ne pas se former en continu sur les nouvelles fonctionnalités de Meta et TikTok.
98. Penser que la concurrence est un problème alors que le marché africain est immense.
99. Répondre sèchement à un client mécontent au lieu de le transformer en ambassadeur.
100. Remettre toujours à demain le lancement de sa première campagne publicitaire.`
    },
    {
      id: "chapitre-10",
      title: "10. Le dictionnaire complet du e-commerce de A à Z",
      order: 10,
      content: `## Le glossaire exhaustif des termes essentiels du commerce digital

Pour réussir dans le business en ligne, vous devez maîtriser le langage des professionnels et des régies publicitaires. Voici l'ensemble des termes décryptés avec des définitions claires et concrètes :

- **ABO (Ad Set Budget Optimization) :** Mode où le budget publicitaire est fixé au niveau de chaque ensemble de publicités, plutôt qu'au niveau de la campagne globale.
- **AOV (Average Order Value / Panier Moyen) :** Montant moyen dépensé par un client lors d'un achat. *Calcul : Chiffre d'affaires total / Nombre de commandes.*
- **Ad Creative (Créatif) :** Le visuel ou la vidéo utilisé dans votre publicité pour capter l'attention.
- **B/L (Bill of Lading / Connaissement maritime) :** Document officiel délivré par la compagnie maritime attestant de la prise en charge de vos marchandises sur le navire.
- **Break-even ROAS (ROAS Seuil) :** Le retour sur dépense publicitaire minimum nécessaire pour ne pas perdre d'argent.
- **CBM (Cubic Meter / Mètre Cube) :** Unité de volume utilisée par les transitaires maritimes pour facturer le fret (Longueur × Largeur × Hauteur en mètres).
- **CBO (Campaign Budget Optimization / Advantage Budget) :** Fonctionnalité de Meta où l'algorithme répartit automatiquement le budget quotidien entre les meilleures publicités.
- **Closing :** L'étape finale de la conversation (notamment sur WhatsApp) où l'on amène le prospect à valider sa commande ferme.
- **COD (Cash On Delivery / Paiement à la livraison) :** Modèle où le client règle sa commande en espèces ou par Wave au moment où le livreur lui remet le colis en main propre.
- **Conversion :** L'action souhaitée réalisée par un visiteur (remplir le formulaire, envoyer un message WhatsApp, acheter).
- **CPA (Coût Par Acquisition / Coût par Achat) :** Montant moyen dépensé en publicité pour générer une vente. *Calcul : Dépense publicitaire totale / Nombre de ventes.*
- **CPC (Coût Par Clic) :** Ce que vous payez chaque fois qu'un utilisateur clique sur le lien de votre publicité. En Afrique, un bon CPC se situe souvent entre 25 et 50 FCFA.
- **CPM (Coût Pour Mille) :** Prix facturé par Facebook ou TikTok pour diffuser votre publicité 1 000 fois auprès des utilisateurs.
- **Cross-selling (Vente Croisée) :** Proposer un produit complémentaire au moment de la commande (ex: proposer des piles ou une pochette avec un appareil).
- **CTR (Click-Through Rate / Taux de Clic) :** Pourcentage de personnes qui cliquent sur votre annonce après l'avoir vue. Un bon CTR sur Meta dépasse 1.5% à 2%.
- **Dropshipping :** Vente de produits en ligne sans détenir de stock physique préalable.
- **Fret Aérien (Air Cargo) :** Transport rapide de marchandises par avion, généralement facturé au poids réel ou volumétrique (délais : 7-12 jours).
- **Fret Maritime (Sea Cargo) :** Transport économique de conteneurs par bateau, facturé au CBM (délais : 35-55 jours).
- **Hook (Accroche) :** Les 3 premières secondes d'une vidéo publicitaire conçues pour arrêter immédiatement le défilement (scroll) de l'utilisateur.
- **Idempotence :** Propriété technique d'un système informatique ou webhook de ne traiter une action financière qu'une seule fois, même en cas de réémission réseau.
- **Landing Page (Page d'atterrissage) :** Page web épurée et persuasive spécialement conçue pour convertir un visiteur en acheteur d'un produit spécifique.
- **Lead (Prospect) :** Contact qualifié d'un client potentiel (nom, numéro de téléphone WhatsApp, adresse e-mail).
- **LTV (Lifetime Value / Valeur Vie Client) :** Total des bénéfices générés par un même client tout au long de sa relation avec votre marque.
- **Marge Brute :** Différence entre le prix de vente et le coût d'achat du produit hors frais marketing.
- **Marge Nette :** Ce qu'il vous reste réellement dans la poche après avoir déduit l'achat, la publicité, la livraison, les emballages et les taxes.
- **MOQ (Minimum Order Quantity) :** Quantité minimale de commande exigée par un fabricant sur Alibaba ou 1688 pour lancer une production.
- **Painkiller Product (Produit Analgésique) :** Produit qui résout un problème douloureux urgent et vital pour le client, par opposition aux produits gadgets futiles (Vitamins).
- **Pixel Meta :** Bout de code installé sur votre site web permettant à Facebook et Instagram de suivre le comportement des visiteurs et d'optimiser les publicités.
- **Preuve Sociale (Social Proof) :** Témoignages, avis clients, captures d'écran WhatsApp et photos réelles démontrant que d'autres personnes ont acheté et sont ravies.
- **ROAS (Return On Ad Spend) :** Le multiple généré par chaque franc investi en publicité. *Calcul : Chiffre d'affaires généré par la pub / Dépense publicitaire.* Un ROAS de 3 signifie que 10 000 FCFA investis ont rapporté 30 000 FCFA.
- **Retargeting (Reciblage) :** Publicité ciblée spécifiquement vers les personnes qui ont déjà interagi avec votre page ou votre boutique mais qui n'ont pas encore acheté.
- **Scaling (Passage à l'échelle) :** Augmenter le budget publicitaire et le volume de commandes d'une campagne rentable sans faire chuter son retour sur investissement.
- **Sourcing :** La recherche, la sélection et la négociation avec les meilleurs fabricants ou grossistes pour obtenir vos produits au meilleur prix.
- **Trade Assurance :** Service de protection des acheteurs fourni par Alibaba garantissant le remboursement en cas de marchandise non livrée ou non conforme.
- **Transitaire :** Société logistique spécialisée dans le regroupage, le transport international et le dédouanement de vos cartons depuis la Chine vers l'Afrique.
- **UGC (User Generated Content) :** Contenu vidéo ou photo créé dans un style amateur authentique par des utilisateurs réels, beaucoup plus convaincant que les publicités traditionnelles.
- **Upsell (Montée en gamme) :** Proposer une version supérieure ou une plus grande quantité d'un produit avec une réduction attractive (ex: "Prenez-en 2 pour seulement 5 000 FCFA de plus").
- **Webhook :** Mécanisme de notification automatique en temps réel entre serveurs (ex: Wave envoyant une confirmation de paiement instantanée à votre site).
- **Winning Product (Produit Gagnant) :** Produit à forte demande, forte marge, visuellement impactant et facile à vendre en grande quantité sur internet.`
    },
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
