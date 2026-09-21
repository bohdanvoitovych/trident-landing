import Link from 'next/link'
import { ArrowRight, Check, Package, Users, Globe, BarChart3, Truck, Settings } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
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
    icon: Users,
    title: 'Account Management',
    description:
      'Personalized user accounts with support for multiple business entities and contracts per user. B2B buyer hierarchies, role-based access control, and shared account management.',
  },
  {
    icon: Package,
    title: 'Product Management',
    description:
      'Product catalogs with 3D model support, multilingual descriptions, and automated product information exchange. Scale to 1 million+ SKUs with intelligent search and filtering.',
  },
  {
    icon: BarChart3,
    title: 'Dynamic Pricing',
    description:
      'Flexible pricing engine with customizable discounts, cashbacks, and promotional campaigns. Contract-specific pricing for B2B clients with automated price list management.',
  },
  {
    icon: Settings,
    title: 'Order Processing',
    description:
      'Full lifecycle management including reservations, invoicing, complaints, and returns. Automated workflows reduce manual intervention across the entire order flow.',
  },
  {
    icon: Truck,
    title: 'Delivery Coordination',
    description:
      'Integration with logistics partners and real-time tracking capabilities. Route optimization, proof of delivery, and customer notification across all channels.',
  },
  {
    icon: Globe,
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

export default function IamTradePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#09090B] to-[#09090B]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Our Product</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            <span className="gradient-text">iAM-Trade</span> — B2B/B2C/B2X E-commerce Platform
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-4 max-w-2xl">
            A powerful Swiss e-commerce platform built for complex commerce. Handle B2B, B2C, and
            B2X transactions from a single system — with 200+ integrations and support for
            1 million+ products.
          </p>
          <p className="text-base text-white/40 leading-relaxed mb-8 max-w-xl">
            Built by Trident Software and already powering automotive parts distributors, watch
            accessory suppliers, and industrial equipment dealers across Switzerland and Europe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Request a demo <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases/iam-trade">See case study</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { label: 'Integrations', value: '200+' },
              { label: 'Products supported', value: '1M+' },
              { label: 'Commerce models', value: 'B2B/B2C/B2X' },
              { label: 'Languages', value: 'EN/FR/DE/IT' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Platform"
            title="Everything your commerce operation needs"
            subtitle="iAM-Trade covers the full e-commerce lifecycle — from catalog management to order fulfillment and analytics."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="light-card rounded-xl p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#71717A] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4 text-primary text-sm font-semibold tracking-wider uppercase">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                Built for scale and complexity
              </h2>
              <p className="text-[#71717A] leading-relaxed mb-6">
                iAM-Trade is designed from the ground up for businesses with complex commerce
                requirements — multiple buyer types, large catalogs, and sophisticated pricing rules
                that off-the-shelf platforms can't handle.
              </p>
              <Button variant="gradient" asChild>
                <Link href="/contact">
                  Book a demo <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-[#E2E8F0]">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-[#0F172A]">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Use cases"
            title="Who uses iAM-Trade"
            subtitle="Built for businesses where standard Shopify or WooCommerce setups hit their limits."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
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
            ].map((useCase) => (
              <div key={useCase.title} className="light-card rounded-xl p-6">
                <h3 className="font-semibold text-[#0F172A] mb-2">{useCase.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology"
            title="Built on proven technology"
            subtitle="Cloud-native architecture that scales from startup to enterprise without re-platforming."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to see iAM-Trade in action?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Schedule a live demo with our team. We&apos;ll show you exactly how iAM-Trade fits your
            commerce workflow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Book a demo <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases">See our projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
