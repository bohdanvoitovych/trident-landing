import { getLocale } from 'next-intl/server'
import { ButtonLink, Label } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'iAM-Trade — B2B/B2C/B2X E-commerce Platform | Trident Software',
    description:
      'iAM-Trade is a powerful Swiss e-commerce platform for B2B, B2C, and B2X commerce. 200+ integrations, 1M+ product support, dynamic pricing, and multi-entity account management.',
    path: '/products/iam-trade',
    locale,
  })
}

const features = [
  {
    title: 'Account Management',
    description:
      'Personalized user accounts with support for multiple business entities and contracts per user. B2B buyer hierarchies, role-based access control, and shared account management.',
  },
  {
    title: 'Product Management',
    description:
      'Product catalogs with 3D model support, multilingual descriptions, and automated product information exchange. Scale to 1 million+ SKUs with intelligent search and filtering.',
  },
  {
    title: 'Dynamic Pricing',
    description:
      'Flexible pricing engine with customizable discounts, cashbacks, and promotional campaigns. Contract-specific pricing for B2B clients with automated price list management.',
  },
  {
    title: 'Order Processing',
    description:
      'Full lifecycle management including reservations, invoicing, complaints, and returns. Automated workflows reduce manual intervention across the entire order flow.',
  },
  {
    title: 'Delivery Coordination',
    description:
      'Integration with logistics partners and real-time tracking capabilities. Route optimization, proof of delivery, and customer notification across all channels.',
  },
  {
    title: '200+ System Integrations',
    description:
      'Connect to SAP, Odoo, Salesforce, Bexio, and 200+ ERP, CRM, WMS, and payment systems via our integration layer. Open API for custom connectors.',
  },
]

const capabilities = [
  'B2B, B2C, and B2X commerce from a single platform',
  'Scale to 1 million+ products',
  'Multilingual product descriptions (EN, FR, DE, IT)',
  'Dynamic pricing with discount rules and cashbacks',
  'Multi-currency and multi-warehouse support',
  'Full ERP / CRM / WMS integration layer',
  '3D product visualization support',
  'Automated invoicing and returns management',
  'Real-time inventory synchronization',
  'Customer loyalty programs and campaigns',
  'Advanced analytics and reporting dashboard',
  'Swiss data residency option',
]

const techStack = [
  'React.js', 'Node.js', 'Python', 'PostgreSQL', 'Redis',
  'AWS', 'Docker', 'Kubernetes', 'Elasticsearch', 'REST / GraphQL API',
]

const heroStats = [
  { label: 'Integrations', value: '200+' },
  { label: 'Products supported', value: '1M+' },
  { label: 'Commerce models', value: 'B2B/B2C/B2X' },
  { label: 'Languages', value: 'EN/FR/DE/IT' },
]

const useCases = [
  {
    title: 'Auto Parts Distributors',
    desc: 'Large catalogs with VIN lookup, vehicle compatibility filtering, multi-warehouse inventory, and dynamic pricing for dealer tiers.',
  },
  {
    title: 'Industrial Equipment',
    desc: 'Complex product configurations, custom quotes, long-tail catalogs with detailed technical specifications and 3D models.',
  },
  {
    title: 'Watch & Luxury Goods',
    desc: 'Curated product experiences, limited editions management, multi-currency support, and VIP buyer segmentation.',
  },
  {
    title: 'Food & FMCG',
    desc: 'Regular delivery scheduling, subscription orders, expiry date tracking, and HoReCa-specific pricing structures.',
  },
  {
    title: 'B2B Wholesalers',
    desc: 'Buyer hierarchies, multi-entity accounts, contract-specific pricing, and purchase approval workflows.',
  },
  {
    title: 'Multi-brand Manufacturers',
    desc: 'Separate branded storefronts from one backend, channel-specific pricing, and partner portal management.',
  },
]

export default function IamTradePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Our Product', href: '/products' },
          { name: 'iAM-Trade', href: '/products/iam-trade' },
        ]}
        label="Our Product"
        title={
          <>
            <span className="blue">iAM-Trade</span> — B2B/B2C/B2X E-commerce Platform
          </>
        }
        lead="A powerful Swiss e-commerce platform built for complex commerce. Handle B2B, B2C, and B2X transactions from a single system — with 200+ integrations and support for 1 million+ products."
        actions={
          <div className="stack" style={{ gap: 22 }}>
            <p className="body" style={{ maxWidth: 580 }}>
              Built by Trident Software and already powering automotive parts distributors, watch accessory suppliers,
              and industrial equipment dealers across Switzerland and Europe.
            </p>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                Request a demo
              </ButtonLink>
              <ButtonLink href="/cases/iam-trade" variant="outline">
                See case study
              </ButtonLink>
            </div>
          </div>
        }
        aside={
          <dl className="facts stagger" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', margin: 0 }}>
            {heroStats.map((s) => (
              <div key={s.label} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                <dt className="fact-k">{s.label}</dt>
                <dd className="fact-v" style={{ margin: 0, overflowWrap: 'anywhere' }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section section--line" aria-labelledby="platform-h">
        <div className="container">
          <SectionHeader
            id="platform-h"
            label="Platform"
            title="Everything your commerce operation needs"
            lead="iAM-Trade covers the full e-commerce lifecycle — from catalog management to order fulfillment and analytics."
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {features.map((f) => (
              <li key={f.title} className="card card--flat feature-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="capabilities-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <Label>Capabilities</Label>
            <h2 id="capabilities-h" className="h2">
              Built for scale and complexity
            </h2>
            <p className="lead">
              iAM-Trade is designed from the ground up for businesses with complex commerce requirements — multiple buyer
              types, large catalogs, and sophisticated pricing rules that off-the-shelf platforms can&apos;t handle.
            </p>
            <div style={{ marginTop: 8 }}>
              <ButtonLink href="/contact" arrow>
                Book a demo
              </ButtonLink>
            </div>
          </div>
          <div className="panel reveal">
            <ul className="ticks">
              {capabilities.map((cap) => (
                <li key={cap} className="text-ink">
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="usecases-h">
        <div className="container">
          <SectionHeader
            id="usecases-h"
            label="Use cases"
            title="Who uses iAM-Trade"
            lead="Built for businesses where standard Shopify or WooCommerce setups hit their limits."
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {useCases.map((u) => (
              <li key={u.title} className="card card--flat feature-card">
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="tech-h">
        <div className="container">
          <SectionHeader
            id="tech-h"
            label="Technology"
            title="Built on proven technology"
            lead="Cloud-native architecture that scales from startup to enterprise without re-platforming."
          />
          <ul className="chips reveal" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {techStack.map((tech) => (
              <li key={tech} className="tag tag--line" style={{ fontSize: 13, padding: '8px 12px' }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="iam-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="iam-cta-h" className="h2">
              Ready to see iAM-Trade in action?
            </h2>
            <p className="lead">
              Schedule a live demo with our team. We&apos;ll show you exactly how iAM-Trade fits your commerce workflow.
            </p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              Book a demo
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              See our projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
