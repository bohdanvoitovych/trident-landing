/**
 * Confirmation email to the person who sent the audit request form.
 * Localized for en/de/fr/it. Any other locale gets English.
 */

import { emailLayout, escapeHtml, siteUrl, localePath } from './layout'
import { topicLabel } from './topic-labels'
import type { ContactFormData } from '../types'

type Copy = {
  subject: string
  hello: (name: string) => string
  intro: string
  labels: { name: string; email: string; company: string; phone: string; topic: string; message: string }
  nextTitle: string
  nextBody: string
  nextBodyPlain: string
  cta: string
  footerNote: string
}

const COPY: Record<string, Copy> = {
  en: {
    subject: 'We received your audit request - Trident Software',
    hello: (n) => `Thank you, ${n}.`,
    intro: 'Your request is with our team. This is what you sent us:',
    labels: { name: 'Name', email: 'Email', company: 'Company', phone: 'Phone', topic: 'Topic', message: 'Message' },
    nextTitle: 'What happens next',
    nextBody: 'An engineer will reply within <strong>2 business days</strong> to agree a time for the free audit call.',
    nextBodyPlain: 'An engineer will reply within 2 business days to agree a time for the free audit call.',
    cta: 'Visit Trident Software',
    footerNote:
      "You are getting this email because someone sent an audit request with this address on trident-software.ch. If that was not you, ignore this message.",
  },
  de: {
    subject: 'Ihre Audit-Anfrage ist eingegangen - Trident Software',
    hello: (n) => `Vielen Dank, ${n}.`,
    intro: 'Ihre Anfrage liegt bei unserem Team. Das haben Sie uns geschickt:',
    labels: { name: 'Name', email: 'E-Mail', company: 'Unternehmen', phone: 'Telefon', topic: 'Thema', message: 'Nachricht' },
    nextTitle: 'Wie es weitergeht',
    nextBody:
      'Ein Ingenieur meldet sich innerhalb von <strong>2 Werktagen</strong> bei Ihnen, um einen Termin für das kostenlose Audit-Gespräch zu vereinbaren.',
    nextBodyPlain:
      'Ein Ingenieur meldet sich innerhalb von 2 Werktagen bei Ihnen, um einen Termin für das kostenlose Audit-Gespräch zu vereinbaren.',
    cta: 'Trident Software besuchen',
    footerNote:
      'Sie erhalten diese E-Mail, weil jemand auf trident-software.ch eine Audit-Anfrage mit dieser Adresse gesendet hat. Waren Sie das nicht, können Sie die Nachricht ignorieren.',
  },
  fr: {
    subject: "Nous avons bien reçu votre demande d'audit - Trident Software",
    hello: (n) => `Merci, ${n}.`,
    intro: 'Votre demande est entre les mains de notre équipe. Voici ce que vous nous avez envoyé :',
    labels: { name: 'Nom', email: 'E-mail', company: 'Société', phone: 'Téléphone', topic: 'Sujet', message: 'Message' },
    nextTitle: 'La suite',
    nextBody:
      'Un ingénieur vous répondra sous <strong>2 jours ouvrés</strong> pour fixer un créneau pour l\'appel d\'audit gratuit.',
    nextBodyPlain: "Un ingénieur vous répondra sous 2 jours ouvrés pour fixer un créneau pour l'appel d'audit gratuit.",
    cta: 'Découvrir Trident Software',
    footerNote:
      "Vous recevez cet e-mail car une demande d'audit a été envoyée avec cette adresse sur trident-software.ch. Si ce n'était pas vous, ignorez ce message.",
  },
  it: {
    subject: 'Abbiamo ricevuto la tua richiesta di audit - Trident Software',
    hello: (n) => `Grazie, ${n}.`,
    intro: 'La tua richiesta è arrivata al nostro team. Ecco cosa ci hai inviato:',
    labels: { name: 'Nome', email: 'Email', company: 'Azienda', phone: 'Telefono', topic: 'Argomento', message: 'Messaggio' },
    nextTitle: 'Cosa succede ora',
    nextBody:
      'Un ingegnere ti risponderà entro <strong>2 giorni lavorativi</strong> per fissare un orario per la chiamata di audit gratuita.',
    nextBodyPlain:
      'Un ingegnere ti risponderà entro 2 giorni lavorativi per fissare un orario per la chiamata di audit gratuita.',
    cta: 'Visita Trident Software',
    footerNote:
      "Ricevi questa email perché qualcuno ha inviato una richiesta di audit con questo indirizzo su trident-software.ch. Se non sei stato tu, ignora questo messaggio.",
  },
}

export function renderDemoConfirmation(data: ContactFormData): { subject: string; html: string; text: string } {
  const lang = data.locale && data.locale in COPY ? data.locale : 'en'
  const c = COPY[lang]
  const subject = c.subject
  const link = `${siteUrl()}${localePath(lang)}`

  const rows: Array<[string, string]> = [
    [c.labels.name, data.name],
    [c.labels.email, data.email],
  ]
  if (data.company) rows.push([c.labels.company, data.company])
  if (data.phone) rows.push([c.labels.phone, data.phone])
  const topic = topicLabel(data.subject, lang)
  if (topic) rows.push([c.labels.topic, topic])
  rows.push([c.labels.message, data.message])

  const bodyHtml = `
    <h1 style="margin: 0 0 8px; font-size: 22px; font-weight: 700; color: #0D1117;">${escapeHtml(c.hello(data.name))}</h1>
    <p style="margin: 0 0 24px; font-size: 15px; color: #6B7280; line-height: 1.6;">${escapeHtml(c.intro)}</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F9FAFB; border-radius: 8px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows.map(([l, v], i) => summaryRow(l, v, i === rows.length - 1)).join('')}
          </table>
        </td>
      </tr>
    </table>

    <h2 style="margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #0D1117;">${escapeHtml(c.nextTitle)}</h2>
    <p style="margin: 0 0 24px; font-size: 14px; color: #6B7280; line-height: 1.6;">${c.nextBody}</p>

    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <a href="${link}" class="btn">${escapeHtml(c.cta)} &rarr;</a>
        </td>
      </tr>
    </table>
  `

  const html = emailLayout(subject, bodyHtml, escapeHtml(c.footerNote), lang)

  const text = [
    c.hello(data.name),
    '',
    c.intro,
    '',
    ...rows.map(([l, v]) => `${l}: ${v}`),
    '',
    c.nextTitle,
    c.nextBodyPlain,
    '',
    `${c.cta}: ${link}`,
    '',
    'Trident Software Sàrl · Sion, Switzerland',
  ].join('\n')

  return { subject, html, text }
}

function summaryRow(label: string, value: string, isLast: boolean): string {
  const border = isLast ? '' : 'border-bottom: 1px solid #E5E7EB;'
  return `
    <tr>
      <td style="padding: 6px 0; ${border} vertical-align: top; width: 100px;">
        <span style="font-size: 13px; font-weight: 600; color: #6B7280;">${escapeHtml(label)}</span>
      </td>
      <td style="padding: 6px 0 6px 12px; ${border} vertical-align: top;">
        <span style="font-size: 14px; color: #0D1117;">${escapeHtml(value)}</span>
      </td>
    </tr>`
}
