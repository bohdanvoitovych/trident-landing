import { getLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProjectSectors } from '@/data/projects'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'
import { PageHero } from '@/components/molecules/PageHero'
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
  const t = await getTranslations('ui')
  const tp = await getTranslations('pages.projects')

  return (
    <>
      <PageJsonLd type="CollectionPage" path="/projects" name={pageName(tp('metaTitle'))} description={tp('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('nav.projects'), href: '/projects' }]}
        label={tp('label')}
        title={tp('title')}
        lead={tp('lead', { total: projects.length })}
      />

      {/* One list, filtered by sector. Entries with a write-up open it; the rest are cards. */}
      <section className="section section--alt" aria-labelledby="projects-h">
        <div className="container">
          <h2 id="projects-h" className="sr-only">
            {tp('allTitle')}
          </h2>
          <ProjectGrid projects={projects} sectors={sectors} />
          <p className="case-switch reveal">
            <Link href="/cases" className="text-link">
              {tp('casesLink')} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-cta-h">
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
