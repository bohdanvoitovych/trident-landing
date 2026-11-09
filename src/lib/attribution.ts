/**
 * Traffic attribution — first-touch capture per browser session.
 *
 * Pages are statically rendered, so referrer/UTM data is not available to the
 * server on the initial request. We capture it in the browser on the first page
 * of the session and replay it when the contact form is submitted.
 */

const STORAGE_KEY = '8move_attribution'

export interface Attribution {
  /** First page of the session, full URL with query string */
  landingPage?: string
  /** External site the visitor arrived from (internal navigations ignored) */
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  /** Page the form was actually submitted from */
  submittedFrom?: string
}

const UTM_KEYS: Array<[string, keyof Attribution]> = [
  ['utm_source', 'utmSource'],
  ['utm_medium', 'utmMedium'],
  ['utm_campaign', 'utmCampaign'],
  ['utm_term', 'utmTerm'],
  ['utm_content', 'utmContent'],
]

/**
 * Store landing page, external referrer and UTM tags once per session.
 * Later page views do not overwrite them — we want the entry point, not the
 * last page before the form.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return
  if (sessionStorage.getItem(STORAGE_KEY)) return

  const params = new URLSearchParams(window.location.search)
  const attribution: Attribution = {
    landingPage: window.location.href,
  }

  for (const [param, key] of UTM_KEYS) {
    const value = params.get(param)
    if (value) attribution[key] = value
  }

  const referrer = document.referrer
  if (referrer && new URL(referrer).hostname !== window.location.hostname) {
    attribution.referrer = referrer
  }

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution))
}

/** Read stored attribution and stamp the current page as the submission origin. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  let stored: Attribution = {}
  const raw = sessionStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      stored = JSON.parse(raw) as Attribution
    } catch {
      stored = {}
    }
  }

  return { ...stored, submittedFrom: window.location.href }
}
