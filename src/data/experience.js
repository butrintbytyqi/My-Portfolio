// One entry per role. New roles are a data-only edit: add an object here.
// Titles, dates, and bullets follow the CV (public/ButrintBytyqiCV.pdf).
export const experiences = [
  {
    company: 'Mercor Intelligence',
    role: 'Software Engineering Expert / Generalist Expert',
    period: 'Jul 2026 – Present',
    location: 'Remote · Independent Contractor',
    summary:
      'Independent contractor evaluating AI-generated software solutions and business deliverables.',
    points: [
      'Independently evaluate AI-generated software solutions, examining source code, test suites, and system requirements to identify correctness and reliability issues.',
      'Investigate implementation defects, missing edge cases, and inadequate test coverage, documenting technical findings to support the evaluation of AI coding models.',
      'Evaluated AI-generated business deliverables for accuracy, instruction compliance, and quality, applying consistent review standards across different tasks.',
    ],
    stack: ['AI Evaluation', 'Software Engineering'],
  },
  {
    company: 'Attanda',
    role: 'Founding AI Systems Engineer',
    period: 'Mar 2026 – Nov 2026',
    location: 'Vienna, Austria',
    summary:
      'Early-stage AI startup building agents and automation solutions for businesses on Google Cloud.',
    points: [
      'Drove the technical development of AI-powered voice and chat systems, translating business requirements into automated customer communication workflows.',
      'Designed and implemented Python backend services that integrated AI models with business data, APIs, and external tools to automate customer interactions and routine tasks.',
      'Managed deployment, monitoring, and improvement of AI services on Google Cloud, troubleshooting production issues and improving system reliability.',
    ],
    stack: ['Python', 'Vertex AI', 'BigQuery', 'Cloud SQL', 'Cloud Run', 'Webhooks'],
  },
  {
    company: 'DORA Consulting',
    role: 'Software Engineer',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    summary:
      'Full-stack work on business software and SaaS platforms, including the DianeDigital production infrastructure, DORA Finance, and Diane’s Table.',
    points: [
      'Own end-to-end development of business management features, delivering workflows for invoicing, payments, payroll, reporting, and customer and supplier management.',
      'Design and implement backend APIs, PostgreSQL data models, and user-facing features using Next.js, NestJS, TypeScript, Prisma, and Docker.',
      'Handle the software lifecycle from database design and implementation to testing, deployment, and production troubleshooting, resolving issues across the stack.',
    ],
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Hetzner'],
  },
  {
    company: 'DOA (Digital Ordering Application)',
    role: 'Full-Stack Engineer',
    period: 'Jul 2022 – Sep 2024',
    location: 'Remote',
    summary:
      'Co-founded a digital ordering platform automating restaurant operations through QR-based ordering.',
    points: [
      'Built a QR-based restaurant ordering system connecting customer orders with staff and kitchen operations, streamlining the ordering and fulfillment workflow.',
      'Delivered backend APIs, payment integrations, order dashboards, real-time notifications, and analytics tools, enabling restaurants to manage orders and operations through a unified platform.',
      'Won 1st place at the IDEA TO SCALE startup competition (ITP Prizren, 2024).',
    ],
    stack: ['Node.js', 'Express', 'SQL', 'REST APIs', 'Auth & RBAC'],
  },
];
