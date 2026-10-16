import Link from 'next/link'
import { ArrowRight, ExternalLink, Zap, Users, MapPin } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { buildMetadata } from '@/lib/metadata'
import PageJsonLd from '@/components/seo/PageJsonLd'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: '8Move — Logistics Platform | Trident Software',
    description:
      '8Move is our own logistics platform: order intake, dispatch, driver apps, tracking and automated invoicing. In production with operators in Switzerland and the EU.',
    path: '/products',
    locale,
  })
}

const features = [
  { title: 'Order intake', desc: 'Orders enter one system, from enquiry to execution to invoice.' },
  { title: 'Dispatch and planning', desc: 'Assignment and planning of jobs across vehicles and drivers.' },
  { title: 'Driver app', desc: 'Driver applications with photo proof and signature.' },
  { title: 'Live tracking', desc: 'Live tracking of every delivery.' },
  { title: 'Automated invoicing', desc: 'Invoices are issued automatically.' },
  { title: 'Industry editions', desc: 'Passenger transport, construction-material haulage and last-mile delivery.' },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <PageJsonLd path="/products" />
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Our Product</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            <span className="gradient-text">8Move</span> — our own logistics platform
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            Order intake, dispatch and planning, driver applications with photo proof and signature,
            live tracking, automated invoicing. Shipped as configurable industry editions, not one
            generic product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <a href="https://8move.com" target="_blank" rel="noopener noreferrer">
                Visit 8move.com <ExternalLink size={16} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases/8move-driver">
                Read the case study <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-primary" />
              In production with paying customers
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              Operators in Switzerland and the EU
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Three industry editions
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Platform"
            title="What 8Move does"
            subtitle="Configurable industry editions rather than one generic product."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="light-card rounded-[3px] p-6">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Built by Trident Software
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            8Move is our own product, in production with paying customers. The same team builds it
            and does our client work. We build what we are willing to maintain for five years,
            because with 8Move we actually do.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Build your platform <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/services/software-engineering">Our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
