import crypto from "crypto";

export interface WaveCheckoutSessionRequest {
  amount: string; // "5000"
  currency: string; // "XOF"
  error_url: string;
  success_url: string;
  client_reference: string; // Order Number CMD-...
}

export interface WaveCheckoutResponse {
  id: string; // Wave Checkout Session ID: "cos-..."
  wave_launch_url: string;
  amount: string;
  currency: string;
  client_reference: string;
  checkout_status: "complete" | "processing" | "cancelled" | "expired";
}

/**
 * Service d'intégration Wave Checkout API selon les spécifications officielles
 * https://docs.wave.com/checkout
 */
export class WaveService {
  private static apiKey = process.env.WAVE_API_KEY || "";
  private static webhookSecret = process.env.WAVE_WEBHOOK_SECRET || "";
  private static isConfigured = Boolean(process.env.WAVE_API_KEY && process.env.WAVE_API_KEY.trim() !== "");

  /**
   * Crée une session Wave Checkout officielle.
   * Si les clés API Wave ne sont pas encore renseignées dans l'environnement (mode dev local),
   * le service bascule de manière transparente sur le simulateur officiel Wave intégré.
   */
  static async createCheckoutSession(params: {
    amount: number;
    currency: string;
    orderNumber: string;
    successUrl: string;
    errorUrl: string;
  }): Promise<{ waveLaunchUrl: string; sessionId: string }> {
    if (!this.isConfigured) {
      // Mode simulation sécurisé pour le développement et la validation
      const simSessionId = `cos_sim_${crypto.randomBytes(8).toString("hex")}`;
      const simLaunchUrl = `/wave-checkout-simulator?session_id=${simSessionId}&order=${params.orderNumber}&amount=${params.amount}`;
      return {
        waveLaunchUrl: simLaunchUrl,
        sessionId: simSessionId,
      };
    }

    const response = await fetch("https://api.wave.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: params.amount.toString(),
        currency: params.currency,
        error_url: params.errorUrl,
        success_url: params.successUrl,
        client_reference: params.orderNumber,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Wave API checkout failed (${response.status}): ${errorText}`);
    }

    const data: WaveCheckoutResponse = await response.json();
    return {
      waveLaunchUrl: data.wave_launch_url,
      sessionId: data.id,
    };
  }

  /**
   * Vérification cryptographique des signatures de webhook Wave
   * En accord avec la documentation Wave Checkout:
   * Header: Wave-Signature: t=1614000000,v1=xxxxxxxxxxx
   */
  static verifyWebhookSignature(payload: string, signatureHeader: string | null): boolean {
    if (!this.isConfigured) {
      // En mode simulateur local, validation souple si webhook secret non configuré
      return true;
    }

    if (!signatureHeader || !this.webhookSecret) {
      return false;
    }

    try {
      const parts = signatureHeader.split(",");
      const timestampPart = parts.find((p) => p.startsWith("t="));
      const sigPart = parts.find((p) => p.startsWith("v1="));

      if (!timestampPart || !sigPart) return false;

      const timestamp = timestampPart.slice(2);
      const expectedSig = sigPart.slice(3);

      const signedPayload = `${timestamp}.${payload}`;
      const computedSig = crypto
        .createHmac("sha256", this.webhookSecret)
        .update(signedPayload)
        .digest("hex");

      return crypto.timingSafeEqual(Buffer.from(computedSig), Buffer.from(expectedSig));
    } catch (err) {
      console.error("Erreur vérification webhook Wave:", err);
      return false;
    }
  }
}
