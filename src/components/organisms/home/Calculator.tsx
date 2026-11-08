'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { intlLocale } from '@/lib/utils'

/** Freed hours = enquiries × minutes × 0.75 / 60; FTE = hours / 160. Under 150 enquiries: "not yet". */
export function Calculator() {
  const t = useTranslations('ui')
  const locale = useLocale()
  const tc = useTranslations('sections.calculator')
  const [enq, setEnq] = useState(400)
  const [mins, setMins] = useState(8)
  const hrs = Math.round((enq * mins * 0.75) / 60)
  const fte = (hrs / 160).toFixed(1)

  return (
    <section className="section--ink section" id="calc" aria-labelledby="calc-h">
      <div className="container split reveal">
        <div className="stack" style={{ gap: 20 }}>
          <span className="label">{tc('label')}</span>
          <h2 id="calc-h" className="h2">
            {tc('title')}
          </h2>
          <p className="lead">{tc('lead')}</p>
        </div>
        <div className="calc">
          <div className="calc-field">
            <div className="row">
              <label htmlFor="calc-enq">{tc('enquiries')}</label>
              <span className="mono" aria-hidden="true">
                {enq.toLocaleString(intlLocale(locale))}
              </span>
            </div>
            <input id="calc-enq" className="range" type="range" min={50} max={2000} step={10} value={enq} onChange={(e) => setEnq(Number(e.target.value))} />
          </div>
          <div className="calc-field">
            <div className="row">
              <label htmlFor="calc-min">{t('calc.minutes')}</label>
              <span className="mono" aria-hidden="true">
                {t('calc.minutesValue', { n: mins })}
              </span>
            </div>
            <input
              id="calc-min"
              className="range"
              type="range"
              min={2}
              max={25}
              step={1}
              value={mins}
              aria-valuetext={t('calc.minutesValue', { n: mins })}
              onChange={(e) => setMins(Number(e.target.value))}
            />
          </div>
          <div className="calc-out" aria-live="polite">
            <div>
              <span className="v blue">{hrs} h</span>
              <span className="k">{t('calc.hoursFreed')}</span>
            </div>
            <div>
              <span className="v">{fte}</span>
              <span className="k">{t('calc.fte')}</span>
            </div>
          </div>
          {enq >= 150 ? (
            <div className="verdict">
              <b>{t('calc.worth')}</b>
              <Link href="/contact" className="btn btn--primary btn--sm">
                <span>
                  {t('actions.bookAudit')}
                  <i className="arr" aria-hidden="true">
                    →
                  </i>
                </span>
              </Link>
            </div>
          ) : (
            <p className="verdict" style={{ margin: 0 }}>
              <span>
                <b>{t('calc.notYet')}</b> {t('calc.notYetText')}
              </span>
            </p>
          )}
          <p className="calc-note">{tc('note')}</p>
        </div>
      </div>
    </section>
  )
}
