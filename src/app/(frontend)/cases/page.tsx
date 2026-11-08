import { getLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProjectSectors } from '@/data/projects'
import { getCases } from '@/data/cases'
import { buildMetadata } from '@/lib/metadata'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { ButtonLink, Label } from '@/components/atoms/controls'
import { caseImage } from '@/components/templates/CasePage'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Projects & Case Studies | Trident Software Switzerland',
    description:
      '27+ software development projects delivered — automotive B2B platforms, AI healthcare systems, e-commerce, IoT, SaaS. Swiss engineering team since 2009.',
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
  const withCase = projects.filter((p) => p.caseSlug).length

  return (
    <>
      <PageHero
        crumbs={[{ name: t('nav.projects'), href: '/cases' }]}
        label="Portfolio"
        title="Delivered, then counted"
        lead={
          <>
            {projects.length} products and platforms built for clients across Switzerland and
            Europe — {withCase} of them written up in full, with the numbers behind them.
          </>
        }
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
            <Label>Start here</Label>
            <h2 id="cases-cta-h" className="h2">
              Tell us what you are trying to fix
            </h2>
            <p className="lead" style={{ maxWidth: 640 }}>
              We read every enquiry ourselves and come back within 24 business hours with an
              honest read on scope.
            </p>
          </div>
          <ButtonLink href="/contact" arrow>
            Book a free audit
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
