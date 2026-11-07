import { getLocale } from 'next-intl/server'
import { industries } from '@/data/industries'
import { buildMetadata } from '@/lib/metadata'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { IndustriesGrid } from '@/components/molecules/IndustriesGrid'
import { CtaBand } from '@/components/molecules/CatalogBlocks'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development by Industry | Healthcare, Automotive, Fintech & More | Trident Software',
    description:
      'Custom software development for 25+ industries — healthcare, automotive, fintech, logistics, retail, SaaS, manufacturing. Swiss engineering team since 2009. Fixed budgets, nFADP compliance.',
    path: '/industries',
    locale,
  })
}

const FACTS = [
  { value: '25+', label: 'Industries covered' },
  { value: '27+', label: 'Projects delivered' },
  { value: 'Since 2009', label: 'Swiss engineering' },
  { value: 'Fixed price', label: 'Every engagement' },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Industries', href: '/industries' }]}
        label="Industry expertise"
        title={
          <>
            Custom Software Development<br />
            for 25+ Industries
          </>
        }
        lead={
          <>
            From MedTech startups to automotive distributors and retail chains — our Swiss engineering team delivers domain-specific software that fits your industry regulations, workflows, and growth targets.
            <span className="mt-4 block text-[15px] leading-[1.55]">
              Every project starts with your industry-specific constraints: regulatory requirements (nFADP, GDPR, MDR), operational complexity, and competitive landscape. No generic solutions.
            </span>
          </>
        }
        actions={
          <ButtonLink href="/contact" arrow>
            Discuss your project
          </ButtonLink>
        }
      />

      <div className="container -mt-2 pb-[clamp(40px,5vw,72px)]">
        <dl className="facts stagger m-0">
          {FACTS.map((s) => (
            <div key={s.label} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
              <dt className="fact-k">{s.label}</dt>
              <dd className="fact-v m-0">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section section--alt" aria-label="Industries">
        <div className="container">
          <IndustriesGrid industries={industries} />
        </div>
      </section>

      <CtaBand
        id="industries-cta-h"
        title="Need a software partner who knows your industry?"
        text="Tell us about your challenge. We respond within 24 hours with a concrete proposal."
        button="Get a free consultation"
      />
    </>
  )
}
