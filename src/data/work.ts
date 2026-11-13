export type StorySection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  callout?: string
  metrics?: { value: string; label: string; detail: string }[]
}

export type ArtworkAsset = {
  src: string
  alt: string
}

export type WorkStory = {
  slug: string
  company: string
  timeframe: string
  role: string
  kind: string
  title: string
  summary: string
  artwork?: ArtworkAsset
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
    title: 'Building Studio’s new authorization system.',
    summary:
      'Shaped and delivered a Studio authorization product, then helped teams across Netflix adopt its shared model in their applications.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Playwright', 'Jenkins', 'promptfoo'],
    sections: [
      {
        heading: 'Defined the model and built the product',
        paragraphs: [
          'Partnered with product, design, backend, and other engineers to define and test the admin model for resources, roles, permissions, onboarding, and provisioning. Led UI development for several parts of the system, including user onboarding and delegated administration.',
        ],
      },
      {
        heading: 'Expanded adoption across teams',
        paragraphs: [
          'Worked directly with Studio teams to define and test their roles, resources, and permissions, then supported their migrations from the old authorization system to the new one.',
        ],
      },
      {
        heading: 'Built shared foundations for other teams',
        paragraphs: [
          'Built reusable access-management components and several shared libraries adopted by more than 10 teams across 12 applications. I built a role-aware Playwright library for applications with different authorization requirements; it unblocked every UI app with existing end-to-end tests from migrating to the new system.',
        ],
      },
      {
        heading: 'Modernized two legacy applications',
        paragraphs: [
          'I independently modernized two legacy applications, migrating them to TypeScript, Netflix’s shared design system, and the standard build and deployment paved path. I kept the applications current as platform teams introduced new standards, including upgrading Vite and migrating to React Router framework mode. I handled dependency upgrades, security fixes, breaking changes, and migration troubleshooting with platform engineers as needed.',
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
    role: 'Technical Lead / Senior Software Engineer II · Engineering Manager',
    kind: 'Product delivery · Cross-team leadership',
    title: 'A unified communications experience for Compass agents.',
    summary:
      'Led a large, cross-team initiative to give real estate agents one unified communication experience across the Compass Real Estate platform.',
    stack: ['React', 'TypeScript', 'Product strategy', 'Cross-team delivery', 'People management'],
    sections: [
      {
        heading: 'Led a unified communications initiative across Compass',
        paragraphs: [
          'As Technical Lead / Senior Software Engineer II (February 2020–March 2021), I led the design, implementation, and delivery of a cross-team initiative giving real estate agents one unified communications experience across Compass. I coordinated technical integrations and dependencies across engineering teams, and partnered with Product, Design, Support Engineering, and User Research on requirements, roadmaps, prioritization, scope, and quarterly and half-year resourcing.',
        ],
      },
      {
        heading: 'Continued technical leadership while managing five engineers',
        paragraphs: [
          'As Engineering Manager (March 2021–September 2021), I continued as technical lead while managing five engineers, from Software Engineer II through Senior Software Engineer II. I held regular one-on-ones, gave feedback, and supported career development while staying hands-on with technical decisions and delivery.',
        ],
      },
      {
        heading: 'Accountable for the customer experience and delivery',
        paragraphs: [
          'Across both roles, stayed accountable for customer experience, delivery, software quality, and maintainability.',
        ],
      },
    ],
  },
  {
    slug: 'all-the-things',
    company: 'All the Things',
    timeframe: 'In production',
    role: 'Product engineering',
    kind: 'AI-powered product',
    title: 'AI-powered research that turns an idea into a list.',
    summary:
      'All the Things is a live application for researching collections, creating reusable catalogs, and tracking personal progress. Its AI-powered research pipeline turns an idea into a source-backed list with AI image generation.',
    artwork: {
      src: '/images/all-the-things-social-preview-v2.png',
      alt: 'All the Things homepage with sticker illustrations, a bucket-list prompt, and example ideas',
    },
    links: [{ label: 'Open the live app', href: 'https://allthethings.jessis.cool' }],
    sections: [
      {
        heading: 'Integrating AI into list creation',
        paragraphs: [
          'A user describes a collection they want to explore. All the Things uses structured LLM outputs and AI-assisted web research to find and organize relevant items, includes sources with the results, and uses AI image generation to illustrate the list. I built the React and TypeScript frontend, Python and Firebase/Firestore backend, and asynchronous research jobs with real-time updates.',
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
          'An offline evaluator compares generated lists against known reference collections and flags missing items, unexpected items, duplicates, and missing sources. The data model separates reusable public catalog templates from each user’s lists and progress.',
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
      'Led delivery of a convenience-store product vertical, replaced a command-line support tool with a web app, and built backend systems and AWS data workflows.',
    stack: ['Angular', 'TypeScript', 'Python', 'Java', 'AWS', 'Terraform'],
    sections: [
      {
        heading: 'Extended the product into convenience stores',
        paragraphs: [
          'As technical lead on a tiger team, I helped architect and deliver GetUpside’s convenience-store product vertical.',
        ],
      },
      {
        heading: 'Improved support productivity and reduced errors',
        paragraphs: [
          'Replaced a support-tool command-line workflow with a web app using Angular, Python, and API Gateway. The change improved productivity, reduced errors, and lowered support hiring and training costs.',
        ],
      },
      {
        heading: 'Built backend services and AWS data workflows',
        paragraphs: [
          'Built and maintained backend software and AWS data workflows using Java, Dropwizard, Lambda, SQS, SNS, S3, API Gateway, Athena, SQL, and Terraform.',
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
    artwork: {
      src: '/old/static/img/tinythoughts.006aac0.png',
      alt: 'TinyThoughts journaling app shown on a desktop browser and phone',
    },
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
          'The mobile apps were previously available on both app stores. More than five years after its last update, 10 people across several countries still write in TinyThoughts, including seven who write almost every day.',
        ],
      },
    ],
  },
]
