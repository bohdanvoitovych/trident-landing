import { Suspense } from 'react'
import Link from 'next/link'
import { permanentRedirect } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { posts } from '@/data/blog'
import { TOPIC_MIN_POSTS, tagSlug as slugify } from '@/data/blog-meta'
import { buildMetadata } from '@/lib/metadata'
import { BlogGrid } from '@/components/molecules/BlogGrid'
import JsonLd from '@/components/seo/JsonLd'
import { topicPageSchema } from '@/lib/schema'

export const revalidate = 3600


function postsForTag(slug: string) {
  const matching = posts.filter((p) => p.tags.some((t) => slugify(t) === slug))
  const name = matching.length
    ? (matching[0].tags.find((t) => slugify(t) === slug) as string)
    : slug
  return { matching, name }
}

export function generateStaticParams() {
  return [...new Set(posts.flatMap((p) => p.tags.map(slugify)))].map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const { name, matching } = postsForTag(tag)
  const locale = await getLocale()
  const meta = buildMetadata({
    title: `${name} | Blog | Trident Software`,
    description: `Articles from the Trident Software blog tagged ${name}.`,
    path: `/topics/${tag}`,
    locale,
  })
  // A thin tag page stays out of search, but its links to the posts are still followed.
  return matching.length < TOPIC_MIN_POSTS ? { ...meta, robots: { index: false, follow: true } } : meta
}

export default async function TopicPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const { matching, name } = postsForTag(tag)
  // An old tag with no post on the new site goes to the blog list.
  if (!matching.length) permanentRedirect('/blog')
  const locale = await getLocale()
  return (
    <>
      <JsonLd
        data={topicPageSchema(
          { name, slug: tag, posts: matching.map((p) => ({ slug: p.slug, title: p.title })) },
          locale,
        )}
      />
      <TopicView name={name} matching={matching} />
    </>
  )
}

function TopicView({ name, matching }: { name: string; matching: typeof posts }) {
  const t = useTranslations('blog')
  const postData = matching.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
    tags: p.tags,
    image: p.image,
  }))
  return (
    <div className="flex flex-col">
      <section className="dark-section py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Topic</p>
          <h1 className="text-display text-white mb-4">{name}</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            {matching.length} {matching.length === 1 ? 'article' : 'articles'} tagged {name}.{' '}
            <Link href="/blog" className="underline">
              All articles
            </Link>
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense>
            <BlogGrid posts={postData} readMore={t('readMore')} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
