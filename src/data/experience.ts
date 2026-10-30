export type ExperienceEntry = {
  company: string
  role: string
  timeframe: string
  highlight: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'LevelUp',
    role: 'Software Engineer',
    timeframe: 'Dec 2017 – Dec 2018',
    highlight: 'Helped move the Rails-served frontend to a React single-page application.',
  },
  {
    company: 'The Washington Post',
    role: 'Front End Engineer',
    timeframe: 'Feb 2017 – Dec 2017',
    highlight: 'Built a React and Electron tool for creating schema-based test data.',
  },
  {
    company: 'Kit Check, Inc.',
    role: 'QA Automation Engineer',
    timeframe: 'Jun 2015 – Feb 2017',
    highlight:
      'Built product features and automated tests for the continuous integration pipeline.',
  },
]
