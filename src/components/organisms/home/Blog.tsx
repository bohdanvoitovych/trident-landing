import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { BlogCard } from '@/components/molecules/BlogCard'

const POSTS = [
  {
    slug: 'smart-auto-parts-software-unifies-ecommerce-warehouse-delivery-ai',
    date: '2025-11-21',
    key: 'autoParts',
    img: '/images/blog/smart-auto-parts-software-unifies-ecommerce-warehouse-delive.jpg',
  },
  {
    slug: 'automechanika-dubai-2025-meet-us-at-booth-8-f18',
    date: '2025-11-05',
    key: 'automechanika',
    img: '/images/blog/automechanika-dubai-2025.jpg',
  },
  {
    slug: 'practical-ai-for-smes-where-it-really-works',
    date: '2025-10-15',
    key: 'practicalAi',
    img: '/images/blog/practical-ai-for-smes-where-it-really-works.png',
  },
  {
    slug: 'click-scan-done-how-digital-invoice-scanner-cuts-costs',
    date: '2025-08-28',
    key: 'invoiceScanner',
    img: '/images/blog/click-scan-done-how-digital-invoice-scanner-cuts-costs.jpg',
  },
] as const

export function Blog() {
  const t = useTranslations('ui.actions')
  const tb = useTranslations('sections.blog')
  return (
    <section className="section" id="blog" aria-labelledby="blog-h">
      <div className="container">
        <SectionHeader id="blog-h" label={tb('label')} title={tb('title')} action={{ href: '/blog', label: t('allArticles') }} />
        <div className="grid-4 stagger wipe">
          {POSTS.map((p) => (
            <BlogCard key={p.slug} href={`/blog/${p.slug}`} image={p.img} date={p.date} title={tb(`posts.${p.key}`)} />
          ))}
        </div>
      </div>
    </section>
  )
}
