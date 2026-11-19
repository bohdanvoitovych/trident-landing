/**
 * Internal email to the Trident team when a new workshop request arrives.
 */

import { emailLayout, escapeHtml } from './layout'
import { topicLabel } from './topic-labels'
import type { ContactFormData } from '../types'

const ACCENT = '#2772E0'

export function renderDemoNotification(
  data: ContactFormData,
  opts?: { adminSaveFailed?: boolean },
): { subject: string; html: string; text: string } {
  const failed = opts?.adminSaveFailed === true
  const WARNING = '⚠ Not saved to admin — add this lead manually.'

  // Name and company, not our own name: this lands in the Trident inbox.
  const base = `New workshop request from ${data.name}${data.company ? ` - ${data.company}` : ''}`
  const subject = failed ? `⚠ ${base}` : base

  const timestamp = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Zurich',
  })

  const fields: Array<[string, string]> = [
    ['Name', data.name],
    ['Email', data.email],
  ]
  if (data.company) fields.push(['Company', data.company])
  if (data.phone) fields.push(['Phone', data.phone])
  const topic = topicLabel(data.subject, 'en')
  if (topic) fields.push(['Topic', topic])
  fields.push(['Message', data.message])
  fields.push(['Submitted at', timestamp])
  if (data.locale) fields.push(['Locale', data.locale])
  if (data.ip) fields.push(['IP', data.ip])

  // Where the visitor came from, captured client-side (see src/lib/attribution.ts)
  const sourceFields: Array<[string, string]> = []
  if (data.landingPage) sourceFields.push(['Landing page', data.landingPage])
  if (data.referrer) sourceFields.push(['Referrer', data.referrer])
  if (data.submittedFrom) sourceFields.push(['Submitted from', data.submittedFrom])
  if (data.utmSource) sourceFields.push(['UTM source', data.utmSource])
  if (data.utmMedium) sourceFields.push(['UTM medium', data.utmMedium])
  if (data.utmCampaign) sourceFields.push(['UTM campaign', data.utmCampaign])
  if (data.utmTerm) sourceFields.push(['UTM term', data.utmTerm])
  if (data.utmContent) sourceFields.push(['UTM content', data.utmContent])

  function renderValue(label: string, value: string): string {
    const safe = escapeHtml(value)
    if (label === 'Email') {
      return `<a href="mailto:${safe}" style="color:${ACCENT}; text-decoration:none;">${safe}</a>`
    }
    if (/^https?:\/\//i.test(value)) {
      return `<a href="${safe}" style="color:${ACCENT}; text-decoration:none; word-break: break-all;">${safe}</a>`
    }
    return safe
  }

  function renderRows(rows: Array<[string, string]>): string {
    return rows
      .map(
        ([label, value], i) => `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; vertical-align: top; width: 120px; background-color: ${i % 2 === 0 ? '#F9FAFB' : '#ffffff'};">
        <span style="font-size: 13px; font-weight: 600; color: #6B7280;">${label}</span>
      </td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; vertical-align: top; background-color: ${i % 2 === 0 ? '#F9FAFB' : '#ffffff'};">
        <span style="font-size: 14px; color: #0D1117;">${renderValue(label, value)}</span>
      </td>
    </tr>`,
      )
      .join('')
  }

  const sourceHtml = sourceFields.length
    ? `
    <h2 style="margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #0D1117;">Traffic source</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
      ${renderRows(sourceFields)}
    </table>`
    : ''

  const warningHtml = failed
    ? `<p style="margin: 0 0 20px; padding: 12px 16px; background-color: #FEF3C7; border-radius: 8px; font-size: 14px; font-weight: 600; color: #92400E;">${escapeHtml(WARNING)}</p>`
    : ''

  const bodyHtml = `
    ${warningHtml}
    <h1 style="margin: 0 0 4px; font-size: 22px; font-weight: 700; color: #0D1117;">New workshop request</h1>
    <p style="margin: 0 0 20px; font-size: 14px; color: #6B7280;">A new request was sent through the website form.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
      ${renderRows(fields)}
    </table>

    ${sourceHtml}
  `

  const html = emailLayout(subject, bodyHtml)

  const text = [
    ...(failed ? [WARNING, ''] : []),
    `New workshop request from ${data.name}${data.company ? ` (${data.company})` : ''}`,
    '',
    ...fields.map(([label, value]) => `${label}: ${value}`),
    ...(sourceFields.length
      ? ['', 'Traffic source:', ...sourceFields.map(([label, value]) => `${label}: ${value}`)]
      : []),
    '',
    'Trident Software Sàrl · Sion, Switzerland',
  ].join('\n')

  return { subject, html, text }
}
