import type { CSSProperties } from 'react'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const INDUSTRIES = [
  ['Trade, wholesale, building materials', 'High volume, repeat questions, orders that must become deliveries, with a direct handoff into 8Move.'],
  ['Real estate & property management', 'Evening viewing requests; a broken boiler at 22:00 needs triage, not voicemail.'],
  ['Clinics, dental, veterinary', 'Front desk booking and reminders, and voice documentation for doctors, where the real money is.'],
  ['E-commerce & D2C', 'Order status, sizing, returns, cross-sell. The cleanest automation economics.'],
  ['Hospitality & restaurants', 'Reservations, groups, allergen questions in four languages during service.'],
  ['Professional services & trades', 'No reception; every missed call is a lost mandate.'],
  ['Education & training', 'Course enquiries and enrolment peaks without temporary staff.'],
  ['Startups — CTO as a Service', 'Days per month instead of a hire: build vs buy, architecture, data, first hires. Also due diligence before an investment.'],
]

export function Industries() {
  return (
    <section className="section" aria-labelledby="ind-h">
      <div className="container">
        <SectionHeader
          id="ind-h"
          label="Industries"
          title="Where the case is strongest in Switzerland"
          lead="Ordered by how well the numbers work, not by how interesting the technology is."
        />
        <ol className="rank stagger">
          {INDUSTRIES.map(([title, text], i) => (
            <li key={title} className="rank-card">
              <span className="top">
                <span className="n">#{i + 1}</span>
                <span className="bar" aria-hidden="true" style={{ '--v': (100 - i * 11) / 100 } as CSSProperties} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
