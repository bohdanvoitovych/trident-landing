import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Tag } from '@/components/atoms/controls'

const PRODUCTS = [
  { k: 'eightMove', link: { href: 'https://8move.com', label: '8move.com' }, img: '/images/stock/dispatch.jpg' },
  { k: 'waterTds', link: { href: 'https://watertds.com', label: 'watertds.com' }, img: '/images/stock/water-device.jpg' },
  { k: 'docs', link: null, img: '/images/stock/warehouse-2.jpg' },
] as const

/** Moved from the home page to /products. */
export function Products({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const t = useTranslations('sections.products')
  return (
    <section className="section section--alt" id="products" aria-labelledby="products-h">
      <div className="container">
        <SectionHeader
          id="products-h"
          as={headingLevel}
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <div className="grid-3 stagger wipe">
          {PRODUCTS.map((p) => (
            <article key={p.k} className="card svc-card card--flat">
              <div className="media">
                <Image src={p.img} alt={t(`items.${p.k}.alt`)} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px" />
              </div>
              <div className="card-body">
                <Tag tone="blue" className="self-start">
                  {t(`items.${p.k}.tag`)}
                </Tag>
                <h3 className="card-title">{t(`items.${p.k}.title`)}</h3>
                <p className="body">{t(`items.${p.k}.text`)}</p>
                <ul className="ticks">
                  {(t.raw(`items.${p.k}.points`) as string[]).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {p.link && (
                  <a href={p.link.href} className="text-link" style={{ marginTop: 'auto', paddingTop: 8 }} target="_blank" rel="noopener noreferrer">
                    {p.link.label} <span className="go" aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
