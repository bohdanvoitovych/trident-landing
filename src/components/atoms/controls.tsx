import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ink' | 'outline'

type ButtonBase = {
  variant?: Variant
  size?: 'md' | 'sm'
  /** Draws the → that moves on hover. */
  arrow?: boolean
  className?: string
  children: ReactNode
}

function btnClass(variant: Variant, size: 'md' | 'sm', className?: string) {
  return cn('btn', `btn--${variant}`, size === 'sm' && 'btn--sm', className)
}

function Inner({ arrow, children }: { arrow?: boolean; children: ReactNode }) {
  return (
    <span>
      {children}
      {arrow && (
        <i className="arr" aria-hidden="true">
          →
        </i>
      )}
    </span>
  )
}

/** Link styled as a button. Internal links use next/link. */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  ...rest
}: ButtonBase & Omit<ComponentProps<typeof Link>, 'className' | 'children'>) {
  return (
    <Link href={href} className={btnClass(variant, size, className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonBase & Omit<ComponentProps<'button'>, 'className' | 'children'>) {
  return (
    <button type={type} className={btnClass(variant, size, className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  )
}

/** Section label: 18px blue rule + mono text. No numbering, no caps. */
export function Label({ children, className, flag }: { children: ReactNode; className?: string; flag?: boolean }) {
  return (
    <span className={cn('label', flag && 'label--flag', className)}>
      {flag && <SwissFlag size={16} />}
      {children}
    </span>
  )
}

export function Tag({
  tone = 'wash',
  children,
  className,
}: {
  tone?: 'blue' | 'wash' | 'ink' | 'line' | 'dark'
  children: ReactNode
  className?: string
}) {
  return <span className={cn('tag', `tag--${tone}`, className)}>{children}</span>
}

/** Segmented-control button (language switcher, pagination numbers, demo tabs). */
export function Seg({ className, type = 'button', ...rest }: ComponentProps<'button'>) {
  return <button type={type} className={cn('seg', className)} {...rest} />
}

/** Filter / choice chip. Pass aria-pressed for the selected state. */
export function Chip({ className, type = 'button', ...rest }: ComponentProps<'button'>) {
  return <button type={type} className={cn('chip', className)} {...rest} />
}

/** Text link with an arrow that moves on hover. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link href={href} className={cn('text-link', className)}>
      {children}
      <span className="go" aria-hidden="true">
        →
      </span>
    </Link>
  )
}

/** The only place red is allowed: the 16–18px Swiss flag glyph. */
export function SwissFlag({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="flag">
      <rect width="32" height="32" rx="3" fill="#DA291C" />
      <rect x="13" y="6" width="6" height="20" fill="#fff" />
      <rect x="6" y="13" width="20" height="6" fill="#fff" />
    </svg>
  )
}
