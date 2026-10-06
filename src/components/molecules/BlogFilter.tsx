'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import type { BlogCategory } from '@/data/blog-meta'

const CATEGORIES: BlogCategory[] = ['All', 'Industry', 'Solution', 'Company']

type Props = {
  counts: Record<BlogCategory, number>
}

export function BlogFilter({ counts }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = (searchParams.get('cat') ?? 'All') as BlogCategory

  const setCategory = useCallback(
    (cat: BlogCategory) => {
      const params = new URLSearchParams(searchParams.toString())
      if (cat === 'All') {
        params.delete('cat')
      } else {
        params.set('cat', cat)
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams],
  )

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`rounded-[2px] border px-4 h-9 text-[14px] font-medium transition-colors ${
            active === cat
              ? 'bg-[#111318] text-white border-[#111318]'
              : 'bg-white text-[#4A4F57] border-[#E3E5E8] hover:border-[#111318] hover:text-[#111318]'
          }`}
        >
          {cat}
          {cat !== 'All' && counts[cat] > 0 && (
            <span className="ml-1.5 opacity-60 text-xs">({counts[cat]})</span>
          )}
        </button>
      ))}
    </div>
  )
}
