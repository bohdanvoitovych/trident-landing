import Image from 'next/image'

export function Agent() {
  return (
      <section className="sec alt" id="agent" data-screen-label="Agent"><div className="wrap">
        <div className="sec-head">
          <span className="label">The AI agent</span>
          <h2 className="h2">A working process with a language model inside it</h2>
        </div>
        <div className="feats">
          <div className="feat rv"><div className="feat-t">
            <h3 className="h3">Answers and qualifies, at any hour</h3>
            <p className="body" style={{ marginTop: '12px' }}>Every channel, weekends and cantonal holidays included. Asks the questions your best rep asks, in the buyer's language.</p>
            <ul><li><b>Seconds</b> to first response, on e-mail, chat, phone and WhatsApp</li><li><b>Four language regions</b> from day one</li><li>Answers recorded as <b>structured fields</b></li></ul>
          </div><div className="chat" id="chat" aria-label="Example conversation">
            <div className="chat-hd"><span className="av"><img src="a92ebcaf-01de-4793-a1e7-8b1f47c1393c" alt="" /></span><div><b>Agent · Matériaux Valais</b><small>WhatsApp</small></div><span className="live">Online · Sa 21:47</span></div>
            <div className="bub in">Bonsoir, vous livrez du gravier 0/16 à Sierre lundi&nbsp;? 8 tonnes.<span className="meta">FR · 21:47</span></div>
            <div className="bub out">Bonsoir&nbsp;! Oui, 8 t de gravier 0/16 sont en stock. Lundi, je peux proposer 7h30 ou 13h00 à Sierre.<span className="meta">Agent · 4 s</span></div>
            <div className="bub in">7h30 parfait.<span className="meta">FR · 21:48</span></div>
            <div className="slotcard"><b>Livraison confirmée</b><span className="ok">QR-bill sent</span><span>Lun. 7h30 · Sierre · 8 t</span></div>
            <div className="bub out">C'est réservé. La facture QR et le suivi du camion arrivent par e-mail.<span className="meta">Agent · 3 s · CRM updated</span></div>
          </div></div>
          <div className="feat rv"><div className="feat-t">
            <h3 className="h3">Recommends and closes the small stuff</h3>
            <p className="body" style={{ marginTop: '12px' }}>Works from your live catalogue, stock and price list. Handles standard objections with your approved wording.</p>
            <ul><li>Books appointments against a <b>real calendar</b></li><li>Issues <b>QR-bills</b> and payment links</li><li>Escalates to a person on <b>defined conditions</b></li></ul>
          </div><div className="shot"><Image src="/images/stock/workspace-2.jpg" alt="Desk where bookings are handled" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
          <div className="feat rv"><div className="feat-t">
            <h3 className="h3">Writes into your systems</h3>
            <p className="body" style={{ marginTop: '12px' }}>Contact, company, deal and full transcript go into your CRM, so the next person starts from a complete record.</p>
            <ul><li>CRM and ERP integration</li><li>Audit trail on every dialogue</li><li>Escalation path designed <b>before launch</b></li></ul>
          </div><div className="shot"><Image src="/images/stock/office-2.jpg" alt="Workstation holding the CRM" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div></div>
        </div>
      </div></section>
  )
}
