export default function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  if (!data || data.length === 0) return null
  return (
    <>
      {data.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
