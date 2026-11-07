'use client'

import { useTranslations } from 'next-intl'
import { Chip } from '@/components/atoms/controls'
import type { BlogCategory } from '@/data/blog-meta'

export const BLOG_CATEGORIES: BlogCategory[] = ['All', 'Industry', 'Solution', 'Company']

type Props = {
  active: BlogCategory
  counts: Record<BlogCategory, number>
  onChange: (cat: BlogCategory) => void
}

/** Category chips with aria-pressed. State lives in BlogGrid. */
export function BlogFilter({ active, counts, onChange }: Props) {
  const t = useTranslations('ui.blog')
  return (
    <div role="group" aria-label={t('filter')} className="chips">
      {BLOG_CATEGORIES.map((cat) => (
        <Chip key={cat} aria-pressed={active === cat} onClick={() => onChange(cat)}>
          {cat === 'All' ? t('all') : cat}
          <span className="count">{counts[cat]}</span>
        </Chip>
      ))}
    </div>
  )
}
