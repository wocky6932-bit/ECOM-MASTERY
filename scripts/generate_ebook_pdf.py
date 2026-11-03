import os
import sys
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

PDF_OUTPUT = "storage/ebooks/lancer-sa-boutique-en-ligne.pdf"
LOGO_PATH = "public/images/logo.png"

# Palette de marque ECOM MASTERY
NAVY = colors.HexColor("#0B1528")
ELECTRIC_BLUE = colors.HexColor("#0066FF")
SLATE_DARK = colors.HexColor("#1E293B")
SLATE_MUTED = colors.HexColor("#64748B")
SLATE_LIGHT = colors.HexColor("#F8FAFC")
BORDER_COLOR = colors.HexColor("#E2E8F0")
ACCENT_GREEN = colors.HexColor("#10B981")

class NumberedCanvas(canvas.Canvas):
    """Générateur de canvas à deux passes pour numéroter correctement 'Page X sur Y' et insérer l'en-tête/pied de page de marque."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_header_footer(num_pages)
            super().showPage()
        super().save()

    def draw_header_footer(self, total_pages):
        # Ne rien afficher sur la page de couverture
        if self._pageNumber == 1:
            return

        self.saveState()
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(SLATE_MUTED)

        # En-tête
        self.drawString(54, 800, "ECOM MASTERY")
        self.setFont("Helvetica", 8)
        self.drawString(135, 800, "— Lancer sa boutique en ligne : Le Guide Pratique")
        
        # Logo miniature dans l'en-tête
        if os.path.exists(LOGO_PATH):
            try:
                self.drawImage(LOGO_PATH, 545, 792, width=16, height=16, preserveAspectRatio=True, mask='auto')
            except Exception:
                pass

        self.setStrokeColor(BORDER_COLOR)
        self.setLineWidth(0.5)
        self.line(54, 790, 560, 790)

        # Pied de page
        self.line(54, 50, 560, 50)
        self.setFont("Helvetica", 8)
        self.setFillColor(SLATE_MUTED)
        self.drawString(54, 38, "Learn. Grow. Succeed. • Édition Officielle Ecom Mastery")
        page_str = f"Page {self._pageNumber} sur {total_pages}"
        self.drawRightString(560, 38, page_str)

        self.restoreState()


def create_ebook():
    doc = SimpleDocTemplate(
        PDF_OUTPUT,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=60,
        bottomMargin=60
    )

    styles = getSampleStyleSheet()

    # Styles personnalisés
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=34,
        textColor=colors.white,
        alignment=1, # Center
        spaceAfter=15
    )

    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=13,
        leading=18,
        textColor=colors.HexColor("#93C5FD"),
        alignment=1,
        spaceAfter=25
    )

    h1_style = ParagraphStyle(
        'ChapHeading',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=NAVY,
        spaceBefore=18,
        spaceAfter=12,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=ELECTRIC_BLUE,
        spaceBefore=14,
        spaceAfter=8,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyMain',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=15,
        textColor=SLATE_DARK,
        spaceAfter=10
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=SLATE_DARK,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=6
    )

    callout_style = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=NAVY
    )

    callout_body = ParagraphStyle(
        'CalloutBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=SLATE_DARK
    )

    story = []

    # =========================================================================
    # 1. PAGE DE COUVERTURE PREMIUM
    # =========================================================================
    story.append(Spacer(1, 40))

    # Tableau stylisé pour simuler la jaquette sombre
    cover_elements = []

    # Logo
    if os.path.exists(LOGO_PATH):
        from reportlab.platypus import Image as RLImage
        logo_img = RLImage(LOGO_PATH, width=70, height=70)
        cover_elements.append(logo_img)
        cover_elements.append(Spacer(1, 15))

    p_badge = Paragraph(
        "<font size='9' color='#60A5FA'><b>GUIDE PRATIQUE & STRATÉGIQUE — ÉDITION 2026</b></font>",
        ParagraphStyle('CoverBadge', parent=styles['Normal'], alignment=1)
    )
    cover_elements.append(p_badge)
    cover_elements.append(Spacer(1, 25))

    p_title = Paragraph(
        "LANCER SA BOUTIQUE<br/><font color='#38BDF8'>EN LIGNE</font>",
        title_style
    )
    cover_elements.append(p_title)

    p_desc = Paragraph(
        "Le guide complet pour choisir un produit gagnant, trouver ses premiers clients<br/>et développer une activité e-commerce rentable en Afrique de l'Ouest.",
        subtitle_style
    )
    cover_elements.append(p_desc)
    cover_elements.append(Spacer(1, 40))

    p_price_badge = Paragraph(
        "<font size='10' color='#FFFFFF'><b>TARIF OFFICIEL : 5 000 FCFA (XOF) • PAIEMENT SÉCURISÉ WAVE</b></font>",
        ParagraphStyle('PriceBadge', parent=styles['Normal'], alignment=1)
    )
    cover_elements.append(p_price_badge)
    cover_elements.append(Spacer(1, 40))

    p_footer_cover = Paragraph(
        "<font size='11' color='#FFFFFF'><b>ECOM MASTERY</b></font><br/>"
        "<font size='8' color='#94A3B8'>LEARN. GROW. SUCCEED. • DAKAR, SÉNÉGAL</font>",
        ParagraphStyle('CoverFooter', parent=styles['Normal'], alignment=1)
    )
    cover_elements.append(p_footer_cover)

    # Box englobante sombre
    cover_table = Table([[cover_elements]], colWidths=[500])
    cover_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), NAVY),
        ('TOPPADDING', (0,0), (-1,-1), 40),
        ('BOTTOMPADDING', (0,0), (-1,-1), 40),
        ('LEFTPADDING', (0,0), (-1,-1), 30),
        ('RIGHTPADDING', (0,0), (-1,-1), 30),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOX', (0,0), (-1,-1), 2, ELECTRIC_BLUE),
    ]))
    story.append(cover_table)

    story.append(PageBreak())

    # =========================================================================
    # 2. SOMMAIRE & NOTICE LÉGALE
    # =========================================================================
    story.append(Paragraph("TABLE DES MATIÈRES", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ELECTRIC_BLUE, spaceBefore=4, spaceAfter=15))

    toc_data = [
        [Paragraph("<b>Chapitre 1 : Introduction & Réalité du Marché E-commerce</b>", body_style), Paragraph("<b>Page 3</b>", body_style)],
        [Paragraph("• L'essor fulgurant des paiements mobiles (Wave, Mobile Money)", bullet_style), ""],
        [Paragraph("• Pourquoi l'Afrique de l'Ouest est le terrain idéal en 2026", bullet_style), ""],
        [Paragraph("<b>Chapitre 2 : Trouver son Produit Gagnant & Valider l'Offre</b>", body_style), Paragraph("<b>Page 4</b>", body_style)],
        [Paragraph("• Les 4 critères d'un produit e-commerce à forte marge", bullet_style), ""],
        [Paragraph("• Valider la demande avant d'investir un seul franc", bullet_style), ""],
        [Paragraph("<b>Chapitre 3 : Créer une Boutique Crédible et Rassurante</b>", body_style), Paragraph("<b>Page 5</b>", body_style)],
        [Paragraph("• Simplicité de navigation et tunnels d'achat ultra-rapides", bullet_style), ""],
        [Paragraph("• Les éléments de confiance obligatoires (transparence, contact, mentions)", bullet_style), ""],
        [Paragraph("<b>Chapitre 4 : Stratégies d'Acquisition Client (Meta, TikTok, WhatsApp)</b>", body_style), Paragraph("<b>Page 6</b>", body_style)],
        [Paragraph("• Publicités sponsorisées avec petit budget (dès 2 000 FCFA/jour)", bullet_style), ""],
        [Paragraph("• Le closing redoutable sur WhatsApp Business", bullet_style), ""],
        [Paragraph("<b>Chapitre 5 : Gestion Logistique, Livraison & Fidélisation</b>", body_style), Paragraph("<b>Page 7</b>", body_style)],
        [Paragraph("• Fiabiliser les livreurs et limiter les refus de colis", bullet_style), ""],
        [Paragraph("• Transformer un acheteur unique en client récurrent", bullet_style), ""],
        [Paragraph("<b>Conclusion & Feuille de Route d'Action sur 14 Jours</b>", body_style), Paragraph("<b>Page 8</b>", body_style)],
    ]

    toc_table = Table(toc_data, colWidths=[420, 80])
    toc_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
    ]))
    story.append(toc_table)
    story.append(Spacer(1, 20))

    # Avertissement légal / Copyright
    notice_text = (
        "<b>© 2026 ECOM MASTERY — Tous droits réservés.</b><br/>"
        "Cet ebook est protégé par le droit d'auteur. Toute reproduction, diffusion publique, "
        "revente ou partage non autorisé sans accord écrit de l'éditeur est strictement interdit. "
        "Chaque copie numérique délivrée sur la plateforme est rattachée à une licence personnelle unique."
    )
    notice_table = Table([[Paragraph(notice_text, callout_body)]], colWidths=[500])
    notice_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), SLATE_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('LEFTPADDING', (0,0), (-1,-1), 16),
        ('RIGHTPADDING', (0,0), (-1,-1), 16),
        ('TOPPADDING', (0,0), (-1,-1), 12),
        ('BOTTOMPADDING', (0,0), (-1,-1), 12),
    ]))
    story.append(notice_table)

    story.append(PageBreak())

    # =========================================================================
    # 3. CHAPITRE 1
    # =========================================================================
    story.append(Paragraph("CHAPITRE 1 : INTRODUCTION & RÉALITÉ DU MARCHÉ", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=12))

    story.append(Paragraph(
        "Le commerce en ligne en Afrique francophone connaît une accélération historique. "
        "Longtemps freiné par le manque d'infrastructures bancaires et la méfiance envers les cartes de crédit, "
        "le secteur a trouvé son catalyseur décisif : <b>l'adoption massive du Mobile Money et en particulier de Wave</b>.",
        body_style
    ))

    story.append(Paragraph(
        "Aujourd'hui, un client à Dakar, Abidjan ou Saint-Louis effectue ses achats depuis son smartphone "
        "et valide un transfert en quelques secondes. Pour l'entrepreneur, cette révolution signifie une chose fondamentale : "
        "<b>le marché est mûr et les clients sont prêts à acheter en ligne</b>, dès lors qu'ils bénéficient d'une offre claire "
        "et d'un processus de commande simple.",
        body_style
    ))

    story.append(Paragraph("Les 3 changements majeurs à comprendre en 2026 :", h2_style))
    story.append(Paragraph("<b>1. Le mobile avant tout :</b> Plus de 88% de vos visiteurs visiteront votre boutique sur smartphone. Tout design qui n'est pas optimisé au millimètre pour mobile est voué à l'échec.", bullet_style))
    story.append(Paragraph("<b>2. La fin des barrières techniques :</b> Il n'est plus nécessaire d'être ingénieur informatique pour lancer une boutique performante et sécurisée.", bullet_style))
    story.append(Paragraph("<b>3. L'exigence de confiance :</b> Les consommateurs sont sollicités en permanence. Ils n'achètent qu'auprès de marques qui inspirent une autorité professionnelle immédiate.", bullet_style))

    # Box Appel à l'action
    box_chap1 = [
        Paragraph("💡 RÈGLE D'OR ECOM MASTERY", callout_style),
        Spacer(1, 4),
        Paragraph("N'attendez pas d'avoir un catalogue de 50 produits pour débuter. Les boutiques les plus rentables en Afrique de l'Ouest démarrent avec <b>un seul produit star</b> parfaitement maîtrisé et marketé.", callout_body)
    ]
    t_box1 = Table([[box_chap1]], colWidths=[500])
    t_box1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#EFF6FF")),
        ('LINELEFT', (0,0), (-1,-1), 3, ELECTRIC_BLUE),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 12),
    ]))
    story.append(Spacer(1, 10))
    story.append(t_box1)

    story.append(PageBreak())

    # =========================================================================
    # 4. CHAPITRE 2
    # =========================================================================
    story.append(Paragraph("CHAPITRE 2 : TROUVER SON PRODUIT GAGNANT", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=12))

    story.append(Paragraph(
        "Le choix du produit représente 60% de votre réussite commerciale. Une erreur fréquente des débutants est de vouloir "
        "vendre ce qu'ils aiment personnellement, sans vérifier s'il existe une demande solvable et prête à payer.",
        body_style
    ))

    story.append(Paragraph("La grille d'évaluation du Produit Idéal (Score Ecom Mastery) :", h2_style))

    criteres_data = [
        [Paragraph("<b>Critère clé</b>", body_style), Paragraph("<b>Exigence minimale</b>", body_style), Paragraph("<b>Pourquoi c'est vital</b>", body_style)],
        [Paragraph("<b>1. Résolution d'un problème</b>", body_style), Paragraph("Douleur claire ou gain évident", body_style), Paragraph("Les achats impulsifs sont déclenchés par une solution immédiate.", body_style)],
        [Paragraph("<b>2. Marge brute unitaire</b>", body_style), Paragraph("Minimum 5 000 à 10 000 FCFA", body_style), Paragraph("Permet d'absorber le coût publicitaire et la livraison locale.", body_style)],
        [Paragraph("<b>3. Disponibilité locale</b>", body_style), Paragraph("Stock disponible sous 24h", body_style), Paragraph("Évite les ruptures de stock fatales lors des pics de vente.", body_style)],
        [Paragraph("<b>4. Effet 'Wahoo' / Visuel</b>", body_style), Paragraph("Démonstration vidéo facile", body_style), Paragraph("Essentiel pour performer sur TikTok et les Reels Instagram.", body_style)],
    ]
    t_criteres = Table(criteres_data, colWidths=[140, 160, 200])
    t_criteres.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), SLATE_LIGHT),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_criteres)
    story.append(Spacer(1, 14))

    story.append(Paragraph("La méthode de pré-validation sans risque financier :", h2_style))
    story.append(Paragraph("Avant d'importer ou de commander un stock important :", body_style))
    story.append(Paragraph("• Réalisez une courte vidéo de démonstration du produit.", bullet_style))
    story.append(Paragraph("• Lancez une publication test sur Meta ou WhatsApp avec un bouton 'Commander'.", bullet_style))
    story.append(Paragraph("• Si vous obtenez 5 à 10 intentions d'achat fermes en 48 heures, vous avez un gagnant.", bullet_style))

    story.append(PageBreak())

    # =========================================================================
    # 5. CHAPITRE 3
    # =========================================================================
    story.append(Paragraph("CHAPITRE 3 : CRÉER UNE BOUTIQUE CRÉDIBLE & RASSURANTE", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=12))

    story.append(Paragraph(
        "Sur Internet, vos visiteurs ne peuvent ni toucher le produit, ni vous regarder dans les yeux. "
        "Leur seule boussole pour décider d'acheter ou de quitter le site est <b>le sentiment de confiance immédiat</b> "
        "dégagé par votre interface.",
        body_style
    ))

    story.append(Paragraph("Les 5 piliers de la crédibilité digitale :", h2_style))
    story.append(Paragraph("<b>1. Une identité graphique soignée :</b> Bannissez les logos flous et les polices illisibles. Une charte minimaliste (fond blanc, typographie nette, bleu profond) convertit 3 fois mieux.", bullet_style))
    story.append(Paragraph("<b>2. Des tarifs sans ambiguïté :</b> Indiquez les prix clairs en Francs CFA (XOF). Les mauvaises surprises au panier font chuter la conversion de 70%.", bullet_style))
    story.append(Paragraph("<b>3. L'intégration de Wave :</b> Proposer Wave Checkout comme mode de paiement rassure immédiatement le client, car il reconnaît un écosystème familier et sécurisé.", bullet_style))
    story.append(Paragraph("<b>4. Un support client visible :</b> Intégrez un lien direct vers votre WhatsApp commercial sur toutes les pages importantes.", bullet_style))
    story.append(Paragraph("<b>5. Conditions et politiques transparentes :</b> Des pages CGV, Mentions Légales et Remboursement claires démontrent que vous opérez une véritable entreprise pérenne.", bullet_style))

    # Tableau comparatif : Boutique amateur vs Boutique Pro
    comp_data = [
        [Paragraph("<b>Boutique Amateur (Échec)</b>", body_style), Paragraph("<b>Boutique Ecom Mastery (Succès)</b>", body_style)],
        [Paragraph("• Trop d'animations et de couleurs criardes", bullet_style), Paragraph("• Interface épurée et typographie ultra-lisible", bullet_style)],
        [Paragraph("• Processus de commande long et complexe", bullet_style), Paragraph("• Achat direct en 2 clics (Wave Checkout)", bullet_style)],
        [Paragraph("• Pas de numéro ni d'adresse vérifiable", bullet_style), Paragraph("• Ligne WhatsApp directe et support réactif", bullet_style)],
        [Paragraph("• Photos génériques trouvées sur Google", bullet_style), Paragraph("• Visuels réels et vidéos de démonstration", bullet_style)],
    ]
    t_comp = Table(comp_data, colWidths=[245, 255])
    t_comp.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,-1), colors.HexColor("#FEF2F2")),
        ('BACKGROUND', (1,0), (1,-1), colors.HexColor("#F0FDF4")),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(Spacer(1, 10))
    story.append(t_comp)

    story.append(PageBreak())

    # =========================================================================
    # 6. CHAPITRE 4
    # =========================================================================
    story.append(Paragraph("CHAPITRE 4 : STRATÉGIES D'ACQUISITION CLIENT", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=12))

    story.append(Paragraph(
        "Avoir la plus belle boutique du monde ne sert à rien si personne ne la visite. "
        "L'acquisition de trafic qualifié est l'habileté numéro 1 de tout e-commerçant à succès.",
        body_style
    ))

    story.append(Paragraph("Les 3 canaux d'acquisition les plus puissants :", h2_style))

    story.append(Paragraph("<b>A. Les Vidéos Courtes Organiques (TikTok & Reels)</b>", body_style))
    story.append(Paragraph(
        "C'est aujourd'hui le levier le plus rapide pour générer vos premières ventes sans dépenser le moindre centime en publicité. "
        "Structure de vidéo qui cartonne :",
        bullet_style
    ))
    story.append(Paragraph("1. <b>L'accroche (0-3s) :</b> « Si vous avez ce problème précis, arrêtez tout et regardez ça. »", bullet_style))
    story.append(Paragraph("2. <b>La démonstration (3-15s) :</b> Montrez votre produit en action, sans fioritures.", bullet_style))
    story.append(Paragraph("3. <b>L'appel à l'action (15-20s) :</b> « Cliquez sur le lien en bio pour commander via Wave. »", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("<b>B. Meta Ads (Facebook & Instagram Ads)</b>", body_style))
    story.append(Paragraph(
        "Pour passer à l'échelle supérieure, Meta Ads permet de cibler précisément vos clients potentiels "
        "à Dakar, Thiès, Abidjan ou dans tout le pays. Commencez avec un budget de test de <b>3 000 à 5 000 FCFA par jour</b>.",
        body_style
    ))

    story.append(Spacer(1, 6))
    story.append(Paragraph("<b>C. WhatsApp Business & Closing Conversationnel</b>", body_style))
    story.append(Paragraph(
        "En Afrique de l'Ouest, WhatsApp n'est pas une simple messagerie : c'est le principal centre commercial numérique. "
        "Beaucoup de clients ont besoin d'échanger un message avant de finaliser. Configurez des réponses rapides, un catalogue "
        "professionnel et un message de bienvenue automatique.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # 7. CHAPITRE 5
    # =========================================================================
    story.append(Paragraph("CHAPITRE 5 : GESTION LOGISTIQUE, LIVRAISON & FIDÉLISATION", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=12))

    story.append(Paragraph(
        "La vente ne s'arrête pas au clic sur le bouton de commande : elle s'achève réellement "
        "lorsque le client a reçu son produit avec satisfaction. Dans le e-commerce de biens physiques ou numériques, "
        "l'expérience post-achat conditionne votre réputation à long terme.",
        body_style
    ))

    story.append(Paragraph("Comment diviser par 3 les retours et échecs de livraison :", h2_style))
    story.append(Paragraph("• <b>Confirmation téléphonique ou WhatsApp immédiate :</b> Appelez le client dans les 15 minutes suivant sa commande pour valider l'adresse exacte et l'horaire de passage.", bullet_style))
    story.append(Paragraph("• <b>Partenariats livreurs dédiés :</b> Travaillez avec 2 à 3 livreurs réguliers et bien rémunérés plutôt qu'avec des intermédiaires occasionnels non impliqués.", bullet_style))
    story.append(Paragraph("• <b>Message de suivi automatisé :</b> Envoyez un SMS ou un message Wave de confirmation lorsque le colis part en tournée.", bullet_style))

    story.append(Spacer(1, 10))
    story.append(Paragraph("La boucle de fidélisation (Faire racheter vos clients) :", h2_style))
    story.append(Paragraph(
        "Acquérir un nouveau client coûte entre 1 500 et 3 000 FCFA en publicité. "
        "Vendre à un client qui a déjà acheté chez vous ne coûte presque rien. "
        "Mettez en place :",
        body_style
    ))
    story.append(Paragraph("1. Une offre promotionnelle exclusive 10 jours après la première commande.", bullet_style))
    story.append(Paragraph("2. Un programme de recommandation (parrainage avec réduction de 1 000 FCFA).", bullet_style))
    story.append(Paragraph("3. Un groupe ou canal WhatsApp privé réservé à vos meilleurs clients.", bullet_style))

    story.append(PageBreak())

    # =========================================================================
    # 8. CONCLUSION & PLAN D'ACTION SUR 14 JOURS
    # =========================================================================
    story.append(Paragraph("FEUILLE DE ROUTE D'ACTION : 14 JOURS POUR LANCER", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=ELECTRIC_BLUE, spaceBefore=2, spaceAfter=14))

    plan_data = [
        [Paragraph("<b>Jours</b>", body_style), Paragraph("<b>Objectif opérationnel</b>", body_style), Paragraph("<b>Livrable concret</b>", body_style)],
        [Paragraph("<b>Jours 1 à 3</b>", body_style), Paragraph("Recherche et validation du produit", body_style), Paragraph("1 produit star validé avec marge > 5 000 FCFA", body_style)],
        [Paragraph("<b>Jours 4 à 6</b>", body_style), Paragraph("Création de l'offre et des visuels", body_style), Paragraph("3 vidéos TikTok et photos réelles du produit", body_style)],
        [Paragraph("<b>Jours 7 à 9</b>", body_style), Paragraph("Mise en place de la boutique Ecom Mastery", body_style), Paragraph("Boutique en ligne prête avec Wave Checkout", body_style)],
        [Paragraph("<b>Jours 10 à 12</b>", body_style), Paragraph("Lancement des premières campagnes", body_style), Paragraph("Publications organiques et tests sponsorisés", body_style)],
        [Paragraph("<b>Jours 13 à 14</b>", body_style), Paragraph("Premières ventes & optimisation", body_style), Paragraph("Livraison des 5 premières commandes clients", body_style)],
    ]
    t_plan = Table(plan_data, colWidths=[90, 210, 200])
    t_plan.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_plan)
    story.append(Spacer(1, 25))

    # Message de fin Ecom Mastery
    concl_box = [
        Paragraph("🚀 LE MOT DE LA FIN", ParagraphStyle('EndHeading', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=12, textColor=NAVY, alignment=1)),
        Spacer(1, 6),
        Paragraph(
            "Le savoir n'a de valeur que s'il est suivi d'une action immédiate. "
            "Ne cherchez pas la perfection le premier jour : concentrez-vous sur votre première vente. "
            "Chaque grand business a commencé par une seule commande validée. "
            "<br/><br/><b>Passez à l'action dès aujourd'hui !</b>",
            ParagraphStyle('EndText', parent=styles['Normal'], fontName='Helvetica', fontSize=10, leading=15, textColor=SLATE_DARK, alignment=1)
        ),
        Spacer(1, 10),
        Paragraph("<b>L'équipe Ecom Mastery</b><br/><font color='#0066FF'>Learn. Grow. Succeed.</font>", ParagraphStyle('Sign', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10, alignment=1))
    ]
    t_concl = Table([[concl_box]], colWidths=[500])
    t_concl.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), SLATE_LIGHT),
        ('BOX', (0,0), (-1,-1), 1.5, ELECTRIC_BLUE),
        ('PADDING', (0,0), (-1,-1), 18),
    ]))
    story.append(t_concl)

    # Construction du document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Ebook generated successfully at: {PDF_OUTPUT}")

if __name__ == "__main__":
    create_ebook()
