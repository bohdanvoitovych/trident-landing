import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { SolutionDetail } from '@/components/templates/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

const solution = getSolutionBySlug('social-networks')

export async function generateMetadata() {
  if (!solution) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/social-networks',
    locale,
  })
}

const platformTypes = [
  'Professional networks',
  'B2B communities',
  'Consumer social apps',
  'Marketplace networks',
  'Fan & loyalty platforms',
  'Internal corporate networks',
]

export default function SocialNetworksSolutionPage() {
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label="Social Networks"
      primary="Discuss your platform"
      secondary={{ href: '/cases', label: 'See case studies' }}
      features={{
        lead: 'Scalable, privacy-first social platforms — built for engagement, moderation, and long-term growth.',
      }}
      list={{
        label: 'Platform types',
        title: 'Networks we build',
        lead: 'From B2B professional communities to consumer social apps — we have the architecture and experience.',
        items: platformTypes,
      }}
      stack={{
        title: 'Built for scale and real-time',
        lead: 'The stack we use to deliver performant, real-time community platforms.',
      }}
      cta={{
        title: 'Build your community platform',
        text: "Tell us about your community vision — we'll architect and build a platform that grows with your users.",
        primary: 'Start the conversation',
        secondary: { href: '/cases', label: 'View case studies' },
      }}
    />
  )
}
