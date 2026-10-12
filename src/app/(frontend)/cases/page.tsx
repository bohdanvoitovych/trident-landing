import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { projects, projectSectors } from '@/data/projects'
import { buildMetadata } from '@/lib/metadata'
import { ProjectGrid } from '@/components/molecules/ProjectGrid'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Projects & Case Studies | Trident Software Switzerland',
    description:
      '27+ software development projects delivered — automotive B2B platforms, AI healthcare systems, e-commerce, IoT, SaaS. Swiss engineering team since 2009.',
    path: '/cases',
    locale,
  })
}

export default function CasesPage() {
  const withCase = projects.filter((p) => p.caseSlug).length

  return (
    <div className="flex flex-col">
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="text-display mb-4">Delivered, then counted</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {projects.length} products and platforms built for clients across Switzerland and
            Europe — {withCase} of them written up in full, with the numbers behind them.
          </p>
        </div>
      </section>

      {/* One list, filtered by sector. Entries with a full write-up link to it. */}
      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
