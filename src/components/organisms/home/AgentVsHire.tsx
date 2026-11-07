import { SectionHeader } from '@/components/molecules/SectionHeader'

const ROWS = ['First response', 'Running cost', 'Ramp-up', 'Parallel conversations', 'Languages']
const AGENT = ['Seconds', 'From CHF 450/mo', 'Days', 'Unlimited', '4 regions']
const HIRE = ['15–30 min, next day after hours', 'CHF 90–120k/yr', '3–6 months', '10–15', '1–2']

/** Moved from the home page to /site-price. */
export function AgentVsHire() {
  return (
    <section className="section section--alt" aria-labelledby="vs-h">
      <div className="container">
        <SectionHeader id="vs-h" label="The decision" title="An agent, or one more hire?" />
        <div className="grid-2 stagger">
          <div className="card vs-card vs-card--us card--flat">
            <span className="label">AI agent</span>
            <h3 className="h3">In your stack</h3>
            <dl className="dl">
              {ROWS.map((r, i) => (
                <div key={r}>
                  <dt>{r}</dt>
                  <dd>{AGENT[i]}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card vs-card card--flat">
            <span className="label">Additional FTE</span>
            <h3 className="h3">A CHF 8,000-a-month hire</h3>
            <dl className="dl">
              {ROWS.map((r, i) => (
                <div key={r}>
                  <dt>{r}</dt>
                  <dd>{HIRE[i]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="small" style={{ marginTop: 20 }}>
          The agent handles the routine 70–80 % of conversations. Complex deals stay with your people.
        </p>
      </div>
    </section>
  )
}
