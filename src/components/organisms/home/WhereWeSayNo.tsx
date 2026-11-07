import { SectionHeader } from '@/components/molecules/SectionHeader'

const NOS = [
  ['Under ~150 enquiries a month', "The numbers don't work. Fix the response process first; call us at volume."],
  ['No written knowledge base', 'The agent inherits your quality. Nothing to inherit means nothing to deploy.'],
  ['Regulated advice', 'Diagnosis, investment, legal opinion. The agent books, triages and prepares; it does not advise.'],
  ['Swiss German voice', "Dialect text works well. Spoken dialect is every vendor's weak point, ours too. Start with text."],
  ['Pure headcount cuts', '"Take the routine off the team" works. "Replace the team" underperforms. We say so at the first meeting.'],
]

/** Moved from the home page to /use-cases ("Where we would not start"). */
export function WhereWeSayNo() {
  return (
    <section className="section section--alt" aria-labelledby="nos-h">
      <div className="container">
        <SectionHeader
          id="nos-h"
          label="Honest limits"
          title="Where we say no"
          lead="The fastest way to find out whether there is a project here at all."
        />
        <ul className="nos stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {NOS.map(([title, text]) => (
            <li key={title} className="card no-card card--flat">
              <span className="x" aria-hidden="true">
                ✕
              </span>
              <h3 className="h4">{title}</h3>
              <p className="body">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
