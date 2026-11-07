'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { Testimonial } from '@/data/testimonials'
import { useActive } from '@/lib/motion'

const initials = (n: string) =>
  n
    .split(' ')
    .map((x) => x[0])
    .join('')

/** One big quote, prev/next, dots. Auto-advances every 7 s until the user interacts; pauses off-screen. */
export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const t = useTranslations('ui.testimonials')
  const ref = useRef<HTMLDivElement>(null)
  const active = useActive(ref)
  const [i, setI] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto || !active) return
    const id = window.setInterval(() => setI((v) => (v + 1) % items.length), 7000)
    return () => window.clearInterval(id)
  }, [auto, active, items.length])

  const go = (n: number) => {
    setAuto(false)
    setI((n + items.length) % items.length)
  }

  return (
    <div ref={ref} className="container split">
      <div className="stack reveal">
        <span className="label">Clients</span>
        <h2 id="quotes-h" className="h2">
          What clients say
        </h2>
        <div className="q-nav">
          <button type="button" className="btn btn--outline" aria-label={t('prev')} onClick={() => go(i - 1)}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="btn btn--outline" aria-label={t('next')} onClick={() => go(i + 1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="quote-box reveal">
        {items.map((q, k) => (
          <figure key={q.author + q.company} className="quote" hidden={k !== i} aria-live={auto ? 'off' : 'polite'}>
            <span className="mark" aria-hidden="true">
              “
            </span>
            <blockquote>{q.quote}</blockquote>
            <figcaption>
              <span className="avatar-ini" aria-hidden="true">
                {initials(q.author)}
              </span>
              <span>
                <b>{q.author}</b>
                <span>{q.role ? `${q.role}, ${q.company}` : q.company}</span>
              </span>
            </figcaption>
          </figure>
        ))}
        <div className="q-dots" role="group" aria-label={t('group')}>
          {items.map((_, k) => (
            <button
              key={k}
              type="button"
              className="qdot"
              aria-label={t('item', { n: k + 1 })}
              aria-pressed={k === i}
              onClick={() => go(k)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
