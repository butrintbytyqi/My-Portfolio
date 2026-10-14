// Selected work, in display order. Statuses: 'Production' | 'In Development' | 'Completed' | 'Demo' | 'Prototype'
// Optional fields: year, live, github, caseStudy, and short detail lines (role, challenge, outcome).
// A field is only shown when it has text, so leave out anything that is not verified.
// Descriptions are two or three plain sentences with no hyphens or dashes. The
// stack is shown separately, so descriptions do not list technologies again.
//
// "AI Business Automation Pipelines" is intentionally not listed. The Attanda work it
// would describe is covered by the Voice AI entry until a separate workflow with
// clear inputs, steps, and outputs can be documented.
export const projects = [
  {
    title: 'DORATECH',
    description:
      'Built a SaaS control plane where operators onboard customers, and once the first payment is recorded a worker provisions a separate DoraDine environment for each one. The worker runs queued provisioning jobs that create each customer’s own database, generated secrets, storage, and application containers, with safe retries and recovery from crashed jobs. Added operator tools for recording payments and renewals, archiving, time limited support access, and an audit log.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    year: '2026',
    status: 'In Development',
    role: 'Designed and developed the platform at DORA Consulting.',
    challenge:
      'Giving every customer a separate database and runtime without setting up servers by hand for each one.',
    outcome:
      'Tested the complete flow on a production host: client creation, payment, provisioning, administrator setup, support access, renewal, and archive.',
  },
  {
    title: 'DORA Platform',
    description:
      'Built a financial back office platform that lets staff manage several client businesses in one system. Implemented outgoing invoices with generated PDFs, supplier invoice tracking, payments recorded in a cash and bank ledger, payroll, profit and loss reports, and document storage for each business. Worked on the application architecture, database design, role based permissions, and data isolation between businesses, and led the hosting evaluation for the production deployment.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Hetzner Cloud'],
    year: '2026',
    status: 'Production',
    role: 'Full stack engineer at DORA Consulting.',
    challenge:
      'Keeping each client business’s financial data separate while staff work across several businesses.',
  },
  {
    title: 'Voice AI Lead Capture System',
    description:
      'Built a voice AI system that collects and validates customer information during calls. Connected AI services with backend workflows that structure each lead, keep the call ID, date and time, and source with the record, and make the data available for reporting and follow up. Ran the services on Google Cloud.',
    stack: ['Python', 'Vertex AI', 'Cloud Run', 'BigQuery', 'Webhooks'],
    year: '2026',
    status: 'Production',
    role: 'AI engineer at Attanda.',
  },
  {
    title: 'DoraDine',
    description:
      'Developed a reservation and table management application for restaurants, with a public booking flow for guests and an admin panel for staff. Implemented table assignment rules, a floor plan editor, opening hours and closures, staff roles, and language support for German, English, and Albanian. Integrated it with DORATECH so each customer can run their own isolated installation, with a one time administrator setup link and a secure support login.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    year: '2026',
    status: 'Production',
    role: 'Developed the product at DORA Consulting.',
    challenge:
      'Turning a booking system built for one venue into a product that DORATECH can install separately for each customer.',
  },
  {
    title: 'Copilot for Lawyers',
    description:
      'Built a demo legal document assistant with a small team to review uploaded contracts. Developed a retrieval pipeline that extracts text from PDF files, splits it into clauses, and stores them for semantic search. Used a hosted LLaMA model to flag potential GDPR, DORA, and contract risks and to answer questions about the contract.',
    stack: ['Python', 'RAG', 'LLaMA 3.3 70B', 'Groq API', 'ChromaDB', 'Streamlit'],
    year: '2026',
    status: 'Demo',
    role: 'Technical implementation of the retrieval pipeline and application, in a small team.',
  },
  {
    title: 'DOA Digital Ordering System',
    description:
      'Co founded a digital ordering platform for restaurants and worked on its backend and ordering features. Customers scan a table QR code, browse the menu, and place orders from their phones. Restaurant staff get order management, notifications, role based access, and business reporting.',
    stack: ['REST APIs', 'Auth & RBAC', 'SQL'],
    year: '2022 to 2024',
    status: 'Completed',
    role: 'Co founder and full stack engineer.',
    outcome: 'Won first place at the IDEA TO SCALE startup competition at ITP Prizren in 2024.',
  },
];

// Older work, shown in a collapsed list below the selected projects.
export const earlierProjects = [
  {
    title: 'Hajde Folim',
    description:
      'Built a mental health awareness website in Albanian for the Hajde Folim brand. The first version had guided exercises, a blog, a shop, an admin dashboard, and a supportive AI chat assistant. A newer version is being rebuilt on a different codebase.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Bootstrap'],
    year: '2025 to 2026',
    status: 'In Development',
    live: 'https://hajdefolim.com',
  },
  {
    title: 'Clinic Management System',
    description:
      'Built a web based clinic management prototype for a single medical practice. It covers patient registration, appointment scheduling, doctor visit records, prescriptions, and medical reports, with separate interfaces for receptionists, doctors, and administrators.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite'],
    year: '2025',
    status: 'Prototype',
  },
];
