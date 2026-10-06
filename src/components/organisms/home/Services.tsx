import Image from 'next/image'

export function Services() {
  return (
      <section className="sec" id="services" data-screen-label="Services"><div className="wrap">
        <div className="sec-head-row"><div className="t">
          <span className="label">What we do</span>
          <h2 className="h2">Five lines of work, one accountable team</h2>
        </div><a href="#contact" className="btn btn-outline">Discuss a project <span className="ar">→</span></a></div>
        <div className="cards">
          <a className="card wide rv" href="#agent"><div className="shot"><Image src="/images/stock/ai-agent.jpg" alt="Automated assistant handling enquiries" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div>
            <div className="card-b"><h3 className="h3">AI agents &amp; LLM automation</h3><p className="body-s">Enquiry handling, document processing, recommendations, search over company knowledge. Agents wired into your real systems, not chat widgets.</p><span className="link">How it works <span className="ar">→</span></span></div></a>
          <a className="card rv" href="#products"><div className="shot"><Image src="/images/stock/logistics.jpg" alt="Warehouse dispatch operation" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div>
            <div className="card-b"><h3 className="h3">Logistics &amp; operations platforms</h3><p className="body-s">Order intake, dispatch, driver apps, tracking, automated billing.</p></div></a>
          <a className="card rv" href="#products"><div className="shot"><Image src="/images/stock/iot-device.jpg" alt="Industrial sensor hardware" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div>
            <div className="card-b"><h3 className="h3">IoT &amp; connected products</h3><p className="body-s">Firmware, cloud platform, rules engines, dealer and consumer apps.</p></div></a>
          <a className="card rv" href="#contact"><div className="shot"><Image src="/images/stock/b2b-portal.jpg" alt="Business portal in use" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div>
            <div className="card-b"><h3 className="h3">Custom business systems</h3><p className="body-s">B2B portals, ERP and accounting integrations, legacy migrations.</p></div></a>
          <a className="card rv" href="#contact"><div className="shot"><Image src="/images/stock/team-workshop.jpg" alt="Technical team in a working session" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div>
            <div className="card-b"><h3 className="h3">CTO as a Service</h3><p className="body-s">Fractional or interim technical leadership when you've outgrown your first developers.</p></div></a>
        </div>
      </div></section>
  )
}
