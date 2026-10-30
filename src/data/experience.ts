export type ExperienceEntry = {
  company: string
  role: string
  timeframe: string
  highlight: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Netflix',
    role: 'Senior Software Engineer',
    timeframe: 'Sep 2021 – Oct 2026',
    highlight: 'Built a shared studio authorization platform adopted across 12 applications.',
  },
  {
    company: 'Compass',
    role: 'Engineering Manager',
    timeframe: 'Mar 2021 – Sep 2021',
    highlight: 'Managed and supported the growth of a five-engineer team.',
  },
  {
    company: 'Compass',
    role: 'Technical Lead',
    timeframe: 'Feb 2020 – Mar 2021',
    highlight: 'Led delivery of a cross-team communications product for real estate agents.',
  },
  {
    company: 'GetUpside',
    role: 'Senior Software Engineer',
    timeframe: 'Jan 2019 – Feb 2020',
    highlight: 'Delivered a convenience-store product and modernized internal support tools.',
  },
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
