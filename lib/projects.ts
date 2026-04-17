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
    slug: 'kueski-ai-credit',
    accent: '#7C3AED',
    company: 'Kueski',
    companyUrl: 'https://kueski.com',
    period: 'Aug 2024 – Present',
    role: 'Lead Software Engineer',
    challenge:
      'Kueski\'s credit decision process took 15+ minutes per application with a 34% false-negative rate. The legacy system relied entirely on manual review, creating bottlenecks at scale for Mexico\'s largest BNPL platform serving 2M+ users.',
    solution:
      'Designed a RAG pipeline architecture combining OpenAI GPT-4 with proprietary ML models on GCP. Built event-driven microservices with Spring Boot and Kafka processing ~1M+ daily events. Integrated vector-based search using pgvector and Pinecone for real-time policy retrieval. Deployed on GKE with Terraform-managed infrastructure. Established MLOps practices for regulated financial systems.',
    images: [
      { src: '/images/kueski-app-home.webp', alt: 'Kueski app home screen' },
      { src: '/images/kueski-loan.webp', alt: 'Kueski personal loan flow' },
      { src: '/images/kueski-pay.webp', alt: 'KueskiPay B2B merchant portal' },
    ],
    metrics: [
      { value: '80%', label: 'Credit decision time reduced' },
      { value: '99.9%', label: 'SLA achieved' },
      { value: '35%', label: 'Cloud cost savings' },
    ],
    tags: ['Spring Boot', 'OpenAI', 'RAG', 'Kafka', 'pgvector', 'GCP', 'Terraform', 'Kubernetes'],
    titleEs: 'Plataforma de Crédito con IA',
    titleEn: 'AI-Powered Credit Platform',
    categoryEs: 'IA / FinTech',
    categoryEn: 'AI / FinTech',
  },
  {
    slug: 'kueski-event-pipeline',
    accent: '#059669',
    company: 'Kueski',
    companyUrl: 'https://kueski.com',
    period: 'Aug 2024 – Present',
    role: 'Lead Software Engineer',
    challenge:
      'Fraud investigators worked with stale batch-processed data, causing false negatives. Financial dashboards refreshed every 24–48h. Compliance risk during volatile market periods was growing.',
    solution:
      'Built reactive microservices with Spring Boot + WebFlux consuming from Kafka topics. Transaction embeddings generated asynchronously and indexed in Elasticsearch for vector-based fraud detection. Real-time dashboard updates via WebSocket hub. Observability stack: OpenTelemetry instrumentation, Prometheus metrics, Grafana dashboards, and Jaeger distributed tracing across all services.',
    images: [
      { src: '/images/project-financial-dashboard.webp', alt: 'KueskiPay merchant dashboard' },
      { src: '/images/kueski-app-home.webp', alt: 'Kueski analytics overview' },
      { src: '/images/kueski-loan.webp', alt: 'Kueski loan flow UI' },
    ],
    metrics: [
      { value: '40%', label: 'Investigation time reduced' },
      { value: '~1M+', label: 'Daily events processed' },
      { value: '30%', label: 'Incident response faster' },
    ],
    tags: ['Spring WebFlux', 'Kafka', 'Elasticsearch', 'Redis', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Docker'],
    titleEs: 'Pipeline de Eventos Financieros',
    titleEn: 'Financial Event Pipeline',
    categoryEs: 'FinTech / Backend',
    categoryEn: 'FinTech / Backend',
  },
  {
    slug: 'retool-platform',
    accent: '#D97706',
    company: 'Retool',
    companyUrl: 'https://retool.com',
    period: 'Apr 2021 – Jul 2024',
    role: 'Senior Backend Engineer',
    challenge:
      'Retool\'s synchronous query engine bottlenecked under load, with no tenant isolation and vertical scaling limits. The monolithic architecture caused P0 incidents every sprint and slowed new feature delivery by 3–4 weeks.',
    solution:
      'Architected an event-driven query execution system using Go worker pools, Node.js API layer, and Kafka as the event backbone. Built real-time sync pipeline for 500+ database integrations using Kafka Streams and Redis. Implemented circuit breakers with Resilience4j. Deployed on AWS EKS with Terraform. Unified auth, added GraphQL + REST APIs, and rolled out Prometheus/Grafana/ELK observability across all services.',
    images: [
      { src: '/images/project-tooling-platform.jpg', alt: 'Retool builder interface' },
      { src: '/images/retool-multimodal-01.svg', alt: 'Retool multimodal AI builder' },
      { src: '/images/retool-multimodal-02.svg', alt: 'Retool workflow automation' },
      { src: '/images/retool-multimodal-03.svg', alt: 'Retool app deployment' },
    ],
    metrics: [
      { value: '99.99%', label: 'Uptime (3 years)' },
      { value: '70%', label: 'P99 latency reduction' },
      { value: '3×', label: 'Deployment frequency' },
    ],
    tags: ['Go', 'Node.js', 'Kafka Streams', 'Redis', 'GraphQL', 'Kubernetes', 'Terraform', 'ELK'],
    titleEs: 'Plataforma de Ejecución Distribuida',
    titleEn: 'Distributed Query Execution Platform',
    categoryEs: 'Backend / Distribuido',
    categoryEn: 'Backend / Distributed',
  },
  {
    slug: 'factorial-migration',
    accent: '#DB2777',
    company: 'Factorial',
    companyUrl: 'https://factorialhr.com',
    period: 'Jan 2019 – Mar 2021',
    role: 'Full Stack Engineer',
    challenge:
      'Factorial\'s monolithic Rails codebase had 45-minute deployments, no service isolation, and growing pains serving 50K+ users across Europe. Every refactor was a regression risk with zero E2E coverage.',
    solution:
      'Led the migration using Strangler Fig pattern — routing via Node.js API Gateway, decomposing domains into Spring Boot and Node.js microservices with per-service PostgreSQL databases. RabbitMQ and Azure Service Bus for async event flows (payroll, approvals). Redis caching reduced API response times by 60%. Frontend modernized with React + Redux. Mentored 3 junior engineers through the process.',
    images: [
      { src: '/images/project-hr-platform.webp', alt: 'Factorial managers dashboard' },
      { src: '/images/factorial-hr-core.webp', alt: 'Factorial HR core module' },
      { src: '/images/factorial-scheduling.png', alt: 'Factorial auto scheduling' },
      { src: '/images/factorial-automation.png', alt: 'Factorial admin automation' },
    ],
    metrics: [
      { value: '91%', label: 'Deploy time reduction' },
      { value: '€10M+', label: 'Monthly payroll processed' },
      { value: '60%', label: 'API response time cut' },
    ],
    tags: ['Spring Boot', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'Redis', 'React', 'Docker', 'DDD'],
    titleEs: 'Migración Monolito a Microservicios',
    titleEn: 'Monolith-to-Microservices Migration',
    categoryEs: 'Arquitectura / SaaS',
    categoryEn: 'Architecture / SaaS',
  },
  {
    slug: 'factorial-hr',
    accent: '#9333EA',
    company: 'Factorial',
    companyUrl: 'https://factorialhr.com',
    period: 'Jan 2019 – Mar 2021',
    role: 'Full Stack Engineer',
    challenge:
      'Factorial\'s HR modules used legacy Rails views mixed with ad-hoc React components. No shared state strategy led to stale UI after mutations, inconsistent loading states, and HR managers abandoning workflows.',
    solution:
      'Rebuilt scheduling, attendance, and employee profile backends as Spring Boot and ASP.NET Core Web APIs with clean PostgreSQL schemas. Implemented OAuth2/OIDC with PKCE for per-tenant SSO. Frontend migrated to React + Redux Toolkit with React Query for server-state sync. Built shared component library in Storybook cutting feature development time across teams.',
    images: [
      { src: '/images/factorial-hr-core.webp', alt: 'Factorial HR core module' },
      { src: '/images/project-hr-platform.webp', alt: 'Factorial managers dashboard' },
      { src: '/images/factorial-automation.png', alt: 'Factorial admin automation' },
    ],
    metrics: [
      { value: '50K+', label: 'Users served' },
      { value: '25%', label: 'User retention increase' },
      { value: '3×', label: 'Faster feature delivery' },
    ],
    tags: ['React', 'Spring Boot', 'ASP.NET Core', 'PostgreSQL', 'OAuth2', 'Redis', 'Storybook', 'Docker'],
    titleEs: 'Plataforma HR Escalable',
    titleEn: 'Scalable HR Platform',
    categoryEs: 'HR / Full Stack',
    categoryEn: 'HR / Full Stack',
  },
  {
    slug: 'holded-modernization',
    accent: '#0891B2',
    company: 'Holded',
    companyUrl: 'https://holded.com',
    period: 'Jul 2016 – Dec 2018',
    role: 'Junior Software Engineer',
    challenge:
      'Holded\'s cloud ERP platform had a legacy jQuery/AngularJS frontend with inconsistent UI, no component reuse, zero i18n support, and slow data loading. The electronic invoicing module needed to scale to thousands of SMEs across Spain.',
    solution:
      'Migrated invoicing, accounting, and inventory modules to React + TypeScript with a Material UI component library. Integrated Node.js and Vue.js services for specific product areas. Built i18n framework supporting 4 European languages. Optimized REST API integrations and introduced Storybook design system. The electronic invoicing module was adopted by 10K+ companies. PostgreSQL performance tuned with 8× improvement on key queries.',
    images: [
      { src: '/images/holded-hero.webp', alt: 'Holded business management hero' },
      { src: '/images/holded-home1.png', alt: 'Holded invoicing module' },
      { src: '/images/holded-home2.png', alt: 'Holded financial control' },
      { src: '/images/holded-home3.webp', alt: 'Holded team & payroll module' },
    ],
    metrics: [
      { value: '10K+', label: 'Companies adopted module' },
      { value: '8×', label: 'PostgreSQL performance gain' },
      { value: '35%', label: 'Load time improvement' },
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Vue.js', 'PostgreSQL', 'REST API', 'Storybook', 'i18n'],
    titleEs: 'Modernización Plataforma SaaS',
    titleEn: 'SaaS Platform Modernization',
    categoryEs: 'FinTech / Frontend',
    categoryEn: 'FinTech / Frontend',
  },
];
