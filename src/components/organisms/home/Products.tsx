import Image from 'next/image'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Tag } from '@/components/atoms/controls'

const PRODUCTS = [
  {
    tag: 'In production',
    title: '8Move: logistics platform',
    text: 'Order intake, dispatch, driver app with photo proof and signature, live tracking, automated invoicing. In use with Swiss and European operators.',
    points: ['Passenger transport edition', 'Construction-material haulage edition', 'Last-mile delivery edition'],
    link: { href: 'https://8move.com', label: '8move.com' },
    img: '/images/stock/dispatch.jpg',
    alt: 'Delivery fleet',
  },
  {
    tag: 'Delivered',
    title: 'WaterTDS: connected water device',
    text: 'Firmware, cloud, rules engine, dealer portal and consumer app, from kick-off to first installations in 9 months.',
    points: ['Peak team of 6, steady state 3', 'Maintenance by litres, not by calendar'],
    link: { href: 'https://watertds.com', label: 'watertds.com' },
    img: '/images/stock/water-device.jpg',
    alt: 'Water infrastructure',
  },
  {
    tag: 'Delivered 2025',
    title: 'Document recognition and recommendation engine',
    text: 'The two AI patterns that pay back fastest: reading documents nobody wants to read, and deciding what to offer next from live data.',
    points: ['Document pipeline delivered in 4 months, ~2,500 documents a month', 'Recommendation engine delivered in 3 months'],
    img: '/images/stock/warehouse-2.jpg',
    alt: 'Stock the documents describe',
  },
]

/** Moved from the home page to /products. */
export function Products({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  return (
    <section className="section section--alt" id="products" aria-labelledby="products-h">
      <div className="container">
        <SectionHeader
          id="products-h"
          as={headingLevel}
          label="Our products"
          title="We build what we maintain ourselves"
          lead="A product company that consults, not an agency that sells hours."
        />
        <div className="grid-3 stagger wipe">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="card svc-card card--flat">
              <div className="media">
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px" />
              </div>
              <div className="card-body">
                <Tag tone="blue" className="self-start">
                  {p.tag}
                </Tag>
                <h3 className="card-title">{p.title}</h3>
                <p className="body">{p.text}</p>
                <ul className="ticks">
                  {p.points.map((pt) => (
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
