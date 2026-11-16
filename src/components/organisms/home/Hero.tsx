import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { HeroLog, HeroTagline } from './HeroLive'

/** Words of the H1; the part inside <b>…</b> in the message is highlighted blue. */
const h1Words = (src: string) =>
  src
    .split(/(<b>.*?<\/b>)/)
    .flatMap((part) => {
      const blue = part.startsWith('<b>')
      return part
        .replace(/<\/?b>/g, '')
        .split(' ')
        .filter(Boolean)
        .map((w) => ({ w, blue }))
    })

// Measured figures only, each linked to the case it comes from.
const RESULTS = [
  { k: 'consultations', v: '+30.8 %', src: 'practice', slug: 'clinic-voice-documentation' },
  { k: 'warranty', v: '−63 %', src: 'maker', slug: 'warranty-control-component-maker' },
  { k: 'invoice', v: '−84 %', src: 'practice', slug: 'clinic-voice-documentation' },
] as const

export function Hero() {
  const t = useTranslations('ui')
  const th = useTranslations('sections.hero')
  const log = (['1', '2', '3', '4', '5', '6', '7', '8'] as const).map((k) => t(`hero.log.${k}`))

  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-blob hero-blob--a" aria-hidden="true" data-loop />
      <div className="hero-blob hero-blob--b" aria-hidden="true" data-loop />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-tag fadein" style={{ margin: 0 }}>
            <span className="pulse pulse--ok" data-loop />
            Sion, Valais · HES-SO Valais-Wallis
          </p>
          <h1 id="hero-h" className="h1">
            {h1Words(th.raw('title') as string).map(({ w, blue }, i) => (
              <span key={i}>
                <span className="wm">
                  <span className={blue ? 'wd wd--blue' : 'wd'} style={{ animationDelay: `${120 + i * 70}ms` }}>
                    {w}
                  </span>
                </span>{' '}
              </span>
            ))}
          </h1>
          <HeroTagline />
          <p className="lead rise" style={{ animationDelay: '.85s', maxWidth: 600 }}>
            {th('lead')}
          </p>
          <div className="hero-ctas rise" style={{ animationDelay: '1s' }}>
            <Link href="/contact" className="btn btn--primary" data-umami-event="demo_click" data-umami-event-location="hero">
              <span>
                {th('ctaAudit')}
                <i className="arr" aria-hidden="true">
                  →
                </i>
              </span>
            </Link>
            <Link href="#results" className="btn btn--outline">
              <span>
                {t('actions.seeResults')}
                <i className="arr" aria-hidden="true">
                  →
                </i>
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-visual rise" style={{ animationDelay: '.4s' }}>
          <HeroLog
            lines={log}
            title={t('hero.logTitle')}
            note={t('hero.logNote')}
          />
        </div>
      </div>

      <div className="container">
        <h2 className="hero-results-h">{th('resultsTitle')}</h2>
        <ul className="hero-results stagger">
          {RESULTS.map((r) => (
            <li key={r.k}>
              <Link href={`/cases/${r.slug}`}>
                <span className="v">{r.v}</span>
                <span className="d">{th(`results.${r.k}`)}</span>
                <span className="s">
                  {th(`results.${r.src}`)} <i aria-hidden="true">→</i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
