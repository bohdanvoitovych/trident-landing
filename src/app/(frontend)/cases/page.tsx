import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { featuredProjects, projects, projectSectors } from '@/data/projects'
import { buildMetadata } from '@/lib/metadata'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Projects & Case Studies | Trident Software Switzerland',
    description:
      'Case studies from Trident Software: clinic admission and billing, voice documentation, fiduciary mail, warranty control, building-materials logistics and letting-agency enquiries.',
    path: '/cases',
    locale,
  })
}

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="text-display mb-4">Delivered, then counted</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Six cases, written up in full. Each figure is labelled measured or modelled.
          </p>
        </div>
      </section>

      {/* The six case studies from the source-of-truth PDF. */}
      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading text-[#111318] mb-8">Case studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/cases/${p.caseSlug}`}
                className="group bg-white border border-[#E3E5E8] rounded-[2px] overflow-hidden flex flex-col hover:border-[#2772E0]/50 transition-colors"
              >
                <div className="relative aspect-[16/10] w-full bg-[#F6F7F8] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#6B7078]">
                    {p.sector}
                  </p>
                  <h3 className="font-semibold text-[15px] leading-snug text-[#111318]">{p.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[#4A4F57]">{p.summary}</p>
                  <span className="mt-auto pt-2 inline-flex items-center gap-1 text-[13px] font-medium text-[#2772E0]">
                    Read the case
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The older portfolio, filtered by sector. Entries with a full write-up link to it. */}
      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading text-[#111318] mb-8">Other projects</h2>
          <ProjectGrid projects={projects} sectors={projectSectors} />
        </div>
      </section>

      <section className="section-alt border-t border-[#E3E5E8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Start here</p>
            <h2 className="text-heading text-[#111318] mb-2">
              Tell us what you are trying to fix
            </h2>
            <p className="text-[#4A4F57] max-w-xl">
              We read every enquiry ourselves and come back within 24 business hours with an
              honest read on scope.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-[2px] bg-[#2772E0] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#1B57B8]"
          >
            Book a free audit
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
