import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { getPublishedPosts } from '@/data/blog'
import { buildMetadata } from '@/lib/metadata'
import { BLOG_IMAGES, getBlogCategory, type BlogCategory } from '@/data/blog-meta'
import { PageHero } from '@/components/molecules/PageHero'
import { BlogGrid, type BlogGridPost } from '@/components/molecules/BlogGrid'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.blog' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/blog',
    locale,
  })
}

export default function BlogPage() {
  const t = useTranslations('blog')
  const tp = useTranslations('pages.blog')
  // A post is listed only in the locales it has text for.
  const posts = getPublishedPosts(useLocale())

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
      <PageHero label={tp('label')} title={t('title')} lead={t('subtitle')} crumbs={[{ name: t('title'), href: '/blog' }]} />
      <section className="section section--alt" aria-label={t('title')} style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="container">
          <BlogGrid posts={postData} counts={counts} />
        </div>
      </section>
    </>
  )
}
