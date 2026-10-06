import Image from 'next/image'
import { getLocale } from 'next-intl/server'

type Line =
  | { kind: 'in'; text: string; meta: string }
  | { kind: 'out'; text: string; meta: string }
  | { kind: 'card'; title: string; badge: string; detail: string }

type Script = {
  title: string
  channel: string
  status: string
  lines: Line[]
}

// The agent answers in the customer's language, so the demo shows the
// conversation in whichever language the visitor is reading the site in.
const SCRIPTS: Record<string, Script> = {
  en: {
    title: 'Agent · Valais Materials',
    channel: 'WhatsApp',
    status: 'Online · Sat 21:47',
    lines: [
      { kind: 'in', text: 'Evening — can you deliver 0/16 gravel to Sierre on Monday? 8 tonnes.', meta: 'EN · 21:47' },
      { kind: 'out', text: 'Evening! Yes, 8 t of 0/16 gravel is in stock. Monday I can offer 07:30 or 13:00 in Sierre.', meta: 'Agent · 4 s' },
      { kind: 'in', text: '07:30 works.', meta: 'EN · 21:48' },
      { kind: 'card', title: 'Delivery confirmed', badge: 'QR-bill sent', detail: 'Mon 07:30 · Sierre · 8 t' },
      { kind: 'out', text: "That's booked. The QR invoice and truck tracking are on their way by e-mail.", meta: 'Agent · 3 s · CRM updated' },
    ],
  },
  de: {
    title: 'Agent · Materialien Wallis',
    channel: 'WhatsApp',
    status: 'Online · Sa 21:47',
    lines: [
      { kind: 'in', text: 'Guten Abend, liefern Sie am Montag Kies 0/16 nach Siders? 8 Tonnen.', meta: 'DE · 21:47' },
      { kind: 'out', text: 'Guten Abend! Ja, 8 t Kies 0/16 sind an Lager. Am Montag kann ich 07:30 oder 13:00 Uhr in Siders anbieten.', meta: 'Agent · 4 s' },
      { kind: 'in', text: '07:30 passt.', meta: 'DE · 21:48' },
      { kind: 'card', title: 'Lieferung bestätigt', badge: 'QR-Rechnung', detail: 'Mo. 07:30 · Siders · 8 t' },
      { kind: 'out', text: 'Reserviert. QR-Rechnung und Sendungsverfolgung kommen per E-Mail.', meta: 'Agent · 3 s · CRM aktualisiert' },
    ],
  },
  fr: {
    title: 'Agent · Matériaux Valais',
    channel: 'WhatsApp',
    status: 'En ligne · Sa 21:47',
    lines: [
      { kind: 'in', text: 'Bonsoir, vous livrez du gravier 0/16 à Sierre lundi ? 8 tonnes.', meta: 'FR · 21:47' },
      { kind: 'out', text: 'Bonsoir ! Oui, 8 t de gravier 0/16 sont en stock. Lundi, je peux proposer 7h30 ou 13h00 à Sierre.', meta: 'Agent · 4 s' },
      { kind: 'in', text: '7h30 parfait.', meta: 'FR · 21:48' },
      { kind: 'card', title: 'Livraison confirmée', badge: 'Facture QR', detail: 'Lun. 7h30 · Sierre · 8 t' },
      { kind: 'out', text: "C'est réservé. La facture QR et le suivi du camion arrivent par e-mail.", meta: 'Agent · 3 s · CRM mis à jour' },
    ],
  },
  it: {
    title: 'Agent · Materiali Vallese',
    channel: 'WhatsApp',
    status: 'Online · Sa 21:47',
    lines: [
      { kind: 'in', text: 'Buonasera, consegnate ghiaia 0/16 a Sierre lunedì? 8 tonnellate.', meta: 'IT · 21:47' },
      { kind: 'out', text: 'Buonasera! Sì, 8 t di ghiaia 0/16 sono in magazzino. Lunedì posso proporre le 7:30 o le 13:00 a Sierre.', meta: 'Agent · 4 s' },
      { kind: 'in', text: 'Le 7:30 vanno bene.', meta: 'IT · 21:48' },
      { kind: 'card', title: 'Consegna confermata', badge: 'Fattura QR', detail: 'Lun. 7:30 · Sierre · 8 t' },
      { kind: 'out', text: 'Prenotato. La fattura QR e il tracciamento del camion arrivano via e-mail.', meta: 'Agent · 3 s · CRM aggiornato' },
    ],
  },
}

export async function AgentChat() {
  const locale = await getLocale()
  const script = SCRIPTS[locale] ?? SCRIPTS.en

  return (
    <div className="chat" id="chat" aria-label="Example conversation">
      <div className="chat-hd">
        <span className="av">
          <Image src="/images/trident-symbol.png" alt="" width={32} height={32} />
        </span>
        <div>
          <b>{script.title}</b>
          <small>{script.channel}</small>
        </div>
        <span className="live">{script.status}</span>
      </div>

      {script.lines.map((line, i) =>
        line.kind === 'card' ? (
          <div className="slotcard" key={i}>
            <b>{line.title}</b>
            <span className="ok">{line.badge}</span>
            <span>{line.detail}</span>
          </div>
        ) : (
          <div className={`bub ${line.kind}`} key={i}>
            {line.text}
            <span className="meta">{line.meta}</span>
          </div>
        ),
      )}
    </div>
  )
}
