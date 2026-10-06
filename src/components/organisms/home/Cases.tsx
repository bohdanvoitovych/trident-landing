import Image from 'next/image'

export function Cases() {
  return (
      <section className="sec alt" id="cases" data-screen-label="Cases"><div className="wrap">
        <div className="sec-head">
          <span className="label">Results</span>
          <h2 className="h2">Delivered, then counted</h2>
          <p className="lede">Each case is labelled: <b>measured</b> means counted in production; <b>modelled</b> means calculated from real volumes.</p>
        </div>
        <div className="cases-v2">
          <article className="cs cs-lead rv"><div className="shot"><Image src="/images/stock/clinic.jpg" alt="Clinic admission desk" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><div className="cs-b">
            <div className="cs-top"><span className="cs-who">Post-acute clinic network · CH</span><span className="badge m">Measured</span></div>
            <h3 className="h3">From a bundle of paper to a coded SwissDRG invoice</h3>
            <p className="body-s">The assistant reads the admission file, drafts the discharge letter for the physician to sign, and prepares a validated invoice.</p>
            <div className="cs-nums"><div><div className="v">−92 %</div><div className="k">Admission time</div></div><div><div className="v">−78 %</div><div className="k">Discharge letter</div></div><div><div className="v">2 days</div><div className="k">Invoice ready, was 10–15</div></div></div>
          </div></article>
          <div className="cases-pair"><article className="cs rv"><div className="shot"><Image src="/images/stock/medical.jpg" alt="Medical practice reception" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><div className="cs-b">
            <div className="cs-top"><span className="cs-who">Multi-disciplinary practice · CH</span><span className="badge m">Measured</span></div>
            <h3 className="h3">Voice consultation to TARDOC invoice</h3>
            <p className="body-s">Physicians spent 35 % of their time documenting. Now the consultation becomes the report and the coded invoice.</p>
            <div className="cs-nums"><div><div className="v">+30.8 %</div><div className="k">Consultations, same salary</div></div><div><div className="v">−84 %</div><div className="k">Time per invoice</div></div><div><div className="v">3.5×</div><div className="k">Faster payment</div></div></div>
          </div></article><article className="cs rv"><div className="shot"><Image src="/images/stock/water-telemetry.jpg" alt="Water treatment infrastructure" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><div className="cs-b">
            <div className="cs-top"><span className="cs-who">Component manufacturer · IT</span><span className="badge m">Measured</span></div>
            <h3 className="h3">Up to 85 % of failures came from water, not defects</h3>
            <p className="body-s">A device, telemetry and portals turned every warranty claim into a decision based on data.</p>
            <div className="cs-nums"><div><div className="v">−63 %</div><div className="k">Warranty cost</div></div><div><div className="v">0.51 %</div><div className="k">Of revenue, was 1.37 %</div></div><div><div className="v">+2</div><div className="k">New revenue lines</div></div></div>
          </div></article></div>
          <div className="cs-more">
            <div className="cs-more-hd"><span className="label-n">More cases</span></div>
            <a className="cs-row rv" href="#"><span className="who">Fiduciary · CH</span><span className="t">Incoming mail and receipts without re-entry</span><span className="num"><b>−89 %</b> Receipt handling</span><span className="badge d">Modelled</span><span className="ar" aria-hidden="true">→</span></a>
            <a className="cs-row rv" href="#"><span className="who">Construction materials · scenario</span><span className="t">Order desk to delivered load, without seasonal hiring</span><span className="num"><b>65 %</b> Reorders without a person</span><span className="badge d">Modelled</span><span className="ar" aria-hidden="true">→</span></a>
            <a className="cs-row rv" href="#"><span className="who">Letting agency, Romandie · scenario</span><span className="t">Portal enquiry to booked viewing</span><span className="num"><b>&lt;15 s</b> First reply, was &gt;15 h</span><span className="badge d">Modelled</span><span className="ar" aria-hidden="true">→</span></a>
          </div>
          <div className="cs-all"><a href="#" className="btn btn-outline">All case studies <span className="ar">→</span></a></div>
        </div>
      </div></section>
  )
}
