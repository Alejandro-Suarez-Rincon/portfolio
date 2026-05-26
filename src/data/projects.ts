import type { Project } from '@/types/routes';

// Personal projects — add new entries here to have them appear in the portfolio.
// Each project needs a thumbnail at /public/images/projects/<slug>-thumb.png
export const projects: Project[] = [
  {
    slug: 'kitsune-test',
    name: 'Kitsune — ETL & Data Explorer',
    shortDescription:
      'Full-stack data pipeline that ingests public Colombian government data, processes it, and exposes it through a REST API and Next.js interface.',
    description: `Kitsune is an ETL (Extract, Transform, Load) system built on top of Colombia's open government data portal (datos.gov.co).

The pipeline pulls structured datasets, processes and normalizes them with Python, persists them in PostgreSQL via SQLAlchemy ORM, and serves them through a FastAPI REST API with interactive Swagger and ReDoc documentation.

The frontend is a Next.js + TailwindCSS interface that lets users search and explore the data with filters by ID, crime type, and date range. The entire stack runs locally or in production with Docker Compose — single command to get a working environment.

Stack: FastAPI · SQLAlchemy · PostgreSQL · Next.js · TailwindCSS · Docker Compose`,
    thumbnail: '/images/projects/kitsune-thumb.png',
    images: [],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Docker', 'ETL'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/kitsune-test',
    template: 'wide',
  },
  {
    slug: 'chat-notification',
    name: 'Chat & Notification System',
    shortDescription:
      'Real-time chat application with WebSocket-powered messaging and a push notification layer, built in TypeScript.',
    description: `A real-time communication system with two core features working in tandem: a live chat powered by WebSockets for zero-latency message delivery, and a notification layer that alerts users of incoming messages even when they're not actively viewing the chat.

Built entirely in TypeScript, the project explores bidirectional communication patterns and event-driven UI updates without full-page reloads.

Stack: TypeScript · WebSockets · Node.js`,
    thumbnail: '/images/projects/chat-thumb.png',
    images: [],
    tags: ['TypeScript', 'WebSockets', 'Node.js', 'Real-time'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/chatNotification',
    template: 'standard',
  },
  {
    slug: 'calculadora-ia',
    name: 'CalculadoraIA — Vision Math Solver',
    shortDescription:
      'Computer vision app that detects and solves mathematical equations from a live webcam feed using neural networks.',
    description: `CalculadoraIA uses a trained neural network to recognize handwritten numbers and mathematical symbols in real time from webcam input, then evaluates and displays the result — no keyboard required.

Built with TensorFlow for model training and inference, and OpenCV for frame capture and preprocessing. The models are pre-trained and bundled with the project, so it runs offline without any cloud dependency.

An exploration of computer vision and applied machine learning — from image preprocessing and model training to real-time inference in a live video feed.

Stack: Python · TensorFlow · OpenCV · NumPy`,
    thumbnail: '/images/projects/calculadora-ia-thumb.png',
    images: [],
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/calculadoraIA',
    template: 'minimal',
  },
  {
    slug: 'impuesto-vehicular',
    name: 'Impuesto Vehicular',
    shortDescription:
      'Full-stack vehicle tax administration system with a Java/Jakarta EE backend and Angular frontend.',
    description: `A vehicle tax management system built with a clear separation between backend and frontend layers.

The backend runs on Java with Jakarta EE on a Wildfly application server, handling the business logic for tax calculation, vehicle registration, and payment records. The frontend is an Angular application that provides the user interface for administrators and vehicle owners.

Released under the MIT license. An early project that reflects enterprise Java development practices and multi-tier architecture.

Stack: Java · Jakarta EE · Wildfly · Angular`,
    thumbnail: '/images/projects/impuesto-vehicular-thumb.png',
    images: [],
    tags: ['Java', 'Jakarta EE', 'Angular', 'Wildfly'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/impuestoVehicular',
    template: 'minimal',
  },
];
