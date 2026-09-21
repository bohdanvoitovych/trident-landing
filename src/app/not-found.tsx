import Link from 'next/link'

export default function RootNotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 — Page Not Found | Trident Software</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0F172A; color: #F8FAFC; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
          .wrap { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; position: relative; overflow: hidden; }
          .glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; border-radius: 50%; background: rgba(39,114,224,0.08); filter: blur(120px); pointer-events: none; }
          .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(39,114,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(39,114,224,0.04) 1px, transparent 1px); background-size: 64px 64px; pointer-events: none; }
          .inner { position: relative; z-index: 1; max-width: 560px; }
          .badge { display: inline-flex; align-items: center; padding: 4px 14px; border-radius: 999px; border: 1px solid rgba(39,114,224,0.2); background: rgba(39,114,224,0.06); margin-bottom: 32px; font-size: 11px; color: #60A5FA; letter-spacing: 0.12em; text-transform: uppercase; font-family: monospace; }
          .num { display: block; font-size: clamp(7rem, 22vw, 14rem); font-weight: 800; line-height: 1; user-select: none; background: linear-gradient(135deg, #2772E0 0%, #6366F1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          h1 { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: #F8FAFC; margin-top: -12px; margin-bottom: 16px; }
          p { color: #94A3B8; font-size: 1.1rem; line-height: 1.65; max-width: 380px; margin: 0 auto 40px; }
          .actions { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
          .btn { padding: 13px 28px; border-radius: 8px; font-size: 1rem; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: opacity 0.2s; cursor: pointer; }
          .btn:hover { opacity: 0.82; }
          .btn-primary { background: linear-gradient(135deg, #2772E0, #6366F1); color: #fff; }
          .btn-outline { border: 1px solid rgba(255,255,255,0.15); color: #F8FAFC; }
        `}</style>
      </head>
      <body>
        <div className="wrap">
          <div className="glow" />
          <div className="grid" />
          <div className="inner">
            <span className="badge">Error 404</span>
            <span className="num" aria-hidden="true">404</span>
            <h1>Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
            <div className="actions">
              <Link href="/" className="btn btn-primary">Go to Homepage →</Link>
              <Link href="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
