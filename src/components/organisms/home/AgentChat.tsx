'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { useTranslations } from 'next-intl'

type Line =
  | { kind: 'in'; text: string; meta: string }
  | { kind: 'out'; text: string; meta: string }
  | { kind: 'card'; title: string; badge: string; detail: string }

type Script = { title: string; channel: string; status: string; lines: Line[] }

// A demo of the four conversation languages. The tabs are independent of the
// site locale; they only start on it.
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
const LANGS = ['en', 'de', 'fr', 'it'] as const

type Labels = { group: string; crm: string; product: string; qty: string; slot: string; language: string }

export function AgentChat({ initial, labels }: { initial: string; labels: Labels }) {
  const t = useTranslations('sections.agentChat')
  const [lang, setLang] = useState<string>(SCRIPTS[initial] ? initial : 'en')
  const id = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const s = SCRIPTS[lang]

  const onKey = (e: KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const n = (i + d + LANGS.length) % LANGS.length
    setLang(LANGS[n])
    tabs.current[n]?.focus()
  }

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-id">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/trident-icon-white.svg" alt="" width={30} height={14} />
          <div>
            <b>{s.title}</b>
            <small>{s.status}</small>
          </div>
        </div>
        <div role="tablist" aria-label={labels.group} className="chat-tabs">
          {LANGS.map((l, i) => (
            <button
              key={l}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${id}-t-${l}`}
              aria-selected={lang === l}
              aria-controls={`${id}-p-${l}`}
              tabIndex={lang === l ? 0 : -1}
              className="seg"
              onClick={() => setLang(l)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      {LANGS.map((l) => (
        <div
          key={l}
          role="tabpanel"
          id={`${id}-p-${l}`}
          aria-labelledby={`${id}-t-${l}`}
          className="chat-body"
          lang={l}
          hidden={lang !== l}
        >
          {SCRIPTS[l].lines.map((line, i) =>
            line.kind === 'card' ? (
              <div className="bub--c" key={i}>
                <b>✓ {line.title}</b>
                <span>
                  {line.badge} · {line.detail}
                </span>
              </div>
            ) : (
              <div className={line.kind === 'in' ? 'bub bub--u' : 'bub bub--a'} key={i}>
                <p>{line.text}</p>
                <small>{line.meta}</small>
              </div>
            ),
          )}
        </div>
      ))}
      <div className="crm">
        <p className="h">{labels.crm}</p>
        <dl>
        <dt>{labels.product}</dt>
        <dd>{t('crmProduct')}</dd>
        <dt>{labels.qty}</dt>
        <dd>8 t</dd>
        <dt>{labels.slot}</dt>
        <dd>{t('crmSlot')}</dd>
        <dt>{labels.language}</dt>
        <dd className="blue">{lang.toUpperCase()}</dd>
        </dl>
      </div>
    </div>
  )
}
