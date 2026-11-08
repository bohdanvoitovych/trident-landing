import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { formatDate } from '@/lib/utils'
import { markdownToHtml } from '@/lib/markdown'
import { getRelatedPosts } from '@/data/blog'
import type { BlogPost as BlogPostType } from '@/data/blog'
import { BLOG_IMAGES, getBlogCategory } from '@/data/blog-meta'
import { Breadcrumbs } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { BlogCard } from '@/components/molecules/BlogCard'
import { Author } from '@/components/molecules/Author'
import { Accordion } from '@/components/molecules/Accordion'
import { Tag } from '@/components/atoms/controls'

type Props = {
  post: BlogPostType
}

export function BlogPost({ post }: Props) {
  const t = useTranslations('blog')
  const ui = useTranslations('ui')
  const tp = useTranslations('templates.blogPost')
  const locale = useLocale()
  const related = getRelatedPosts(post.relatedPosts, locale)
  const cover = BLOG_IMAGES[post.slug] ?? post.image

  return (
    <>
    <article>
      <section className="page-hero" aria-labelledby="post-h">
        <div className="container flex flex-col gap-7">
          <div className="article-head flex flex-col gap-[22px]">
            <Breadcrumbs
              items={[
                { name: t('title'), href: '/blog' },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h1 id="post-h" className="h1" style={{ fontSize: 'clamp(34px,4.4vw,60px)', overflowWrap: 'anywhere', hyphens: 'auto' }}>
              {post.title}
            </h1>
            <p className="lead">{post.excerpt}</p>
            <p className="meta flex flex-wrap gap-x-3 gap-y-1">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
              <span aria-hidden="true">·</span>
              <span>{ui('blog.minRead', { n: post.readingTime })}</span>
            </p>
          </div>
          {cover && (
            <div className="media article-cover">
              <Image src={cover} alt="" fill priority sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
          )}
        </div>
      </section>

      <section className="section" aria-label={post.title} style={{ paddingTop: 0 }}>
        <div className="container article-grid">
          <div className="prose prose-lg min-w-0" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content, locale) }} />
          <aside className="article-aside">
            <div className="author-box">
              <span className="meta">{ui('blog.writtenBy')}</span>
              <Author name={post.author} role={post.authorRole} large />
            </div>
            <Link href="/blog" className="text-link">
              <span aria-hidden="true">←</span> {tp('allPosts')}
            </Link>
          </aside>
        </div>
      </section>

      {post.faq && post.faq.length > 0 && (
        <section className="section section--alt" aria-labelledby="post-faq-h">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <h2 id="post-faq-h" className="h2">
                  {tp('faqTitle')}
                </h2>
              </div>
            </div>
            <div className="reveal" style={{ maxWidth: 880 }}>
              <Accordion items={post.faq} idPrefix="post-faq" />
            </div>
          </div>
        </section>
      )}
    </article>

      {related.length > 0 && (
        <section className={post.faq?.length ? 'section' : 'section section--alt'} aria-labelledby="related-h">
          <div className="container">
            <SectionHeader
              id="related-h"
              label={t('title')}
              title={t('relatedPosts')}
              action={{ href: '/blog', label: ui('actions.allArticles') }}
            />
            <div className="grid-3 stagger wipe">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  image={BLOG_IMAGES[p.slug] ?? p.image}
                  date={p.publishedAt}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={getBlogCategory(p.tags)}
                  author={{ name: p.author, role: p.authorRole }}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
