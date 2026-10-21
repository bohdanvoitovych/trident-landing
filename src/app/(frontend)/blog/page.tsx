import { Suspense } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { posts } from '@/data/blog'
import { buildMetadata } from '@/lib/metadata'
import { getBlogCategory, tagSlug, TOPIC_MIN_POSTS, type BlogCategory } from '@/data/blog-meta'
import { BlogFilter } from '@/components/molecules/BlogFilter'
import { BlogGrid } from '@/components/molecules/BlogGrid'
import PageJsonLd from '@/components/seo/PageJsonLd'

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
    image: p.image,
  }))

  const counts: Record<BlogCategory, number> = { All: posts.length, Industry: 0, Solution: 0, Company: 0 }
  for (const post of posts) {
    counts[getBlogCategory(post.tags)]++
  }

  // Only tags with enough posts to have a real /topics page worth visiting (see TOPIC_MIN_POSTS).
  const tagCounts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
    }
  }
  const topics = [...tagCounts.entries()]
    .filter(([, count]) => count >= TOPIC_MIN_POSTS)
    .sort((a, b) => b[1] - a[1])

  return (
    <div className="flex flex-col">
      <PageJsonLd path="/blog" />
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
            {topics.length > 0 && (
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <span className="text-[12px] font-medium text-[#6B7078] mr-1">Browse by topic:</span>
                {topics.map(([tag, count]) => (
                  <Link
                    key={tag}
                    href={`/topics/${tagSlug(tag)}`}
                    className="rounded-[2px] border border-[#E3E5E8] bg-white px-2.5 py-1 text-[12px] font-medium text-[#4A4F57] transition-colors hover:border-[#2772E0] hover:text-[#2772E0]"
                  >
                    {tag} <span className="text-[#6B7078]">({count})</span>
                  </Link>
                ))}
              </div>
            )}
            <BlogGrid posts={postData} readMore={t('readMore')} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
