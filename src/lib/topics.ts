export const TOPIC_KEYS = ['aiAgents', 'logistics', 'iot', 'businessSystem', 'cto', 'other'] as const

export type TopicKey = (typeof TOPIC_KEYS)[number]

export function isTopicKey(v: unknown): v is TopicKey {
  return typeof v === 'string' && (TOPIC_KEYS as readonly string[]).includes(v)
}
