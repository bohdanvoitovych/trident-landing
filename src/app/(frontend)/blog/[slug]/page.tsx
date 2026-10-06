import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { BlogPost } from '@/components/templates/BlogPost'
import { getPostBySlug, getPostSlugs } from '@/data/blog'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { blogPostSchema } from '@/lib/schema'

export const revalidate = 86400

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const locale = await getLocale()
  const t = post.translations?.[locale as 'de' | 'fr' | 'it']
  // buildMetadata adds the canonical, hreflang and Open Graph tags the rest of
  // the site has; this route previously returned only title and description.
  return buildMetadata({
    title: t?.meta.title ?? post.meta.title,
    description: t?.meta.description ?? post.meta.description,
    path: `/blog/${post.slug}`,
    locale,
    ogImage: post.image,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const locale = await getLocale()

  return (
    <>
      <JsonLd data={blogPostSchema(post, locale)} />
      <BlogPost post={post} />
    </>
  )
}
