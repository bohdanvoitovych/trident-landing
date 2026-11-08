'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { BlogCard } from '@/components/molecules/BlogCard'
import { Pagination } from '@/components/molecules/Pagination'
import { BLOG_CATEGORIES, BlogFilter } from '@/components/molecules/BlogFilter'
import type { BlogCategory } from '@/data/blog-meta'

export type BlogGridPost = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  image?: string
  category: Exclude<BlogCategory, 'All'>
  author: string
  authorRole: string
}

type Props = {
  posts: BlogGridPost[]
  counts: Record<BlogCategory, number>
  pageSize?: number
}

/**
 * The blog's one client island: category filter + pagination.
 * The server renders "All, page 1"; ?category=&page= is read after mount and
 * kept in sync with history.replaceState (no navigation, no re-render of the page).
 */
export function BlogGrid({ posts, counts, pageSize = 6 }: Props) {
  const tc = useTranslations('molecules.blogFilter')
  const [category, setCategory] = useState<BlogCategory>('All')
  const [page, setPage] = useState(1)
  const top = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('category')
    const p = Number(params.get('page'))
    if (cat && (BLOG_CATEGORIES as string[]).includes(cat)) setCategory(cat as BlogCategory)
    if (Number.isInteger(p) && p > 1) setPage(p)
  }, [])

  const filtered = category === 'All' ? posts : posts.filter((p) => p.category === category)
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const current = Math.min(page, pages)
  const shown = filtered.slice((current - 1) * pageSize, current * pageSize)

  const sync = (cat: BlogCategory, p: number) => {
    const params = new URLSearchParams(window.location.search)
    if (cat === 'All') params.delete('category')
    else params.set('category', cat)
    if (p > 1) params.set('page', String(p))
    else params.delete('page')
    const qs = params.toString()
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`)
  }

  const onCategory = (cat: BlogCategory) => {
    setCategory(cat)
    setPage(1)
    sync(cat, 1)
  }

  const onPage = (p: number) => {
    setPage(p)
    sync(category, p)
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={top} className="stack stack--lg" style={{ scrollMarginTop: 'calc(var(--header-h) + 24px)' }}>
      <BlogFilter active={category} counts={counts} onChange={onCategory} />
      <div className="grid-3 stagger wipe">
        {shown.map((p) => (
          <BlogCard
            key={p.slug}
            href={`/blog/${p.slug}`}
            image={p.image}
            date={p.publishedAt}
            title={p.title}
            excerpt={p.excerpt}
            category={tc(`categories.${p.category}`)}
            author={{ name: p.author, role: p.authorRole }}
            headingLevel="h2"
          />
        ))}
      </div>
      <Pagination page={current} pageSize={pageSize} total={filtered.length} onPage={onPage} />
    </div>
  )
}
