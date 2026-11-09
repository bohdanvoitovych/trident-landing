import { NextResponse } from 'next/server'

// Stub: rewritten in the shared-admin task.
export async function POST() {
  return NextResponse.json({ error: 'Not configured' }, { status: 503 })
}
