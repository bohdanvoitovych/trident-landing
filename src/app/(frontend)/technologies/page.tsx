import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { getTechnologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'
import { Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CtaBand, TagList } from '@/components/molecules/CatalogBlocks'

export const revalidate = 86400

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.technologies' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/technologies',
    locale,
  })
}

export default function TechnologiesPage() {
  const locale = useLocale()
  const technologies = getTechnologies(locale)
  const t = useTranslations('pages.technologies')
  return (
    <>
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/technologies' }]}
        label={t('label')}
        title={t('title')}
        lead={t('lead')}
      />

      <section className="section section--alt" aria-labelledby="tech-list-h">
        <div className="container">
          <SectionHeader
            id="tech-list-h"
            label={t('listLabel')}
            title={t('listTitle')}
            lead={t('listLead')}
          />
          <div className="grid-3 stagger">
            {technologies.map((tech) => (
              <Link key={tech.slug} href={`/technologies/${tech.slug}`} className="card flex">
                <div className="card-body">
                  <div className="flex items-center gap-2.5">
                    {tech.iconSlug && (
                      <Image src={`/images/tech/${tech.iconSlug}.svg`} alt={t('logoAlt', { tech: tech.name })} width={20} height={20} className="shrink-0" />
                    )}
                    <Tag tone="wash">{tech.category}</Tag>
                  </div>
                  <h3 className="card-title card-title--sm">
                    {tech.name}{' '}
                    <span className="go" aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className="small line-clamp-2">{tech.tagline}</p>
                  <div className="mt-auto pt-2">
                    <TagList items={tech.complementaryStack.slice(0, 3)} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="tech-cta-h"
        title={t('ctaTitle')}
        text={t('ctaText')}
        button={t('ctaButton')}
      />
    </>
  )
}
