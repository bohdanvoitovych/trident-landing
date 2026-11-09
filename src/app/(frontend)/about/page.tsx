import type { CSSProperties } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Label, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { getStats } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { Timeline } from './Timeline'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.about' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/about',
    locale,
  })
}

const VALUES = ['compliance', 'engineering', 'budgets', 'multilingual', 'partnership', 'aiNative'] as const

const YEARS = ['2009', '2012', '2015', '2018', '2021', '2023', '2024'] as const

const LOCATIONS = ['sion', 'kyiv', 'telAviv'] as const

const composition = [
  { key: 'backend', value: 10 },
  { key: 'frontend', value: 6 },
  { key: 'ai', value: 4 },
  { key: 'embedded', value: 3 },
  { key: 'devops', value: 2 },
  { key: 'design', value: 1 },
]
const maxComp = Math.max(...composition.map((c) => c.value))

export default async function AboutPage() {
  const locale = await getLocale()
  const stats = getStats(locale)
  const t = await getTranslations('ui')
  const ta = await getTranslations('pages.about')
  const timeline = YEARS.map((year) => ({ year, event: ta(`timeline.y${year}`) }))

  return (
    <>
      <PageJsonLd type="AboutPage" path="/about" name={pageName(ta('metaTitle'))} description={ta('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('nav.about'), href: '/about' }]}
        label={ta('label')}
        title={ta.rich('heroTitle', { blue: (c) => <span className="blue">{c}</span> })}
        lead={ta('heroLead')}
        actions={
          <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
            {(ta.raw('chips') as string[]).map((f) => (
              <li key={f}>
                <Tag tone="line">{f}</Tag>
              </li>
            ))}
          </ul>
        }
        aside={
          <dl className="facts stagger" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', margin: 0 }}>
            {stats.map((s) => (
              <div key={s.label} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                <dt className="fact-k">{s.label}</dt>
                <dd className="fact-v" style={{ margin: 0, fontSize: 'clamp(32px,3.4vw,48px)' }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section section--alt" aria-labelledby="story-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <Label>{ta('storyLabel')}</Label>
            <h2 id="story-h" className="h2">
              {ta('storyTitle')}
            </h2>
          </div>
          <div className="stack reveal" style={{ gap: 20 }}>
            <p className="m-0 text-ink" style={{ fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.5, fontWeight: 500 }}>
              {ta('storyIntro')}
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              {ta('storyP1')}
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              {ta('storyP2')}
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              {ta('storyP3')}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="timeline-h">
        <div className="container">
          <SectionHeader id="timeline-h" label={t('about.timelineLabel')} title={t('about.timelineTitle')} />
          <div className="reveal">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <SectionHeader
            id="values-h"
            label={ta('valuesLabel')}
            title={ta('valuesTitle')}
            lead={ta('valuesLead')}
          />
          <div className="grid-3 stagger">
            {VALUES.map((key) => (
              <div key={key} className="card card--flat feature-card">
                <h3>{ta(`values.${key}.title`)}</h3>
                <p>{ta(`values.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="where-h">
        <div className="container split split--top split--stretch">
          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>{ta('whereLabel')}</Label>
              <h2 id="where-h" className="h2">
                {ta('whereTitle')}
              </h2>
              <p className="lead">{ta('whereLead')}</p>
            </div>
            <ul className="m-0 list-none border-t-2 border-ink p-0">
              {LOCATIONS.map((key) => (
                <li key={key} className="flex flex-col gap-1.5 border-b border-line-2 py-5">
                  <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.015em' }}>
                    {ta(`locations.${key}.city`)}{' '}
                    <span className="font-normal text-ink-2">· {ta(`locations.${key}.country`)}</span>
                  </span>
                  <span className="meta text-blue-d">{ta(`locations.${key}.role`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>{ta('teamLabel')}</Label>
              <h2 id="team-h" className="h2">
                {ta('teamTitle')}
              </h2>
              <p className="lead">{ta('teamLead')}</p>
            </div>
            <dl className="m-0 flex flex-col gap-3.5">
              {composition.map((c) => (
                <div key={c.key} className="grid items-center gap-3.5 text-[14px]" style={{ gridTemplateColumns: 'minmax(0,11rem) minmax(0,1fr) 28px' }}>
                  <dt>{ta(`composition.${c.key}`)}</dt>
                  <dd className="m-0 contents">
                    <span className="track track--10" aria-hidden="true" style={{ background: 'var(--line)' }}>
                      <span className="fill" style={{ '--v': c.value / maxComp } as CSSProperties} />
                    </span>
                    <span className="mono text-right font-semibold">{c.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <ButtonLink href="/team" variant="ink" arrow>
                {t('actions.meetTeam')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="about-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <h2 id="about-cta-h" className="h2">
              {ta('ctaTitle')}
            </h2>
            <p className="lead">{ta('ctaLead')}</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              {ta('ctaPrimary')}
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              {ta('ctaSecondary')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
