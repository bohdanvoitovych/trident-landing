'use client'

import { useEffect, useRef, useState } from 'react'
import { useActive } from '@/lib/motion'

/* ── Tagline: a demo of the four languages, not a language switch ───────── */

const ROT = [
  { c: 'DE', t: 'Antwortet in Sekunden. Rund um die Uhr.' },
  { c: 'FR', t: 'Répond en quelques secondes. Jour et nuit.' },
  { c: 'IT', t: 'Risponde in pochi secondi. Giorno e notte.' },
  { c: 'EN', t: 'Answers in seconds. Around the clock.' },
]
const SCR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·'

export function HeroTagline() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useActive(ref)
  const idx = useRef(0)
  const [i, setI] = useState(0)
  const [text, setText] = useState(ROT[0].t)

  useEffect(() => {
    if (!active) {
      setText(ROT[idx.current].t)
      return
    }
    let scr = 0
    const rotate = window.setInterval(() => {
      const next = (idx.current + 1) % ROT.length
      idx.current = next
      setI(next)
      const target = ROT[next].t
      let f = 0
      const N = 16
      window.clearInterval(scr)
      scr = window.setInterval(() => {
        f++
        if (f >= N) {
          window.clearInterval(scr)
          setText(target)
          return
        }
        let out = ''
        for (let k = 0; k < target.length; k++) {
          const ch = target[k]
          out += ch === ' ' || k < (f / N) * target.length ? ch : SCR[(Math.random() * SCR.length) | 0]
        }
        setText(out)
      }, 40)
    }, 3600)
    return () => {
      window.clearInterval(rotate)
      window.clearInterval(scr)
    }
  }, [active])

  return (
    <div ref={ref} className="tagline rise" style={{ animationDelay: '.7s' }}>
      <span className="tagline-code" aria-hidden="true">
        {ROT[i].c}
      </span>
      <span aria-hidden="true">
        <span className="tagline-text">{text}</span>
        <span className="caret" />
      </span>
      <span className="sr-only">{ROT[3].t}</span>
    </div>
  )
}

/* ── Live agent log: one story, one Saturday evening, one client ───────── */

const CH = [
  ['WhatsApp', 'DE', '4 s'],
  ['WhatsApp', 'DE', '2 s'],
  ['WhatsApp', 'DE', '3 s'],
  ['CRM', '—', '1 s'],
  ['E-mail', 'FR', '9 s'],
  ['Web chat', 'EN', '5 s'],
  ['Phone', 'IT', 'esc'],
  ['WhatsApp', 'FR', '3 s'],
] as const

const pad2 = (n: number) => String(n).padStart(2, '0')

type LogProps = { lines: string[]; title: string; note: string; chipLabel: string; chipNote: string }

export function HeroLog({ lines, title, note, chipLabel, chipNote }: LogProps) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useActive(ref)
  // Start with five rows so the card is full on first paint (server and client agree).
  const [n, setN] = useState(4)
  const [fresh, setFresh] = useState(false)

  useEffect(() => {
    if (!active) return
    const id = window.setInterval(() => {
      setN((v) => v + 1)
      setFresh(true)
    }, 2000)
    return () => window.clearInterval(id)
  }, [active])

  const rows = []
  for (let k = 0; k < 5; k++) {
    const idx = n - k
    if (idx < 0) break
    const [ch, lang, lat] = CH[idx % CH.length]
    const minutes = 21 * 60 + 41 + idx
    rows.push({
      key: idx,
      ch,
      lang,
      lat,
      ev: lines[idx % lines.length],
      time: `${pad2(Math.floor(minutes / 60) % 24)}:${pad2(minutes % 60)}`,
      op: 1 - k * 0.15,
      isNew: k === 0 && fresh,
    })
  }

  return (
    <>
      <div ref={ref} className="hero-log floaty" data-loop>
        <div className="hero-log-head">
          <span>
            <span className="pulse" />
            {title}
          </span>
          <span className="muted">{note}</span>
        </div>
        <ol className="hero-log-body" aria-label={title}>
          {rows.map((r) => (
            <li key={r.key} className={r.isNew ? 'log-row is-new' : 'log-row'} style={{ opacity: r.op }}>
              <span className="t">{r.time}</span>
              <span className="ch">
                {r.ch} {r.lang}
              </span>
              <span className="ev">{r.ev}</span>
              <span className="lat">{r.lat}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="hero-chip floaty floaty--d2" data-loop>
        <span className="k">{chipLabel}</span>
        <span className="v">{(1284 + n).toLocaleString('en-US').replace(/,/g, ' ')}</span>
        <span className="ok">● {chipNote}</span>
      </div>
    </>
  )
}
