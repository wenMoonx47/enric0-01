export interface Metric {
  value: string;
  label: string;
}

export interface ProjectExtra {
  slug: string;
  accent: string;
  company: string;
  companyUrl: string;
  period: string;
  role: string;
  challenge: string;
  solution: string;
  images: { src: string; alt: string }[];
  metrics: Metric[];
  tags: string[];
  titleEs: string;
  titleEn: string;
  categoryEs: string;
  categoryEn: string;
}

export const projects: ProjectExtra[] = [
  {
    slug: 'kueski-ai-support',
    accent: '#7C3AED',
    company: 'Kueski',
    companyUrl: 'https://kueski.com',
    period: 'Aug 2024 – Present',
    role: 'Lead Software Engineer',
    challenge:
      'Kueski\'s support team handled 50K+ monthly tickets manually. 70% were repetitive loan eligibility and payment queries — burning analyst time and stalling customer decisions.',
    solution:
      'Designed and shipped an LLM-powered triage layer using GPT-4 Turbo + RAG over Kueski\'s internal knowledge base. Integrated a real-time vector similarity search so the AI retrieves the most current policy data before responding. Built a confidence-based escalation system ensuring complex cases always reach a human.',
    images: [
      { src: '/images/project-ai-support.webp', alt: 'Kueski app home screen' },
      { src: '/images/project-ai-copilot.webp', alt: 'Kueski personal loan flow' },
    ],
    metrics: [
      { value: '40%', label: 'Ticket volume reduced' },
      { value: '78%', label: 'Faster first response' },
      { value: '~$200K', label: 'Annual cost savings' },
    ],
    tags: ['Next.js', 'OpenAI GPT-4', 'RAG', 'Pinecone', 'TypeScript', 'React Query'],
    titleEs: 'Sistema de Soporte con IA',
    titleEn: 'AI Customer Support System',
    categoryEs: 'IA / FinTech',
    categoryEn: 'AI / FinTech',
  },
  {
    slug: 'kueski-dashboard',
    accent: '#059669',
    company: 'Kueski',
    companyUrl: 'https://kueski.com',
    period: 'Aug 2024 – Present',
    role: 'Lead Software Engineer',
    challenge:
      'Financial analysts were approving loans using dashboards refreshed every 24–48 hours. Stale data caused mis-pricing, delayed approvals, and compliance risk during volatile market periods.',
    solution:
      'Re-architected the data layer with React Query v5 persistent cache + WebSocket subscriptions for live price feeds. Built a Zustand store syncing seven live data streams. Replaced static charts with interactive Recharts panels updated sub-second, with drill-down to individual loan cohorts.',
    images: [
      { src: '/images/project-financial-dashboard.webp', alt: 'KueskiPay merchant dashboard' },
      { src: '/images/project-ai-support.webp', alt: 'Kueski analytics overview' },
    ],
    metrics: [
      { value: '35%', label: 'Page load improvement' },
      { value: '<1s', label: 'Data refresh latency' },
      { value: '30%', label: 'Analyst productivity gain' },
    ],
    tags: ['React Query', 'Zustand', 'WebSockets', 'Recharts', 'Next.js App Router', 'TypeScript'],
    titleEs: 'Dashboard Financiero en Tiempo Real',
    titleEn: 'Real-Time Financial Dashboard',
    categoryEs: 'FinTech / UI',
    categoryEn: 'FinTech / UI',
  },
  {
    slug: 'retool-platform',
    accent: '#D97706',
    company: 'Retool',
    companyUrl: 'https://retool.com',
    period: 'Apr 2021 – Jul 2024',
    role: 'Senior Backend Engineer',
    challenge:
      'Retool\'s internal tooling backends were a patchwork of microservices with inconsistent APIs, duplicated auth middleware, and no shared component contracts — causing P0 incidents every sprint and slowing every new feature by 3–4 weeks.',
    solution:
      'Led the migration to a Nx monorepo with shared library boundaries enforced at compile time. Designed a unified GraphQL gateway that replaced 11 separate REST endpoints. Built a zero-downtime migration path — new and legacy APIs coexisted via a versioned proxy layer until all consumers were migrated.',
    images: [
      { src: '/images/project-tooling-platform.jpg', alt: 'Retool builder interface' },
      { src: '/images/retool-2.png', alt: 'Retool dashboard example' },
      { src: '/images/retool-3.png', alt: 'Retool app editor' },
    ],
    metrics: [
      { value: '25%', label: 'API latency reduction' },
      { value: '30%', label: 'Build time improvement' },
      { value: '20%', label: 'Fewer production bugs' },
    ],
    tags: ['Node.js', 'GraphQL', 'Nx Monorepo', 'TypeScript', 'Mocha', 'Cypress', 'CI/CD'],
    titleEs: 'Plataforma de Herramientas Internas',
    titleEn: 'Internal Tooling Platform',
    categoryEs: 'Backend / API',
    categoryEn: 'Backend / API',
  },
  {
    slug: 'factorial-hr',
    accent: '#DB2777',
    company: 'Factorial',
    companyUrl: 'https://factorialhr.com',
    period: 'Jan 2019 – Mar 2021',
    role: 'Mid-Level Full Stack Engineer',
    challenge:
      'Factorial\'s HR modules were built on a mix of legacy Rails views and ad-hoc React components with no shared state strategy — leading to stale UI after mutations, inconsistent loading states, and frustrated HR managers abandoning workflows midway.',
    solution:
      'Owned the frontend rewrite of the scheduling, attendance, and employee profile modules using Angular + NgRx for predictable state. Introduced React Query on the React side for data synchronisation. Built a shared component library documented in Storybook that cut new feature development time significantly across teams.',
    images: [
      { src: '/images/project-hr-platform.webp', alt: 'Factorial managers dashboard' },
      { src: '/images/factorial-2.png', alt: 'Factorial auto scheduling' },
      { src: '/images/factorial-3.png', alt: 'Factorial admin automation' },
    ],
    metrics: [
      { value: '25%', label: 'User engagement lift' },
      { value: '40%', label: 'Less UI inconsistency' },
      { value: '3×', label: 'Faster feature delivery' },
    ],
    tags: ['Angular', 'NgRx', 'React', 'React Query', 'Node.js', 'Storybook', 'Jest', 'Cypress'],
    titleEs: 'Plataforma HR Escalable',
    titleEn: 'Scalable HR Platform',
    categoryEs: 'HR / SaaS',
    categoryEn: 'HR / SaaS',
  },
  {
    slug: 'holded-accounting',
    accent: '#0891B2',
    company: 'Holded',
    companyUrl: 'https://holded.com',
    period: 'Jul 2016 – Dec 2018',
    role: 'Junior Frontend Engineer',
    challenge:
      'Holded was migrating a 50K-line AngularJS accounting platform to modern Angular while maintaining daily releases. The codebase had no shared component library, inconsistent SCSS conventions, and zero E2E test coverage — making every refactor a regression risk.',
    solution:
      'Built the invoicing, financial control, and inventory modules on the new Angular architecture from scratch. Introduced a shared SCSS design token layer — colors, spacing, and typography defined once. Wrote Jasmine/Karma unit tests and integrated REST API data flows for live transaction feeds showing real-time account balances.',
    images: [
      { src: '/images/project-accounting.png', alt: 'Holded invoicing module' },
      { src: '/images/holded-2.png', alt: 'Holded financial control chart' },
      { src: '/images/holded-3.webp', alt: 'Holded team module' },
    ],
    metrics: [
      { value: '60%', label: 'UI inconsistencies fixed' },
      { value: '0→80%', label: 'Test coverage gain' },
      { value: '4mo', label: 'Migration timeline' },
    ],
    tags: ['AngularJS', 'Angular 2+', 'TypeScript', 'SCSS', 'RxJS', 'Karma', 'Jasmine', 'REST API'],
    titleEs: 'Módulos de Contabilidad',
    titleEn: 'Accounting Modules',
    categoryEs: 'FinTech / UI',
    categoryEn: 'FinTech / UI',
  },
  {
    slug: 'kueski-copilot',
    accent: '#7C3AED',
    company: 'Kueski',
    companyUrl: 'https://kueski.com',
    period: 'Aug 2024 – Present',
    role: 'Lead Software Engineer',
    challenge:
      'Internal analysts were spending 35% of their workday on repetitive data look-ups — pulling loan cohort data, running the same SQL queries, and copy-pasting numbers into slides for stakeholder reports.',
    solution:
      'Designed and shipped an intelligent UI copilot embedded directly into the internal analytics dashboard. Analysts type natural-language questions; the system uses function-calling to query the data layer, formats the result as charts or tables inline, and drafts a summary they can copy to their report in one click.',
    images: [
      { src: '/images/project-ai-copilot.webp', alt: 'Kueski AI copilot interface' },
      { src: '/images/project-financial-dashboard.webp', alt: 'Kueski analytics dashboard' },
    ],
    metrics: [
      { value: '~30%', label: 'Analyst time saved' },
      { value: '10×', label: 'Faster data retrieval' },
      { value: '100%', label: 'Adoption within 2 weeks' },
    ],
    tags: ['Next.js', 'OpenAI Function Calling', 'LLM', 'TypeScript', 'Tailwind', 'Zustand'],
    titleEs: 'Copiloto UI Inteligente',
    titleEn: 'Intelligent UI Copilot',
    categoryEs: 'IA / Tooling',
    categoryEn: 'AI / Tooling',
  },
];
