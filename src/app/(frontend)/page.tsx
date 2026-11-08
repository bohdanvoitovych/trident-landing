import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { faqPageSchema, homePageSchemas } from '@/lib/schema'
import { getHomeFaq } from '@/data/faq'
import { Hero } from '@/components/organisms/home/Hero'
import { Problem } from '@/components/organisms/home/Problem'
import { Services } from '@/components/organisms/home/Services'
import { Agent } from '@/components/organisms/home/Agent'
import { Race } from '@/components/organisms/home/Race'
import { UseCases } from '@/components/organisms/home/UseCases'
import { Cases } from '@/components/organisms/home/Cases'
import { Industries } from '@/components/organisms/home/Industries'
import { Process } from '@/components/organisms/home/Process'
import { Calculator } from '@/components/organisms/home/Calculator'
import { WhyUs } from '@/components/organisms/home/WhyUs'
import { Swiss } from '@/components/organisms/home/Swiss'
import { Team } from '@/components/organisms/home/Team'
import { Logos } from '@/components/organisms/home/Logos'
import { Testimonials } from '@/components/organisms/home/Testimonials'
import { Partners } from '@/components/organisms/home/Partners'
import { Faq } from '@/components/organisms/home/Faq'
import { Blog } from '@/components/organisms/home/Blog'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Trident Software — Operational software and AI agents, Switzerland',
    description:
      'We build the systems companies run on every day — order intake, dispatch, field apps, billing — and the AI layer that answers and processes documents in four national languages. Sion, Valais.',
    path: '/',
    locale,
  })
}

// Section order follows design/redesign-2026/README.md (19 sections; the
// footer with the free-audit block is #19, rendered by the layout).
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
      <Problem />
      <Services />
      <Agent />
      <Race />
      <UseCases />
      <Cases />
      <Industries />
      <Process />
      <Calculator />
      <WhyUs />
      <Swiss />
      <Team />
      <Logos />
      <Testimonials />
      <Partners />
      <Faq />
      <Blog />
    </>
  )
}
