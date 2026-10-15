export function Pricing() {
  return (
      <section className="sec" id="pricing" data-screen-label="Pricing"><div className="wrap">
        <div className="sec-head"><span className="label">Pricing</span><h2 className="h2">Published, not hidden</h2><p className="lede">Integration is its own line, because that's where projects overrun.</p></div>
        <div className="prices">
          <div className="price rv"><div className="lbl">Integration · one-off</div><div className="amt">CHF 6–25k</div><ul><li>Discovery and scenario design</li><li>Knowledge base build</li><li>ERP / CRM integration</li><li>Staff training, 2 weeks supervised live</li><li>First month of tuning</li></ul></div>
          <div className="price hi rv"><div className="lbl">Run · monthly</div><div className="amt">from CHF 450 <small>/ mo</small></div><ul><li>Typical: CHF 900 / mo</li><li>Full automation: CHF 1,800 / mo</li><li>Platform, hosting, monitoring, support</li><li>Model usage at cost, no margin on tokens</li></ul></div>
          <div className="price rv"><div className="lbl">Outcome share · optional</div><div className="amt">70 / 30</div><ul><li>70 % fixed fee</li><li>30 % tied to a KPI agreed in writing</li><li>Leads, bookings, or response time</li><li>Only where measurement is honest</li></ul></div>
        </div>
        <div style={{ marginTop: 'clamp(28px,3.4vw,44px)', paddingTop: 'clamp(24px,3vw,36px)', borderTop: '1px solid var(--line)' }}>
          <h3 className="h3">We price from your number, not from ours.</h3>
          <p className="body" style={{ marginTop: '12px' }}>Most vendors quote a license and leave the business case to you. We invert it: the first meeting produces your figure, and the price is a share of it.</p>
          <p className="body" style={{ marginTop: '12px' }}><b>Three ways to count what the routine actually costs today.</b> We use all three, then take the most defensible.</p>
        </div>
        <div className="ways" style={{ borderTop: 0, marginTop: '16px', paddingTop: 0 }}>
          <div><h3 className="h4">1. Direct labour.</h3><p className="body-s" style={{ marginTop: '8px' }}>Hours per week spent on repetitive enquiries × loaded hourly cost. A single inside-sales FTE at CHF 90,000–120,000 loaded spends 4–6 hours a day on conversations an agent handles in full.</p></div>
          <div><h3 className="h4">2. Lost revenue.</h3><p className="body-s" style={{ marginTop: '8px' }}>Enquiries that arrive outside office hours × your close rate × average deal value. This is usually the larger of the three and the one companies have never measured, because unanswered enquiries leave no trace in the CRM.</p></div>
          <div><h3 className="h4">3. Cost of errors.</h3><p className="body-s" style={{ marginTop: '8px' }}>Wrong quote, missed booking, forgotten follow-up, the no-show that no one confirmed. Priced at the gross margin lost, not the revenue.</p></div>
        </div>
      </div></section>
  )
}
