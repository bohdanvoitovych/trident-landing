import { getLocale } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { team, stats } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'
import { TeamFilter } from './TeamFilter'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Our Team | Trident Software',
    description:
      '26 senior engineers across Switzerland, Ukraine, and Israel. Backend, frontend, mobile, QA, and DevOps — no juniors on client projects.',
    path: '/team',
    locale,
  })
}

const departmentOrder = ['Leadership', 'Management', 'Frontend', 'Backend', 'Mobile', 'QA', 'DevOps'] as const

const locations = [
  { city: 'Sion, Valais', country: 'Switzerland', role: 'HQ · Business Development · Client Relations' },
  { city: 'Kyiv', country: 'Ukraine', role: 'Engineering · Development · QA' },
  { city: 'Tel Aviv', country: 'Israel', role: 'AI Research · Computer Vision · R&D' },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Our Team', href: '/team' }]}
        label="Our Team"
        title={
          <>
            26 <span className="blue">senior engineers</span> across 3 countries
          </>
        }
        lead="No juniors on client projects. Every engineer has 5+ years of production experience. You get the same people from kickoff to handoff."
        actions={
          <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
            {['26 engineers', 'CH · UA · IL', 'Senior-only'].map((f) => (
              <li key={f}>
                <Tag tone="line">{f}</Tag>
              </li>
            ))}
          </ul>
        }
        aside={
          <dl className="facts stagger" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', margin: 0 }}>
            {stats.map((s) => (
              <div key={s.label} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                <dt className="fact-k">{s.label}</dt>
                <dd className="fact-v" style={{ margin: 0, fontSize: 'clamp(32px,3.4vw,48px)' }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section section--alt" aria-labelledby="people-h">
        <div className="container">
          <SectionHeader
            id="people-h"
            label="People"
            title="Meet the team"
            lead="Organized by discipline. Each engineer has 5+ years of commercial experience and stays on the project from kickoff to delivery."
          />
          <TeamFilter members={team} departments={departmentOrder} />
        </div>
      </section>

      <section className="section" aria-labelledby="where-h">
        <div className="container">
          <SectionHeader
            id="where-h"
            label="Where we are"
            title="Three locations, one team"
            lead="CET coverage, multilingual communication, and senior engineers at every location."
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {locations.map((loc) => (
              <li key={loc.city} className="card card--flat feature-card">
                <h3>{loc.city}</h3>
                <span className="meta">{loc.country}</span>
                <p>{loc.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="team-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <h2 id="team-cta-h" className="h2">
              Work with our team
            </h2>
            <p className="lead">Tell us about your project. The same engineers you meet at kickoff will deliver it.</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              Start a conversation
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              View our work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
