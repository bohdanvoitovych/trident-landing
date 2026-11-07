import type { CSSProperties } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Label, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { stats } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'
import { Timeline } from './Timeline'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'About | Trident Software',
    description:
      'Trident Software — Swiss AI-native software engineering company. Founded 2009 in Sion, Valais. 26 engineers, 27+ projects, 8 countries.',
    path: '/about',
    locale,
  })
}

const values = [
  {
    title: 'Swiss Compliance First',
    desc: 'ISO 27000, nFADP, and data residency in Switzerland. We make compliance a deliverable, not an afterthought.',
  },
  {
    title: 'Engineering Excellence',
    desc: 'Senior-only teams. No juniors on client projects. Code quality and architecture matter as much as delivery speed.',
  },
  {
    title: 'Fixed Budgets',
    desc: 'Statement of Work before work begins. No surprises, no hourly billing debates. Predictable delivery.',
  },
  {
    title: 'Multilingual',
    desc: 'English, German, French, Italian. We communicate in your language — as required in Switzerland.',
  },
  {
    title: 'Long-Term Partnership',
    desc: '73% of revenue from repeat clients. We build relationships, not one-off engagements.',
  },
  {
    title: 'AI-Native Since 2021',
    desc: 'We integrated AI before it became mainstream. LLMs, RAG, agents — production-deployed, not demos.',
  },
]

const timeline = [
  { year: '2009', event: 'Founded in Sion, Valais, Switzerland' },
  { year: '2012', event: 'First embedded systems project — industrial IoT for manufacturing' },
  { year: '2015', event: 'Opened Ukraine office for engineering talent' },
  { year: '2018', event: 'Israel R&D hub established — AI and computer vision' },
  { year: '2021', event: 'First production LLM integration — 18 months before ChatGPT launch' },
  { year: '2023', event: 'AI Services practice launched; 12 AI projects delivered in 12 months' },
  { year: '2024', event: '27th project delivered; team grows to 26 engineers across 3 locations' },
]

const locations = [
  { city: 'Sion, Valais', country: 'Switzerland', role: 'HQ · Business Development · Compliance' },
  { city: 'Kyiv', country: 'Ukraine', role: 'Engineering · Development · QA' },
  { city: 'Tel Aviv', country: 'Israel', role: 'AI Research · Computer Vision · R&D' },
]

const composition = [
  { label: 'Backend engineers', value: 10 },
  { label: 'Frontend engineers', value: 6 },
  { label: 'AI/ML specialists', value: 4 },
  { label: 'Embedded / IoT', value: 3 },
  { label: 'DevOps / SRE', value: 2 },
  { label: 'UI/UX designers', value: 1 },
]
const maxComp = Math.max(...composition.map((c) => c.value))

export default async function AboutPage() {
  const t = await getTranslations('ui')

  return (
    <>
      <PageHero
        crumbs={[{ name: t('nav.about'), href: '/about' }]}
        label="About Trident"
        title={
          <>
            Swiss quality. <span className="blue">AI-native</span> engineering.
          </>
        }
        lead="Founded in 2009 in Sion, Valais, Trident Software builds custom software, AI systems, and embedded solutions for European SMEs. Senior engineers only. Fixed budgets. Compliance included."
        actions={
          <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
            {['Sion, Valais, Switzerland', 'ISO 27000 · nFADP', '26 engineers · 3 countries'].map((f) => (
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

      <section className="section section--alt" aria-labelledby="story-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <Label>Our Story</Label>
            <h2 id="story-h" className="h2">
              Built by engineers, for engineers
            </h2>
          </div>
          <div className="stack reveal" style={{ gap: 20 }}>
            <p className="m-0 text-ink" style={{ fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.5, fontWeight: 500 }}>
              Trident was born from frustration with agencies that overpromise and underdeliver. We set out to build a
              company where senior engineers own the outcome end-to-end.
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              We started in Sion, Switzerland in 2009 with two engineers and a conviction: great software requires great
              engineers who stay on the project from kickoff to deployment. No handoffs, no junior substitutions, no
              feature factories.
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              Over 15 years we&apos;ve delivered 27+ projects across automotive, healthcare, logistics, fashion, and SaaS —
              and integrated AI into production systems since 2021, well before the current wave.
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              Today we operate across three locations — Switzerland, Ukraine, and Israel — with 26 engineers who share the
              same standards: clean architecture, observable systems, and honest timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="timeline-h">
        <div className="container">
          <SectionHeader id="timeline-h" label={t('about.timelineLabel')} title={t('about.timelineTitle')} />
          <div className="reveal">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-h">
        <div className="container">
          <SectionHeader
            id="values-h"
            label="Our Values"
            title="How we work"
            lead="The principles that guide every project we take on."
          />
          <div className="grid-3 stagger">
            {values.map((v) => (
              <div key={v.title} className="card card--flat feature-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="where-h">
        <div className="container split split--top split--stretch">
          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>Where we are</Label>
              <h2 id="where-h" className="h2">
                Three locations, one team
              </h2>
              <p className="lead">CET coverage, multilingual communication, and senior engineers at every location.</p>
            </div>
            <ul className="m-0 list-none border-t-2 border-ink p-0">
              {locations.map((l) => (
                <li key={l.city} className="flex flex-col gap-1.5 border-b border-line-2 py-5">
                  <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.015em' }}>
                    {l.city} <span className="font-normal text-ink-2">· {l.country}</span>
                  </span>
                  <span className="meta text-blue-d">{l.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>The Team</Label>
              <h2 id="team-h" className="h2">
                26 senior engineers
              </h2>
              <p className="lead">
                No juniors on client projects. Every engineer has 5+ years of production experience. You get the same
                people from kickoff to handoff.
              </p>
            </div>
            <dl className="m-0 flex flex-col gap-3.5">
              {composition.map((c) => (
                <div key={c.label} className="grid items-center gap-3.5 text-[14px]" style={{ gridTemplateColumns: 'minmax(0,11rem) minmax(0,1fr) 28px' }}>
                  <dt>{c.label}</dt>
                  <dd className="m-0 contents">
                    <span className="track track--10" aria-hidden="true" style={{ background: 'var(--line)' }}>
                      <span className="fill" style={{ '--v': c.value / maxComp } as CSSProperties} />
                    </span>
                    <span className="mono text-right font-semibold">{c.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <ButtonLink href="/team" variant="ink" arrow>
                Meet the team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="about-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <h2 id="about-cta-h" className="h2">
              Ready to work with us?
            </h2>
            <p className="lead">Tell us about your project. We respond within 24 hours.</p>
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
