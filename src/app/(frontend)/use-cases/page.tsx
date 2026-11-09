import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/molecules/PageHero'
import { UseCaseCard } from '@/components/organisms/home/UseCases'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { getUseCases } from '@/data/use-cases'
import { buildMetadata } from '@/lib/metadata'
import PageJsonLd from '@/components/seo/PageJsonLd'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const useCases = getUseCases(locale)
  const t = await getTranslations({ locale, namespace: 'pages.useCases' })
  return buildMetadata({
    title: t('metaTitle', { title: t('title') }),
    description: `${useCases.map((u) => u.title).join(', ')}. ${t('lead')}`,
    path: '/use-cases',
    locale,
  })
}

export default function UseCasesPage() {
  const locale = useLocale()
  const useCases = getUseCases(locale)
  const t = useTranslations('pages.useCases')
  return (
    <>
      <PageJsonLd type="CollectionPage" path="/use-cases" name={t('crumb')} description={t('lead')} />
      <PageHero alt crumbs={[{ name: t('crumb'), href: '/use-cases' }]} label={t('crumb')} title={t('title')} lead={t('lead')} />

      <section className="section" aria-labelledby="uc-list-h">
        <div className="container">
          <h2 id="uc-list-h" className="sr-only">
            {t('crumb')}
          </h2>
          <div className="grid-2 stagger" style={{ gap: 16 }}>
            {useCases.map((u, i) => (
              <div key={u.title} id={`uc-${i + 1}`} className="grid">
                <UseCaseCard n={i + 1} {...u} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhereWeSayNo />
    </>
  )
}
