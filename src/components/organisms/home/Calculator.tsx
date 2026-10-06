export function Calculator() {
  return (
      <section className="sec alt" id="calc" data-screen-label="Calculator"><div className="wrap">
        <div className="sec-head"><span className="label">Calculator</span><h2 className="h2">Does it pay back for you?</h2><p className="lede">The same model we use in the audit. It can say "not yet".</p></div>
        <div className="calc">
          <div className="calc-in">
            <div><div className="f-row"><label htmlFor="i-enq">Enquiries per month</label><span className="v" id="v-enq">400</span></div><input type="range" id="i-enq" min="20" max="3000" step="20" value="400" /></div>
            <div><div className="f-row"><label htmlFor="i-ooh">Outside office hours</label><span className="v" id="v-ooh">35 %</span></div><input type="range" id="i-ooh" min="0" max="70" step="1" value="35" /></div>
            <div><div className="f-row"><label htmlFor="i-deal">Average deal value</label><span className="v" id="v-deal">CHF 1,400</span></div><input type="range" id="i-deal" min="100" max="20000" step="100" value="1400" /></div>
            <div><div className="f-row"><label htmlFor="i-close">Close rate</label><span className="v" id="v-close">18 %</span></div><input type="range" id="i-close" min="1" max="60" step="1" value="18" /></div>
            <div><div className="f-row"><label>Scope</label></div><div className="seg" id="i-scope">
              <button type="button" data-run="450" data-int="6000" aria-pressed="false">One channel</button>
              <button type="button" data-run="900" data-int="12000" aria-pressed="true">Typical</button>
              <button type="button" data-run="1800" data-int="25000" aria-pressed="false">Full</button></div></div>
          </div>
          <div className="calc-out">
            <span className="small">Estimated net effect per month</span>
            <div className="big" id="o-net">CHF 12,976</div>
            <dl className="calc-rows">
              <div><dt>Routine work absorbed (0.8 FTE)</dt><dd id="o-fte">CHF 6,400</dd></div>
              <div><dt>After-hours enquiries won</dt><dd id="o-ooh">CHF 5,292</dd></div>
              <div><dt>Faster response, in hours</dt><dd id="o-fast">CHF 2,184</dd></div>
              <div><dt>Agent running cost</dt><dd id="o-run">−CHF 900</dd></div>
            </dl>
            <div className="verdict ok" id="o-v"><b id="o-vh">Pays back by month 2</b><span id="o-vt"></span></div>
            <p className="calc-note">Based on CHF 8,000 loaded cost per person; after-hours enquiries convert at half the normal rate; 30 % margin on new revenue. Modelled, not measured.</p>
          </div>
        </div>
      </div></section>
  )
}
