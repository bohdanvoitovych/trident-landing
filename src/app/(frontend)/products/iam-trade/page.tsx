import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Label } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.iamTrade' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/products/iam-trade',
    locale,
  })
}

const FEATURES = ['accounts', 'products', 'pricing', 'orders', 'delivery', 'integrations'] as const


const techStack = [
  'React.js', 'Node.js', 'Python', 'PostgreSQL', 'Redis',
  'AWS', 'Docker', 'Kubernetes', 'Elasticsearch', 'REST / GraphQL API',
]

const HERO_STATS = [
  { key: 'integrations', value: '200+' },
  { key: 'products', value: '1M+' },
  { key: 'models', value: 'B2B/B2C/B2X' },
  { key: 'languages', value: 'EN/FR/DE/IT' },
] as const

const USE_CASES = ['autoParts', 'industrial', 'luxury', 'food', 'wholesale', 'multiBrand'] as const

export default function IamTradePage() {
  const t = useTranslations('pages.iamTrade')
  const tp = useTranslations('pages.products')
  return (
    <>
      <PageHero
        crumbs={[
          { name: tp('crumb'), href: '/products' },
          { name: 'iAM-Trade', href: '/products/iam-trade' },
        ]}
        label={tp('label')}
        title={t.rich('heroTitle', { blue: (c) => <span className="blue">{c}</span> })}
        lead={t('heroLead')}
        actions={
          <div className="stack" style={{ gap: 22 }}>
            <p className="body" style={{ maxWidth: 580 }}>
              {t('heroBody')}
            </p>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                {t('requestDemo')}
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline">
                {t('seeCase')}
              </ButtonLink>
            </div>
          </div>
        }
        aside={
          <dl className="facts stagger" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', margin: 0 }}>
            {HERO_STATS.map((s) => (
              <div key={s.key} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                <dt className="fact-k">{t(`stats.${s.key}`)}</dt>
                <dd className="fact-v" style={{ margin: 0, overflowWrap: 'anywhere' }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section section--line" aria-labelledby="platform-h">
        <div className="container">
          <SectionHeader
            id="platform-h"
            label={t('platformLabel')}
            title={t('platformTitle')}
            lead={t('platformLead')}
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {FEATURES.map((key) => (
              <li key={key} className="card card--flat feature-card">
                <h3>{t(`features.${key}.title`)}</h3>
                <p>{t(`features.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="capabilities-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <Label>{t('capabilitiesLabel')}</Label>
            <h2 id="capabilities-h" className="h2">
              {t('capabilitiesTitle')}
            </h2>
            <p className="lead">{t('capabilitiesLead')}</p>
            <div style={{ marginTop: 8 }}>
              <ButtonLink href="/contact" arrow>
                {t('bookDemo')}
              </ButtonLink>
            </div>
          </div>
          <div className="panel reveal">
            <ul className="ticks">
              {(t.raw('capabilities') as string[]).map((cap) => (
                <li key={cap} className="text-ink">
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="usecases-h">
        <div className="container">
          <SectionHeader
            id="usecases-h"
            label={t('useCasesLabel')}
            title={t('useCasesTitle')}
            lead={t('useCasesLead')}
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {USE_CASES.map((key) => (
              <li key={key} className="card card--flat feature-card">
                <h3>{t(`useCases.${key}.title`)}</h3>
                <p>{t(`useCases.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="tech-h">
        <div className="container">
          <SectionHeader
            id="tech-h"
            label={t('techLabel')}
            title={t('techTitle')}
            lead={t('techLead')}
          />
          <ul className="chips reveal" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {techStack.map((tech) => (
              <li key={tech} className="tag tag--line" style={{ fontSize: 13, padding: '8px 12px' }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="iam-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="iam-cta-h" className="h2">
              {t('ctaTitle')}
            </h2>
            <p className="lead">{t('ctaLead')}</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              {t('bookDemo')}
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              {t('seeProjects')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
