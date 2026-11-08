import { getLocale, getTranslations } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { faqPageSchema } from '@/lib/schema'
import { getFaq, getFaqGroups } from '@/data/faq'
import { PageHero } from '@/components/molecules/PageHero'
import { FaqSearch } from '@/components/molecules/FaqSearch'
import { ButtonLink } from '@/components/atoms/controls'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.faq' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/faq',
    locale,
  })
}

export default async function FaqPage() {
  const locale = await getLocale()
  const faq = getFaq(locale)
  const t = await getTranslations('ui')
  const tp = await getTranslations('pages.faq')
  const schema = faqPageSchema(
    faq.map((f) => ({ question: f.question, answer: f.answer })),
    locale,
  )

  return (
    <>
      {schema && <JsonLd data={[schema]} />}
      <PageHero label={tp('label')} title={tp('title')} crumbs={[{ name: tp('label'), href: '/faq' }]} />
      <section className="section section--alt" aria-label={t('faq.questions')} style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="container">
          <FaqSearch faq={faq} groups={getFaqGroups(locale)} />
        </div>
      </section>
      <section className="section section--ink" aria-labelledby="faq-cta-h">
        <div className="container cta-band reveal">
          <h2 id="faq-cta-h" className="h2">
            {t('faq.didntFind')}
          </h2>
          <ButtonLink href="/contact" arrow>
            {t('actions.askDirectly')}
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
