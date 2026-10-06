import Image from 'next/image'
import { AgentChat } from './AgentChat'

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
          </div><AgentChat /></div>
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
