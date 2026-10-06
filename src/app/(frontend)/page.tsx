import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { homePageSchemas } from '@/lib/schema'
import { Hero } from '@/components/organisms/home/Hero'
import { Logos } from '@/components/organisms/home/Logos'
import { Problem } from '@/components/organisms/home/Problem'
import { Services } from '@/components/organisms/home/Services'
import { Agent } from '@/components/organisms/home/Agent'
import { UseCases } from '@/components/organisms/home/UseCases'
import { Cases } from '@/components/organisms/home/Cases'
import { Industries } from '@/components/organisms/home/Industries'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { Pricing } from '@/components/organisms/home/Pricing'
import { Calculator } from '@/components/organisms/home/Calculator'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { Process } from '@/components/organisms/home/Process'
import { Integrations } from '@/components/organisms/home/Integrations'
import { Products } from '@/components/organisms/home/Products'
import { Swiss } from '@/components/organisms/home/Swiss'
import { WhyUs } from '@/components/organisms/home/WhyUs'
import { Testimonials } from '@/components/organisms/home/Testimonials'
import { References } from '@/components/organisms/home/References'
import { Faq } from '@/components/organisms/home/Faq'
import { Blog } from '@/components/organisms/home/Blog'
import { Contact } from '@/components/organisms/home/Contact'
import { HomeInteractions } from '@/components/organisms/home/HomeInteractions'

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

export default async function HomePage() {
  const locale = await getLocale()

  return (
    <div className="tds">
      <JsonLd data={homePageSchemas(locale)} />
      <Hero />
      <Logos />
      <Problem />
      <Services />
      <Agent />
      <UseCases />
      <Cases />
      <Industries />
      <AgentVsHire />
      <Pricing />
      <Calculator />
      <WhereWeSayNo />
      <Process />
      <Integrations />
      <Products />
      <Swiss />
      <WhyUs />
      <Testimonials />
      <References />
      <Faq />
      <Blog />
      <Contact />
      <HomeInteractions />
    </div>
  )
}
