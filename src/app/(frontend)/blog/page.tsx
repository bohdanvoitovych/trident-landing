import { useLocale, useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { getPosts } from '@/data/blog'
import { buildMetadata } from '@/lib/metadata'
import { BLOG_IMAGES, getBlogCategory, type BlogCategory } from '@/data/blog-meta'
import { PageHero } from '@/components/molecules/PageHero'
import { BlogGrid, type BlogGridPost } from '@/components/molecules/BlogGrid'

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
  const posts = getPosts(useLocale())

  // Only what a card needs goes to the client island (no article bodies).
  const postData: BlogGridPost[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    // BLOG_IMAGES holds the originals carried over from the old site; post.image covers the rest.
    image: BLOG_IMAGES[p.slug] ?? p.image,
    category: getBlogCategory(p.tags),
    author: p.author,
    authorRole: p.authorRole,
  }))

  const counts: Record<BlogCategory, number> = { All: posts.length, Industry: 0, Solution: 0, Company: 0 }
  for (const post of postData) counts[post.category]++

  return (
    <>
      <PageHero label="Insights" title={t('title')} lead={t('subtitle')} crumbs={[{ name: t('title'), href: '/blog' }]} />
      <section className="section section--alt" aria-label={t('title')} style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="container">
          <BlogGrid posts={postData} counts={counts} />
        </div>
      </section>
    </>
  )
}
