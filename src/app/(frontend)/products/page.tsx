import Link from 'next/link'
import { ArrowRight, ExternalLink, Zap, Users, MapPin } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Our Product</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            <span className="gradient-text">8move</span> — Driver Management SaaS
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            A production SaaS platform built by Trident Software for last-mile delivery companies.
            Manage drivers, track deliveries, and automate payroll — all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <a href="https://8move.app" target="_blank" rel="noopener noreferrer">
                Visit 8move.app <ExternalLink size={16} />
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
              Live since 2022
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              Active delivery companies
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Switzerland · Ukraine
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Platform"
            title="Everything for last-mile delivery"
            subtitle="Built from real operational experience running delivery fleets."
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
            8move is our own product — not a client project. We built, deployed, and operate it
            ourselves. This means we understand SaaS from the inside. If you need a similar
            platform built for your business, we know exactly what it takes.
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
