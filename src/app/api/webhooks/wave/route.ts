import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { WaveService } from "@/lib/wave";
import { generateAccessCode, hashCode } from "@/lib/auth";
import { sendOrderConfirmation, sendAdminSaleNotification } from "@/lib/email";

/**
 * Webhook Wave officiel
 * Traitement cryptographiquement sécurisé et idempotent
 */
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("wave-signature");

    // 1. Vérification de la signature cryptographique Wave
    const isValid = WaveService.verifyWebhookSignature(rawBody, signature);
    if (!isValid) {
      console.warn("Wave Webhook signature invalid!");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    // Payload types Wave checkout : "checkout.session.completed", etc.
    const eventType = payload.type || payload.event;
    const sessionData = payload.data?.object || payload.data || payload;

    const clientReference = sessionData.client_reference; // Order Number "CMD-..."
    if (!clientReference) {
      return NextResponse.json({ error: "Missing client_reference" }, { status: 400 });
    }

    // 2. Trouver la commande
    const order = await prisma.order.findUnique({
      where: { orderNumber: clientReference },
      include: { user: true, product: true },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // 3. Protection idempotence : éviter les doubles traitements
    if (order.status === "PAID") {
      return NextResponse.json({ status: "already_processed" });
    }

    // 4. Si paiement confirmé par Wave
    if (eventType === "checkout.session.completed" || payload.status === "complete" || payload.status === "PAID") {
      // Passer la commande à PAID
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "PAID" },
      });

      // Mettre à jour le paiement
      await prisma.payment.updateMany({
        where: { orderId: order.id },
        data: {
          status: "PAID",
          paidAt: new Date(),
          rawWebhookPayload: rawBody,
        },
      });

      // 5. Générer le code d'accès unique cryptographiquement aléatoire
      const plainCode = generateAccessCode(); // e.g. "NEX-7F9K-2M8X-P4QD"
      const codeHash = hashCode(plainCode);

      await prisma.accessCode.create({
        data: {
          code: plainCode,
          codeHash,
          userId: order.userId,
          productId: order.productId,
          orderId: order.id,
          status: "ACTIVE",
        },
      });

      // 6. Initialiser la progression de lecture
      await prisma.readingProgress.upsert({
        where: {
          userId_productId: {
            userId: order.userId,
            productId: order.productId,
          },
        },
        create: {
          userId: order.userId,
          productId: order.productId,
          lastPosition: 1,
          progressPct: 0,
        },
        update: {},
      });

      // 7. Audit Log
      await prisma.auditLog.create({
        data: {
          action: "ORDER_PAID_WEBHOOK",
          metadata: JSON.stringify({
            orderNumber: order.orderNumber,
            amount: order.amount,
            userEmail: order.customerEmail,
            product: order.product.title,
          }),
        },
      });

      console.log(`[WAVE WEBHOOK] Commande ${order.orderNumber} confirmée avec succès. Code généré.`);

      // 8. Envoyer les emails via Resend
      sendOrderConfirmation({
        customerName: order.user.name,
        customerEmail: order.customerEmail,
        orderNumber: order.orderNumber,
        productTitle: order.product.title,
        amount: order.amount,
        accessCode: plainCode,
      }).catch((err) => console.error("[Email] Erreur confirmation:", err));

      sendAdminSaleNotification({
        customerName: order.user.name,
        customerEmail: order.customerEmail,
        orderNumber: order.orderNumber,
        productTitle: order.product.title,
        amount: order.amount,
      }).catch((err) => console.error("[Email] Erreur notif admin:", err));
    } else if (payload.status === "cancelled" || payload.status === "expired") {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "EXPIRED" },
      });
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Erreur Webhook Wave:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
