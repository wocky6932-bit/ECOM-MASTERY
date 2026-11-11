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
 coverImage: "/images/cover-boutique-en-ligne.jpg",
 chapters: [
 {
 id: "chapitre-1",
 title: "1. Démarrer avec petit budget (25 000, 30 000, 50 000 ou 100 000 FCFA) & Modèles économiques",
 order: 1,
 content: `## Démarrer son e-commerce sans gros capital en Afrique de l'Ouest

L'une des plus grandes illusions en entrepreneuriat digital est de croire qu'il faut disposer de plusieurs millions pour se lancer. En Afrique francophone (Sénégal, Côte d'Ivoire, Cameroun, Mali, Bénin), la vitesse d'exécution et la rotation rapide du cash priment toujours sur le montant de départ.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│ LE CYCLE VERTUEUX DU PETIT BUDGET │
│ │
│ [Petit Stock Test] ──► [Publicité Ciblée] ──► [Closing WhatsApp] │
│ ▲ │ │
│ │ ▼ │
│ [Réinvestissement du Profit] ◄── [Encaissement Wave / Cash Delivery] │
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

> **Conseil : La règle d'or de la trésorerie :** Ne réinjectez jamais 100% de vos gains dans des dépenses personnelles. Pendant les 3 premiers mois, réinvestissez 70% des bénéfices dans l'achat de stock et l'augmentation progressive de votre budget publicitaire.`
 },
 {
 id: "chapitre-2",
 title: "2. Créer une boutique en ligne ultra-rapide et crédible",
 order: 2,
 content: `## Concevoir une boutique qui convertit sans complexité inutile

En Afrique de l'Ouest, plus de 85% du trafic internet provient de smartphones connectés en 3G ou 4G parfois instable. Un site qui met plus de 3 secondes à charger perd immédiatement la moitié de ses visiteurs.

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│ STRUCTURE DE LA LANDING PAGE GAGNANTE │
│ │
│ 1. [En-tête épuré : Logo EM + Reassurance Wave + Contact WhatsApp] │
│ 2. [Titre Choc orienté RÉSULTAT : Résoudre une douleur précise] │
│ 3. [Vidéo Démonstration produit : 30 secondes en situation réelle] │
│ 4. [3 Bénéfices majeurs en puces avec icônes contrastées] │
│ 5. [Preuves Sociales : Captures WhatsApp d'avis clients locaux] │
│ 6. [Offre Irrésistible : Prix barré + Cadeau offert + Livraison 24h] │
│ 7. [Formulaire Simplifié 3 champs : Nom + Téléphone + Ville/Quartier] │
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

#### Maison, Cuisine & Vie Quotidienne (10 produits) :
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

#### Beauté, Soins & Minceur (10 produits) :
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

#### Santé, Posture & Confort Physique (8 produits) :
21. **Correcteur de posture dorsal magnétique réglable** (Soulage les douleurs de dos des employés de bureau)
22. **Coussin d'assise ergonomique en mousse à mémoire de forme** (Pour chauffeurs et longues heures assises)
23. **Pistolet de massage musculaire à percussion 6 vitesses**
24. **Genouillère de compression articulée avec ressorts latéraux** (Soutien pour personnes âgées et sportifs)
25. **Semelles orthopédiques anti-choc et anti-fatigue** (Pour ceux qui marchent beaucoup)
26. **Oreiller ergonomique cervical anti-torticolis**
27. **Appareil d'électrostimulation EMS pour massage des pieds et jambes lourdes**
28. **Tensiomètre électronique parlant au poignet ou bras** (Pour surveiller la tension des parents à domicile)

#### Automobile & Mobilité (8 produits) :
29. **Support de téléphone pour voiture avec capteur automatique et charge induction sans fil**
30. **Mini compresseur d'air numérique portable rechargeable** (Gonfler les pneus de voiture/moto en cas de crevaison lente)
31. **Kit de rénovation et polissage pour phares jaunis**
32. **Aspirateur sans fil ultra-puissant pour habitacle de voiture**
33. **Caméra embarquée Dashcam avant et arrière grand angle HD**
34. **Émetteur Bluetooth FM pour voiture avec charge rapide USB-C**
35. **Pare-soleil rétractable pliable pour pare-brise** (Protéger du soleil ardent d'Afrique de l'Ouest)
36. **Bâche de protection anti-poussière et imperméable pour véhicules**

#### Sécurité, High-Tech & Gadgets Pratiques (7 produits) :
37. **Mini caméra de surveillance Wi-Fi invisible avec vision nocturne** (Surveiller sa boutique ou sa maison depuis son téléphone)
38. **Cadenas connecté intelligent à empreinte digitale étanche** (Plus besoin de clés pour les magasins et valises)
39. **Traceur GPS antivol miniature pour moto et voiture** (Localisation en direct par SMS et application)
40. **Batterie externe solaire haute capacité 30 000 mAh avec câbles intégrés**
41. **Écouteurs sans fil étanches avec réduction de bruit et boîtier miroir indicateur de batterie**
42. **Mini projecteur vidéo portable cinéma maison HDMI/Wi-Fi**
43. **Prise électrique connectée intelligente contrôlable à distance par smartphone**

#### Enfants, Famille & Organisation (7 produits) :
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
│ LE PROCESSUS COMPLET DU SOURCING CHINE ──► AFRIQUE │
│ │
│ 1. [Recherche produit sur 1688 / Alibaba] │
│ 2. [Vérification fournisseur : Gold Supplier + Trade Assurance] │
│ 3. [Négociation prix + Demande de vidéos réelles du stock] │
│ 4. [Paiement sécurisé Alipay / WeChat / Carte / Compte Pro] │
│ 5. [Expédition par le fournisseur vers l'entrepôt Guangzhou / Yiwu] │
│ 6. [Transit international vers Dakar / Abidjan : Fret Aérien ou Mer] │
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
 content: `## I. Pourquoi faire de la publicité sur Facebook ?

Lorsque vous diffusez une simple publication sur votre page Facebook, seuls 2% à 5% de vos abonnés la voient. La publicité payante Facebook Ads vous permet au contraire de choisir avec une précision chirurgicale à qui vous voulez montrer vos produits.

> QUOTE: DIFFUSER UN MESSAGE À UN MILLION DE PERSONNES AU HASARD OU LE DIFFUSER À MILLE PERSONNES POTENTIELLEMENT INTÉRESSÉES N'A PAS LE MÊME IMPACT... N'EST-CE PAS ?

Avec Facebook, l'une des étapes les plus importantes dans la mise en place d'une campagne est le **choix de votre audience**. Vous attirez ainsi l'attention des bonnes personnes, vous leur diffusez un message sur-mesure pour votre business et surtout vous en analysez les retombées financières au centime près.

La grande variété des formats publicitaires immersifs (vidéos de démonstration, carrousels, stories, formats verticaux Reels), la possibilité d'analyser les résultats en temps réel ainsi que le coût très accessible en Afrique font de Facebook la plateforme incontournable pour votre stratégie e-commerce.

Facebook vous permet également de faire du **remarketing** (retargeting) : vous pouvez réadresser des publicités exclusives aux personnes qui ont déjà visité votre boutique ou entamé une discussion WhatsApp. L'outil technique qui rend cette magie possible est le **Pixel Facebook** (et l'API de Conversions Meta).

---

## II. Facebook Ads, comment ça marche ?

Pour créer une campagne publicitaire professionnelle, il faut impérativement utiliser les outils dédiés de Meta plutôt que de simplement cliquer sur le bouton bleu « Booster la publication » de votre page (qui gaspille votre budget sans ciblage avancé).

### 1. Le Gestionnaire de Publicité (Meta Ads Manager)
Facebook met à votre disposition un environnement complet accessible depuis votre ordinateur à l'adresse **business.facebook.com** ou depuis l'application mobile Gestionnaire de Publicités (Android et iOS).

Le nouveau Gestionnaire de publicités regroupe l'ancien Gestionnaire classique et les fonctionnalités avancées de Power Editor. Vous pouvez désormais :
- Créer, modifier, dupliquer et gérer plusieurs campagnes et ensembles de publicités en un seul clic.
- Contrôler vos budgets publicitaires au jour le jour (en FCFA, Euros ou Dollars).
- Consulter vos métriques de rentabilité : coût par clic (CPC), coût par prospect WhatsApp, et retour sur dépenses publicitaires (ROAS).

### 2. Création d'une campagne publicitaire
Dans le Gestionnaire de publicités, deux parcours de création s'offrent à vous :
- **La création guidée :** Elle vous assiste pas à pas à travers toutes les étapes de création de votre campagne, du choix de l'objectif jusqu'au paramétrage des visuels. Idéale pour démarrer en toute sécurité.
- **La création rapide :** Destinée aux annonceurs qui souhaitent structurer rapidement plusieurs ensembles de publicités et variantes créatives.

---

## III. Les objectifs publicitaires de Meta

> GOAL: COMME DANS TOUT PROJET, LA PREMIÈRE ÉTAPE PRIMORDIALE POUR CRÉER UNE PUBLICITÉ EST DE DÉFINIR UN OBJECTIF !

Les objectifs publicitaires sont les actions précises que vous souhaitez que les personnes entreprennent lorsqu'elles découvrent vos publicités. L'algorithme de Meta optimise la diffusion en montrant votre pub en priorité aux utilisateurs les plus susceptibles de réaliser cette action précise.

Meta Ads distingue **3 grands objectifs commerciaux** :
1. **La Notoriété :** Susciter de l'intérêt pour votre marque et faire découvrir votre existence à un maximum de personnes.
2. **La Considération :** Inciter les prospects à s'intéresser activement à vos produits, à regarder vos vidéos, à poser des questions ou à visiter votre boutique.
3. **La Conversion :** Encourager les personnes qualifiées à acheter votre produit, à passer commande en ligne ou à valider une livraison en direct.

\`\`\`
OBJECTIFS PUBLICITAIRES FACEBOOK
\`\`\`

> **Conseil : La recommandation pour démarrer en Afrique :**
> - **Si vous n'avez pas encore de boutique en ligne :** Choisissez l'objectif **Messages WhatsApp** (sous Considération / Prospects). L'utilisateur clique sur votre pub vidéo et arrive directement dans votre discussion WhatsApp Business pour finaliser la commande.
> - **Si vous avez votre boutique en ligne :** Choisissez l'objectif **Ventes / Conversions** avec l'événement « Achat » (Purchase) ou « Initialiser le paiement » (Initiate Checkout).

---

## IV. Le choix de l'audience et du ciblage laser

Après avoir fixé l'objectif, vous devez définir précisément qui verra votre publicité. C'est l'étape du **ciblage**. 

Lorsque vous créez une audience, vous disposez de 3 grandes options :

### 1. Le ciblage principal (Données démographiques & Centres d'intérêt)
Vous sélectionnez les utilisateurs selon leur pays, ville, tranche d'âge, sexe, langue et habitudes de consommation :

\`\`\`
CIBLAGE D'AUDIENCE FACEBOOK
\`\`\`

- **Lieux géographiques :** Ciblez les zones à forte concentration d'acheteurs et facilités de livraison (ex: Dakar et sa banlieue, Thiès, Mbour pour le Sénégal ; Abidjan : Cocody, Yopougon, Marcory pour la Côte d'Ivoire).
- **Tranche d'âge :** 22 à 48 ans (la tranche qui possède des revenus réguliers et utilise activement Wave / Orange Money).
- **Ciblage par centres d'intérêt :** Sélectionnez des centres d'intérêt affinitaires avec votre produit (ex: Soins de la peau, Shopping en ligne, Électronique, Décoration de maison).

### 2. Les audiences personnalisées (Custom Audiences)
Vous ciblez les personnes qui ont déjà eu un contact avec votre business :

\`\`\`
AUDIENCES PERSONNALISEES FACEBOOK
\`\`\`

- Votre liste de contacts clients existants (fichiers numéros de téléphone WhatsApp et emails).
- Les visiteurs de votre site web captés par le Pixel.
- Les personnes ayant envoyé un message ou interagi sur votre page Facebook ou compte Instagram ces 90 derniers jours.

### 3. Les audiences similaires (Lookalike)
Meta analyse le profil de vos meilleurs clients actuels et recherche automatiquement des dizaines de milliers d'autres personnes ayant les mêmes comportements d'achat dans votre pays. C'est l'arme secrète pour scaler vos ventes !

---

## V. Placement publicitaire : Où diffuser vos publicités ?

Après avoir sélectionné votre audience, vous devez choisir où vos publicités apparaîtront.

\`\`\`
PLACEMENTS PUBLICITAIRES FACEBOOK
\`\`\`

Deux méthodes s'offrent à vous :
- **Placements automatiques Advantage+ (Fortement recommandé) :** Facebook diffuse intelligemment votre pub là où le coût par résultat est le plus faible (Fils d'actualité, Stories, Reels, Messenger).
- **Placements manuels :** Vous cochez vous-même les emplacements souhaités si votre créatif est au format exclusif vertical 9:16 (Stories/Reels) ou carré 1:1 (Fil).

---

## VI. Budget et calendrier de diffusion

L'étape suivante consiste à définir le budget que vous voulez consacrer à la publicité et la période de diffusion.

\`\`\`
BUDGET ET CALENDRIER FACEBOOK
\`\`\`

Il existe 2 façons de configurer son budget :
- **Le budget quotidien :** La somme moyenne investie par jour (recommandé : **5 000 FCFA / jour** pour tester un produit en Afrique).
- **Le budget global :** La somme totale maximale allouée sur une durée fixe (ex: 35 000 FCFA sur 7 jours).
- **Le mode CBO (Advantage Campaign Budget) :** Vous allouez le budget au niveau de la campagne, et Meta répartit automatiquement les sous sur les ensembles de publicités qui vendent le plus.

---

## VII. Formats publicitaires & Storytelling de vente

Les formats publicitaires utilisés reflètent le storytelling que vous installez pour votre produit. Sur Meta : **Format = Image/Vidéo + Texte d'accroche (Copywriting)**.

\`\`\`
FORMATS PUBLICITAIRES FACEBOOK
\`\`\`

### L'anatomie d'une vidéo virale de vente en 30 secondes :
1. **[00s - 03s] Le Hook (L'accroche visuelle & sonore) :** Stoppez immédiatement le scroll avec un mouvement rapide, un avant/après frappant ou une question percutante (*« Si vous en avez marre de perdre du temps à... »*).
2. **[04s - 10s] La douleur réelle :** Montrez concrètement le problème quotidien vécu par votre client cible.
3. **[11s - 22s] La solution magique :** Démonstration éclatante du produit en train de résoudre le problème en situation réelle.
4. **[23s - 30s] L'offre irrésistible & Appel à l'action (CTA) :** Annoncez le prix promotionnel (ex: 12 500 FCFA), précisez la livraison rapide et le paiement à la réception (Wave ou Cash) et invitez à commander immédiatement.

---

## VIII. Analyser les résultats & Tests A/B (Split Testing)

Pour maximiser sa rentabilité et arrêter de gaspiller de l'argent, un e-commerçant professionnel ne devine jamais : il teste scientifiquement.

\`\`\`
TESTS AB FACEBOOK
\`\`\`

### Comparaison des Performances & Décision de Scaling :

\`\`\`
TESTS AB RESULTATS FACEBOOK
\`\`\`

### Le principe fondamental du Split Testing :
Les tests par répartition consistent à diffuser au moins deux versions d'une publicité à deux groupes d'audience similaires en changeant **une seule variable à la fois** :
- **Test de Créatif :** Même audience, mais Vidéo A (problème/solution) contre Vidéo B (témoignage déballage).
- **Test d'Audience :** Même vidéo, mais Audience 1 (Dakar 20-35 ans) contre Audience 2 (Dakar 35-50 ans).

Vous coupez immédiatement la variante perdante et allouez 100% du budget sur la variante victorieuse !

---

## IX. Le Pixel Facebook & l'API de Conversions : La machine à traquer les ventes

\`\`\`
PIXEL FACEBOOK ARCHITECTURE
\`\`\`

« Le Pixel Facebook est un outil d'analyse indispensable qui mesure l'efficacité de vos campagnes en suivant les actions entreprises par les visiteurs sur votre site web. »

### Pourquoi le Pixel est indispensable pour votre boutique en ligne :
1. **S'assurer que vos publicités sont montrées aux acheteurs réels :** L'algorithme apprend le profil précis de ceux qui sortent leur carte ou leur téléphone Wave pour payer.
2. **Créer des audiences personnalisées ultra-rentables :** Retargeting automatique des paniers abandonnés avec une offre de livraison gratuite.
3. **Générer des ventes automatiques en continu :** L'algorithme affine ses enchères jour après jour pour faire baisser votre coût par achat.

---

## X. TikTok Ads : La pépite sous-exploitée en Afrique

TikTok offre aujourd'hui un coût par vue (CPM) jusqu'à **3 fois inférieur à celui de Facebook**.
- **La règle d'or sur TikTok :** *« Don't make ads, make TikToks »*. N'utilisez jamais d'affiches publicitaires rigides. Tournez des vidéos authentiques au smartphone, en lumière naturelle, avec une voix-off dynamique en français ou en langue locale (Wolof, Baoulé, Bambara).
- Les vidéos courtes de 15 à 25 secondes montrant l'utilisation du produit génèrent un taux de conversion record auprès des jeunes actifs.`
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
│ LE TUNNEL PUBLICITÉ ──► WHATSAPP ──► ENCAISSEMENT │
│ │
│ 1. [Publicité Facebook/TikTok avec bouton "Discuter sur WhatsApp"] │
│ 2. [Message pré-rempli automatique du prospect] │
│ 3. [Réponse automatique instantanée avec photo & tarif officiel] │
│ 4. [Closing humain : Message vocal court et chaleureux] │
│ 5. [Validation de l'adresse et expédition coursier] │
│ 6. [Encaissement Wave / Espèces et fidélisation] │
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
24. **Le compte à rebours visuel :** Utiliser des stickers ou repères visuels de compte à rebours pour marquer l'urgence.
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
│ LE CALENDRIER D'OR DU COMMERCE AFRICAIN │
│ │
│ • RAMADAN & KORITÉ : Cuisine, Déco, Vêtements, Parfums, Cadeaux │
│ • TABASKI (AÏD) : Aiguiseurs, Barbecues, Hachoirs, Épices, Couteaux │
│ • FIN D'ANNÉE/NOËL : Jouets enfants, Gadgets high-tech, Montres │
│ • ST-VALENTIN : Coffrets beauté, Parfumerie, Bijoux, Sacs │
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
