export const profile = {
  name: "Jil Patel",
  image: "/jil-patel.jpg",
  email: "pateljil8244@gmail.com",
  linkedin: "https://www.linkedin.com/in/jil-patel-05a520233/",
  resume: "/jil_patel.pdf",
};

export const certification = {
  title: "Academy Accreditation - Databricks Fundamentals",
  issuer: "Databricks",
  date: "2026-11-20",
  displayDate: "November 20, 2026",
  credentialId: "201079442",
  url: "https://credentials.databricks.com/3c7e15b8-8ef3-40ac-b28f-9691c7859e56",
  badge: "/certifications/databricks-fundamentals-badge.png",
  certificate: "/certifications/databricks-fundamentals-certificate.png",
};

export const testimonials = [
  {
    name: "James Keeble",
    role: "Building Acquisity.ai",
    image: "/testimonials/james-keeble.jpeg",
    date: "2026-11-19",
    displayDate: "November 19, 2026",
    quote:
      "I managed Jil at Acquisity and really enjoyed working with him. He's reliable, takes real ownership of his work and always thinks things through before diving in. If something didn't make sense he'd ask, and he wasn't shy about flagging things I'd missed, which I appreciated more than he probably knew. On top of his own work he was always happy to help the rest of the team out. He's a great developer and a genuinely good guy, and I'd happily work with him again.",
  },
  {
    name: "Ben Ford",
    role: "AI Architect",
    image: "/testimonials/ben-ford.png",
    date: "2026-10-27",
    displayDate: "October 27, 2026",
    quote:
      "I worked with Jil for several months on a complex changing project. He always delivered consistently high quality output and was a pleasure to have on the team!",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  contributions: string[];
  theme: string;
  visual: "crm" | "booking" | "insights" | "exchange" | "health";
};

export const projects: Project[] = [
  {
    slug: "acquisity",
    name: "Acquisity",
    category: "AI & SALES AUTOMATION",
    theme: "sage",
    visual: "crm",
    summary: "A smarter workspace for the entire sales journey.",
    description:
      "A multi-tenant SaaS platform bringing CRM, lead generation, cold email campaigns, and AI-powered sales automation into shared business workspaces.",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Query",
      "Inngest",
      "AI SDK",
    ],
    contributions: [
      "Developed CRM features for contacts, companies, deal pipelines, tasks, and customer communications.",
      "Built AI-powered workflows for lead qualification, follow-ups, meeting scheduling, and sales call analysis.",
      "Implemented type-safe APIs, background jobs, and workspace-based access controls.",
      "Supported white-label workspaces with configurable branding, tools, and features.",
    ],
  },
  {
    slug: "cico-pms",
    name: "CICO PMS",
    category: "HOSPITALITY & REAL-TIME SYSTEMS",
    theme: "blue",
    visual: "booking",
    summary: "Making the moving parts of hospitality work together.",
    description:
      "A property management platform for hotels and campgrounds, covering reservations, availability, rate plans, housekeeping, and guest management.",
    stack: [
      "Vue.js 3",
      "Pinia",
      "Python",
      "Flask",
      "PostgreSQL",
      "Socket.IO",
      "Celery",
      "RabbitMQ",
      "Docker",
    ],
    contributions: [
      "Developed interactive booking calendars and dashboards with real-time Socket.IO updates.",
      "Integrated Stripe and Authorize.Net payments.",
      "Integrated Channex to synchronize reservations, rates, and availability across booking channels.",
      "Implemented REST APIs, JWT authentication, role-based access, and background workflows.",
    ],
  },
  {
    slug: "jurnii",
    name: "Jurnii",
    category: "CUSTOMER EXPERIENCE & INTELLIGENCE",
    theme: "lavender",
    visual: "insights",
    summary: "Turning experience insights into clearer decisions.",
    description:
      "Contributed to Jurnii UX and Jurnii 360, supporting customer experience benchmarking and competitive market intelligence.",
    stack: ["Next.js", "T3 Stack", "GraphQL", "TypeScript"],
    contributions: [
      "Developed features presenting UX analysis, customer journey insights, and competitor comparisons.",
      "Integrated GraphQL APIs for benchmarking results, competitor promotions, and market intelligence.",
      "Supported workflows for identifying usability gaps and prioritizing experience improvements.",
    ],
  },
  {
    slug: "hexitime",
    name: "Hexitime",
    category: "COMMUNITY & COLLABORATION",
    theme: "peach",
    visual: "exchange",
    summary: "A place where expertise is exchanged in time.",
    description:
      "A digital marketplace where people exchange professional expertise using time as currency.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    contributions: [
      "Developed responsive interfaces for knowledge sharing, skill exchange, and collaboration.",
      "Built reusable, typed React components for consistent application screens.",
    ],
  },
  {
    slug: "healthcare-wellness",
    name: "Healthcare & Wellness",
    category: "HEALTHCARE & BACKGROUND WORKFLOWS",
    theme: "rose",
    visual: "health",
    summary: "Helping everyday medication routines stay on track.",
    description:
      "A medication management application with scheduled reminders, adherence tracking, and visual reporting.",
    stack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "MySQL",
      "BullMQ",
      "Nodemailer",
    ],
    contributions: [
      "Developed medication schedules and adherence tracking.",
      "Implemented visual charts of taken and missed doses, with weekly and custom reports.",
      "Automated email reminders through cron jobs, BullMQ, and Nodemailer.",
      "Managed application state with Redux Toolkit and persisted records in MySQL.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Interfaces that feel right",
    label: "FRONTEND",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "The systems behind the screen",
    label: "BACKEND & APIS",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "tRPC",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Data, with a solid foundation",
    label: "DATABASES & STATE",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Drizzle ORM",
      "SQLAlchemy",
      "TanStack Query",
      "Redux Toolkit",
      "Pinia",
    ],
  },
  {
    title: "Workflows that keep moving",
    label: "REAL-TIME & AUTOMATION",
    skills: [
      "Socket.IO",
      "BullMQ",
      "Celery",
      "RabbitMQ",
      "Inngest",
      "AI SDK",
      "Cron jobs",
    ],
  },
];

export const journey = [
  {
    kind: "work",
    date: "JAN 2024 — PRESENT",
    title: "Software Engineer",
    organization: "eSparkBiz Technologies",
    detail: "Ahmedabad, Gujarat",
    description:
      "Building full-stack applications across SaaS, AI-powered sales, hospitality, customer experience, and healthcare. Working across responsive interfaces, APIs, databases, and real-time workflows.",
  },
  {
    kind: "training",
    date: "5-MONTH TRAINING",
    title: "Full Stack Development",
    organization: "eSparkBiz Technologies",
    detail: "Practical training",
    description:
      "Hands-on full-stack development training, building the foundations for creating web interfaces and the services behind them.",
  },
  {
    kind: "education",
    date: "2020 — 2024",
    title: "B.E. in Computer Science",
    organization: "Government Engineering College, Patan",
    detail: "CGPA 9.24 / 10",
    description:
      "A foundation in data structures, algorithms, object-oriented programming, database systems, and operating systems.",
  },
];
