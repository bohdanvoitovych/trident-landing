/**
 * Minimal markdown-to-HTML converter.
 * Handles: headings, paragraphs, bold, italic, links, tables, lists, hr, inline code.
 */
export function markdownToHtml(md: string): string {
  const lines = md.trim().split('\n')
  const html: string[] = []
  let inTable = false
  let inTableBody = false
  let inList = false
  let listType: 'ul' | 'ol' = 'ul'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false }
      if (inTable) { html.push('</tbody></table>'); inTable = false; inTableBody = false }
      html.push('<hr />')
      continue
    }

    // Code block (``` ... ```)
    if (line.trim().startsWith('```')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false }
      const lang = line.trim().slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      html.push(`<pre><code${lang ? ` class="language-${lang}"` : ''}>${codeLines.join('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`)
      continue
    }

    // Table rows
    if (line.trim().startsWith('|')) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false }
      const cells = line.trim().split('|').filter((c) => c.trim() !== '')
      if (cells.every((c) => /^[\s-:]+$/.test(c))) continue
      if (!inTable) {
        html.push('<table><thead><tr>')
        cells.forEach((c) => html.push(`<th>${inlineFormat(c.trim())}</th>`))
        html.push('</tr></thead>')
        inTable = true
        continue
      }
      if (!inTableBody) { html.push('<tbody>'); inTableBody = true }
      html.push('<tr>')
      cells.forEach((c) => html.push(`<td>${inlineFormat(c.trim())}</td>`))
      html.push('</tr>')
      continue
    }

    if (inTable) {
      if (inTableBody) html.push('</tbody>')
      html.push('</table>')
      inTable = false; inTableBody = false
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false }
      const level = headingMatch[1].length
      html.push(`<h${level}>${inlineFormat(headingMatch[2])}</h${level}>`)
      continue
    }

    // List items (unordered)
    const ulMatch = line.match(/^[-*]\s+(.+)$/)
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>')
        html.push('<ul>'); inList = true; listType = 'ul'
      }
      html.push(`<li>${inlineFormat(ulMatch[1])}</li>`)
      continue
    }

    // List items (ordered)
    const olMatch = line.match(/^\d+\.\s+(.+)$/)
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>')
        html.push('<ol>'); inList = true; listType = 'ol'
      }
      html.push(`<li>${inlineFormat(olMatch[1])}</li>`)
      continue
    }

    if (inList) { html.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false }

    if (line.trim() === '') continue

    html.push(`<p>${inlineFormat(line)}</p>`)
  }

  if (inList) html.push(listType === 'ul' ? '</ul>' : '</ol>')
  if (inTable) { if (inTableBody) html.push('</tbody>'); html.push('</table>') }

  return html.join('\n')
}

/** Format inline markdown: links, bold, italic, inline code */
export function inlineFormat(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}
