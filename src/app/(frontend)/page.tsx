import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { faqPageSchema, homePageSchemas } from '@/lib/schema'
import { getHomeFaq } from '@/data/faq'
import { Hero } from '@/components/organisms/home/Hero'
import { Problem } from '@/components/organisms/home/Problem'
import { Services } from '@/components/organisms/home/Services'
import { Agent } from '@/components/organisms/home/Agent'
import { Cases } from '@/components/organisms/home/Cases'
import { Process } from '@/components/organisms/home/Process'
import { Swiss } from '@/components/organisms/home/Swiss'
import { Team } from '@/components/organisms/home/Team'
import { Logos } from '@/components/organisms/home/Logos'
import { Testimonials } from '@/components/organisms/home/Testimonials'
import { Faq } from '@/components/organisms/home/Faq'
import { Blog } from '@/components/organisms/home/Blog'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.home' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/',
    locale,
  })
}

// Proof first: clients right under the hero, then the problem, the offer, results
// and the people. Use cases, industries, the calculator and the partner block live
// on their own pages. The footer with the free-audit block comes from the layout.
export default async function HomePage() {
  const locale = await getLocale()
  const homeFaq = getHomeFaq(locale)
  const faqSchema = faqPageSchema(
    homeFaq.map((f) => ({ question: f.question, answer: f.answer })),
    locale,
  )

  return (
    <>
      <JsonLd data={[...homePageSchemas(locale), ...(faqSchema ? [faqSchema] : [])]} />
      <Hero />
      <Logos />
      <Problem />
      <Services />
      <Agent />
      <Cases />
      <Testimonials />
      <Process />
      <Swiss />
      <Team />
      <Faq />
      <Blog />
    </>
  )
}
