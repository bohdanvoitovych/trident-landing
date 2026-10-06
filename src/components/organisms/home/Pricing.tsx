export function Pricing() {
  return (
      <section className="sec" id="pricing" data-screen-label="Pricing"><div className="wrap">
        <div className="sec-head"><span className="label">Pricing</span><h2 className="h2">Published, not hidden</h2><p className="lede">Integration is its own line, because that's where projects overrun.</p></div>
        <div className="prices">
          <div className="price rv"><div className="lbl">Integration · one-off</div><div className="amt">CHF 6–25k</div><ul><li>Discovery and scenario design</li><li>Knowledge base build</li><li>ERP / CRM integration</li><li>Staff training, 2 weeks supervised live</li><li>First month of tuning</li></ul></div>
          <div className="price hi rv"><div className="lbl">Run · monthly</div><div className="amt">from CHF 450 <small>/ mo</small></div><ul><li>Typical: CHF 900 / mo</li><li>Full automation: CHF 1,800 / mo</li><li>Platform, hosting, monitoring, support</li><li>Model usage at cost, no margin on tokens</li></ul></div>
          <div className="price rv"><div className="lbl">Outcome share · optional</div><div className="amt">70 / 30</div><ul><li>70 % fixed fee</li><li>30 % tied to a KPI agreed in writing</li><li>Leads, bookings, or response time</li><li>Only where measurement is honest</li></ul></div>
        </div>
        <div className="ways">
          <div><span className="label-n">We price from your number</span><h3 className="h4" style={{ marginTop: '10px' }}>1. Direct labour</h3><p className="body-s" style={{ marginTop: '8px' }}>Hours on repetitive enquiries × loaded cost. One inside-sales FTE spends 4–6 hours a day on them.</p></div>
          <div><span className="label-n">&nbsp;</span><h3 className="h4" style={{ marginTop: '10px' }}>2. Lost revenue</h3><p className="body-s" style={{ marginTop: '8px' }}>After-hours enquiries × close rate × deal value. Usually the largest, and never measured.</p></div>
          <div><span className="label-n">&nbsp;</span><h3 className="h4" style={{ marginTop: '10px' }}>3. Cost of errors</h3><p className="body-s" style={{ marginTop: '8px' }}>Wrong quotes, missed bookings, no-shows nobody confirmed, priced at lost margin.</p></div>
        </div>
      </div></section>
  )
}
