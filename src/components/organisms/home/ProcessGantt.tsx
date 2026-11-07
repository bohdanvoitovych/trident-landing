'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslations } from 'next-intl'
import { useActive } from '@/lib/motion'

type Stage = { t: string; d: string; days: string; a: number; b: number }

/** Gantt with a day scrubber. Play advances one day every 170 ms and stops off-screen. */
export function ProcessGantt({ stages }: { stages: Stage[] }) {
  const t = useTranslations('ui.process')
  const ref = useRef<HTMLDivElement>(null)
  const active = useActive(ref)
  const [day, setDay] = useState(1)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing || !active) return
    const id = window.setInterval(() => {
      setDay((d) => {
        if (d >= 30) {
          setPlaying(false)
          return 30
        }
        return d + 1
      })
    }, 170)
    return () => window.clearInterval(id)
  }, [playing, active])

  const toggle = () => {
    if (playing) return setPlaying(false)
    if (day >= 30) setDay(1)
    setPlaying(true)
  }

  return (
    <div ref={ref} className="gantt">
      <div className="gantt-ctl">
        <div className="stack" style={{ gap: 8 }}>
          <div className="row">
            <label htmlFor="proc-day">{t('drag')}</label>
            <span className="mono" aria-hidden="true">
              {t('day', { day })}
            </span>
          </div>
          <input
            id="proc-day"
            className="range"
            type="range"
            min={1}
            max={30}
            step={1}
            value={day}
            aria-valuetext={t('day', { day })}
            onChange={(e) => {
              setPlaying(false)
              setDay(Number(e.target.value))
            }}
          />
        </div>
        <button type="button" className="btn btn--ink btn--sm" aria-pressed={playing} onClick={toggle}>
          <span>{playing ? t('pause') : t('play')}</span>
        </button>
      </div>
      <ol className="gantt-rows">
        {stages.map((s) => {
          const fill = Math.max(0, Math.min(1, (day - s.a + 1) / (s.b - s.a)))
          const on = day >= s.a && day < s.b
          return (
            <li key={s.t} className={`g-row${on ? ' is-on' : fill > 0 ? ' is-past' : ''}`}>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
              <div>
                <span className="g-days">{s.days}</span>
                <div className="g-track" aria-hidden="true">
                  <span className="g-seg" style={{ gridColumn: `${s.a} / ${s.b}` }}>
                    <span className="g-fill" style={{ '--f': fill } as CSSProperties} />
                  </span>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
