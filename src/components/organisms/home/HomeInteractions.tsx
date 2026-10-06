'use client'

import { useEffect } from 'react'

/**
 * Behaviour ported from the design prototype: rotating hero line, scroll
 * reveals, the chat demo and the ROI calculator. The nav panel is React state
 * in Navbar, so it is deliberately not handled here.
 *
 * It drives the existing markup through the DOM, exactly as the prototype did,
 * so the sections stay server-rendered. Every listener, timer and observer is
 * torn down on unmount.
 */
export function HomeInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = []

    // ── Rotating hero line ───────────────────────────────────────────
    const phrases: Array<[string, string]> = [
      ['DE', 'Antwortet in Sekunden. Rund um die Uhr.'],
      ['FR', 'Répond en quelques secondes. Jour et nuit.'],
      ['IT', 'Risponde in pochi secondi. Giorno e notte.'],
      ['EN', 'Answers in seconds. Around the clock.'],
    ]
    const sayLang = document.getElementById('sayLang')
    const sayTxt = document.getElementById('sayTxt')
    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    if (sayLang && sayTxt && !reduced) {
      let i = 0
      let swap: ReturnType<typeof setTimeout> | undefined
      const tick = setInterval(() => {
        sayTxt.classList.add('out')
        swap = setTimeout(() => {
          i = (i + 1) % phrases.length
          sayLang.textContent = phrases[i][0]
          sayTxt.textContent = phrases[i][1]
          sayTxt.classList.remove('out')
        }, 350)
      }, 2800)
      cleanups.push(() => {
        clearInterval(tick)
        if (swap) clearTimeout(swap)
      })
    }

    // ── Chat demo plays once in view ─────────────────────────────────
    const chat = document.getElementById('chat')
    if (chat) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          if (entries[0].isIntersecting) {
            chat.classList.add('play')
            obs.disconnect()
          }
        },
        { threshold: 0.35 },
      )
      io.observe(chat)
      cleanups.push(() => io.disconnect())
    }

    // ── Scroll reveals ───────────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('.rv').forEach((el) => revealObserver.observe(el))
    cleanups.push(() => revealObserver.disconnect())

    // ── ROI calculator ───────────────────────────────────────────────
    const el = (id: string) => document.getElementById(id)
    const fmt = (n: number) => Math.round(n).toLocaleString('de-CH')
    const state = { enq: 400, ooh: 35, deal: 1400, close: 18, run: 900, int: 12000 }
    const LOAD = 8000

    const run = () => {
      const outH = (state.enq * state.ooh) / 100
      const inH = state.enq - outH
      const fte = LOAD * 0.8
      const ooh = outH * state.deal * (state.close / 200) * 0.3
      const fast = inH * 0.02 * state.deal * 0.3
      const net = fte + ooh + fast - state.run
      const payback = net > 0 ? state.int / net : Infinity

      const put = (id: string, text: string) => {
        const node = el(id)
        if (node) node.textContent = text
      }
      put('v-enq', fmt(state.enq))
      put('v-ooh', `${state.ooh} %`)
      put('v-deal', `CHF ${fmt(state.deal)}`)
      put('v-close', `${state.close} %`)
      put('o-fte', `CHF ${fmt(fte)}`)
      put('o-ooh', `CHF ${fmt(ooh)}`)
      put('o-fast', `CHF ${fmt(fast)}`)
      put('o-run', `−CHF ${fmt(state.run)}`)
      put('o-net', `${net < 0 ? '−' : ''}CHF ${fmt(Math.abs(net))}`)
      el('o-net')?.classList.toggle('neg', net <= 0)

      let warning = ''
      if (state.enq < 150)
        warning =
          "Under ~150 enquiries a month the numbers don't clear the build cost. Fix the response process first."
      else if (net <= 0) warning = "On these inputs the effect doesn't cover the running cost."
      else if (payback > 24) warning = "Payback beyond 24 months. We'd rather tell you now."

      const verdict = el('o-v')
      if (verdict) verdict.className = 'verdict ' + (warning ? 'no' : 'ok')
      put('o-vh', warning ? 'Not yet' : `Pays back by month ${Math.ceil(payback) + 1}`)
      put(
        'o-vt',
        warning ||
          `Counting the integration month, against a one-off fee of CHF ${fmt(state.int)}. Bring these numbers to the audit.`,
      )
    }

    ;(['enq', 'ooh', 'deal', 'close'] as const).forEach((key) => {
      const input = el(`i-${key}`)
      if (!input) return
      const onInput = (e: Event) => {
        state[key] = Number((e.target as HTMLInputElement).value)
        run()
      }
      input.addEventListener('input', onInput)
      cleanups.push(() => input.removeEventListener('input', onInput))
    })

    const scope = el('i-scope')
    if (scope) {
      const onScope = (e: Event) => {
        const button = (e.target as HTMLElement).closest('button')
        if (!button) return
        Array.from(scope.children).forEach((child) =>
          child.setAttribute('aria-pressed', 'false'),
        )
        button.setAttribute('aria-pressed', 'true')
        state.run = Number(button.dataset.run)
        state.int = Number(button.dataset.int)
        run()
      }
      scope.addEventListener('click', onScope)
      cleanups.push(() => scope.removeEventListener('click', onScope))
    }
    if (el('o-net')) run()

    // ── Enquiry form (no backend on this build) ──────────────────────
    const form = el('enq') as HTMLFormElement | null
    if (form) {
      const onSubmit = (e: Event) => {
        e.preventDefault()
        const name = form.querySelector<HTMLInputElement>('[name="name"]')
        const email = form.querySelector<HTMLInputElement>('[name="email"]')
        const consent = form.querySelector<HTMLInputElement>('.consent input')
        if (!name?.value.trim() || !email?.value.trim() || !consent?.checked) return
        const sent = el('sent')
        if (sent) (sent as HTMLElement).hidden = false
      }
      form.addEventListener('submit', onSubmit)
      cleanups.push(() => form.removeEventListener('submit', onSubmit))
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
