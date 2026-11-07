import { getLocale } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Products } from '@/components/organisms/home/Products'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: '8move — Driver Management Platform | Trident Software',
    description:
      '8move is a SaaS platform for last-mile delivery companies. Manage drivers, track deliveries, automate payroll. Built by Trident Software.',
    path: '/products',
    locale,
  })
}

const features = [
  { title: 'Driver app', desc: 'iOS & Android app with route navigation, proof-of-delivery, and real-time status updates.' },
  { title: 'Fleet dashboard', desc: 'Live map view of all drivers, delivery status, and exception alerts.' },
  { title: 'Payroll automation', desc: 'Automated wage calculation based on deliveries, bonuses, and deductions.' },
  { title: 'Client portal', desc: 'White-label portal for your clients to track their shipments.' },
  { title: 'Route optimization', desc: 'AI-powered route sequencing reducing fuel costs by up to 23%.' },
  { title: 'Analytics', desc: 'Delivery performance, driver efficiency, and cost-per-delivery reporting.' },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Our Product', href: '/products' }]}
        label="Our Product"
        title={
          <>
            <span className="blue">8move</span> — Driver Management SaaS
          </>
        }
        lead="A production SaaS platform built by Trident Software for last-mile delivery companies. Manage drivers, track deliveries, and automate payroll — all in one place."
        actions={
          <div className="stack" style={{ gap: 20 }}>
            <div className="hero-ctas">
              <ButtonLink href="https://8move.app" target="_blank" rel="noopener noreferrer" arrow>
                Visit 8move.app
              </ButtonLink>
              <ButtonLink href="/cases/8move-driver" variant="outline" arrow>
                Read the case study
              </ButtonLink>
            </div>
            <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
              {['Live since 2022', 'Active delivery companies', 'Switzerland · Ukraine'].map((f) => (
                <li key={f}>
                  <Tag tone="line">{f}</Tag>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Products headingLevel="h2" />

      <section className="section" aria-labelledby="platform-h">
        <div className="container">
          <SectionHeader
            id="platform-h"
            label="Platform"
            title="Everything for last-mile delivery"
            lead="Built from real operational experience running delivery fleets."
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {features.map((f) => (
              <li key={f.title} className="card card--flat feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="products-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="products-cta-h" className="h2">
              Built by Trident Software
            </h2>
            <p className="lead">
              8move is our own product — not a client project. We built, deployed, and operate it ourselves. This means we
              understand SaaS from the inside. If you need a similar platform built for your business, we know exactly
              what it takes.
            </p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              Build your platform
            </ButtonLink>
            <ButtonLink href="/services/software-engineering" variant="outline">
              Our services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
