import { useLocale, useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { BlogCard } from '@/components/molecules/BlogCard'
import { getPostBySlug } from '@/data/blog'

// Articles on the topic the home page sells: AI agents and automation for SMEs.
const SLUGS = [
  'on-premise-llm-swiss-companies',
  'ai-agent-b2b-automation',
  'openai-vs-anthropic-api-cost-sme',
  'ai-document-processing-invoices-contracts',
] as const

export function Blog() {
  const t = useTranslations('ui.actions')
  const tb = useTranslations('sections.blog')
  const locale = useLocale()
  const posts = SLUGS.map((s) => getPostBySlug(s, locale)).filter((p) => p !== undefined)
  return (
    <section className="section" id="blog" aria-labelledby="blog-h">
      <div className="container">
        <SectionHeader id="blog-h" label={tb('label')} title={tb('title')} action={{ href: '/blog', label: t('allArticles') }} />
        <div className="grid-4 stagger wipe">
          {posts.map((p) => (
            <BlogCard key={p.slug} href={`/blog/${p.slug}`} image={p.image} date={p.publishedAt} title={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
