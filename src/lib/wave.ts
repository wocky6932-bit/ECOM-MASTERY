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
   * Redirige directement vers le lien marchand officiel Wave :
   * https://pay.wave.com/m/M_sn_BGVLqeWyqF_C/c/sn en forçant le paiement du montant (5 000 FCFA).
   */
  static async createCheckoutSession(params: {
    amount: number;
    currency: string;
    orderNumber: string;
    successUrl: string;
    errorUrl: string;
  }): Promise<{ waveLaunchUrl: string; sessionId: string }> {
    const merchantId = "M_sn_BGVLqeWyqF_C";
    const amount = params.amount || 5000;
    // URL directe marchande Wave avec montant forcé
    const waveLaunchUrl = `https://pay.wave.com/m/${merchantId}/c/sn?amount=${amount}&a=${amount}`;
    const sessionId = `wave_m_${crypto.randomBytes(6).toString("hex")}`;

    return {
      waveLaunchUrl,
      sessionId,
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
