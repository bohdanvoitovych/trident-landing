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

  return inView && visible && !reduced
}
