import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { SolutionDetail } from '@/components/templates/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

const solution = getSolutionBySlug('mobile-apps')

export async function generateMetadata() {
  if (!solution) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/mobile-apps',
    locale,
  })
}

const platforms = [
  'iOS',
  'Android',
  'React Native',
  'Flutter',
  'Expo',
]

export default function MobileAppsSolutionPage() {
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label="Mobile Apps"
      primary="Discuss your app"
      secondary={{ href: '/cases', label: 'See case studies' }}
      features={{
        lead: 'Full-cycle mobile development — from discovery and design to App Store delivery and ongoing maintenance.',
      }}
      list={{
        label: 'Platforms & frameworks',
        title: 'One build, two stores',
        lead: 'We use React Native and Flutter to ship to iOS and Android from a single codebase — with native-grade performance.',
        items: platforms,
      }}
      stack={{
        title: 'Production-grade tooling',
        lead: 'The same stack we use for our own products — battle-tested and maintainable.',
      }}
      cta={{
        title: 'Ready to build your mobile app?',
        text: "Tell us about your idea. We'll scope it, design it, and ship it to both stores.",
        primary: 'Get a quote',
        secondary: { href: '/cases', label: 'View case studies' },
      }}
    />
  )
}
