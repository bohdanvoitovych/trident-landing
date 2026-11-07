'use client'

import { useEffect, useState, type RefObject } from 'react'

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * True while the element is on screen, the tab is visible and the user has
 * not asked for reduced motion. Timers (agent log, tagline, testimonials,
 * race, scrubber) run only while this is true.
 */
export function useActive(ref: RefObject<Element | null>, rootMargin = '0px'): boolean {
  const [inView, setInView] = useState(false)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(true)
  const [ready, setReady] = useState(false)

  // Timers start only once the page has loaded and the main thread is idle,
  // so they never compete with first paint and hydration.
  useEffect(() => {
    let idle = 0
    const go = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
      idle = ric ? ric(() => setReady(true), { timeout: 2500 }) : window.setTimeout(() => setReady(true), 1200)
    }
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
    return () => {
      window.removeEventListener('load', go)
      const cic = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
      if (cic) cic(idle)
      else window.clearTimeout(idle)
    }
  }, [])

  useEffect(() => {
    setReduced(prefersReducedMotion())
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin })
    io.observe(el)
    const onVis = () => setVisible(document.visibilityState === 'visible')
    onVis()
    document.addEventListener('visibilitychange', onVis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [ref, rootMargin])

  return ready && inView && visible && !reduced
}
