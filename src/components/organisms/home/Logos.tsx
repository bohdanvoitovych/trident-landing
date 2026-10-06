// Client marquee. The prototype injected these with JS; here the list is static
// so the logos are in the HTML and the track is simply duplicated to loop.
const CLIENTS = [
  'proxinea.svg',
  'gategroup.png',
  'tdsbot.png',
  'qmasters.svg',
  'catapult-crown.svg',
  'executive-travel-exchange.png',
  'xtrodes.svg',
  'kleap.png',
  'treedis.svg',
  'la-pochette.svg',
  'xelsat.png',
  'ardevaz-sls.png',
  'mtechno.svg',
  'mastertool.svg',
  'daniparts.png',
  'atc.svg',
  'samange.svg',
  'vbauto.png',
]

function name(file: string) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function Logos() {
  return (
    <div className="logos logos-v2">
      <div className="wrap logos-row">
        <p className="logos-lead">
          Trusted by companies
          <br />
          in Switzerland and Europe
        </p>
        <div className="logos-vp">
          <div className="logos-fade l" />
          <div className="logos-fade r" />
          <div className="logos-track" id="mq">
            {[0, 1].map((pass) =>
              CLIENTS.map((file) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${pass}-${file}`}
                  src={`/images/clients/${file}`}
                  alt={pass === 0 ? name(file) : ''}
                  aria-hidden={pass === 1 || undefined}
                  loading="lazy"
                />
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
