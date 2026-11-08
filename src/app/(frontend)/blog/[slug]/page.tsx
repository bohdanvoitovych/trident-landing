import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { BlogPost } from '@/components/templates/BlogPost'
import { getPostBySlug, getPostLocales, getPostSlugs } from '@/data/blog'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { blogPostSchema } from '@/lib/schema'
import { BLOG_IMAGES } from '@/data/blog-meta'

export const revalidate = 86400

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const post = getPostBySlug(slug, locale)
  if (!post) return {}
  // buildMetadata adds the canonical, hreflang and Open Graph tags the rest of
  // the site has; this route previously returned only title and description.
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.slug}`,
    locale,
    availableLocales: getPostLocales(slug),
    ogImage: post.image,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  const post = getPostBySlug(slug, locale)
  if (!post) notFound()

  return (
    <>
      <JsonLd data={blogPostSchema({ ...post, image: BLOG_IMAGES[post.slug] ?? post.image }, locale)} />
      <BlogPost post={post} />
    </>
  )
}
