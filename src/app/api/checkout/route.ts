import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { WaveService } from "@/lib/wave";
import { generateOrderNumber, hashPassword, generateAccessCode, hashCode } from "@/lib/auth";
import { INITIAL_EBOOK, OTHER_EBOOKS } from "@/lib/seed-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, name, email, phone } = body;

    if (!name || !email || !phone || !slug) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Récupérer le produit (dans la base ou seed data)
    let product = await prisma.product.findUnique({
      where: { slug },
    });

    if (!product) {
      // Trouver dans les seeds
      const allSeeds = [INITIAL_EBOOK, ...OTHER_EBOOKS];
      const found = allSeeds.find((b) => b.slug === slug) || INITIAL_EBOOK;

      product = await prisma.product.create({
        data: {
          title: found.title,
          slug: found.slug,
          shortDesc: found.shortDesc,
          description: found.description,
          learnPoints: JSON.stringify(found.learnPoints),
          targetAudience: found.targetAudience,
          price: found.price,
          currency: "XOF",
          coverImage: found.coverImage,
          category: found.category,
          chapters: JSON.stringify(found.chapters),
          status: "ACTIVE",
        },
      });
    }

    // Trouver ou créer l'utilisateur client
    let user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      // Générer un mot de passe temporaire initial haché
      const tempPasswordHash = await hashPassword("Mastery@" + Math.random().toString(36).substring(2, 8));
      user = await prisma.user.create({
        data: {
          name,
          email: email.toLowerCase(),
          phone,
          passwordHash: tempPasswordHash,
          role: "CLIENT",
        },
      });
    }

    // Créer la commande
    const orderNumber = generateOrderNumber();
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: user.id,
        productId: product.id,
        amount: product.price,
        currency: "XOF",
        status: "PENDING",
        customerName: name,
        customerEmail: email.toLowerCase(),
        customerPhone: phone,
      },
    });

    // Générer dès maintenant le code d'accès unique pour ce client
    const plainCode = generateAccessCode();
    const codeHash = hashCode(plainCode);
    await prisma.accessCode.create({
      data: {
        code: plainCode,
        codeHash,
        userId: user.id,
        productId: product.id,
        orderId: order.id,
        status: "ACTIVE",
      },
    });

    // Initialiser la progression de lecture
    await prisma.readingProgress.upsert({
      where: {
        userId_productId: {
          userId: user.id,
          productId: product.id,
        },
      },
      create: {
        userId: user.id,
        productId: product.id,
        lastPosition: 1,
        progressPct: 0,
      },
      update: {},
    });

    // Initialiser la transaction Wave Checkout
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const successUrl = `${baseUrl}/paiement/succes?order=${order.orderNumber}`;
    const errorUrl = `${baseUrl}/paiement/erreur?order=${order.orderNumber}`;

    const waveSession = await WaveService.createCheckoutSession({
      amount: order.amount,
      currency: order.currency,
      orderNumber: order.orderNumber,
      successUrl,
      errorUrl,
    });

    // Enregistrer le paiement associé
    await prisma.payment.create({
      data: {
        orderId: order.id,
        provider: "WAVE",
        providerReference: waveSession.sessionId,
        checkoutUrl: waveSession.waveLaunchUrl,
        amount: order.amount,
        currency: order.currency,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      orderNumber: order.orderNumber,
      waveLaunchUrl: waveSession.waveLaunchUrl,
    });
  } catch (error: any) {
    console.error("Erreur Checkout API:", error);
    return NextResponse.json(
      { error: error.message || "Erreur interne lors de la création de commande." },
      { status: 500 }
    );
  }
}
