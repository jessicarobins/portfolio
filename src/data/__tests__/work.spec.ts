import { describe, expect, it } from 'vitest'
import { work } from '../work'

describe('portfolio work', () => {
  it('has complete, uniquely addressable stories', () => {
    const slugs = work.map((story) => story.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
    for (const story of work) {
      expect(story.company).toBeTruthy()
      expect(story.title).toBeTruthy()
      expect(story.summary).toBeTruthy()
      expect(story.sections.length).toBeGreaterThan(0)
    }
  })

  it('keeps measurable Netflix platform outcomes in the story', () => {
    const netflix = work.find((story) => story.slug === 'netflix')
    const metrics = netflix?.sections.flatMap((section) => section.metrics ?? []) ?? []

    expect(metrics.map((metric) => metric.value)).toEqual(expect.arrayContaining(['38%', '59%']))
    expect(netflix?.summary).toContain('10 teams adopt')
    const aiWorkflow = netflix?.sections.find((section) => section.heading.includes('AI'))
    expect(aiWorkflow?.paragraphs?.[0]).toContain('promptfoo')
    expect(aiWorkflow?.paragraphs?.[0]).toContain('existing internal tool')
  })

  it('keeps All the Things identified as an in-progress AI product', () => {
    const project = work.find((story) => story.slug === 'all-the-things')

    expect(project?.company).toBe('All the Things')
    expect(project?.status).toBe('Work in progress')
    expect(project?.title).toContain('AI-powered research')
    expect(project?.summary.toLowerCase()).toContain('ai')
    expect(project?.summary).toContain('image generation')
    expect(project?.sections[0]?.heading).toContain('Integrating AI')
    expect(project?.summary).toContain('source-backed list')
    expect(project?.sections.some((section) => section.heading === 'Agentic workflows')).toBe(true)
    expect(project?.sections[1]?.paragraphs?.[0]).toContain('inspect AI research runs')
    expect(project?.sections[1]?.paragraphs?.[0]).toContain('regenerate catalog covers')
  })

  it('includes TinyThoughts as a standalone project with its product milestone', () => {
    const project = work.find((story) => story.slug === 'tinythoughts')

    expect(project?.company).toBe('TinyThoughts')
    expect(project?.summary).toContain('#2 Product of the Day')
    expect(project?.summary).toContain('Vue web app')
    expect(project?.stack).toContain('React Native')
    expect(project?.stack).toContain('Vue')
    expect(project?.stack).toContain('iOS')
    expect(project?.stack).toContain('Android')
    expect(project?.status).toContain('Paused')
    expect(project?.status).not.toContain('may return')
    expect(project?.sections[1]?.paragraphs?.[0]).not.toMatch(/may return|pick it back up/i)
    expect(project?.sections[1]?.paragraphs?.[0]).toContain(
      '10 people across several countries still write in TinyThoughts several times a month',
    )
    expect(project?.links?.[0]?.href).toBe('https://tinythoughts.me')
  })
})
