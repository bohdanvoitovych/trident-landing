import { Label } from '@/components/atoms/controls'

const FACTS = [
  ['Hosting in CH or EU', 'Your choice of region. Documented sub-processors in the contract.'],
  ['revFADP and GDPR', 'Processing agreement and privacy wording drafted for you.'],
  ['No training on your data', 'Contractually excluded, vendor terms attached as an annex.'],
  ['You own it', 'Data, knowledge base and scenarios exported on termination.'],
  ['Model-independent', 'The underlying model can be swapped. No single-vendor risk.'],
  ['Registered in Valais', 'Trident Software Sàrl · CHE-185.076.733 · HES-SO Valais-Wallis · Campus Biotech, Geneva'],
]

export function Swiss() {
  return (
    <section className="section section--alt" id="swiss" aria-labelledby="swiss-h">
      <div className="container split split--top">
        <div className="stack reveal" style={{ gap: 18 }}>
          <Label flag>Swiss by jurisdiction</Label>
          <h2 id="swiss-h" className="h2">
            Swiss contracts, Swiss accountability, your data stays yours
          </h2>
          <p className="lead">
            Contracts and data residency sit in Switzerland. Engineering is distributed, which is how our rates work
            against Swiss agency pricing without cutting seniority.
          </p>
        </div>
        <ul className="checks stagger">
          {FACTS.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
