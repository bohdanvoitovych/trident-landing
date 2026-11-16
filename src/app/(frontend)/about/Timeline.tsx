type Item = { year: string; event: string }

/** Static timeline: each year once, its event under it, joined by one rule. */
export function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="tl">
      {items.map((it) => (
        <li key={it.year}>
          <span className="tl-year">{it.year}</span>
          <p>{it.event}</p>
        </li>
      ))}
    </ol>
  )
}
