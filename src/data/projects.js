// Curated set. Statuses: 'Production' | 'In Development' | 'Completed' | 'Demo'
// `year`, `github` and `live` are optional.
export const projects = [
  {
    title: 'DORATECH',
    description:
      'A SaaS control plane for automatically onboarding, provisioning, and managing isolated customer applications. It takes each client from payment to a running DoraDine installation with no manual server or database setup, giving every customer an isolated environment with its own PostgreSQL database, credentials, secrets, storage, and runtime. The full lifecycle was production-tested from onboarding through renewal and archive.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    year: '2026',
    status: 'Production',
  },
  {
    title: 'DoraDine',
    description:
      'A restaurant reservation and table-management platform with online booking, staff operations, and automated SaaS deployment. It covers public reservations, table and area management with automatic or manual assignment, reservation types, opening hours, staff roles, and a multilingual admin interface, and evolved from a real restaurant booking implementation into a reusable product provisioned through DORATECH.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    year: '2026',
    status: 'Production',
  },
  {
    title: 'Voice AI Lead Capture System',
    description:
      'An AI-powered voice agent that captures, validates, and structures customer lead information, automating lead collection, reporting, and operational tracking while preserving system fields such as Call ID, date/time, and source.',
    stack: ['Python', 'Vertex AI', 'Cloud Run', 'BigQuery', 'Webhooks'],
    year: '2026',
    status: 'Production',
  },
  {
    title: 'AI Agent & Business Automation Workflows',
    description:
      'AI agent systems integrating cloud services, APIs, databases, and webhooks to automate data collection, validation, reporting, and monitoring. Built for reliability, scalability, and production readiness.',
    stack: ['GCP', 'Vertex AI', 'Cloud SQL', 'n8n', 'REST APIs'],
    year: '2026',
    status: 'Production',
  },
  {
    title: 'DORA Platform',
    description:
      'A client platform built with Next.js, NestJS, and PostgreSQL, containerized with Docker and deployed to a GDPR- and ISO 27001-compliant EU environment on Hetzner Cloud after a hosting-provider evaluation.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'Hetzner Cloud'],
    year: '2026',
    status: 'Production',
  },
  {
    title: 'Copilot for Lawyers',
    description:
      'A demo legal AI assistant, built with a small team, that analyzes uploaded PDF contracts and answers natural-language questions about them, highlighting potential GDPR, DORA, and contractual risk clauses. A retrieval pipeline parses and chunks contract text into embeddings stored in ChromaDB, then grounds LLaMA 3.3 70B through the Groq API with the most relevant sections, returning structured JSON for selected analyses.',
    stack: ['Python', 'RAG', 'LLaMA 3.3 70B', 'Groq API', 'ChromaDB', 'Streamlit'],
    status: 'Demo',
  },
  {
    title: 'Hajde Folim',
    description:
      'A conversational AI platform providing mental health guidance through GPT-based chat, with user session management and admin tools for safe, effective support.',
    stack: ['JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'OpenAI API'],
    year: '2025',
    status: 'In Development',
    github: 'https://github.com/butrintbytyqi/hajde-folim',
    live: 'https://hajdefolim-1.onrender.com',
  },
  {
    title: 'Ordinance App',
    description:
      'A desktop application managing the full workflow of a medical practice: patient registration, appointment scheduling, visit tracking, prescriptions, and reporting. Separate interfaces for receptionists and doctors, with role-based access control and secure authentication.',
    stack: ['React', 'TypeScript', '.NET', 'SQL Server', 'Electron'],
    year: '2025',
    status: 'In Development',
  },
  {
    title: 'Feedback App',
    description:
      'A feedback management system for businesses featuring customizable forms, sentiment analysis, and real-time analytics dashboards for actionable insights.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    year: '2023',
    status: 'Completed',
    github: 'https://github.com/butrintbytyqi/feedback-app',
  },
];
