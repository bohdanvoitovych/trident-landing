import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { getTeam, getStats } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { TeamFilter } from './TeamFilter'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.team' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/team',
    locale,
  })
}

const departmentOrder = ['Leadership', 'Management', 'Frontend', 'Backend', 'Mobile', 'QA', 'DevOps'] as const

const CHIPS = ['engineers', 'countries', 'seniorOnly'] as const

export default function TeamPage() {
  const locale = useLocale()
  const team = getTeam(locale)
  const stats = getStats(locale)
  const t = useTranslations('pages.team')
  return (
    <>
      <PageJsonLd type="WebPage" path="/team" name={pageName(t('metaTitle'))} description={t('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/team' }]}
        label={t('crumb')}
        title={t.rich('title', { blue: (c) => <span className="blue">{c}</span> })}
        lead={t('lead')}
        actions={
          <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
            {CHIPS.map((k) => (
              <li key={k}>
                <Tag tone="line">{t(`chips.${k}`)}</Tag>
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

      <section className="section section--alt" aria-labelledby="people-h">
        <div className="container">
          <SectionHeader
            id="people-h"
            label={t('peopleLabel')}
            title={t('peopleTitle')}
            lead={t('peopleLead')}
          />
          <TeamFilter members={team} departments={departmentOrder} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="team-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <h2 id="team-cta-h" className="h2">
              {t('ctaTitle')}
            </h2>
            <p className="lead">{t('ctaLead')}</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              {t('ctaButton')}
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              {t('viewWork')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
