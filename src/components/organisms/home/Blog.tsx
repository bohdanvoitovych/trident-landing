import Image from 'next/image'

export function Blog() {
  return (
      <section className="sec alt" id="blog" data-screen-label="Blog"><div className="wrap">
        <div className="sec-head-row"><div className="t"><span className="label">Blog &amp; news</span><h2 className="h2">From the team</h2></div><a href="#" className="btn btn-outline">All articles <span className="ar">→</span></a></div>
        <div className="posts2">
          <a className="post2 rv" href="#"><div className="shot"><Image src="/images/cases/kleap-home-website-screen.png" alt="Article image" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><span className="date">21 Nov 2025</span><h3 className="h4">Smart auto parts software that unifies e-commerce, warehouse, delivery and AI</h3></a>
          <a className="post2 rv" href="#"><div className="shot"><Image src="/images/cases/zenitavto-b2b-checkout-screen.png" alt="Article image" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><span className="date">5 Nov 2025</span><h3 className="h4">Automechanika Dubai 2025: meet us in Hall 8, Booth F18</h3></a>
          <a className="post2 rv" href="#"><div className="shot"><Image src="/images/cases/conference-go-valais-website-screen-1.png" alt="Article image" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><span className="date">15 Oct 2025</span><h3 className="h4">Practical AI for SMEs: where it really works</h3></a>
          <a className="post2 rv" href="#"><div className="shot"><Image src="/images/cases/mobile-lapochette-product-website-screen.png" alt="Article image" fill sizes="(max-width: 860px) 100vw, 50vw" className="slot-img" /></div><span className="date">28 Aug 2025</span><h3 className="h4">Click, scan, done: how a digital invoice scanner cuts costs</h3></a>
        </div>
      </div></section>
  )
}
