import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CaseData } from '@/data/cases'

type Props = {
  case_: Pick<CaseData, 'slug' | 'client' | 'industry' | 'hero' | 'results'>
  className?: string
}

export function CaseCard({ case_, className }: Props) {
  return (
    <Link
      href={`/cases/${case_.slug}`}
      className={cn(
        'group light-card light-card-interactive rounded-[3px] overflow-hidden flex flex-col',
        className,
      )}
    >
      {case_.hero.image && (
        <div className="relative w-full h-44 bg-[#F4F4F5] overflow-hidden">
          <Image
            src={case_.hero.image}
            alt={case_.hero.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] text-[#6B7078] font-medium uppercase tracking-wider mb-1">
            {case_.client}
          </p>
          <h3 className="font-semibold text-[14px] text-[#111318] group-hover:text-[#2772E0] transition-colors leading-snug">
            {case_.hero.title}
          </h3>
        </div>
        <span className="shrink-0 text-[11px] font-medium bg-[#2772E0]/10 text-[#2772E0] border border-[#2772E0]/20 rounded-full px-2 py-0.5 whitespace-nowrap">
          {case_.industry}
        </span>
      </div>

      <p className="text-[13px] text-[#4A4F57] leading-relaxed">{case_.hero.tagline}</p>

      {case_.results.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-1 border-t border-[#E3E5E8]">
          {case_.results.slice(0, 2).map((r) => (
            <div key={r.metric}>
              <span className="text-[18px] font-semibold gradient-text">{r.value}</span>
              <span className="text-[12px] text-[#6B7078] ml-1">{r.metric}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 text-[12px] text-[#2772E0] font-medium mt-auto">
        View case study <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
      </div>
    </Link>
  )
}
