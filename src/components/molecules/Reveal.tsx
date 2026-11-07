'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const REVEAL = '.reveal, .stagger, .wipe'
const LOOPS = '[data-loop]'

/**
 * One IntersectionObserver for the whole page:
 * - reveals .reveal / .stagger / .wipe once, then unobserves them;
 * - runs the count-up on [data-count] inside a revealed block (one rAF loop);
 * - marks looping CSS animations ([data-loop]) with .is-off while off-screen.
 * Plus: <html>.is-scrolling during scroll, <html>.is-hidden in a hidden tab.
 * A 350 ms fallback check runs after load and after each scroll stops, so a
 * missed intersection never leaves content hidden. Nothing polls while idle.
 */
export function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window)) return

    root.classList.add('js-rv')

    // ── count-up: a single rAF loop shared by every number in flight ──
    const counters = new Map<HTMLElement, { to: number; t0: number }>()
    let raf = 0
    const tick = (now: number) => {
      counters.forEach((c, el) => {
        const p = Math.min(1, (now - c.t0) / 1400)
        el.textContent = String(Math.round(c.to * (1 - Math.pow(1 - p, 3))))
        if (p >= 1) counters.delete(el)
      })
      raf = counters.size ? requestAnimationFrame(tick) : 0
    }
    const countUp = (scope: Element) => {
      if (reduced) return
      scope.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const to = Number(el.dataset.count)
        if (!Number.isFinite(to) || counters.has(el)) return
        el.textContent = '0'
        counters.set(el, { to, t0: performance.now() })
      })
      if (counters.size && !raf) raf = requestAnimationFrame(tick)
    }

    // ── reveals, rAF-throttled so a fast scroll applies at most one batch per frame ──
    const pending = new Set<Element>()
    let frame = 0
    const flush = () => {
      frame = 0
      pending.forEach((el) => {
        el.classList.add('in')
        countUp(el)
        if (el.classList.contains('stagger')) window.setTimeout(() => el.classList.add('done'), 1500)
      })
      pending.clear()
    }
    const show = (el: Element) => {
      pending.add(el)
      if (!frame) frame = requestAnimationFrame(flush)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          show(e.target)
          io.unobserve(e.target)
        })
      },
      { threshold: 0.15 },
    )

    const loopIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle('is-off', !e.isIntersecting))
    })

    const scan = () => {
      document.querySelectorAll(`${REVEAL}`).forEach((el) => {
        if (el.classList.contains('in')) return
        if (reduced) {
          el.classList.add('in', 'done')
          return
        }
        io.observe(el)
      })
      document.querySelectorAll(LOOPS).forEach((el) => loopIo.observe(el))
    }

    // Fallback: anything in the viewport that is still hidden gets shown.
    const fallback = () => {
      const h = window.innerHeight
      document.querySelectorAll(`${REVEAL}`).forEach((el) => {
        if (el.classList.contains('in')) return
        const r = el.getBoundingClientRect()
        if (r.top < h * 0.95 && r.bottom > 0) {
          show(el)
          io.unobserve(el)
        }
      })
    }

    scan()
    const fallbackTimer = window.setTimeout(fallback, 350)

    // ── scroll state ──
    let scrollTimer = 0
    const onScroll = () => {
      if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling')
      window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => {
        root.classList.remove('is-scrolling')
        fallback()
      }, 150)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onVis = () => root.classList.toggle('is-hidden', document.visibilityState !== 'visible')
    document.addEventListener('visibilitychange', onVis)

    return () => {
      io.disconnect()
      loopIo.disconnect()
      cancelAnimationFrame(raf)
      cancelAnimationFrame(frame)
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(scrollTimer)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVis)
      root.classList.remove('is-scrolling')
    }
  }, [pathname])

  return null
}
