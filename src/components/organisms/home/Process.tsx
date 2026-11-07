import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ProcessGantt } from './ProcessGantt'

const STAGES = [
  { t: 'Audit and scenarios', d: 'We read your last 200 enquiries: what repeats, what converts, where it breaks.', days: 'Days 1–3', a: 1, b: 4 },
  { t: 'Knowledge base', d: 'Catalogue, prices, terms, FAQ, approved wording. The stage that decides quality.', days: 'Days 3–10', a: 3, b: 11 },
  { t: 'Channels and systems', d: 'WhatsApp verification, widget, CRM, ERP, calendar, payment.', days: 'Days 8–15', a: 8, b: 16 },
  { t: 'Testing', d: 'Your team tries to break it, in four languages. Nothing goes live without sign-off.', days: 'Days 15–20', a: 15, b: 21 },
  { t: 'Supervised launch', d: 'Live traffic, every conversation reviewed daily.', days: 'Days 20–25', a: 20, b: 26 },
  { t: 'Operation and tuning', d: 'Monthly review. Same named engineer from audit to operation.', days: 'Ongoing', a: 26, b: 31 },
]

export function Process() {
  return (
    <section className="section section--alt" aria-labelledby="proc-h">
      <div className="container">
        <SectionHeader
          id="proc-h"
          label="How we work"
          title="Live in three to five weeks"
          lead="The gating item is almost never the technology. It's how fast your side can answer questions about its own process."
        />
        <div className="panel reveal">
          <ProcessGantt stages={STAGES} />
          <p className="small" style={{ marginTop: 22 }}>
            First measurable effects after two to four weeks live. Anyone promising results in week one is quoting a demo.
          </p>
        </div>
      </div>
    </section>
  )
}
