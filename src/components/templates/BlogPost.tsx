import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { formatDate } from '@/lib/utils'
import { markdownToHtml } from '@/lib/markdown'
import { getRelatedPosts } from '@/data/blog'
import type { BlogPost as BlogPostType } from '@/data/blog'

type Props = {
  post: BlogPostType
}

export function BlogPost({ post }: Props) {
  const t = useTranslations('blog')
  const related = getRelatedPosts(post.relatedPosts)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[2px] border border-[#E3E5E8] bg-white px-2.5 py-1 text-[12px] font-medium text-[#4A4F57]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-8">
            <div className="flex items-center gap-1.5">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
              <span className="text-white/20">·</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={13} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={13} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <p className="text-xl text-white/60 leading-relaxed border-l-4 border-primary pl-4">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* prose-invert is for dark backgrounds; this section is white, which
              left the body text washed out. Neutral prose, and a measure of
              ~68 characters instead of the full 896px column. */}
          <div
            className="prose prose-neutral prose-lg mx-auto max-w-[68ch] prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-[26px] prose-h2:mt-12 prose-h2:mb-4 prose-p:leading-[1.75] prose-a:text-[#2772E0] prose-code:text-[#2772E0] prose-pre:bg-[#0F1216] prose-pre:text-white"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
        </div>
      </section>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-[3px]">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#111318] list-none">
                    {item.question}
                    <span className="ml-4 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">{t('relatedPosts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="light-card light-card-interactive rounded-[3px] p-6 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="flex flex-wrap gap-1">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[2px] border border-[#E3E5E8] bg-white px-2.5 py-1 text-[12px] font-medium text-[#4A4F57]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold leading-snug hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

