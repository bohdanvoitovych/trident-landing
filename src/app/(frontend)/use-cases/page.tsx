import { getLocale } from 'next-intl/server'
import { PageHero } from '@/components/molecules/PageHero'
import { UseCaseCard } from '@/components/organisms/home/UseCases'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { useCases } from '@/data/use-cases'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

const TITLE = 'Eight patterns where an agent pays for itself'
const LEAD = 'Each comes with a precondition. Most failed AI projects fail there, not in the model.'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: `Use cases — ${TITLE} | Trident Software`,
    description: `${useCases.map((u) => u.title).join(', ')}. ${LEAD}`,
    path: '/use-cases',
    locale,
  })
}

export default function UseCasesPage() {
  return (
    <>
      <PageHero alt crumbs={[{ name: 'Use cases', href: '/use-cases' }]} label="Use cases" title={TITLE} lead={LEAD} />

      <section className="section" aria-labelledby="uc-list-h">
        <div className="container">
          <h2 id="uc-list-h" className="sr-only">
            Use cases
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
