'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslations } from 'next-intl'
import { prefersReducedMotion, useActive } from '@/lib/motion'

const pad2 = (n: number) => String(n).padStart(2, '0')
const DURATION = 5500 // ms for the full race; the agent finishes at 12 %
const SME_MIN = 15 * 60 + 12

/** Agent (4 s) vs market median (>15 h). One rAF loop while running; stops off-screen. */
export function Race() {
  const t = useTranslations('ui.race')
  const ref = useRef<HTMLElement>(null)
  const active = useActive(ref)
  const [p, setP] = useState(0) // 0..100
  const [running, setRunning] = useState(false)
  const start = useRef(0)

  useEffect(() => {
    if (!running || !active) return
    let raf = 0
    const from = performance.now() - (p / 100) * DURATION
    start.current = from
    const step = (now: number) => {
      const v = Math.min(100, ((now - start.current) / DURATION) * 100)
      setP(v)
      if (v >= 100) {
        setRunning(false)
        return
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // p is read once when (re)starting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, active])

  const run = () => {
    if (prefersReducedMotion()) {
      setP(100)
      return
    }
    setP(0)
    setRunning(true)
  }

  const agentP = Math.min(1, p / 12)
  const smeMin = Math.round((p / 100) * SME_MIN)
  const label = running ? t('running') : p > 0 ? t('again') : t('start')

  return (
    <section ref={ref} className="section--dark section--band" aria-labelledby="race-h">
      <div className="container split reveal">
        <div className="stack" style={{ gap: 20 }}>
          <span className="label">{t('label')}</span>
          <h2 id="race-h" className="h2">
            {t('title')}
          </h2>
          <div>
            <button type="button" className="btn btn--primary" onClick={run} disabled={running}>
              <span>{label}</span>
            </button>
          </div>
        </div>
        <div className="race-lanes">
          <div className="lane">
            <div className="lane-head">
              <b>{t('agent')}</b>
              <span className="mono" aria-live="off">
                {(agentP * 4).toFixed(1)} s
              </span>
            </div>
            <div className="lane-track">
              <span className="lane-fill" style={{ '--p': agentP } as CSSProperties} />
              <span className={p >= 12 ? 'lane-done on' : 'lane-done'}>{t('agentDone')}</span>
            </div>
          </div>
          <div className="lane">
            <div className="lane-head">
              <b>{t('market')}</b>
              <span className="mono muted">
                {Math.floor(smeMin / 60)} h {pad2(smeMin % 60)} min
              </span>
            </div>
            <div className="lane-track">
              <span className="lane-fill lane-fill--muted" style={{ '--p': p / 100 } as CSSProperties} />
              <span className={p >= 100 ? 'lane-done on' : 'lane-done'}>{t('marketDone')}</span>
            </div>
          </div>
          <p className="race-note">{t('note')}</p>
        </div>
      </div>
    </section>
  )
}
