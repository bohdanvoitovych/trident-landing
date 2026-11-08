import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Intl tag for a site locale: Swiss variants for DE/FR/IT (1'284, 7. Mai 2026). */
export function intlLocale(locale: string): string {
  return locale === 'en' ? 'en-GB' : `${locale}-CH`
}

export function formatDate(date: string | Date, locale = 'en'): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
