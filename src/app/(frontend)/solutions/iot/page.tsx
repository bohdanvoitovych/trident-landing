import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { SolutionDetail } from '@/components/templates/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const solution = getSolutionBySlug('iot', locale)
  if (!solution) return {}
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/iot',
    locale,
  })
}

const industries = [
  'Automotive',
  'Healthcare',
  'Water management',
  'Industrial automation',
  'Smart buildings',
  'Agriculture',
]

export default function IotSolutionPage() {
  const solution = getSolutionBySlug('iot', useLocale())
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label="IoT & Embedded"
      primary="Discuss your project"
      secondary={{ href: '/services/embedded-and-iot', label: 'Embedded & IoT service' }}
      features={{
        lead: 'End-to-end IoT and embedded solutions — from firmware to cloud dashboards, with compliance where it matters.',
      }}
      list={{
        label: 'Industries',
        title: 'Sectors we serve',
        lead: 'We have delivered embedded and IoT solutions across regulated and safety-critical industries.',
        items: industries,
      }}
      stack={{
        title: 'From silicon to cloud',
        lead: 'Hardware-adjacent tooling combined with modern cloud infrastructure for end-to-end IoT systems.',
      }}
      cta={{
        title: 'Connect your devices to the cloud',
        text: 'From firmware to dashboards — we build the full stack so your IoT system works reliably in production.',
        primary: 'Get a quote',
        secondary: { href: '/cases', label: 'View case studies' },
      }}
    />
  )
}
