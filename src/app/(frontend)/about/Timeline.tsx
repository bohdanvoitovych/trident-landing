'use client'

import { useState, type CSSProperties } from 'react'

type Item = { year: string; event: string }

/** Year selector over a progress track. Every event is in the HTML; only the selected one is shown. */
export function Timeline({ items }: { items: Item[] }) {
  const [cur, setCur] = useState(0)
  const last = items.length - 1

  return (
    <div className="stack" style={{ gap: 'clamp(32px,4vw,56px)' }}>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute"
          style={{ left: 10, right: `calc(100% / ${items.length} - 10px)`, top: 9, height: 2, background: 'var(--on-dark-line)' }}
        >
          <span
            className="block h-full w-full bg-blue"
            style={{ transformOrigin: 'left', transform: `scaleX(${last ? cur / last : 1})`, transition: 'transform .5s var(--ease)' } as CSSProperties}
          />
        </div>
        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0,1fr))` }}>
          {items.map((it, i) => (
            <button
              key={it.year}
              type="button"
              aria-pressed={i === cur}
              aria-controls={`tl-${it.year}`}
              onClick={() => setCur(i)}
              className="flex cursor-pointer flex-col items-start gap-3.5 border-0 bg-transparent p-0 text-left"
              style={{ color: i === cur ? '#fff' : 'var(--on-dark-3)', minHeight: 44 }}
            >
              <span
                aria-hidden="true"
                className="block rounded-full"
                style={{
                  width: 20,
                  height: 20,
                  background: i <= cur ? 'var(--blue)' : 'var(--surface-d)',
                  boxShadow: i <= cur ? '0 0 0 4px var(--ink)' : '0 0 0 4px var(--ink), inset 0 0 0 2px rgba(255,255,255,.22)',
                }}
              />
              <span style={{ fontSize: 'clamp(14px,2vw,28px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1 }}>{it.year}</span>
            </button>
          ))}
        </div>
      </div>
      <div aria-live="polite" className="border-t" style={{ borderColor: 'var(--on-dark-line)', paddingTop: 32 }}>
        {items.map((it, i) => (
          <div
            key={it.year}
            id={`tl-${it.year}`}
            hidden={i !== cur}
            className="grid items-baseline gap-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8"
          >
            <span className="text-blue-l" style={{ fontSize: 'clamp(48px,6vw,72px)', fontWeight: 600, letterSpacing: '-.05em', lineHeight: 0.9 }}>
              {it.year}
            </span>
            <p className="m-0" style={{ fontSize: 'clamp(21px,2.6vw,32px)', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 500 }}>
              {it.event}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
