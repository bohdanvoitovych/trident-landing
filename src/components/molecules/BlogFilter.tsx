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
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            active === cat
              ? 'bg-[#2772E0] text-white'
              : 'bg-[#2772E0]/10 text-[#2772E0] border border-[#2772E0]/20 hover:bg-[#2772E0]/20'
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
