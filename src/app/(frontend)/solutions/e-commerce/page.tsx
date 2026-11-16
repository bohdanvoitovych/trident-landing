import { useLocale, useTranslations } from 'next-intl'
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

export default function EcommerceSolutionPage() {
  const t = useTranslations('pages.solutions.ecommerce')
  const solution = getSolutionBySlug('e-commerce', useLocale())
  if (!solution) notFound()

  return (
    <SolutionDetail
      solution={solution}
      label={t('label')}
      primary={t('primary')}
      secondary={{ href: '/projects/iam-trade', label: t('secondary') }}
      features={{ lead: t('featuresLead') }}
      list={{
        label: t('listLabel'),
        title: t('listTitle'),
        lead: t('listLead'),
        items: t.raw('listItems') as string[],
      }}
      stack={{ title: t('stackTitle'), lead: t('stackLead') }}
      cta={{
        title: t('ctaTitle'),
        text: t('ctaText'),
        primary: t('ctaPrimary'),
        secondary: { href: '/projects', label: t('ctaSecondary') },
      }}
    />
  )
}
