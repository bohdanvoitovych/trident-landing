import { emailLayout, escapeHtml } from './layout'

type Copy = { subject: string; heading: string; body: string; unsubscribe: string }

const i18n: Record<string, Copy> = {
  en: {
    subject: "You're subscribed to Trident Software updates",
    heading: 'Welcome to the Trident newsletter',
    body: 'Thank you for subscribing. We will send you notes on AI agents, logistics platforms, IoT and custom business systems, written by the engineers who build them.',
    unsubscribe: 'Unsubscribe',
  },
  de: {
    subject: 'Sie erhalten jetzt Updates von Trident Software',
    heading: 'Willkommen beim Trident-Newsletter',
    body: 'Vielen Dank für Ihr Abonnement. Wir schicken Ihnen Beiträge zu KI-Agenten, Logistikplattformen, IoT und individuellen Geschäftssystemen, geschrieben von den Ingenieuren, die sie bauen.',
    unsubscribe: 'Abbestellen',
  },
  fr: {
    subject: 'Vous recevrez désormais les actualités de Trident Software',
    heading: 'Bienvenue dans la newsletter Trident',
    body: 'Merci pour votre abonnement. Nous vous enverrons des articles sur les agents IA, les plateformes logistiques, l\'IoT et les systèmes métier sur mesure, rédigés par les ingénieurs qui les conçoivent.',
    unsubscribe: 'Se désabonner',
  },
  it: {
    subject: 'Ora ricevi gli aggiornamenti di Trident Software',
    heading: 'Benvenuto nella newsletter di Trident',
    body: "Grazie per l'iscrizione. Ti invieremo approfondimenti su agenti AI, piattaforme logistiche, IoT e sistemi gestionali su misura, scritti dagli ingegneri che li realizzano.",
    unsubscribe: 'Annulla iscrizione',
  },
}

export function renderNewsletterWelcome({
  locale,
  unsubscribeUrl,
}: {
  email: string
  locale: string
  unsubscribeUrl: string
}): { subject: string; html: string; text: string } {
  const lang = locale in i18n ? locale : 'en'
  const t = i18n[lang]

  const bodyHtml = `
    <h2 style="margin:0 0 16px; font-size:22px; font-weight:700; color:#0D1117;">${escapeHtml(t.heading)}</h2>
    <p style="margin:0 0 24px; font-size:15px; color:#374151; line-height:1.6;">${escapeHtml(t.body)}</p>
    <p style="margin:0; font-size:12px; color:#9CA3AF;">
      <a href="${escapeHtml(unsubscribeUrl)}" style="color:#9CA3AF; text-decoration:underline;">${escapeHtml(t.unsubscribe)}</a>
    </p>
  `

  const text = `${t.heading}\n\n${t.body}\n\n${t.unsubscribe}: ${unsubscribeUrl}`

  return { subject: t.subject, html: emailLayout(t.subject, bodyHtml, undefined, lang), text }
}
