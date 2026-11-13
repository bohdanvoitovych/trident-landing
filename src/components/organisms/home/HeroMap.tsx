/**
 * Stylised map of central Valais behind the agent log. Each log line lights up
 * the place it is about: a ping on a town, or a drawn route with a moving truck.
 *
 * The projection is hand-fitted to the hero box (552 × 520) so the active
 * places sit where neither the log (bottom left) nor the chip (top right) covers
 * them. Decorative only: the log carries the same story as text.
 */

type LonLat = readonly [number, number]

const X0 = 160
const Y0 = 222
const SX = 657 // px per degree of longitude (≈ cos 46° × SY)
const SY = 950 // px per degree of latitude
const p = ([lon, lat]: LonLat) => [Math.round(X0 + (lon - 7.36) * SX), Math.round(Y0 + (46.23 - lat) * SY)] as const
const path = (pts: readonly LonLat[]) => pts.map((q, i) => `${i ? 'L' : 'M'}${p(q).join(' ')}`).join(' ')

const TOWNS = {
  martigny: { name: 'Martigny', at: [7.07, 46.1] },
  sion: { name: 'Sion', at: [7.36, 46.23] },
  crans: { name: 'Crans-Montana', at: [7.48, 46.31] },
  sierre: { name: 'Sierre', at: [7.53, 46.29] },
  leuk: { name: 'Leuk', at: [7.63, 46.31] },
  visp: { name: 'Visp', at: [7.88, 46.29] },
  brig: { name: 'Brig', at: [7.99, 46.315] },
  saas: { name: 'Saas-Fee', at: [7.93, 46.11] },
  zermatt: { name: 'Zermatt', at: [7.75, 46.02] },
} as const satisfies Record<string, { name: string; at: LonLat }>

type Town = keyof typeof TOWNS

// Rough canton outline; it runs past the box on every side, the box crops it.
const CANTON = path([
  [6.86, 46.4], [6.98, 46.3], [7.05, 46.24], [7.12, 46.3], [7.2, 46.33], [7.3, 46.37], [7.45, 46.38],
  [7.55, 46.39], [7.68, 46.43], [7.85, 46.43], [7.98, 46.42], [8.1, 46.47], [8.25, 46.53], [8.3, 46.42],
  [8.2, 46.36], [8.1, 46.27], [8.05, 46.18], [7.98, 46.12], [7.9, 46.0], [7.8, 45.94], [7.7, 45.96],
  [7.55, 45.98], [7.4, 45.92], [7.2, 45.88], [7.05, 45.92], [6.95, 46.0], [6.88, 46.05], [6.82, 46.1],
  [6.8, 46.18], [6.79, 46.28], [6.8, 46.39],
]) + ' Z'

const RHONE = path([
  [8.13, 46.4], [7.99, 46.32], [7.88, 46.3], [7.75, 46.31], [7.63, 46.31], [7.53, 46.29], [7.45, 46.26],
  [7.36, 46.225], [7.22, 46.17], [7.12, 46.12], [7.07, 46.1], [7.03, 46.15], [7.0, 46.21],
])

const ROUTES = {
  sierre: path([[7.36, 46.23], [7.45, 46.265], [7.53, 46.29]]),
  zermatt: path([
    [7.36, 46.23], [7.45, 46.265], [7.53, 46.29], [7.63, 46.31], [7.75, 46.305], [7.88, 46.29], [7.87, 46.23],
    [7.8, 46.18], [7.78, 46.07], [7.75, 46.02],
  ]),
  crans: path([[7.36, 46.23], [7.42, 46.27], [7.44, 46.3], [7.48, 46.31]]),
} as const

type Route = keyof typeof ROUTES

/** One entry per log line (same order as ui.hero.log.1–8). */
const EVENTS: { at: Town; route?: Route; truck?: boolean }[] = [
  { at: 'sierre' }, // enquiry: 8 t gravel to Sierre
  { at: 'sion' }, // stock checked at the depot
  { at: 'sierre', route: 'sierre', truck: true }, // order confirmed
  { at: 'sion' }, // CRM sync
  { at: 'sierre' }, // delivery note matched
  { at: 'zermatt', route: 'zermatt' }, // delivery to Zermatt? coverage + surcharge
  { at: 'sion' }, // handed to sales
  { at: 'crans', route: 'crans', truck: true }, // "où est ma livraison ?" → live tracking
]

// Four-thousanders with a few contour rings each: gives the empty south its relief.
const PEAKS = [
  { at: [7.66, 45.98], h: '4478' }, // Matterhorn
  { at: [7.72, 46.1], h: '4506' }, // Weisshorn
  { at: [7.61, 46.03], h: '4357' }, // Dent Blanche
  { at: [7.87, 45.94], h: '4634' }, // Monte Rosa (Dufourspitze)
] as const satisfies readonly { at: LonLat; h: string }[]

/** Closed wobbly ring around a peak; deterministic so server and client agree. */
const ring = (cx: number, cy: number, r: number, seed: number) => {
  const pts = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * Math.PI * 2
    const k = r * (1 + 0.18 * Math.sin(a * 3 + seed) + 0.08 * Math.cos(a * 5 + seed * 2))
    return `${(cx + Math.cos(a) * k * 1.25).toFixed(1)} ${(cy + Math.sin(a) * k).toFixed(1)}`
  })
  return `M${pts.join(' L')} Z`
}

const KM10 = Math.round(0.13 * SX) // 10 km of longitude at 46° N

export function HeroMap({ step, tick }: { step: number; tick: number }) {
  const ev = EVENTS[step % EVENTS.length]
  const [ax, ay] = p(TOWNS[ev.at].at)

  return (
    <div className="hero-photo hmap" aria-hidden="true">
      <svg viewBox="0 0 552 520" preserveAspectRatio="xMinYMin slice" focusable="false">
        <defs>
          <pattern id="hmap-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="hmap-dot" />
          </pattern>
        </defs>
        <rect width="552" height="520" fill="url(#hmap-dots)" />
        <path d={CANTON} className="hmap-canton" />
        <path d={RHONE} className="hmap-river" />

        {(Object.keys(ROUTES) as Route[]).map((r) => (
          <path key={r} d={ROUTES[r]} className="hmap-road" />
        ))}

        {PEAKS.map((pk, i) => {
          const [x, y] = p(pk.at)
          return (
            <g key={pk.h} className="hmap-peak">
              {[14, 26, 40, 56].map((rr) => (
                <path key={rr} d={ring(x, y, rr, i + rr / 10)} className="hmap-contour" />
              ))}
              <path d={`M${x - 6} ${y + 5} L${x} ${y - 6} L${x + 6} ${y + 5} Z`} />
              <text x={x + 10} y={y + 4}>
                {pk.h} m
              </text>
            </g>
          )
        })}

        {ev.route && (
          <g key={`r${tick}`}>
            <path d={ROUTES[ev.route]} className="hmap-route" pathLength={1} />
            {ev.truck && (
              <circle r="5" className="hmap-truck">
                <animateMotion dur="1.8s" begin="0s" fill="freeze" path={ROUTES[ev.route]} />
              </circle>
            )}
          </g>
        )}

        {(Object.keys(TOWNS) as Town[]).map((k) => {
          const [x, y] = p(TOWNS[k].at)
          const right = k !== 'crans'
          return (
            <g key={k} className={k === ev.at ? 'hmap-town is-on' : 'hmap-town'}>
              {k === 'sion' ? <rect x={x - 5} y={y - 5} width="10" height="10" className="hmap-depot" /> : <circle cx={x} cy={y} r="3.5" />}
              <text x={right ? x + 10 : x - 10} y={y + 4} textAnchor={right ? 'start' : 'end'}>
                {TOWNS[k].name}
              </text>
            </g>
          )
        })}

        <g key={`p${tick}`} transform={`translate(${ax} ${ay})`}>
          <circle r="7" className="hmap-ping" />
          <circle r="7" className="hmap-ping hmap-ping--2" />
        </g>

        <g className="hmap-scale" transform="translate(16 52)">
          <path d={`M0 -4 V0 H${KM10} V-4`} />
          <text x={KM10 + 8} y="0">
            10 km
          </text>
        </g>

        <text x="16" y="26" className="hmap-coord">
          46.23°N 7.36°E · VALAIS / WALLIS
        </text>
      </svg>
    </div>
  )
}
