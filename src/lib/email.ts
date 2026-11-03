import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

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
    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: data.customerEmail,
      subject: `✅ Confirmation de commande #${data.orderNumber}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:#0B1528;color:white;font-weight:800;font-size:18px;padding:8px 16px;border-radius:12px;">
        EM
      </div>
      <p style="color:#64748b;font-size:12px;margin-top:8px;text-transform:uppercase;letter-spacing:2px;">Ecom Mastery</p>
    </div>

    <!-- Card -->
    <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <!-- Green banner -->
      <div style="background:linear-gradient(135deg,#059669,#10b981);padding:24px;text-align:center;color:white;">
        <div style="font-size:32px;margin-bottom:8px;">✅</div>
        <h1 style="font-size:20px;font-weight:700;margin:0;">Paiement confirmé !</h1>
        <p style="font-size:14px;opacity:0.9;margin:4px 0 0;">Votre commande a été traitée avec succès via Wave.</p>
      </div>

      <!-- Content -->
      <div style="padding:28px;">
        <p style="font-size:15px;color:#334155;margin:0 0 20px;">
          Bonjour <strong>${data.customerName}</strong>,
        </p>
        <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0 0 24px;">
          Merci pour votre achat ! Votre ebook est maintenant disponible dans votre espace personnel.
        </p>

        <!-- Order details -->
        <div style="background:#f8fafc;border-radius:12px;padding:20px;margin-bottom:24px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
              <td style="padding:6px 0;color:#64748b;">Commande</td>
              <td style="padding:6px 0;text-align:right;font-weight:700;color:#0B1528;font-family:monospace;">#${data.orderNumber}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#64748b;">Ebook</td>
              <td style="padding:6px 0;text-align:right;font-weight:600;color:#0B1528;">${data.productTitle}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#64748b;">Montant</td>
              <td style="padding:6px 0;text-align:right;font-weight:700;color:#059669;">${data.amount.toLocaleString("fr-FR")} FCFA</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#64748b;">Paiement</td>
              <td style="padding:6px 0;text-align:right;font-weight:600;color:#0B1528;">Wave ✓</td>
            </tr>
          </table>
        </div>

        ${
          data.accessCode
            ? `
        <!-- Access code -->
        <div style="background:#eff6ff;border:2px dashed #93c5fd;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
          <p style="font-size:12px;color:#3b82f6;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Votre code d'accès</p>
          <p style="font-size:22px;font-weight:800;color:#0B1528;font-family:monospace;letter-spacing:3px;margin:0;">${data.accessCode}</p>
          <p style="font-size:11px;color:#64748b;margin:8px 0 0;">Conservez-le précieusement pour accéder à votre ebook.</p>
        </div>`
            : ""
        }

        <!-- CTA -->
        <div style="text-align:center;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/dashboard/ebooks"
             style="display:inline-block;background:#0066FF;color:white;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;">
            📖 Lire mon ebook maintenant
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:24px 0;font-size:12px;color:#94a3b8;">
      <p style="margin:0 0 4px;">© ${new Date().getFullYear()} Ecom Mastery. Tous droits réservés.</p>
      <p style="margin:0;">
        <a href="https://wockytech.xyz" style="color:#0066FF;text-decoration:none;">Réalisé par WockyTech</a>
      </p>
    </div>
  </div>
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
    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: email,
      subject: `Bienvenue sur Ecom Mastery, ${name} 🎉`,
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
        <h1 style="font-size:22px;font-weight:700;margin:0;">Bienvenue, ${name} ! 🎉</h1>
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
    const { error } = await resend.emails.send({
      from: `Ecom Mastery <${fromEmail}>`,
      to: adminEmail,
      subject: `💰 Nouvelle vente #${data.orderNumber} — ${data.amount.toLocaleString("fr-FR")} FCFA`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <div style="background:#0B1528;padding:20px;color:white;text-align:center;">
        <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;opacity:0.7;">Notification Admin</p>
        <h1 style="font-size:20px;margin:0;">💰 Nouvelle Vente</h1>
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
