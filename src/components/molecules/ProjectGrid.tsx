'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

const PER_PAGE = 12

type Props = {
  projects: Project[]
  sectors: string[]
}

/** One list of everything delivered, filtered by sector. Entries with a full
 *  write-up link to it; the rest are cards. */
export function ProjectGrid({ projects, sectors }: Props) {
  const [sector, setSector] = useState<string>('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => (sector === 'All' ? projects : projects.filter((p) => p.sector === sector)),
    [projects, sector],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const current = Math.min(page, pageCount)
  const shown = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const p of projects) c[p.sector] = (c[p.sector] ?? 0) + 1
    return c
  }, [projects])

  function pick(next: string) {
    setSector(next)
    setPage(1)
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {['All', ...sectors].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => pick(s)}
            className={`h-9 rounded-[2px] border px-4 text-[14px] font-medium transition-colors ${
              sector === s
                ? 'border-[#111318] bg-[#111318] text-white'
                : 'border-[#E3E5E8] bg-white text-[#4A4F57] hover:border-[#111318] hover:text-[#111318]'
            }`}
          >
            {s}
            {s !== 'All' && <span className="ml-1.5 opacity-55">({counts[s]})</span>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map((p) => {
          const inner = (
            <>
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
                <h3 className="font-semibold text-[15px] leading-snug text-[#111318]">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#4A4F57]">{p.summary}</p>
                {p.caseSlug && (
                  <span className="mt-auto pt-2 inline-flex items-center gap-1 text-[13px] font-medium text-[#2772E0]">
                    Read the case
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </div>
            </>
          )

          const shell =
            'bg-white border border-[#E3E5E8] rounded-[2px] overflow-hidden flex flex-col'

          return p.caseSlug ? (
            <Link
              key={p.slug}
              href={`/cases/${p.caseSlug}`}
              className={`group ${shell} hover:border-[#2772E0]/50 transition-colors`}
            >
              {inner}
            </Link>
          ) : (
            <div key={p.slug} className={shell}>
              {inner}
            </div>
          )
        })}
      </div>

      {pageCount > 1 && (
        <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            type="button"
            onClick={() => setPage(current - 1)}
            disabled={current === 1}
            className="h-9 rounded-[2px] border border-[#E3E5E8] px-3 text-[14px] text-[#4A4F57] transition-colors hover:border-[#111318] hover:text-[#111318] disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === current ? 'page' : undefined}
              className={`h-9 min-w-9 rounded-[2px] border px-3 text-[14px] transition-colors ${
                n === current
                  ? 'border-[#111318] bg-[#111318] text-white'
                  : 'border-[#E3E5E8] text-[#4A4F57] hover:border-[#111318] hover:text-[#111318]'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(current + 1)}
            disabled={current === pageCount}
            className="h-9 rounded-[2px] border border-[#E3E5E8] px-3 text-[14px] text-[#4A4F57] transition-colors hover:border-[#111318] hover:text-[#111318] disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </>
  )
}
