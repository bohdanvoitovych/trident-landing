/** A bold lead sentence followed by its explanation. */
export type Point = { lead: string; text: string }

/**
 * Long-form text of /services/ai-services: the PDF page "Sales on Autopilot with AI"
 * plus delivery, data protection, guarantees and FAQ (Yevhen, 62baa7e / 87c530c).
 * Strings may contain in-page links written as "[label](href)".
 */
export type ServiceDetail = {
  kicker: string
  title: string
  lede: string
  intro: string
  gap: { title: string; intro: string; items: Point[]; close: string }
  does: { title: string; items: Point[]; close: string }
  fte: { title: string; intro: string; rows: { label: string; agent: string; hire: string }[]; close: string }
  channels: { title: string; items: string[]; note: string }
  integrations: { title: string; lead: string; groups: { title: string; items: string[]; note?: string }[]; note: string }
  /** Title and label come from sections.whereWeSayNo. */
  limits: { intro: string; items: { title: string; text: string }[] }
  delivery: { title: string; intro: string; stages: { title: string; days: string; text: string }[]; close: string }
  languages: { title: string; paragraphs: string[] }
  data: { title: string; items: Point[] }
  guarantees: { title: string; items: Point[] }
  faq: { title: string; items: { question: string; answer: string }[] }
  next: { title: string; text: string; economics: string }
}
