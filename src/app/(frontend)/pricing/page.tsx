import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { Pricing } from '@/components/organisms/home/Pricing'
import { Calculator } from '@/components/organisms/home/Calculator'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { Contact } from '@/components/organisms/home/Contact'
import { HomeInteractions } from '@/components/organisms/home/HomeInteractions'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Pricing | Trident Software',
    description:
      'AI agent pricing in three lines: a one-off integration fee of CHF 6,000–25,000, a monthly run fee from CHF 450, and an optional 70/30 outcome share. Integration is never buried in a monthly figure.',
    path: '/pricing',
    locale,
  })
}

const cell = { padding: '12px 16px', borderBottom: '1px solid var(--line)', textAlign: 'left' as const, verticalAlign: 'top' as const }
const num = { ...cell, textAlign: 'right' as const, whiteSpace: 'nowrap' as const }

const inputs: Array<[string, string]> = [
  ['Inside-sales staff', '3'],
  ['Loaded cost per person', 'CHF 8,000 / month'],
  ['Enquiries per month', '400'],
  ['Share arriving outside office hours', '35 %'],
  ['Average deal value', 'CHF 1,400'],
  ['Current close rate', '18 %'],
]

const effects: Array<[string, string]> = [
  ['Routine volume absorbed — 0.8 FTE redeployed, not dismissed', 'CHF 6,400'],
  ['Out-of-hours enquiries now answered — 140 a month, at half the normal close rate', 'CHF 17,640 gross · CHF 5,300 margin'],
  ['Faster first response on in-hours enquiries — 2 pp close-rate lift', 'CHF 1,570 margin'],
  ['Total monthly benefit', '≈ CHF 13,270'],
  ['Running cost of the agent', '−CHF 900'],
  ['Net', '≈ CHF 12,370'],
]

export default function PricingPage() {
  return (
    <div className="tds">
      <section className="sec">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="label">Pricing</span>
            <h1 className="display" style={{ marginTop: '14px' }}>Three lines. Never one monthly figure.</h1>
            <p className="lede" style={{ marginTop: '20px' }}>
              The integration fee is never buried in a monthly figure. Connecting an existing ERP, accounting system or
              legacy database is where projects overrun, so we quote it as its own line.
            </p>
          </div>
        </div>
      </section>

      <Pricing />
      <Calculator />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Behind each line</span>
            <h2 className="h2">What the three lines cover</h2>
          </div>
          <div className="ways" style={{ borderTop: 0, paddingTop: 0, marginTop: 0 }}>
            <div>
              <span className="label-n">1 · Integration fee, one-off</span>
              <h3 className="h4" style={{ marginTop: '10px' }}>CHF 6,000–25,000</h3>
              <p className="body-s" style={{ marginTop: '8px' }}>
                Discovery, knowledge base build, scenario design, channel and CRM connections, testing, staff training and
                two weeks of supervised live running. The range is driven by the number of systems, not the number of
                channels.
              </p>
            </div>
            <div>
              <span className="label-n">2 · Run, monthly</span>
              <h3 className="h4" style={{ marginTop: '10px' }}>From CHF 450 · typical CHF 900 · full automation from CHF 1,800</h3>
              <p className="body-s" style={{ marginTop: '8px' }}>
                Platform, hosting, monitoring, support and monthly scenario tuning. Model usage is passed through at cost
                with the invoice attached. We take no margin on tokens.
              </p>
            </div>
            <div>
              <span className="label-n">3 · Outcome share, optional</span>
              <h3 className="h4" style={{ marginTop: '10px' }}>Our preference</h3>
              <p className="body-s" style={{ marginTop: '8px' }}>
                The 70/30 structure: 70 % of the value as a fixed fee, 30 % tied to a KPI agreed in writing before launch
                (qualified leads, bookings made, response time held under target). Where the effect is measurable and
                attribution is clean, we take 15–25 % of the verified annual saving instead of a flat fee, capped and
                reviewed quarterly. If your CRM cannot attribute a booking to a channel, a flat fee is the fair structure
                and we will say so.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Worked example</span>
            <h2 className="h2">Swiss trade SME</h2>
            <p className="lede">
              Illustrative model, not a client result. The point is the shape of the calculation, not these particular
              figures.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '32px', maxWidth: '880px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <caption className="label-n" style={{ textAlign: 'left', paddingBottom: '10px' }}>Inputs</caption>
              <tbody>
                {inputs.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row" style={{ ...cell, fontWeight: 400, color: 'var(--text-2)' }}>{k}</th>
                    <td className="tnum" style={num}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
              <caption className="label-n" style={{ textAlign: 'left', paddingBottom: '10px' }}>Effect per month</caption>
              <tbody>
                {effects.map(([k, v], i) => (
                  <tr key={k}>
                    <th scope="row" style={{ ...cell, fontWeight: i >= 3 ? 600 : 400, color: i >= 3 ? 'var(--text)' : 'var(--text-2)' }}>{k}</th>
                    <td className="tnum" style={{ ...num, fontWeight: i >= 3 ? 600 : 400 }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="body" style={{ marginTop: '28px' }}>
            <strong>Against a one-off integration fee of CHF 12,000, payback lands in month two.</strong>
          </p>
          <p className="body-s" style={{ marginTop: '12px' }}>
            Read the assumptions before you read the total. Two of them do the heavy lifting: that out-of-hours enquiries
            convert at half the in-hours rate, and that redeployed capacity turns into revenue rather than slack. In the
            audit we replace both with your measured numbers, and we show you the version where they come out worse. A
            calculator tuned to produce a headline is a sales tool, not a business case.
          </p>
        </div>
      </section>

      <AgentVsHire />
      <WhereWeSayNo />
      <Contact />
      <HomeInteractions />
    </div>
  )
}
