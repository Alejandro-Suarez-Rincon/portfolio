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
    translations: {
      es: {
        description:
          'Desarrollador full-stack en Morpheus, un sistema de defensa anti-drones. Tomo las herramientas y exploits desarrollados por el equipo y los convierto en un producto cohesivo y operacional — integrando las capas de detección, interceptación y control en un sistema que funciona de extremo a extremo en condiciones reales. Una parte fundamental del rol es conectar el software con el hardware: configuro los equipos que ejecutan el sistema en campo, los adapto a los requerimientos específicos de cada despliegue y garantizo que el stack de software se integre de forma confiable con los componentes físicos. La lógica de backend y las herramientas a nivel de sistema están desarrolladas en Rust y Python; la interfaz del operador está construida en React.',
      },
    },
  },
  {
    slug: 'consugisoft',
    company: 'CONSUGISOFT',
    role: 'Developer & Technical Supervisor',
    period: 'November 2024 – January 2026',
    description:
      'Full-stack development and live on-site technical supervision of an international competition scoring system that complies with FIG and USAG regulations. I implement features under real competition pressure and deploy fixes in real time during events across South America and Central America.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Real-time'],
    translations: {
      es: {
        description:
          'Desarrollo full-stack y supervisión técnica presencial en vivo de un sistema internacional de puntuación de competencias que cumple con las regulaciones FIG y USAG. Implemento funcionalidades bajo la presión real de las competencias y despliego correcciones en tiempo real durante eventos en Sudamérica y Centroamérica.',
      },
    },
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
        translations: {
          es: {
            description:
              'Plataforma de gestión empresarial. Responsable de la arquitectura frontend en TypeScript + Next.js, endpoints backend en Go y diseño del esquema de base de datos.',
          },
        },
      },
      {
        name: 'Optitech',
        description:
          'Operations and optimization tool. Contributed to business logic design, API development in Go (Fiber), and SQLC query generation for PostgreSQL.',
        translations: {
          es: {
            description:
              'Herramienta de operaciones y optimización. Contribuí al diseño de la lógica de negocio, desarrollo de la API en Go (Fiber) y generación de queries SQLC para PostgreSQL.',
          },
        },
      },
    ],
    tags: ['TypeScript', 'Next.js', 'Go', 'Fiber', 'PostgreSQL', 'SQLC', 'TailwindCSS'],
    translations: {
      es: {
        description:
          'Trabajé en dos productos SaaS simultáneos — Zacal y Optitech — gestionando el desarrollo frontend y backend, diseño de bases de datos e implementación de lógica de negocio. TypeScript + Next.js en el frontend, Go (Fiber) en el backend, PostgreSQL gestionado con SQLC para queries con tipado seguro.',
      },
    },
  },
  {
    slug: 'autoctonos',
    company: 'Autóctonos',
    role: 'Developer',
    period: 'February 2025 – March 2025',
    description:
      'Technical lead for the project\'s inception phase. Defined the system architecture, built the initial frontend, configured the Docker environment, and implemented primary JWT authentication. Delivered a working first version in under two months.',
    tags: ['React', 'TypeScript', 'Docker', 'JWT', 'PostgreSQL'],
    translations: {
      es: {
        description:
          'Líder técnico en la fase de inicio del proyecto. Definí la arquitectura del sistema, construí el frontend inicial, configuré el entorno Docker e implementé la autenticación JWT principal. Entregué una primera versión funcional en menos de dos meses.',
      },
    },
  },
];
