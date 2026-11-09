import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { StatCard } from '@/components/molecules/StatCard'
import { SwissFlag } from '@/components/atoms/controls'
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
          <div className="hero-photo media">
            <Image
              src="/images/stock/ai-agent.jpg"
              alt={t('hero.photoAlt')}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 92vw, (max-width: 1100px) 720px, 600px"
            />
          </div>
          <HeroLog
            lines={log}
            title={t('hero.logTitle')}
            note={t('hero.logNote')}
            chipLabel={t('hero.conversationsToday')}
            chipNote={t('hero.medianReply')}
          />
        </div>
      </div>

      <div className="container hero-stats">
        <div className="grid-4 keep-2 gap-tight stagger">
          <StatCard
            source={t('hero.statSrc.clinic')}
            value="−92 %"
            description={th('stats.clinic')}
            visual={{ kind: 'bar', before: 1, after: 0.08 }}
          />
          <StatCard
            source={t('hero.statSrc.maker')}
            value="−63 %"
            description={th('stats.maker')}
            visual={{ kind: 'beforeAfter', after: 0.37 }}
          />
          <StatCard
            source={t('hero.statSrc.agent')}
            value={th('stats.agentValue')}
            description={th('stats.agent')}
            visual={{ kind: 'months', month: 2 }}
          />
          <StatCard
            source={t('hero.statSrc.residency')}
            value={
              <>
                CH / EU <SwissFlag />
              </>
            }
            description={th('stats.residency')}
            visual={{ kind: 'tags', tags: th.raw('stats.residencyTags') as string[] }}
          />
        </div>
      </div>
    </section>
  )
}
