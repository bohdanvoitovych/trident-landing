import { useTranslations } from 'next-intl'

/**
 * Routing diagram behind the agent log: inbound channels → the agent → the
 * systems it writes to. Each log line lights its own path and sends a packet
 * along it.
 *
 * Laid out in the hero box (552 × 520) so the live parts sit where neither the
 * log (bottom left) nor the chip (top right) covers them. Decorative only: the
 * log carries the same story as text.
 */

type Ch = 'whatsapp' | 'email' | 'webChat' | 'phone'
type Sys = 'stock' | 'bill' | 'crm' | 'dispatch' | 'sales'

const CHANNELS: Ch[] = ['whatsapp', 'email', 'webChat', 'phone']
const SYSTEMS: Sys[] = ['stock', 'bill', 'crm', 'dispatch', 'sales']
const LANGS = ['DE', 'FR', 'IT', 'EN'] as const

const NODE_H = 24
const CH_X = 16
const CH_W = 100
const CH_Y: Record<Ch, number> = { whatsapp: 56, email: 86, webChat: 116, phone: 146 }
const AG = { x: 150, y: 72, w: 124, h: 60 }
const AG_CY = AG.y + AG.h / 2
const SYS_X = 326
const SYS_W = 132
const SYS_Y: Record<Sys, number> = { stock: 122, bill: 152, crm: 182, dispatch: 212, sales: 242 }

const inEdge = (c: Ch) => {
  const x0 = CH_X + CH_W
  const y0 = CH_Y[c]
  const mx = (x0 + AG.x) / 2
  return `M${x0} ${y0} C${mx} ${y0} ${mx} ${AG_CY} ${AG.x} ${AG_CY}`
}
const outEdge = (s: Sys) => {
  const x0 = AG.x + AG.w
  const y1 = SYS_Y[s]
  const mx = (x0 + SYS_X) / 2
  return `M${x0} ${AG_CY} C${mx} ${AG_CY} ${mx} ${y1} ${SYS_X} ${y1}`
}

/** One entry per log line (same order as ui.hero.log.1–8). */
const EVENTS: { ch: Ch | null; lang: (typeof LANGS)[number] | null; sys: Sys | null }[] = [
  { ch: 'whatsapp', lang: 'DE', sys: null }, // enquiry answered
  { ch: 'whatsapp', lang: 'DE', sys: 'stock' }, // stock checked, slots offered
  { ch: 'whatsapp', lang: 'DE', sys: 'bill' }, // order confirmed → QR-bill
  { ch: null, lang: null, sys: 'crm' }, // contact, deal, transcript → HubSpot
  { ch: 'email', lang: 'FR', sys: 'stock' }, // delivery note matched to order
  { ch: 'webChat', lang: 'EN', sys: 'dispatch' }, // delivery to Zermatt? coverage
  { ch: 'phone', lang: 'IT', sys: 'sales' }, // price negotiation → sales
  { ch: 'whatsapp', lang: 'FR', sys: 'dispatch' }, // "où est ma livraison ?" → tracking
]

export function HeroFlow({ step, tick }: { step: number; tick: number }) {
  const t = useTranslations('sections.heroLive')
  const ev = EVENTS[step % EVENTS.length]
  const chLabel = (c: Ch) => (c === 'whatsapp' ? 'WhatsApp' : t(`channels.${c}`))

  return (
    <div className="hero-photo hflow" aria-hidden="true">
      <svg viewBox="0 0 552 520" preserveAspectRatio="xMinYMin slice" focusable="false">
        <defs>
          <pattern id="hflow-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="hflow-dot" />
          </pattern>
        </defs>
        <rect width="552" height="520" fill="url(#hflow-dots)" />

        <text x="16" y="26" className="hflow-caption">
          {t('flow.caption')}
        </text>

        {CHANNELS.map((c) => (
          <path key={c} d={inEdge(c)} className="hflow-edge" />
        ))}
        {SYSTEMS.map((s) => (
          <path key={s} d={outEdge(s)} className="hflow-edge" />
        ))}

        <g key={`e${tick}`}>
          {ev.ch && <path d={inEdge(ev.ch)} className="hflow-edge is-on" pathLength={1} />}
          {ev.sys && <path d={outEdge(ev.sys)} className="hflow-edge hflow-edge--out is-on" pathLength={1} />}
          {ev.ch && <path d={inEdge(ev.ch)} className="hflow-packet" pathLength={1} />}
          {ev.sys && <path d={outEdge(ev.sys)} className="hflow-packet hflow-packet--out" pathLength={1} />}
        </g>

        {CHANNELS.map((c) => (
          <g key={c} className={c === ev.ch ? 'hflow-node is-on' : 'hflow-node'}>
            <rect x={CH_X} y={CH_Y[c] - NODE_H / 2} width={CH_W} height={NODE_H} rx="6" />
            <text x={CH_X + 12} y={CH_Y[c] + 4}>
              {chLabel(c)}
            </text>
          </g>
        ))}

        <g className="hflow-agent">
          <rect x={AG.x} y={AG.y} width={AG.w} height={AG.h} rx="8" />
          <text x={AG.x + AG.w / 2} y={AG.y + 25} textAnchor="middle" className="name">
            {t('flow.agent')}
          </text>
          {LANGS.map((l, i) => (
            <text
              key={l}
              x={AG.x + 20 + i * 28}
              y={AG.y + 45}
              textAnchor="middle"
              className={l === ev.lang ? 'lang is-on' : 'lang'}
            >
              {l}
            </text>
          ))}
        </g>

        {SYSTEMS.map((s) => (
          <g key={s} className={s === ev.sys ? 'hflow-node is-on' : 'hflow-node'}>
            <rect x={SYS_X} y={SYS_Y[s] - NODE_H / 2} width={SYS_W} height={NODE_H} rx="6" />
            <text x={SYS_X + 12} y={SYS_Y[s] + 4}>
              {t(`flow.${s}`)}
            </text>
          </g>
        ))}

        {ev.sys && (
          <g key={`p${tick}`} transform={`translate(${SYS_X} ${SYS_Y[ev.sys]})`}>
            <circle r="7" className="hflow-ping" />
            <circle r="7" className="hflow-ping hflow-ping--2" />
          </g>
        )}
      </svg>
    </div>
  )
}
