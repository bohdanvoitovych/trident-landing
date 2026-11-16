import { getLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProjectSectors } from '@/data/projects'
import { caseImage, getProjectStories } from '@/data/cases'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { ButtonLink, Label } from '@/components/atoms/controls'
import { Link } from '@/i18n/navigation'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.projects' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/projects',
    locale,
  })
}

export default async function ProjectsPage() {
  const locale = await getLocale()
  const projects = getProjects(locale)
  const sectors = getProjectSectors(locale)
  const stories = getProjectStories(locale)
  const t = await getTranslations('ui')
  const tp = await getTranslations('pages.projects')

  return (
    <>
      <PageJsonLd type="CollectionPage" path="/projects" name={pageName(tp('metaTitle'))} description={tp('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('nav.projects'), href: '/projects' }]}
        label={tp('label')}
        title={tp('title')}
        lead={tp('lead', { total: projects.length, withStory: stories.length })}
      />

      <section className="section section--alt" aria-labelledby="stories-h">
        <div className="container">
          <SectionHeader id="stories-h" label={tp('label')} title={tp('storiesTitle')} />
          <div className="grid-3 stagger wipe">
            {stories.map((c) => {
              const [first, ...rest] = c.results
              return (
                <CaseCard
                  key={c.slug}
                  href={`/projects/${c.slug}`}
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

      {/* Every project, filtered by sector. Entries with a full write-up link to it. */}
      <section className="section" aria-labelledby="projects-h">
        <div className="container">
          <SectionHeader id="projects-h" label={tp('allTitle')} title={t('portfolio.projectsTitle')} />
          <ProjectGrid projects={projects} sectors={sectors} />
          <p className="case-switch reveal">
            <Link href="/cases" className="text-link">
              {tp('casesLink')} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="projects-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <Label>{tp('ctaLabel')}</Label>
            <h2 id="projects-cta-h" className="h2">
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
