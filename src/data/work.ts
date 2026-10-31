export type StorySection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  callout?: string
  metrics?: { value: string; label: string; detail: string }[]
}

export type WorkStory = {
  slug: string
  company: string
  timeframe: string
  role: string
  kind: string
  title: string
  summary: string
  stack?: string[]
  links?: { label: string; href: string }[]
  sections: StorySection[]
}

export const work: WorkStory[] = [
  {
    slug: 'netflix',
    company: 'Netflix',
    timeframe: 'September 2021 – October 2026',
    role: 'Senior Software Engineer',
    kind: 'Internal platform · Product engineering',
    title: 'Untangling Studio’s authorization model.',
    summary:
      'Built a shared authorization platform that unified how Studio teams manage access, replacing fragmented approaches with a consistent model.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Playwright', 'Jenkins', 'promptfoo'],
    sections: [
      {
        heading: 'Defined the model and built the product',
        paragraphs: [
          'Partnered with product and design to define requirements and shape the access model for resources, roles, permissions, onboarding, and provisioning. Then built the UI from the ground up using React, TypeScript, and GraphQL.',
        ],
      },
      {
        heading: 'Expanded adoption across teams',
        paragraphs: [
          'Worked directly with partner teams to define and test their roles, resources, and permissions, then helped migrate their workflows to the new access model.',
        ],
      },
      {
        heading: 'Built foundations other teams could use',
        paragraphs: [
          'Developed reusable access-management components and a role-aware Playwright testing library so partner teams could build on the same foundations.',
        ],
      },
      {
        heading: 'Shortened the engineering feedback loop',
        paragraphs: [
          'Improved CI and end-to-end testing so developers could get useful feedback sooner.',
        ],
        metrics: [
          {
            value: '38%',
            label: 'faster PR feedback',
            detail: '25m39s → 15m58s median time to green',
          },
          { value: '59%', label: 'shorter test runs', detail: '16m11s → 6m35s median runtime' },
        ],
      },
      {
        heading: 'Applied AI to code review workflows',
        paragraphs: [
          'Wrote LLM review rules for coding conventions specific to our codebase and manually evaluated them with promptfoo. Integrated them into an existing internal tool that flagged pull requests when it found infractions.',
        ],
      },
    ],
  },
  {
    slug: 'compass',
    company: 'Compass',
    timeframe: 'February 2020 – September 2021',
    role: 'Technical Lead · Engineering Manager',
    kind: 'Product delivery · Cross-team leadership',
    title: 'A unified communications experience for Compass agents.',
    summary:
      'Led a large, cross-team initiative to give real estate agents one unified communication experience across the Compass Real Estate platform.',
    stack: ['React', 'TypeScript', 'Product strategy', 'Cross-team delivery', 'People management'],
    sections: [
      {
        heading: 'Delivered a unified agent communications experience',
        paragraphs: [
          'As technical lead, managed the design, implementation, and delivery of a large-scale initiative to provide real estate agents with a unified communication experience across the Compass Real Estate platform. Managed relationships and dependencies with engineers across teams so each team could integrate the product into its customer workflows.',
        ],
      },
      {
        heading: 'Partnered across functions to plan delivery',
        paragraphs: [
          'Partnered with product, design, support engineering, and user research to plan sprint work, shape quarterly and half-year roadmaps, and set scope and resourcing.',
        ],
      },
      {
        heading: 'Managed and developed a five-person team',
        paragraphs: [
          'Owned customer experience, prioritization, quality, maintainability, and engineer growth. Managed five engineers from Software Engineer II through Senior Software Engineer II, with regular one-to-ones and career conversations.',
        ],
      },
    ],
  },
  {
    slug: 'all-the-things',
    company: 'All the Things',
    timeframe: 'In development',
    role: 'Product engineering',
    kind: 'AI-powered product',
    title: 'AI-powered research that turns an idea into a list.',
    summary:
      'All the Things turns an idea into a source-backed list with AI-assisted web research and AI image generation.',
    sections: [
      {
        heading: 'Integrating AI into list creation',
        paragraphs: [
          'A user describes a collection they want to explore. All the Things uses AI-assisted web research to find and organize relevant items, includes sources with the results, and uses AI image generation to illustrate the list. I’m building the product end to end, from the first prompt through research and quality checks to the finished list.',
        ],
      },
      {
        heading: 'Agentic workflows',
        paragraphs: [
          'I’m building reusable agent skills to inspect AI research runs and safely regenerate catalog covers, with safeguards for paid model calls and shared catalog data.',
        ],
      },
      {
        heading: 'Evaluation checks the generated lists',
        paragraphs: [
          'An offline evaluator compares generated lists against known reference collections and flags missing items, unexpected items, duplicates, and missing sources. The product and its AI research workflow remain in development.',
        ],
      },
    ],
  },
  {
    slug: 'getupside',
    company: 'GetUpside',
    timeframe: 'January 2019 – February 2020',
    role: 'Senior Software Engineer',
    kind: 'Backend systems · Internal tools · Product delivery',
    title: 'A web tool for faster, more reliable support.',
    summary:
      'Led delivery of a convenience-store offering, replaced a command-line support tool with a web app, and built backend systems and AWS data workflows.',
    stack: ['Angular', 'TypeScript', 'Python', 'Java', 'AWS', 'Terraform'],
    sections: [
      {
        heading: 'Extended the product into convenience stores',
        paragraphs: [
          'Served as technical lead on a tiger team that architected and delivered the company’s convenience-store offering.',
        ],
      },
      {
        heading: 'Improved support productivity and reduced errors',
        paragraphs: [
          'Replaced a support-tool command-line workflow with a web app using Angular, Python, and API Gateway. The change improved productivity, reduced errors, and lowered support hiring and training costs.',
        ],
      },
      {
        heading: 'Expanded AWS capabilities and mentored a junior engineer',
        paragraphs: [
          'Built and maintained backend software and AWS data workflows using Java, Dropwizard, Lambda, SQS, SNS, S3, API Gateway, Athena, SQL, and Terraform. Mentored a junior engineer through technical design and career development.',
        ],
      },
    ],
  },
  {
    slug: 'tinythoughts',
    company: 'TinyThoughts',
    timeframe: 'Launched July 2018',
    role: 'Independent project',
    kind: 'Mobile and web product · Journaling',
    title: 'A one-sentence-a-day journal for web and mobile.',
    summary:
      'Built a Vue web app and React Native apps for iOS and Android, using daily push notifications to help people capture one sentence about their lives. It reached #2 Product of the Day on Product Hunt.',
    stack: ['Vue', 'React Native', 'Node.js', 'Firebase', 'iOS', 'Android'],
    links: [{ label: 'TinyThoughts website', href: 'https://tinythoughts.me' }],
    sections: [
      {
        heading: 'Built a daily journaling experience for web and mobile',
        paragraphs: [
          'Built a Vue web app alongside React Native mobile apps for iOS and Android. The mobile apps sent a daily push notification inviting people to write one sentence about their lives.',
        ],
        metrics: [
          {
            value: '#2',
            label: 'Product of the Day',
            detail: 'Product Hunt · July 7, 2018',
          },
        ],
      },
      {
        heading: 'Launched on iOS and Android',
        paragraphs: [
          'The mobile apps were previously available on both app stores. More than five years after the last update, 10 people across several countries still write in TinyThoughts several times a month.',
        ],
      },
    ],
  },
]
