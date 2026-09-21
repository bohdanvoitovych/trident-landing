import Link from 'next/link'
import { ArrowRight, MapPin, Shield, Users, Zap, Globe, Award, Code2 } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { team, stats } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'

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
    icon: Shield,
    title: 'Swiss Compliance First',
    desc: 'ISO 27000, nFADP, and data residency in Switzerland. We make compliance a deliverable, not an afterthought.',
  },
  {
    icon: Code2,
    title: 'Engineering Excellence',
    desc: 'Senior-only teams. No juniors on client projects. Code quality and architecture matter as much as delivery speed.',
  },
  {
    icon: Zap,
    title: 'Fixed Budgets',
    desc: 'Statement of Work before work begins. No surprises, no hourly billing debates. Predictable delivery.',
  },
  {
    icon: Globe,
    title: 'Multilingual',
    desc: 'English, German, French, Italian. We communicate in your language — as required in Switzerland.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    desc: '73% of revenue from repeat clients. We build relationships, not one-off engagements.',
  },
  {
    icon: Award,
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
  {
    city: 'Sion, Valais',
    country: 'Switzerland',
    role: 'HQ · Business Development · Compliance',
    flag: 'CH',
  },
  {
    city: 'Kyiv',
    country: 'Ukraine',
    role: 'Engineering · Development · QA',
    flag: 'UA',
  },
  {
    city: 'Tel Aviv',
    country: 'Israel',
    role: 'AI Research · Computer Vision · R&D',
    flag: 'IL',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">About Trident</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            Swiss quality.{' '}
            <span className="gradient-text">AI-native</span> engineering.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            Founded in 2009 in Sion, Valais, Trident Software builds custom software, AI systems,
            and embedded solutions for European SMEs. Senior engineers only. Fixed budgets. Compliance
            included.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Sion, Valais, Switzerland
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-primary" />
              ISO 27000 · nFADP
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              26 engineers · 3 countries
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-alt border-b border-[#E4E4E7] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-[#0F172A]">{stat.value}</p>
                <p className="text-sm text-[#71717A] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="Built by engineers, for engineers"
                subtitle="Trident was born from frustration with agencies that overpromise and underdeliver. We set out to build a company where senior engineers own the outcome end-to-end."
              />
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started in Sion, Switzerland in 2009 with two engineers and a conviction: great
                  software requires great engineers who stay on the project from kickoff to
                  deployment. No handoffs, no junior substitutions, no feature factories.
                </p>
                <p>
                  Over 15 years we&apos;ve delivered 27+ projects across automotive, healthcare,
                  logistics, fashion, and SaaS — and integrated AI into production systems since
                  2021, well before the current wave.
                </p>
                <p>
                  Today we operate across three locations — Switzerland, Ukraine, and Israel — with
                  26 engineers who share the same standards: clean architecture, observable systems,
                  and honest timelines.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm leading-relaxed pt-2">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="How we work"
            subtitle="The principles that guide every project we take on."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="light-card rounded-xl p-6 flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <v.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where we are"
            title="Three locations, one team"
            subtitle="CET coverage, multilingual communication, and senior engineers at every location."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <div key={loc.city} className="light-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{loc.city}</p>
                    <p className="text-sm text-muted-foreground">{loc.country}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{loc.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="The Team"
                title="26 senior engineers"
                subtitle="No juniors on client projects. Every engineer has 5+ years of production experience. You get the same people from kickoff to handoff."
              />
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/team">
                    Meet the team <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Backend engineers', value: '10' },
                { label: 'Frontend engineers', value: '6' },
                { label: 'AI/ML specialists', value: '4' },
                { label: 'Embedded / IoT', value: '3' },
                { label: 'DevOps / SRE', value: '2' },
                { label: 'UI/UX designers', value: '1' },
              ].map((item) => (
                <div key={item.label} className="light-card rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to work with us?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your project. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a conversation <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases">View our work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
