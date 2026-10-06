export function Faq() {
  return (
      <section className="sec" id="faq" data-screen-label="FAQ"><div className="wrap">
        <div className="sec-head"><span className="label">FAQ</span><h2 className="h2">Questions before the audit</h2></div>
        <div className="faq">
          <details open={true}><summary><span className="q">What happens in the 45-minute audit?</span><span className="mk">+</span></summary><div className="a">We go through your enquiry volumes, response times, channels, languages and systems. You leave with your own numbers and a straight answer on whether automation pays back. Free, no obligation.</div></details>
          <details><summary><span className="q">When is the answer "not yet"?</span><span className="mk">+</span></summary><div className="a">Under roughly 150 enquiries a month, the numbers don't clear the build cost. Without a documented knowledge base, there's nothing for the agent to answer from. That's a content project first.</div></details>
          <details><summary><span className="q">How is this different from a chatbot?</span><span className="mk">+</span></summary><div className="a">A chatbot answers. An agent reads your live catalogue, books against a real calendar, issues a QR-bill, writes into your CRM, and hands over to a person on defined conditions.</div></details>
          <details><summary><span className="q">Where does our data live?</span><span className="mk">+</span></summary><div className="a">Hosting in Switzerland or the EU, under revFADP and GDPR. You own your data, knowledge base and scenarios. That's written into the contract.</div></details>
          <details><summary><span className="q">Will it replace our sales team?</span><span className="mk">+</span></summary><div className="a">No. It handles the routine 70–80 % of conversations. Complex deals stay with your people, and the handover point is designed in.</div></details>
          <details><summary><span className="q">What if the agent gets something wrong?</span><span className="mk">+</span></summary><div className="a">It escalates on low confidence rather than improvising. The threshold is a setting, and we start it conservative. Prices, stock and availability are read live, never quoted from memory.</div></details>
          <details><summary><span className="q">Will customers know they're talking to a machine?</span><span className="mk">+</span></summary><div className="a">Yes, disclosed up front. Concealment reads as dishonest and, under the EU AI Act, is heading towards unlawful. Disclosed agents that answer well outperform hidden ones.</div></details>
          <details><summary><span className="q">We already had a chatbot and it was a disaster.</span><span className="mk">+</span></summary><div className="a">Usually a decision-tree bot with no live data, no escalation and no owner after launch. Bring the transcripts to the audit; they show fastest what changes.</div></details>
          <details><summary><span className="q">How long until it's live?</span><span className="mk">+</span></summary><div className="a">Three to five weeks from signature. First measurable effects after two to four weeks of live running.</div></details>
          <details><summary><span className="q">Can we start small?</span><span className="mk">+</span></summary><div className="a">That's the recommended path: one channel, one scenario, one month. The first month of tuning is included in the integration fee.</div></details>
        </div>
      </div></section>
  )
}
