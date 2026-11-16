import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { StatCard } from '@/components/molecules/StatCard'
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

      <div className="container hero-stats">
        <h2 className="hero-stats-h">{th('statsTitle')}</h2>
        <div className="grid-3 gap-tight stagger">
          <StatCard
            href="/cases/clinic-voice-documentation"
            source={t('hero.statSrc.practice')}
            value="+30.8 %"
            description={th('stats.practice')}
            visual={{ kind: 'bar', before: 0.76, after: 1 }}
          />
          <StatCard
            href="/cases/warranty-control-component-maker"
            source={t('hero.statSrc.maker')}
            value="−63 %"
            description={th('stats.maker')}
            visual={{ kind: 'beforeAfter', after: 0.37 }}
          />
          <StatCard
            href="/cases"
            source={t('hero.statSrc.track')}
            value="100+"
            description={th('stats.projects')}
            visual={{ kind: 'tags', tags: th.raw('stats.projectsTags') as string[] }}
          />
        </div>
      </div>
    </section>
  )
}
