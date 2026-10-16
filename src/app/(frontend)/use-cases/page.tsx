import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import PageJsonLd from '@/components/seo/PageJsonLd'
import {
  firstEngagement,
  firstEngagementClosing,
  howToRead,
  notStart,
  notStartIntro,
  useCases,
  useCasesHeading,
  useCasesIntro,
} from '@/data/use-cases'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Use Cases | Trident Software',
    description: `${useCasesHeading}.`,
    path: '/use-cases',
    locale,
  })
}

const label = 'font-semibold text-[#111318]'
const body = 'text-[#4A4F57] leading-relaxed text-lg'

export default function UseCasesPage() {
  return (
    <div className="flex flex-col">
      <PageJsonLd path="/use-cases" />
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Use cases</p>
          <h1 className="text-display mb-4 text-white">Use Cases</h1>
          <p className="text-xl text-white/60 max-w-3xl">{useCasesHeading}</p>
          <p className="mt-6 text-white/50 max-w-3xl">{useCasesIntro}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">By process</p>
          <h2 className="text-2xl font-bold mb-4 text-[#111318]">How to read this</h2>
          <div className="flex flex-col gap-4">
            {howToRead.map((p) => (
              <p key={p} className={body}>
                {p}
              </p>
            ))}
          </div>
          <ol className="mt-10 grid gap-2 sm:grid-cols-2 text-[15px]">
            {useCases.map((u) => (
              <li key={u.slug}>
                <a className="text-[#2772E0] hover:underline" href={`#${u.slug}`}>
                  {u.n}. {u.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {useCases.map((u, i) => (
        <section
          key={u.slug}
          id={u.slug}
          className={`py-16 md:py-20 border-t border-[#E3E5E8] ${i % 2 === 1 ? 'section-alt' : ''}`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#111318]">
              {u.n}. {u.title}
            </h2>
            <div className="flex flex-col gap-5">
              <p className={body}>
                <span className={label}>The situation.</span> {u.situation}
              </p>
              <p className={body}>
                <span className={label}>What the agent does.</span> {u.does}
              </p>
              <p className={body}>
                <span className={label}>What it replaces.</span> {u.replaces}
              </p>
              <p className={body}>
                <span className={label}>Precondition.</span> {u.precondition}
              </p>
              {u.delivered && <p className={body}>{u.delivered}</p>}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#111318]">Where we would not start</h2>
          <p className={`${body} mb-6`}>{notStartIntro}</p>
          <div className="flex flex-col gap-5">
            {notStart.map((x) => (
              <p key={x.title} className={body}>
                <span className={label}>{x.title}</span> {x.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 section-alt border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#111318]">What a first engagement looks like</h2>
          <div className="flex flex-col gap-5">
            {firstEngagement.map((x) => (
              <p key={x.title} className={body}>
                <span className={label}>{x.title}</span> {x.text}
              </p>
            ))}
            <p className={body}>{firstEngagementClosing}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
