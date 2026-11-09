import { describe, it, expect } from 'vitest'
import { getTeam } from '../team'
import { CLIENT_LOGOS, PARTNER_LOGOS } from '../logos'

const isHttps = (u: string) => new URL(u).protocol === 'https:'

describe('team social links', () => {
  const team = getTeam('en')
  it('every link is a well-formed https URL', () => {
    for (const m of team) for (const u of [m.linkedin, m.facebook].filter(Boolean) as string[]) expect(isHttps(u)).toBe(true)
  })
  it('matches the number of links Yevhen set', () => {
    expect(team.filter((m) => m.linkedin).length).toBe(12)
    expect(team.filter((m) => m.facebook).length).toBe(4)
  })
})

describe('logo links', () => {
  it('partners with href are https', () => {
    const linked = PARTNER_LOGOS.filter((l) => l.href)
    expect(linked.map((l) => l.alt)).toEqual(['Microsoft Azure', 'Google Cloud', 'Hostpoint', 'Cimark', 'Holidu'])
    for (const l of linked) expect(isHttps(l.href!)).toBe(true)
  })
  it('three clients link out (xelsat is http upstream)', () => {
    const linked = CLIENT_LOGOS.filter((l) => l.href)
    expect(linked.map((l) => l.alt)).toEqual(['Kleap', 'Xelsat', 'Daniparts'])
    for (const l of linked) expect(() => new URL(l.href!)).not.toThrow()
  })
})
