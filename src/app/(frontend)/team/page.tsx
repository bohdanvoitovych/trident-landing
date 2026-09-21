import Link from 'next/link'
import { ArrowRight, MapPin, Users, Code2 } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { team, stats, type TeamMember } from '@/data/team'
import { buildMetadata } from '@/lib/metadata'

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

const departmentOrder = [
  'Leadership',
  'Management',
  'Frontend',
  'Backend',
  'Mobile',
  'QA',
  'DevOps',
] as const

const locations = [
  {
    city: 'Sion, Valais',
    country: 'Switzerland',
    role: 'HQ · Business Development · Client Relations',
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

function groupByDepartment(members: TeamMember[]) {
  const grouped: Record<string, TeamMember[]> = {}
  for (const member of members) {
    if (!grouped[member.department]) {
      grouped[member.department] = []
    }
    grouped[member.department].push(member)
  }
  return grouped
}

export default function TeamPage() {
  const grouped = groupByDepartment(team)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Our Team</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            26 <span className="gradient-text">senior engineers</span> across 3 countries
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            No juniors on client projects. Every engineer has 5+ years of production experience.
            You get the same people from kickoff to handoff.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              26 engineers
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              CH · UA · IL
            </div>
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-primary" />
              Senior-only
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

      {/* Team by Department */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="People"
            title="Meet the team"
            subtitle="Organized by discipline. Each engineer has 5+ years of commercial experience and stays on the project from kickoff to delivery."
            className="mb-14"
          />
          <div className="flex flex-col gap-14">
            {departmentOrder.map((dept) => {
              const members = grouped[dept]
              if (!members || members.length === 0) return null
              return (
                <div key={dept}>
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-semibold text-[#0F172A]">{dept}</h3>
                    <span className="text-sm text-[#71717A]">
                      {members.length} {members.length === 1 ? 'person' : 'people'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map((member) => (
                      <div key={member.slug} className="light-card rounded-xl p-5 flex flex-col gap-3">
                        <div>
                          <p className="font-semibold text-[#0F172A]">{member.name}</p>
                          <p className="text-sm text-[#71717A]">{member.role}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
                          <MapPin size={12} className="text-primary" />
                          {member.location}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {member.expertise.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28 section-alt">
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
                    <p className="font-semibold text-[#0F172A]">{loc.city}</p>
                    <p className="text-sm text-[#71717A]">{loc.country}</p>
                    <p className="text-xs text-[#71717A] mt-2 leading-relaxed">{loc.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Work with our team
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your project. The same engineers you meet at kickoff will deliver it.
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
