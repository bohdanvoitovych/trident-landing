import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { SolutionDetail } from '@/components/templates/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const solution = getSolutionBySlug('e-commerce', locale)
  if (!solution) return {}
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/e-commerce',
    locale,
  })
}

const industries = [
  'Automotive',
  'Fashion',
  'Luxury',
  'DIY & Tools',
  'Building',
  'Sport',
  'Household',
]

export default function EcommerceSolutionPage() {
  const solution = getSolutionBySlug('e-commerce', useLocale())
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label="E-commerce"
      primary="Discuss your platform"
      secondary={{ href: '/cases/iam-trade', label: 'See case study' }}
      features={{
        lead: 'From MVP to platforms handling 1M+ products, custom pricing, and 200+ integrations.',
      }}
      list={{
        label: 'Industries',
        title: 'Verticals we serve',
        lead: "We've built e-commerce platforms across automotive, fashion, luxury, and more — each with industry-specific requirements.",
        items: industries,
      }}
      stack={{
        title: 'Production-grade tooling',
        lead: 'The stack we use to deliver scalable, maintainable platforms.',
      }}
      cta={{
        title: 'Build your e-commerce platform',
        text: 'From custom B2B platforms to marketplaces — we scope, build, and maintain.',
        primary: 'Start the conversation',
        secondary: { href: '/cases', label: 'View case studies' },
      }}
    />
  )
}
