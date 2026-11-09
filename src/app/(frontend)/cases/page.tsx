import { getLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProjectSectors } from '@/data/projects'
import { caseImage, getCases } from '@/data/cases'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
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
  const projects = getProjects(locale)
  const projectSectors = getProjectSectors(locale)
  const cases = getCases(locale)
  const t = await getTranslations('ui')
  const tc = await getTranslations('cases')
  const tp = await getTranslations('pages.cases')
  const withCase = projects.filter((p) => p.caseSlug).length

  return (
    <>
      <PageJsonLd type="CollectionPage" path="/cases" name={pageName(tp('metaTitle'))} description={tp('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('nav.projects'), href: '/cases' }]}
        label={tp('label')}
        title={tp('title')}
        lead={tp('lead', { total: projects.length, withCase })}
      />

      <section className="section section--alt" aria-labelledby="case-studies-h">
        <div className="container">
          <SectionHeader id="case-studies-h" label={tc('results')} title={tc('title')} lead={tc('subtitle')} />
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
                  results={rest}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* One list, filtered by sector. Entries with a full write-up link to it. */}
      <section className="section" aria-labelledby="projects-h">
        <div className="container">
          <SectionHeader id="projects-h" label={t('nav.projects')} title={t('portfolio.projectsTitle')} />
          <ProjectGrid projects={projects} sectors={projectSectors} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="cases-cta-h">
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
