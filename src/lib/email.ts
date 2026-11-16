import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

const fromEmail = process.env.RESEND_FROM_EMAIL || "contact@ecom-mastery.shop";

interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  productTitle: string;
  amount: number;
  accessCode?: string;
}

// Email de confirmation d'achat
export async function sendOrderConfirmation(data: OrderEmailData) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.warn("[Resend] Ignoré: RESEND_API_KEY non configurée.");
      return { success: false, reason: "No API key" };
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ecom-mastery.shop";
    const activationUrl = data.accessCode
      ? `${appUrl}/activer-code?code=${encodeURIComponent(data.accessCode)}`
      : `${appUrl}/activer-code`;

    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: data.customerEmail,
      subject: `Votre commande Ecom Mastery #${data.orderNumber}`,
      html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de commande Ecom Mastery</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070D18; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #070D18; min-height: 100vh; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Container Principal -->
        <table role="presentation" width="100%" max-width="580" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; background-color: #0F1A2E; border: 1px solid #1E2E4A; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- En-tête avec VRAI LOGO DU SITE -->
          <tr>
            <td style="padding: 40px 32px 24px; text-align: center; background: linear-gradient(180deg, #13223E 0%, #0F1A2E 100%); border-bottom: 1px solid #1A2C4B;">
              <a href="${appUrl}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="${appUrl}/images/logo-white.png" alt="Ecom Mastery" width="210" style="display: block; margin: 0 auto; width: 210px; max-width: 100%; height: auto; border: 0;" />
              </a>
              <p style="margin: 14px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #8FA6CA;">Académie du Commerce Digital</p>
            </td>
          </tr>

          <!-- Statut de la commande -->
          <tr>
            <td style="padding: 32px 32px 16px; text-align: center;">
              <div style="display: inline-flex; align-items: center; padding: 6px 16px; background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 100px; margin-bottom: 16px;">
                <span style="font-size: 12px; font-weight: 800; color: #10B981; letter-spacing: 0.5px;">PAIEMENT WAVE CONFIRME</span>
              </div>
              <h1 style="margin: 0 0 10px; font-size: 26px; font-weight: 800; color: #FFFFFF; line-height: 1.25;">Votre commande est prête</h1>
              <p style="margin: 0; font-size: 14px; color: #94A3B8; line-height: 1.5;">Bonjour <strong>${data.customerName}</strong>, merci pour votre achat. Votre livre numérique et votre code personnel sont débloqués à vie.</p>
            </td>
          </tr>

          ${
            data.accessCode
              ? `<!-- Carte Code d'accès VIP -->
          <tr>
            <td style="padding: 16px 32px;">
              <div style="background: linear-gradient(145deg, #16243F, #0E1729); border: 2px solid #0066FF; border-radius: 20px; padding: 24px 20px; text-align: center; box-shadow: 0 10px 25px rgba(0, 102, 255, 0.15);">
                <span style="display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #60A5FA; margin-bottom: 10px;">
                  VOTRE CODE D'ACCES UNIQUE
                </span>
                
                <div style="display: inline-block; background-color: #070D18; border: 1px solid #1E3A6B; border-radius: 12px; padding: 14px 24px; margin: 4px 0 12px;">
                  <span style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 22px; font-weight: 900; letter-spacing: 3px; color: #FFFFFF; white-space: nowrap;">
                    ${data.accessCode}
                  </span>
                </div>

                <p style="margin: 0; font-size: 12px; color: #94A3B8;">
                  Licence individuelle permanente · Utilisable sur smartphone, tablette et PC
                </p>
              </div>
            </td>
          </tr>`
              : ""
          }

          <!-- Bouton CTA Principal -->
          <tr>
            <td style="padding: 12px 32px 28px; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="${activationUrl}" target="_blank" style="display: inline-block; width: 100%; max-width: 380px; background-color: #0066FF; color: #FFFFFF; font-size: 15px; font-weight: 800; text-decoration: none; padding: 16px 24px; border-radius: 14px; text-align: center; box-shadow: 0 8px 20px rgba(0, 102, 255, 0.35); box-sizing: border-box;">
                      Ouvrir et lire mon livre &rarr;
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 12px 0 0; font-size: 12px; color: #64748B;">
                Ou rendez-vous sur <a href="${appUrl}/activer-code" style="color: #60A5FA; text-decoration: none;">ecom-mastery.shop/activer-code</a>
              </p>
            </td>
          </tr>

          <!-- Récapitulatif de la commande -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <div style="background-color: #0A1220; border: 1px solid #16243F; border-radius: 16px; padding: 20px;">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #64748B; margin-bottom: 14px;">
                  RECAPITULATIF DE VOTRE COMMANDE
                </div>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 13px;">
                  <tr>
                    <td style="padding: 8px 0; color: #8FA6CA;">Livre commandé</td>
                    <td align="right" style="padding: 8px 0; color: #FFFFFF; font-weight: 700; max-width: 260px;">
                      ${data.productTitle}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8FA6CA; border-top: 1px solid #14223B;">Numéro de commande</td>
                    <td align="right" style="padding: 8px 0; color: #E2E8F0; font-family: monospace; font-size: 12px; border-top: 1px solid #14223B;">
                      #${data.orderNumber}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8FA6CA; border-top: 1px solid #14223B;">Moyen de paiement</td>
                    <td align="right" style="padding: 8px 0; color: #10B981; font-weight: 700; border-top: 1px solid #14223B;">
                      Wave Sénégal (Succès)
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0 4px; color: #FFFFFF; font-weight: 800; font-size: 14px; border-top: 1px solid #1A2C4B;">Montant total</td>
                    <td align="right" style="padding: 12px 0 4px; color: #10B981; font-weight: 900; font-size: 18px; border-top: 1px solid #1A2C4B;">
                      ${data.amount.toLocaleString("fr-FR")} FCFA
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Assistance / Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #070D18; border-top: 1px solid #16243F; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #94A3B8;">
                Une question ou besoin d'assistance ? Notre support est joignable 7j/7 au <strong>+221 76 134 39 04</strong>.
              </p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                &copy; ${new Date().getFullYear()} Ecom Mastery &middot; Dakar, Sénégal &middot; Tous droits réservés.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (error) {
      console.error("[Resend] Erreur envoi email confirmation:", error);
      return { success: false, error };
    }
    console.log(`[Resend] Email de confirmation envoyé à ${data.customerEmail}`);
    return { success: true };
  } catch (err) {
    console.error("[Resend] Exception:", err);
    return { success: false, error: err };
  }
}

// Email de bienvenue après inscription
export async function sendWelcomeEmail(name: string, email: string) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.warn("[Resend] Ignoré: RESEND_API_KEY non configurée.");
      return { success: false, reason: "No API key" };
    }

    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: email,
      subject: `Bienvenue sur Ecom Mastery, ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:#0B1528;color:white;font-weight:800;font-size:18px;padding:8px 16px;border-radius:12px;">EM</div>
    </div>
    <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#0B1528,#0066FF);padding:28px;text-align:center;color:white;">
        <h1 style="font-size:22px;font-weight:700;margin:0;">Bienvenue, ${name} !</h1>
      </div>
      <div style="padding:28px;">
        <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px;">
          Votre compte Ecom Mastery est maintenant actif. Explorez notre catalogue d'ebooks et commencez votre parcours entrepreneurial.
        </p>
        <div style="text-align:center;margin-top:24px;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/boutique"
             style="display:inline-block;background:#0066FF;color:white;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;">
            Explorer la boutique →
          </a>
        </div>
      </div>
    </div>
    <div style="text-align:center;padding:24px 0;font-size:12px;color:#94a3b8;">
      <p style="margin:0;">© ${new Date().getFullYear()} Ecom Mastery · <a href="https://wockytech.xyz" style="color:#0066FF;text-decoration:none;">WockyTech</a></p>
    </div>
  </div>
</body>
</html>`,
    });

    if (error) {
      console.error("[Resend] Erreur envoi email bienvenue:", error);
      return { success: false, error };
    }
    console.log(`[Resend] Email de bienvenue envoyé à ${email}`);
    return { success: true };
  } catch (err) {
    console.error("[Resend] Exception:", err);
    return { success: false, error: err };
  }
}

// Notification admin nouvelle vente
export async function sendAdminSaleNotification(data: OrderEmailData) {
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || "admin@ecommastery.sn";
  try {
    const resend = getResendClient();
    if (!resend) {
      console.warn("[Resend] Ignoré: RESEND_API_KEY non configurée.");
      return { success: false, reason: "No API key" };
    }

    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: adminEmail,
      subject: `Nouvelle vente #${data.orderNumber} — ${data.amount.toLocaleString("fr-FR")} FCFA`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <div style="background:#0B1528;padding:20px;color:white;text-align:center;">
        <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;opacity:0.7;">Notification Admin</p>
        <h1 style="font-size:20px;margin:0;">Nouvelle Vente</h1>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#64748b;">Commande</td><td style="padding:8px 0;text-align:right;font-weight:700;font-family:monospace;">#${data.orderNumber}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Client</td><td style="padding:8px 0;text-align:right;font-weight:600;">${data.customerName} (${data.customerEmail})</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Ebook</td><td style="padding:8px 0;text-align:right;font-weight:600;">${data.productTitle}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Montant</td><td style="padding:8px 0;text-align:right;font-weight:700;color:#059669;font-size:18px;">${data.amount.toLocaleString("fr-FR")} FCFA</td></tr>
        </table>
        <div style="text-align:center;margin-top:20px;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/admin/commandes"
             style="display:inline-block;background:#0066FF;color:white;padding:12px 28px;border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;">
            Voir dans l'admin →
          </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    });

    if (error) {
      console.error("[Resend] Erreur notification admin:", error);
      return { success: false, error };
    }
    console.log(`[Resend] Notification admin envoyée pour #${data.orderNumber}`);
    return { success: true };
  } catch (err) {
    console.error("[Resend] Exception:", err);
    return { success: false, error: err };
  }
}
