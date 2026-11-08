import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import type { ServiceData } from '@/data/services'

type Props = {
  service: Pick<ServiceData, 'slug' | 'title' | 'tagline'>
  className?: string
}

export function ServiceCard({ service, className }: Props) {
  return (
    <Link href={`/services/${service.slug}`} className={cn('card feature-card', className)}>
      <h3>{service.title}</h3>
      <p style={{ flex: 1 }}>{service.tagline}</p>
      <span className="card-more">
        Learn more <span className="go" aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
