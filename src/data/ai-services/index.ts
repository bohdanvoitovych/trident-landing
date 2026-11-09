import type { Localized } from '@/lib/localized'
import type { ServiceDetail } from './types'
import { en } from './en'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'

export type { ServiceDetail, Point } from './types'

/** Long-form page text of /services/ai-services in every published locale. */
export const AI_SERVICES_DETAIL = { en, de, fr, it } satisfies Localized<ServiceDetail>
