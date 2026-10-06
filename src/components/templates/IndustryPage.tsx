import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import type { IndustryData } from '@/data/industries'
import { services } from '@/data/services'
import { cases } from '@/data/cases'
import { Button } from '@/components/atoms/button'
import { Badge } from '@/components/atoms/badge'
import { SectionHeader } from '@/components/molecules/SectionHeader'

type Props = {
  industry: IndustryData
}

export function IndustryPage({ industry }: Props) {
  const relatedServices = services.filter((s) => industry.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => industry.relatedCases.includes(c.slug))

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">{industry.title}</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            {industry.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {industry.tagline}
          </p>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl mb-8">
            {industry.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a project <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases">View case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry Challenges"
            title="What we solve"
            subtitle={`Common technical and regulatory hurdles in ${industry.title} that we help clients overcome.`}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {industry.challenges.map((c) => (
              <div key={c.title} className="light-card rounded-[3px] p-6">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we build"
            title="Solutions we deliver"
            subtitle={`Production-ready software systems for ${industry.title} companies.`}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.solutions.map((s) => (
              <div key={s.title} className="light-card rounded-[3px] p-6 flex gap-4">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 border-y border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted-foreground mb-4">Technology stack</p>
          <div className="flex flex-wrap gap-2">
            {industry.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#F4F4F5] text-[#3F3F46] border border-[#E3E5E8] text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28 section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Services"
              title="Relevant capabilities"
              subtitle="Our service practices that typically apply to this industry."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="light-card light-card-interactive rounded-[3px] p-6 group transition-all"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {s.tagline}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-primary mt-4 font-medium">
                    Learn more <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title={`${industry.title} projects`}
              subtitle="Real projects we delivered in this industry."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="light-card light-card-interactive rounded-[3px] p-6 group transition-all"
                >
                  <Badge variant="blue" className="mb-3 text-xs">
                    {c.industry}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {c.hero.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {c.hero.tagline}
                  </p>
                  {c.results.slice(0, 2).map((r) => (
                    <div key={r.metric} className="mt-3">
                      <span className="text-lg font-bold gradient-text">{r.value}</span>{' '}
                      <span className="text-xs text-muted-foreground">{r.metric}</span>
                    </div>
                  ))}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Building something in {industry.title}?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your project. We respond within 24 hours.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
