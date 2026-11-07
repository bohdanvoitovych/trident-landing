import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { SolutionDetail } from '@/components/templates/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

const solution = getSolutionBySlug('cloud-services')

export async function generateMetadata() {
  if (!solution) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/cloud-services',
    locale,
  })
}

const certifications = [
  'AWS Certified',
  'Azure Partner',
  'Google Cloud',
  'ISO 27001-compatible',
  'Swiss data residency',
]

export default function CloudServicesSolutionPage() {
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label="Cloud Services"
      primary="Discuss your infrastructure"
      secondary={{ href: '/services/cloud-consulting', label: 'Cloud consulting service' }}
      features={{
        lead: 'End-to-end cloud services — from initial assessment and migration to ongoing managed operations.',
      }}
      list={{
        label: 'Standards & platforms',
        title: 'Multi-cloud, compliance-ready',
        lead: 'We work across all major cloud providers and design for Swiss data residency requirements where needed.',
        items: certifications,
      }}
      stack={{
        title: 'Infrastructure tooling',
        lead: 'Industry-standard tools for automated, observable, and secure cloud operations.',
      }}
      cta={{
        title: 'Move to the cloud with confidence',
        text: 'From strategy to 24/7 managed operations — we handle the infrastructure so you focus on your product.',
        primary: 'Start the conversation',
        secondary: { href: '/cases', label: 'View case studies' },
      }}
    />
  )
}
