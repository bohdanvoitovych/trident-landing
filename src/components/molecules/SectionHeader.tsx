import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, center, className }: Props) {
  return (
    <div className={cn('flex flex-col gap-3', center && 'items-center text-center', className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-heading text-[#111318] tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-[16px] text-[#4A4F57] leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
