import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ButtonLink } from '@/components/atoms/controls'
import { Integrations } from '@/components/organisms/home/Integrations'
import { getServices } from '@/data/services'
import { getTechnologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.services' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/services',
    locale,
  })
}

const STEPS = ['scope', 'build', 'maintain'] as const

const TRUST_POINTS = ['fixedPrice', 'compliance', 'response', 'experience', 'noLockIn', 'talent'] as const

export default function ServicesPage() {
  const locale = useLocale()
  const technologies = getTechnologies(locale)
  const services = getServices(useLocale())
  const t = useTranslations('pages.services')
  const ta = useTranslations('ui.actions')
  return (
    <>
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/services' }]}
        label={t('label')}
        title={t('title')}
        lead={t('lead')}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {ta('freeQuote')}
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              {ta('seeProjects')}
            </ButtonLink>
          </>
        }
      />

      {/* Service cards */}
      <section className="section section--alt" aria-labelledby="svc-h">
        <div className="container">
          <SectionHeader id="svc-h" label={t('crumb')} title={t('servicesTitle')} />
          <div className="grid-4 stagger">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="section section--ink" aria-labelledby="engage-h">
        <div className="container">
          <SectionHeader
            id="engage-h"
            label={t('processLabel')}
            title={t('processTitle')}
            lead={t('processLead')}
          />
          <ol className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {STEPS.map((k, i) => (
              <li key={k} className="flex flex-col gap-3 border-t border-white/15 pt-6">
                <span className="mono text-[13px] text-blue-l">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h4">{t(`steps.${k}.title`)}</h3>
                <p className="body">{t(`steps.${k}.desc`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies */}
      <section className="section" aria-labelledby="tech-h">
        <div className="container">
          <SectionHeader
            id="tech-h"
            label={t('stackLabel')}
            title={t('stackTitle')}
            action={{ href: '/technologies', label: t('stackAction') }}
          />
          <ul className="grid-4 keep-2 stagger lg:!grid-cols-5" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 14 }}>
            {technologies.map((tech) => (
              <li key={tech.slug} className="grid">
                <Link
                  href={`/technologies/${tech.slug}`}
                  className="card flex flex-col items-center gap-3 px-4 py-6 text-center"
                >
                  <Image
                    src={`/images/tech/${tech.iconSlug}.svg`}
                    alt=""
                    width={30}
                    height={30}
                    unoptimized
                    className="shrink-0"
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="small text-ink">{tech.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--alt" aria-labelledby="why-h">
        <div className="container">
          <div className="split split--top">
            <SectionHeader id="why-h" label={t('whyLabel')} title={t('whyTitle')} className="!mb-0" />
            <ul className="reveal border-t-2 border-ink" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {TRUST_POINTS.map((k) => (
                <li key={k} className="flex flex-col gap-2 border-b border-line py-6">
                  <h3 className="h4">{t(`trust.${k}.title`)}</h3>
                  <p className="body">{t(`trust.${k}.desc`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Integrations />

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="svc-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <span className="label">{t('ctaLabel')}</span>
              <h2 id="svc-cta-h" className="h2">
                {t('ctaTitle')}
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                {t('ctaLead')}
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                {t('ctaButton')}
              </ButtonLink>
              <ButtonLink href="/cases" variant="outline">
                {t('viewCases')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
