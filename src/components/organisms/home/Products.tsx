import Image from 'next/image'

// Text of the three project blocks is taken verbatim from the PDF (pp. 4–5).
export function Products() {
  return (
      <section className="sec alt" id="products" data-screen-label="Products"><div className="wrap">
        <div className="sec-head"><span className="label">Three projects</span><h2 className="h2">We build what we maintain ourselves</h2><p className="lede">A product company that consults, not an agency that sells hours.</p></div>
        <div className="feats">
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">In production</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>8Move — our own logistics platform</h3>
            <p className="body" style={{ marginTop: '12px' }}>8move.com — order intake, dispatch and planning, driver applications with photo proof and signature, live tracking, automated invoicing. Deployed with Swiss and European operators in passenger transport, construction-material haulage and delivery. Shipped as configurable industry editions rather than one generic product.</p>
            <p className="body" style={{ marginTop: '12px' }}>Why it matters: a live, revenue-generating product built and maintained by the same team that does client work.</p>
            <p className="body" style={{ marginTop: '12px' }}>In production with operators in Switzerland and the EU across three industry editions — passenger transport, construction-material haulage and last-mile delivery. Deployments range from single-vehicle operators to multi-depot fleets.</p>
            <a href="https://8move.com" target="_blank" rel="noopener noreferrer" className="link" style={{ marginTop: '18px' }}>8move.com <span className="ar">→</span></a>
          </div><div className="shot"><Image src="/images/stock/dispatch.jpg" alt="Delivery fleet" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">Delivered</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>TDSBot / WaterTDS — connected water-quality product</h3>
            <p className="body" style={{ marginTop: '12px' }}>A physical device measuring water quality, sold to businesses and consumers. The client owned the hardware; we delivered everything else — firmware, cloud platform, rules engine, a B2B portal for dealers and service partners, and a consumer mobile application.</p>
            <p className="body" style={{ marginTop: '12px' }}>Why it matters: end-to-end delivery across firmware, cloud and two distinct user-facing products. Public site: watertds.com.</p>
            <p className="body" style={{ marginTop: '12px' }}>Delivered in nine months from kick-off to the first production installations: firmware, cloud platform, rules engine, dealer and service portal, and the consumer application. Peak team of six — firmware, backend, mobile, QA and delivery lead — settling to three in steady state.</p>
            <p className="body" style={{ marginTop: '12px' }}>Commercial outcome: the platform carries the manufacturer&apos;s warranty evidence and two revenue lines it did not have before — a device sold per installation and a monthly subscription.</p>
            <a href="https://watertds.com" target="_blank" rel="noopener noreferrer" className="link" style={{ marginTop: '18px' }}>watertds.com <span className="ar">→</span></a>
          </div><div className="shot"><Image src="/images/stock/water-device.jpg" alt="Water infrastructure" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">Delivered 2025</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>Document recognition and recommendation engines</h3>
            <p className="body" style={{ marginTop: '12px' }}>Two AI systems delivered in 2025: a document recognition pipeline that turns unstructured paperwork into structured records, and a recommendation engine driving product suggestions from live catalogue and behavioural data.</p>
            <p className="body" style={{ marginTop: '12px' }}>Why it matters: these are the two AI patterns that pay back fastest in operational businesses — reading documents nobody wants to read, and deciding what to offer next.</p>
            <p className="body" style={{ marginTop: '12px' }}>Document recognition: in production since 2025, delivered in four months. Processes on the order of 2 500 documents a month for a single client, returning around 135 operator hours a month (modelled from that client&apos;s volumes).</p>
            <p className="body" style={{ marginTop: '12px' }}>Recommendation engine: delivered in three months, running on live catalogue and behavioural data.</p>
          </div><div className="shot"><Image src="/images/stock/warehouse-2.jpg" alt="Stock the documents describe" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
        </div>
        <p className="small" style={{ marginTop: '28px' }}>Client names are disclosed once an NDA is in place.</p>
      </div></section>
  )
}
