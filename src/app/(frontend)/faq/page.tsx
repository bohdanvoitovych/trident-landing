import { getLocale, getTranslations } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { faqPageSchema } from '@/lib/schema'
import { faq } from '@/data/faq'
import { PageHero } from '@/components/molecules/PageHero'
import { FaqSearch } from '@/components/molecules/FaqSearch'
import { ButtonLink } from '@/components/atoms/controls'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Questions before the audit | FAQ | Trident Software',
    description:
      "Straight answers, including the ones that cost us deals. If yours isn't here, ask: a named engineer replies within 24 business hours.",
    path: '/faq',
    locale,
  })
}

export default async function FaqPage() {
  const locale = await getLocale()
  const t = await getTranslations('ui')
  const schema = faqPageSchema(
    faq.map((f) => ({ question: f.question, answer: f.answer })),
    locale,
  )

  return (
    <>
      {schema && <JsonLd data={[schema]} />}
      <PageHero label="FAQ" title="Questions before the audit" crumbs={[{ name: 'FAQ', href: '/faq' }]} />
      <section className="section section--alt" aria-label={t('faq.questions')} style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="container">
          <FaqSearch />
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
