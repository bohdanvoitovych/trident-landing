/**
 * Shared email layout: dark header, white body, legal footer.
 * Table-based with inline styles for email client compatibility.
 * Colors come from DESIGN.md (Trident Blue, dark background scale).
 */

const BRAND = {
  name: 'Trident Software',
  company: 'Trident Software Sàrl',
  email: 'info@trident-software.ch',
  che: 'CHE-185.076.733',
  address: "Rue de l'Industrie 23, 1950 Sion, Valais, Switzerland",
  headerBg: '#080C14',
  accentColor: '#2772E0',
  textPrimary: '#0D1117',
  textSecondary: '#6B7280',
}

const LEGAL_LABELS: Record<string, { privacy: string; terms: string; imprint: string }> = {
  en: { privacy: 'Privacy Policy', terms: 'Terms', imprint: 'Imprint' },
  de: { privacy: 'Datenschutz', terms: 'AGB', imprint: 'Impressum' },
  fr: { privacy: 'Confidentialité', terms: 'Conditions', imprint: 'Mentions légales' },
  it: { privacy: 'Privacy', terms: 'Termini', imprint: 'Note legali' },
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch').replace(/\/$/, '')
}

/** Locale path prefix: English has none (localePrefix: 'as-needed'). */
export function localePath(locale: string): string {
  return locale === 'en' ? '' : `/${locale}`
}

export function emailLayout(title: string, bodyHtml: string, footerNote?: string, locale = 'en'): string {
  const lang = locale in LEGAL_LABELS ? locale : 'en'
  const labels = LEGAL_LABELS[lang]
  const base = `${siteUrl()}${localePath(lang)}`
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapeHtml(title)}</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <style>
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F3F4F6; }
    .btn { display: inline-block; padding: 12px 28px; background-color: ${BRAND.accentColor}; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; }
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 0 16px !important; }
      .content-cell { padding: 24px 16px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#F3F4F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <tr>
            <td style="background-color:${BRAND.headerBg}; padding: 24px 32px; border-radius: 12px 12px 0 0; border-bottom: 3px solid ${BRAND.accentColor};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Trident <span style="color:${BRAND.accentColor};">Software</span></span>
                  </td>
                  <td align="right">
                    <span style="font-size: 12px; color: #8899B4;">trident-software.ch</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td class="content-cell" style="background-color:#ffffff; padding: 32px;">
              ${bodyHtml}
            </td>
          </tr>

          <tr>
            <td style="background-color:#F9FAFB; padding: 24px 32px; border-radius: 0 0 12px 12px; border-top: 1px solid #E5E7EB;">
              ${footerNote ? `<p style="margin:0 0 12px; font-size:12px; color:${BRAND.textSecondary}; line-height:1.5;">${footerNote}</p>` : ''}
              <p style="margin:0 0 4px; font-size:12px; color:${BRAND.textSecondary}; line-height:1.5;">
                ${escapeHtml(BRAND.company)} &middot; ${escapeHtml(BRAND.address)}
              </p>
              <p style="margin:0 0 4px; font-size:12px; color:${BRAND.textSecondary}; line-height:1.5;">
                ${escapeHtml(BRAND.che)} &middot;
                <a href="mailto:${BRAND.email}" style="color:${BRAND.accentColor}; text-decoration:none;">${BRAND.email}</a>
              </p>
              <p style="margin:0; font-size:11px; color:#9CA3AF; line-height:1.5;">
                <a href="${base}/privacy" style="color:#9CA3AF; text-decoration:underline;">${escapeHtml(labels.privacy)}</a>
                &nbsp;&middot;&nbsp;
                <a href="${base}/terms" style="color:#9CA3AF; text-decoration:underline;">${escapeHtml(labels.terms)}</a>
                &nbsp;&middot;&nbsp;
                <a href="${base}/imprint" style="color:#9CA3AF; text-decoration:underline;">${escapeHtml(labels.imprint)}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export { BRAND }
