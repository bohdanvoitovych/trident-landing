type UmamiEventData = Record<string, string | number | boolean | string[]>

// Analytics is best-effort and must never break the UX: the tracking script
// loads only after consent (see UmamiScript.tsx), so window.umami may not
// exist yet even when consent is granted — an ad blocker or a slow/failed
// script load are the same "just do nothing" case as consent not given.
export function trackUmami(event: string, data?: UmamiEventData): void {
  if (typeof window === 'undefined') return

  const umami = window.umami
  if (typeof umami?.track !== 'function') return

  if (data) {
    umami.track(event, data)
  } else {
    umami.track(event)
  }
}
