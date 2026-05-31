import type { WorkExperience } from '@/types/routes';

export const workExperience: WorkExperience[] = [
  {
    slug: 'space-eyes',
    company: 'Space Eyes',
    role: 'Full Stack Developer',
    period: 'February 2026 – Present',
    description:
      'Full-stack developer on Morpheus, an anti-drone defense system. I take the tools and exploits developed by the team and turn them into a cohesive, operational product — wiring together detection, interception, and control layers into a system that works end-to-end under real conditions. A core part of the role is bridging software and hardware: I configure the machines that run the system in the field, adapt them to the specific requirements of each deployment, and ensure the software stack integrates reliably with the physical components. Backend logic and system-level tooling are built in Rust and Python; the operator-facing interface is built in React.',
    tags: ['Rust', 'Python', 'React', 'Hardware Integration', 'Linux', 'Networking'],
  },
  {
    slug: 'consugisoft',
    company: 'CONSUGISOFT',
    role: 'Developer & Technical Supervisor',
    period: 'November 2024 – January 2026',
    description:
      'Full-stack development and live on-site technical supervision of an international competition scoring system that complies with FIG and USAG regulations. I implement features under real competition pressure and deploy fixes in real time during events across South America and Central America.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Real-time'],
  },
  {
    slug: 'owlbytech',
    company: 'OwlByTech',
    role: 'Full Stack Developer',
    period: 'February 2024 – September 2024',
    description:
      'Worked across two concurrent SaaS products — Zacal and Optitech — handling frontend and backend development, database design, and business logic implementation. TypeScript + Next.js on the frontend, Go (Fiber) on the backend, PostgreSQL managed via SQLC for type-safe queries.',
    projects: [
      {
        name: 'Zacal',
        description:
          'Business management platform. Responsible for frontend architecture in TypeScript + Next.js, backend endpoints in Go, and database schema design.',
      },
      {
        name: 'Optitech',
        description:
          'Operations and optimization tool. Contributed to business logic design, API development in Go (Fiber), and SQLC query generation for PostgreSQL.',
      },
    ],
    tags: ['TypeScript', 'Next.js', 'Go', 'Fiber', 'PostgreSQL', 'SQLC', 'TailwindCSS'],
  },
  {
    slug: 'autoctonos',
    company: 'Autóctonos',
    role: 'Developer',
    period: 'February 2025 – March 2025',
    description:
      'Technical lead for the project\'s inception phase. Defined the system architecture, built the initial frontend, configured the Docker environment, and implemented primary JWT authentication. Delivered a working first version in under two months.',
    tags: ['React', 'TypeScript', 'Docker', 'JWT', 'PostgreSQL'],
  },
];
