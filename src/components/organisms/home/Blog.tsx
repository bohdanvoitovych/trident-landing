import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { BlogCard } from '@/components/molecules/BlogCard'

const POSTS = [
  {
    slug: 'smart-auto-parts-software-unifies-ecommerce-warehouse-delivery-ai',
    date: '2025-11-21',
    title: 'Smart auto parts software that unifies e-commerce, warehouse, delivery and AI',
    img: '/images/blog/smart-auto-parts-software-unifies-ecommerce-warehouse-delive.jpg',
  },
  {
    slug: 'automechanika-dubai-2025-meet-us-at-booth-8-f18',
    date: '2025-11-05',
    title: 'Automechanika Dubai 2025: meet us in Hall 8, Booth F18',
    img: '/images/blog/automechanika-dubai-2025.jpg',
  },
  {
    slug: 'practical-ai-for-smes-where-it-really-works',
    date: '2025-10-15',
    title: 'Practical AI for SMEs: where it really works',
    img: '/images/blog/practical-ai-for-smes-where-it-really-works.png',
  },
  {
    slug: 'click-scan-done-how-digital-invoice-scanner-cuts-costs',
    date: '2025-08-28',
    title: 'Click, scan, done: how a digital invoice scanner cuts costs',
    img: '/images/blog/click-scan-done-how-digital-invoice-scanner-cuts-costs.jpg',
  },
]

export function Blog() {
  const t = useTranslations('ui.actions')
  return (
    <section className="section" id="blog" aria-labelledby="blog-h">
      <div className="container">
        <SectionHeader id="blog-h" label="Blog & news" title="From the team" action={{ href: '/blog', label: t('allArticles') }} />
        <div className="grid-4 stagger wipe">
          {POSTS.map((p) => (
            <BlogCard key={p.slug} href={`/blog/${p.slug}`} image={p.img} date={p.date} title={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
