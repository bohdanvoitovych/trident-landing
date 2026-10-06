export function Contact() {
  return (
      <section className="cta" id="contact" data-screen-label="Contact"><div className="wrap cta-in">
        <div><span className="label">Free audit</span><h2 className="h2" style={{ marginTop: '18px' }}>Bring your volumes. Leave with <em>your numbers.</em></h2>
          <p className="lede">45 minutes and a straight answer, whether or not we work together.</p>
          <div className="cta-details">
            <div><span className="k">Email</span><span className="v">max@trident.software</span></div>
            <div><span className="k">Phone</span><span className="v">+41 79 745 44 29</span></div>
            <div><span className="k">Address</span><span className="v">Rue de l'Industrie 23, 1950 Sion</span></div>
          </div></div>
        <form className="enq" id="enq" noValidate={true}>
          <div className="pair"><input type="text" name="name" placeholder="Name" required={true} /><input type="text" name="company" placeholder="Company" /></div>
          <div className="pair"><input type="email" name="email" placeholder="Email" required={true} /><input type="tel" name="phone" placeholder="Phone or WhatsApp" /></div>
          <select name="service" aria-label="Topic"><option>AI agents &amp; automation</option><option>Logistics platform</option><option>IoT &amp; connected products</option><option>Custom business system</option><option>CTO as a Service</option></select>
          <textarea name="message" placeholder="Rough enquiry volumes and systems you use"></textarea>
          <label className="consent"><input type="checkbox" required={true} /><span>I agree that Trident Software may process this enquiry under revFADP and GDPR.</span></label>
          <button type="submit" className="btn btn-light" style={{ alignSelf: 'start' }}>Request the audit <span className="ar">→</span></button>
          <p className="sent" id="sent" hidden={true}>Thank you — we reply within one business day.</p>
        </form>
      </div></section>
  )
}
