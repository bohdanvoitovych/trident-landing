import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { posts } from '@/data/blog'
import { buildMetadata } from '@/lib/metadata'
import { getBlogCategory, type BlogCategory } from '@/data/blog-meta'
import { BlogFilter } from '@/components/molecules/BlogFilter'
import { BlogGrid } from '@/components/molecules/BlogGrid'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Engineering Blog | AI, Cloud & Swiss Tech Insights | Trident Software',
    description: 'Expert articles on AI integration, software architecture, cloud DevOps, embedded systems, and Swiss tech market trends. Written by the Trident Software engineering team.',
    path: '/blog',
    locale,
  })
}

export default function BlogPage() {
  const t = useTranslations('blog')

  const postData = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
    tags: p.tags,
  }))

  const counts: Record<BlogCategory, number> = { All: posts.length, Industry: 0, Solution: 0, Company: 0 }
  for (const post of posts) {
    counts[getBlogCategory(post.tags)]++
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Insights</p>
          <h1 className="text-display text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-white/60 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense>
            <div className="mb-8">
              <BlogFilter counts={counts} />
            </div>
            <BlogGrid posts={postData} readMore={t('readMore')} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
