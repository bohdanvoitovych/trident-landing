import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Pricing } from '@/components/organisms/home/Pricing'
import { Calculator } from '@/components/organisms/home/Calculator'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.pricing' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/pricing',
    locale,
  })
}

const LINES = ['integration', 'run', 'outcome'] as const

/** Rows from this index on are the totals of the worked example. */
const TOTALS_FROM = 3

const rowHead = { font: 'inherit', fontWeight: 400, background: 'none' } as const

function ExampleTable({ title, rows, totalsFrom }: { title: string; rows: [string, string][]; totalsFrom?: number }) {
  return (
    <div className="stack" style={{ gap: 12 }}>
      <h3 className="h4">{title}</h3>
      <div className="table-wrap">
        <table className="table">
          <tbody>
            {rows.map(([k, v], i) => {
              const total = totalsFrom !== undefined && i >= totalsFrom
              return (
                <tr key={k}>
                  <th scope="row" className={total ? 'text-ink' : undefined} style={{ ...rowHead, fontWeight: total ? 600 : 400 }}>
                    {k}
                  </th>
                  <td className="text-ink" style={{ textAlign: 'right', whiteSpace: 'nowrap', fontWeight: total ? 600 : 400 }}>
                    {v}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/** AI-agent pricing (PDF, D4). Website packages are on /solutions/websites. */
export default function PricingPage() {
  const t = useTranslations('pages.pricing')

  return (
    <>
      <PageHero crumbs={[{ name: t('crumb'), href: '/pricing' }]} label={t('label')} title={t('heroTitle')} lead={t('heroLead')} />

      <div className="section--line">
        <Pricing />
      </div>
      <Calculator />

      <section className="section section--alt" aria-labelledby="lines-h">
        <div className="container">
          <SectionHeader id="lines-h" label={t('linesLabel')} title={t('linesTitle')} />
          <ol className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {LINES.map((k) => (
              <li key={k} className="card card--flat feature-card">
                <span className="meta">{t(`lines.${k}.k`)}</span>
                <h3>{t(`lines.${k}.amt`)}</h3>
                <p>{t(`lines.${k}.text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="example-h">
        <div className="container">
          <SectionHeader id="example-h" label={t('exampleLabel')} title={t('exampleTitle')} lead={t('exampleLead')} />
          <div className="stack stack--lg reveal" style={{ maxWidth: 880 }}>
            <ExampleTable title={t('inputsTitle')} rows={t.raw('inputs') as [string, string][]} />
            <ExampleTable title={t('effectsTitle')} rows={t.raw('effects') as [string, string][]} totalsFrom={TOTALS_FROM} />
            <div className="prose">
              <p>
                <strong>{t('payback')}</strong>
              </p>
              <p>{t('assumptions')}</p>
            </div>
          </div>
        </div>
      </section>

      <AgentVsHire />
      <WhereWeSayNo />

      <section className="section" aria-labelledby="references-h">
        <div className="container split split--top reveal">
          <h2 id="references-h" className="h3">
            {t('referencesLabel')}
          </h2>
          <p className="lead">{t('referencesText')}</p>
        </div>
      </section>
    </>
  )
}
