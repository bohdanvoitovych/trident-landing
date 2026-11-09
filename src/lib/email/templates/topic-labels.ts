import 'server-only'
import { isTopicKey, type TopicKey } from '@/lib/topics'
import en from '../../../../messages/en.json'
import de from '../../../../messages/de.json'
import fr from '../../../../messages/fr.json'
import it from '../../../../messages/it.json'

type Messages = {
  molecules: { auditForm: { topics: Record<string, string> } }
  ui: { audit: { other: string } }
}

const MESSAGES: Record<string, Messages> = { en, de, fr, it } as unknown as Record<string, Messages>

/** Form topic label from the site messages. Unknown locale falls back to English. */
export function topicLabel(key: TopicKey | undefined, locale = 'en'): string | undefined {
  if (!isTopicKey(key)) return undefined
  const m = MESSAGES[locale] ?? MESSAGES.en
  return key === 'other' ? m.ui.audit.other : m.molecules.auditForm.topics[key]
}
