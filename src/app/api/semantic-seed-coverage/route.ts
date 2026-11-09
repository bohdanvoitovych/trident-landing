import { NextResponse } from 'next/server'
import { checkApiToken } from '@/lib/api-token'
import { analyze } from '@/lib/semantic-seed/analyze'

// Recomputed from the static data on every request, like the 8move admin route.
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!checkApiToken(request.headers.get('x-api-token'), process.env.TRIDENT_API_TOKEN)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { termsChecked, termsFound, results } = analyze()
  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    termsChecked,
    termsFound,
    results,
  })
}
