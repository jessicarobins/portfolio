export type ExperienceEntry = {
  company: string
  role: string
  timeframe: string
  highlight: string
}

export const careerStartYear = 2014

export const experience: ExperienceEntry[] = [
  {
    company: 'LevelUp',
    role: 'Software Engineer',
    timeframe: 'Dec 2017 – Dec 2018',
    highlight: 'Hired as the first JavaScript specialist; helped move the Rails-served frontend to React, established ESLint, Flow, and Jest tooling, and converted server-rendered controllers into JSON APIs.',
  },
  {
    company: 'The Washington Post',
    role: 'Front End Engineer',
    timeframe: 'Feb 2017 – Dec 2017',
    highlight:
      'Led frontend technical direction for a high-profile client project, introducing React, automated testing, and CI tooling to modernize engineering practices.',
  },
  {
    company: 'Kit Check, Inc.',
    role: 'QA Automation Engineer',
    timeframe: 'Jun 2015 – Feb 2017',
    highlight:
      'Built frontend and backend features for customer-facing products and internal tools with Angular and Rails, and wrote Protractor and Jasmine tests for them.',
  },
  {
    company: 'SunGard Availability Services',
    role: 'Junior QA Engineer',
    timeframe: 'Mar 2014 – Jun 2015',
    highlight:
      'Built automated test suites for web applications using Java and Selenium WebDriver.',
  },
]
