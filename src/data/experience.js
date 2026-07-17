// One entry per role. New roles are a data-only edit: add an object here.
export const experiences = [
  {
    company: 'Attanda',
    role: 'Founding AI Systems Engineer',
    period: 'Mar 2026 – Present',
    location: 'Vienna, Austria',
    summary:
      'Early-stage AI startup building agents and automation solutions for businesses on Google Cloud.',
    points: [
      'Builds AI agents, voice AI systems, and workflow automations using Python, Vertex AI, BigQuery, Cloud SQL, Cloud Run, APIs, webhooks, and cloud-native services.',
      'Designed lead-capture and business automation workflows integrating AI services, databases, reporting systems, and operational dashboards.',
      'Developed backend services and automation pipelines for data processing, validation, monitoring, and operational visibility.',
      'Works directly from business requirements to deliver end-to-end AI solutions, internal tools, and reliable automation systems.',
    ],
    stack: ['Python', 'Vertex AI', 'BigQuery', 'Cloud SQL', 'Cloud Run', 'Webhooks'],
  },
  {
    company: 'DORA Consulting',
    role: 'Software Consultant & Full-Stack Engineer',
    period: 'May 2026 – Present',
    location: 'Remote',
    summary:
      'Production web applications for external clients, owning architecture, hosting decisions, and end-to-end implementation.',
    points: [
      'Built the DORA Platform, a Next.js, NestJS, and PostgreSQL application containerized with Docker, and led a hosting evaluation resulting in a GDPR- and ISO 27001-compliant EU deployment on Hetzner Cloud.',
      'Designed and scoped Wolke7 Seeschlacht, a reservation system for a beach club client, producing full specification, data model, and build-plan documentation.',
      'Translates client business requirements into clean data models, reliable backend services, and maintainable full-stack systems.',
    ],
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Hetzner'],
  },
  // Temporarily hidden — uncomment to restore.
  // {
  //   company: 'Mercor Intelligence',
  //   role: 'Generalist Expert, AI Evaluation',
  //   period: 'Jul 2026 – Present',
  //   location: 'Remote · Contract',
  //   summary:
  //     'Contracted as a domain expert on a large-scale AI model evaluation project.',
  //   points: [
  //     'Assesses model responses for correctness, reasoning quality, and instruction-following within strict compliance and tooling guidelines.',
  //     'Contributes structured feedback and quality signals used to improve model performance.',
  //   ],
  //   stack: ['AI Evaluation', 'Prompt Engineering'],
  // },
  {
    company: 'DOA (Digital Ordering Application)',
    role: 'Founder & Full-Stack Engineer',
    period: 'Jul 2022 – Sep 2024',
    location: 'Remote',
    summary:
      'Co-founded a digital ordering platform automating restaurant operations through QR-based ordering.',
    points: [
      'Built REST APIs, authentication, dashboards, order-management workflows, and backend services, with integrations for order notifications, kitchen workflows, and reporting.',
      'Owned product planning, technical implementation, and client needs, translating real business problems into practical software for restaurants, staff, and customers.',
      'Won 1st place at the IDEA TO SCALE startup competition (ITP Prizren, 2024).',
    ],
    stack: ['Node.js', 'Express', 'SQL', 'REST APIs', 'Auth & RBAC'],
  },
];
