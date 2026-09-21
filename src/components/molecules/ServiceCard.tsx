import Link from 'next/link'
import { ArrowRight, Brain, Code2, Cpu, ShieldCheck, Cloud, GitBranch, Palette, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ServiceData } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  'code-2': Code2,
  cpu: Cpu,
  'shield-check': ShieldCheck,
  cloud: Cloud,
  'git-branch': GitBranch,
  palette: Palette,
  users: Users,
}

type Props = {
  service: Pick<ServiceData, 'slug' | 'title' | 'tagline' | 'icon'>
  className?: string
}

export function ServiceCard({ service, className }: Props) {
  const Icon = iconMap[service.icon] ?? Code2

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group light-card light-card-interactive rounded-xl p-5 flex flex-col gap-3',
        className,
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2772E0]/10">
        <Icon size={17} className="text-[#2772E0]" />
      </div>
      <div>
        <h3 className="font-semibold text-[14px] text-[#0F172A] mb-1 group-hover:text-[#2772E0] transition-colors">
          {service.title}
        </h3>
        <p className="text-[13px] text-[#71717A] leading-relaxed">{service.tagline}</p>
      </div>
      <div className="flex items-center gap-1 text-[12px] text-[#2772E0] font-medium mt-auto">
        Learn more <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  )
}
