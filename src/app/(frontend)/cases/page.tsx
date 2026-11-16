import { getLocale, getTranslations } from 'next-intl/server'
import { caseImage, getCaseStudies } from '@/data/cases'
import { getCaseIndustry } from '@/data/industries'
import { Link } from '@/i18n/navigation'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { PageHero } from '@/components/molecules/PageHero'
import { CaseCard } from '@/components/molecules/CaseCard'
import { ButtonLink, Label } from '@/components/atoms/controls'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.cases' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/cases',
    locale,
  })
}

export default async function CasesPage() {
  const locale = await getLocale()
  const cases = getCaseStudies(locale)
  const t = await getTranslations('ui')
  const tc = await getTranslations('cases')
  const tp = await getTranslations('pages.cases')
  // Industries that have at least one case study, in the order the cases appear.
  const industries = [
    ...new Map(
      cases.flatMap((c) => {
        const i = getCaseIndustry(c.slug, locale)
        return i ? [[i.slug, i] as const] : []
      }),
    ).values(),
  ]

  return (
    <>
      <PageJsonLd type="CollectionPage" path="/cases" name={pageName(tp('metaTitle'))} description={tp('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('nav.caseStudies'), href: '/cases' }]}
        label={tp('label')}
        title={tp('title')}
        lead={tp('lead')}
      />

      <section className="section section--alt" aria-labelledby="case-studies-h">
        <div className="container">
          <h2 id="case-studies-h" className="sr-only">
            {tc('title')}
          </h2>
          <div className="grid-3 stagger wipe">
            {cases.map((c) => {
              const [first, ...rest] = c.results
              return (
                <CaseCard
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  image={caseImage(c)}
                  sector={c.industry}
                  title={c.hero.title}
                  description={c.hero.tagline}
                  metric={first ? { value: first.value, label: first.metric } : undefined}
                  label={c.evidence}
                  results={rest}
                />
              )
            })}
          </div>
          {industries.length > 0 && (
            <nav className="case-industries reveal" aria-label={tp('byIndustry')}>
              <span className="meta">{tp('byIndustry')}</span>
              <ul>
                {industries.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/industries/${i.slug}`} className="tag tag--line">
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <p className="case-switch reveal">
            <Link href="/projects" className="text-link">
              {tp('projectsLink')} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="cases-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <Label>{tp('ctaLabel')}</Label>
            <h2 id="cases-cta-h" className="h2">
              {tp('ctaTitle')}
            </h2>
            <p className="lead" style={{ maxWidth: 640 }}>
              {tp('ctaLead')}
            </p>
          </div>
          <ButtonLink href="/contact" arrow>
            {tp('ctaButton')}
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
