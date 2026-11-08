import { routing } from '@/i18n/routing'

export type Locale = (typeof routing.locales)[number]

/**
 * Text of one record in every language it is written in. English is required;
 * a locale missing here is not published as a translation (see `localesOf`).
 */
export type Localized<T> = { en: T } & Partial<Record<Exclude<Locale, 'en'>, T>>

/** The record's text in `locale`, or English when that locale is not written yet. */
export function pick<T>(content: Localized<T>, locale: string): T {
  return (content as Partial<Record<string, T>>)[locale] ?? content.en
}

/** Locales that have their own text. Pass to `buildMetadata({ availableLocales })`. */
export function localesOf(content: Localized<unknown>): Locale[] {
  return routing.locales.filter((l) => l in content)
}
