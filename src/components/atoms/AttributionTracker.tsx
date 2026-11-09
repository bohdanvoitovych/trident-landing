'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/attribution'

/**
 * Records where the visitor came from (landing page, external referrer, UTM
 * tags) on the first page of the session, so the contact form can report it.
 * Renders nothing.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution()
  }, [])

  return null
}
