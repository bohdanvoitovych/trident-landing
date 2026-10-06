export function Hero() {
  return (
      <header className="hero-ch" data-screen-label="Hero"><div className="wrap">
        <span className="hero-tag">Sion, Valais · HES-SO Valais-Wallis</span>
        <h1>Operational software and AI agents, built in <span className="ch">Switzerland</span></h1>
        <div className="hero-say" aria-live="polite"><span className="lang" id="sayLang">DE</span><span className="txt" id="sayTxt">Antwortet in Sekunden. Rund um die Uhr.</span></div>
        <p className="hero-lede" style={{ marginTop: '22px' }}>We build the systems companies run on every day — order intake, dispatch, field apps, billing — and the AI layer that answers, qualifies and processes documents in four national languages.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Book a free 45-min audit <span className="ar">→</span></a>
          <a href="#cases" className="btn btn-outline">See results <span className="ar">→</span></a>
        </div>
        <div className="hero-facts">
          <div><div className="v">−92 %</div><div className="k">Clinic admission time, measured</div></div>
          <div><div className="v">−63 %</div><div className="k">Warranty cost, component maker</div></div>
          <div><div className="v">Month 2</div><div className="k">Typical payback on a sales agent</div></div>
          <div><div className="v">CH / EU</div><div className="k">Hosting, under revFADP and GDPR</div></div>
        </div>
      </div></header>
  )
}
