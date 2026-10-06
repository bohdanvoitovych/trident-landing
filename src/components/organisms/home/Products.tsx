import Image from 'next/image'

export function Products() {
  return (
      <section className="sec alt" id="products" data-screen-label="Products"><div className="wrap">
        <div className="sec-head"><span className="label">Our products</span><h2 className="h2">We build what we maintain ourselves</h2><p className="lede">A product company that consults, not an agency that sells hours.</p></div>
        <div className="feats">
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">In production</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>8Move: logistics platform</h3>
            <p className="body" style={{ marginTop: '12px' }}>Order intake, dispatch, driver app with photo proof and signature, live tracking, automated invoicing. In use with Swiss and European operators.</p>
            <ul><li>Passenger transport edition</li><li>Construction-material haulage edition</li><li>Last-mile delivery edition</li></ul>
            <a href="#" className="link" style={{ marginTop: '18px' }}>8move.com <span className="ar">→</span></a>
          </div><div className="shot"><Image src="/images/stock/dispatch.jpg" alt="Delivery fleet" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">Delivered</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>WaterTDS: connected water device</h3>
            <p className="body" style={{ marginTop: '12px' }}>Firmware, cloud, rules engine, dealer portal and consumer app, from kick-off to first installations in 9 months.</p>
            <ul><li>Peak team of 6, steady state 3</li><li>Maintenance by litres, not by calendar</li></ul>
            <a href="#" className="link" style={{ marginTop: '18px' }}>watertds.com <span className="ar">→</span></a>
          </div><div className="shot"><Image src="/images/stock/water-device.jpg" alt="Water infrastructure" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
          <div className="feat rv"><div className="feat-t">
            <span className="badge m">Delivered 2025</span>
            <h3 className="h3" style={{ marginTop: '14px' }}>Document recognition and recommendation engine</h3>
            <p className="body" style={{ marginTop: '12px' }}>The two AI patterns that pay back fastest: reading documents nobody wants to read, and deciding what to offer next from live data.</p>
            <ul><li>Document pipeline delivered in <b>4 months</b>, ~2,500 documents a month</li><li>Recommendation engine delivered in <b>3 months</b></li></ul>
          </div><div className="shot"><Image src="/images/stock/warehouse-2.jpg" alt="Stock the documents describe" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
        </div>
      </div></section>
  )
}
