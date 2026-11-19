import Link from 'next/link'

// Renders outside the (frontend) layout: no trident.css, no fonts. Plain inline
// styles that follow the 2026 tokens (white, ink text, one blue accent, 2px radius).
export default function RootNotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 — Page Not Found | Trident Software</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #fff; color: #111318; font-family: 'Instrument Sans', -apple-system, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
          .nf { min-height: 100vh; display: flex; align-items: center; padding: 48px clamp(20px, 4.5vw, 64px); }
          .nf-in { width: 100%; max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 22px; }
          .nf-label { display: inline-flex; align-items: center; gap: 10px; font: 500 13px/1.2 'IBM Plex Mono', ui-monospace, monospace; color: #1B57B8; }
          .nf-label::before { content: ""; width: 18px; height: 2px; background: #2772E0; }
          .nf-num { display: block; font-size: clamp(96px, 16vw, 200px); line-height: .9; letter-spacing: -.05em; font-weight: 600; color: #2772E0; user-select: none; }
          h1 { font-size: clamp(40px, 5.4vw, 76px); line-height: 1; letter-spacing: -.045em; font-weight: 600; }
          p { color: #4A4F57; font-size: clamp(16px, 1.35vw, 19px); line-height: 1.6; max-width: 720px; }
          .nf-actions { display: flex; gap: 12px; flex-wrap: wrap; }
          .nf-btn { display: inline-flex; align-items: center; min-height: 44px; padding: 14px 20px; border-radius: 2px; font-weight: 600; font-size: 15px; line-height: 1.2; text-decoration: none; transition: background .25s; }
          .nf-btn:focus-visible { outline: 2px solid #2772E0; outline-offset: 2px; }
          .nf-primary { background: #2772E0; color: #fff; }
          .nf-primary:hover { background: #1B57B8; }
          .nf-outline { color: #111318; box-shadow: inset 0 0 0 1px #C9CDD2; }
          .nf-outline:hover { box-shadow: inset 0 0 0 1px #111318; }
        `}</style>
      </head>
      <body>
        <main className="nf">
          <div className="nf-in">
            <span className="nf-label">Error 404</span>
            <span className="nf-num" aria-hidden="true">404</span>
            <h1>Page not found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
            <div className="nf-actions">
              <Link href="/" className="nf-btn nf-primary">Go to homepage →</Link>
              <Link href="/services" className="nf-btn nf-outline">Our services</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
