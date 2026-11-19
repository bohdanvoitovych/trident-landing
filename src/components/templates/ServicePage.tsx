import { useTranslations, useLocale } from 'next-intl'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { caseHref, caseImage, getCases } from '@/data/cases'
import type { ServiceData } from '@/data/services'

type Props = {
  service: ServiceData
}

const WHY = ['fixedPrice', 'compliance', 'response'] as const

export function ServicePage({ service }: Props) {
  const locale = useLocale()
  const cases = getCases(locale)
  const t = useTranslations('services')
  const tp = useTranslations('templates.service')
  const ta = useTranslations('ui.actions')
  const relatedCases = cases.filter((c) => service.relatedCases.includes(c.slug))

  return (
    <>
      <PageHero
        crumbs={[
          { name: tp('crumb'), href: '/services' },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
        label={tp('label')}
        title={service.title}
        lead={service.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {ta('freeQuote')}
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              {ta('seeProjects')}
            </ButtonLink>
          </>
        }
        aside={
          <div className="panel stack" style={{ gap: 20 }}>
            <p className="h4 text-blue-d">{service.tagline}</p>
            <ul className="ticks">
              {service.features.slice(0, 3).map((f) => (
                <li key={f.title}>{f.title}</li>
              ))}
            </ul>
          </div>
        }
      />

      {/* What's included */}
      <section className="section section--alt" aria-labelledby="scope-h">
        <div className="container">
          <SectionHeader
            id="scope-h"
            label={tp('scopeLabel')}
            title={t('features')}
            lead={tp('scopeLead', { service: service.title })}
          />
          <div className="grid-2 stagger">
            {service.features.map((feature, i) => (
              <div key={feature.title} className="card card--flat feature-card">
                <span className="mono text-[13px] font-semibold text-blue-d" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section--band" aria-labelledby="why-h">
        <div className="container">
          <h2 id="why-h" className="sr-only">
            {tp('whyTitle')}
          </h2>
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {WHY.map((key) => (
              <li key={key} className="flex flex-col gap-2 border-t-2 border-blue pt-5">
                <h3 className="h4">{tp(`why.${key}.title`)}</h3>
                <p className="body">{tp(`why.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section section--alt" aria-labelledby="stack-h">
        <div className="container">
          {/* The CTO service lists areas of work, not technologies. */}
          {service.slug === 'cto-as-a-service' ? (
            <SectionHeader id="stack-h" label={tp('scopeLabel')} title={tp('stackTitleCto')} />
          ) : (
            <SectionHeader id="stack-h" label={t('techStack')} title={tp('stackTitle')} />
          )}
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {service.techStack.map((tech) => (
              <li key={tech} className="rounded-sm border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="section" aria-labelledby="related-h">
          <div className="container">
            <SectionHeader
              id="related-h"
              label={tp('portfolioLabel')}
              title={t('relatedCases')}
              lead={tp('portfolioLead', { service: service.title })}
            />
            <div className="grid-3 stagger wipe">
              {relatedCases.map((c) => (
                <CaseCard
                  key={c.slug}
                  href={caseHref(c.slug)}
                  image={caseImage(c)}
                  imageAlt={c.hero.title}
                  sector={c.industry}
                  title={c.hero.title}
                  description={c.hero.tagline}
                  results={c.results}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={relatedCases.length > 0 ? 'section section--alt' : 'section'} aria-labelledby="svc-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="svc-cta-h" className="h2">
                {tp('ctaTitle', { service: service.title })}
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                {tp('ctaLead')}
              </p>
            </div>
            <ButtonLink href="/contact" arrow>
              {tp('ctaButton')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
