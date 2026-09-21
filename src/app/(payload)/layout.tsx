import '@payloadcms/next/css'
import type React from 'react'

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
