import { cn } from '@/lib/utils'

export type Logo = { src: string; alt: string; href?: string }

/** Logo forced black on --alt; hover = blue tile with a white logo. Always visible. */
export function LogoTile({ logo, small, decorative }: { logo: Logo; small?: boolean; decorative?: boolean }) {
  const className = cn('logo-tile', small && 'logo-tile--sm')
  const img = (
    <>
      {/* SVG/PNG logos are tiny; next/image would only add a wrapper round-trip. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={decorative ? '' : logo.alt}
        loading="lazy"
        decoding="async"
        width={150}
        height={42}
      />
    </>
  )
  if (!logo.href) return <div className={className}>{img}</div>
  return (
    <a
      className={className}
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={decorative ? undefined : logo.alt}
      tabIndex={decorative ? -1 : undefined}
    >
      {img}
    </a>
  )
}

/**
 * Two rows moving in opposite directions, inside the container. Each list is
 * duplicated once so the loop is seamless; the copy is hidden from assistive tech.
 * data-loop lets the Reveal observer pause it while off-screen.
 */
export function LogoMarquee({ logos }: { logos: Logo[] }) {
  const rows = [logos.filter((_, i) => i % 2 === 0), logos.filter((_, i) => i % 2 === 1)]
  return (
    <div className="logo-rows reveal">
      {rows.map((row, r) => (
        <div className="marquee-mask" key={r} data-loop>
          <ul className={cn('marquee', r === 1 && 'marquee--rev')} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[...row, ...row].map((logo, i) => (
              <li key={logo.src + i} aria-hidden={i >= row.length || undefined}>
                <LogoTile logo={logo} decorative={i >= row.length} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
