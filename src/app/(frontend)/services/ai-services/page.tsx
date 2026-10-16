import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import * as c from '@/data/ai-services-content'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: `${c.title} | Trident Software`,
    description: c.lede,
    path: '/services/ai-services',
    locale,
  })
}

const body = 'text-[#4A4F57] leading-relaxed text-lg'
const lead = 'font-semibold text-[#111318]'
const h2 = 'text-3xl font-bold mb-6 text-[#111318]'
const wrap = 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'
const th = 'px-4 py-3 font-medium text-left'
const td = 'px-4 py-3 align-top'

// Turns "[label](href)" in the content strings into links.
function rich(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return part
    return (
      <Link key={i} href={m[2]} className="text-[#2772E0] underline">
        {m[1]}
      </Link>
    )
  })
}

export default function AiServicesPage() {
  const [nextText] = c.next.split('the economics')

  return (
    <div className="flex flex-col">
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">{c.kicker}</p>
          <h1 className="text-display mb-4 text-white">{c.title}</h1>
          <p className="text-xl text-white/60 max-w-3xl">{c.lede}</p>
          <p className="mt-6 text-white/50 max-w-3xl">{c.intro}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.gapTitle}</h2>
          <p className={`${body} mb-6`}>{c.gapIntro}</p>
          <ul className="flex flex-col gap-4 list-disc pl-6">
            {c.gap.map((g) => (
              <li key={g.lead} className={body}>
                <span className={lead}>{g.lead}</span> {g.text}
              </li>
            ))}
          </ul>
          <p className={`${body} mt-8`}>{c.gapClose}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.doesTitle}</h2>
          <div className="overflow-x-auto rounded-[3px] border border-[#E3E5E8] bg-white">
            <table className="w-full text-[15px]">
              <thead className="bg-[#F6F7F8] text-[#4A4F57]">
                <tr>
                  <th scope="col" className={th}>#</th>
                  <th scope="col" className={th}>Capability</th>
                  <th scope="col" className={th}>What it means in practice</th>
                </tr>
              </thead>
              <tbody>
                {c.does.map((d, i) => (
                  <tr key={d.lead} className="border-t border-[#E3E5E8]">
                    <td className={`${td} text-[#4A4F57]`}>{i + 1}</td>
                    <th scope="row" className={`${td} font-semibold text-[#111318] text-left`}>{d.lead}</th>
                    <td className={`${td} text-[#4A4F57]`}>{d.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${body} mt-6`}>{c.concurrency}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.fteTitle}</h2>
          <p className={`${body} mb-6`}>{c.fteIntro}</p>
          <div className="overflow-x-auto rounded-[3px] border border-[#E3E5E8]">
            <table className="w-full text-[15px]">
              <thead className="bg-[#F6F7F8] text-[#4A4F57]">
                <tr>
                  <th scope="col" className={th} />
                  <th scope="col" className={th}>AI agent</th>
                  <th scope="col" className={th}>Additional FTE</th>
                </tr>
              </thead>
              <tbody>
                {c.fte.map((r) => (
                  <tr key={r.row} className="border-t border-[#E3E5E8]">
                    <th scope="row" className={`${td} font-semibold text-[#111318] text-left`}>{r.row}</th>
                    <td className={`${td} font-medium text-[#111318]`}>{r.agent}</td>
                    <td className={`${td} text-[#4A4F57]`}>{r.person}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${body} mt-6`}>{c.fteClose}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.channelsTitle}</h2>
          <p className={`${body} mb-4`}>{c.channels}</p>
          <p className={body}>{c.channelsNote}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.intTitle}</h2>
          <ul className="flex flex-col gap-3 list-disc pl-6">
            {c.integrations.map((x) => (
              <li key={x} className={body}>
                {x}
              </li>
            ))}
          </ul>
          <p className={`${body} mt-6`}>{c.intNote}</p>
        </div>
      </section>

      <section id="limits" className="py-16 md:py-20 section-alt border-t border-[#E3E5E8] scroll-mt-20">
        <div className={wrap}>
          <h2 className={h2}>{c.noTitle}</h2>
          <p className={`${body} mb-6`}>{c.noIntro}</p>
          <ul className="flex flex-col gap-4 list-disc pl-6">
            {c.limits.map((l) => (
              <li key={l.lead} className={body}>
                <span className={lead}>{l.lead}</span> {l.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.deliveryTitle}</h2>
          <p className={`${body} mb-6`}>{c.deliveryIntro}</p>
          <ol className="flex flex-col gap-4">
            {c.stages.map((s) => (
              <li key={s.lead} className={body}>
                <span className={lead}>{s.lead}</span> {rich(s.text)}
              </li>
            ))}
          </ol>
          <p className={`${body} mt-6`}>{c.deliveryClose}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.languagesTitle}</h2>
          <div className="flex flex-col gap-4">
            {c.languages.map((p) => (
              <p key={p} className={body}>
                {rich(p)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.dataTitle}</h2>
          <ul className="flex flex-col gap-4 list-disc pl-6">
            {c.dataItems.map((d) => (
              <li key={d.lead} className={body}>
                <span className={lead}>{d.lead}</span> {d.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.guaranteeTitle}</h2>
          <ul className="flex flex-col gap-4 list-disc pl-6">
            {c.guarantee.map((g) => (
              <li key={g.lead} className={body}>
                <span className={lead}>{g.lead}</span> {rich(g.text)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.faqTitle}</h2>
          <div className="flex flex-col gap-6">
            {c.faq.map((f) => (
              <div key={f.lead}>
                <h3 className="font-semibold text-[#111318] text-lg mb-1">{f.lead}</h3>
                <p className={body}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className={wrap}>
          <h2 className={h2}>{c.nextTitle}</h2>
          <p className={body}>
            {nextText}
            <Link href="/pricing" className="text-[#2772E0] underline">
              the economics
            </Link>
            .
          </p>
          <p className="mt-8">
            <Link href="/use-cases" className="text-[#2772E0] font-medium hover:underline">
              Use cases →
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
