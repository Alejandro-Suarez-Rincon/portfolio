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
    template: 'wide',
  },
  {
    slug: 'calculadora-ia',
    name: 'CalculadoraIA — Vision Math Solver',
    shortDescription:
      'Point your camera at a sheet of paper, write a math operation, and the AI solves it in real time.',
    description: `CalculadoraIA captures live video and solves handwritten math operations on a sheet of paper — no keyboard, no traditional UI.

At startup, the user clicks the 4 corners of a sheet of paper. OpenCV applies a perspective correction and divides the area into three detection zones: first number, operator, and second number. Two convolutional neural networks process each zone independently: one trained on MNIST for digits 0–9, and another trained on a custom dataset for the operators + - × ÷. When both models exceed the confidence threshold, the result is rendered as an overlay in real time.

The models are pre-trained and bundled in the repository, so the project runs fully offline with a single command.

Stack: Python · TensorFlow · Keras · OpenCV · NumPy`,
    thumbnail: '/images/projects/calculadora-ia-thumb.png',
    images: [],
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/calculadoraIA',
    template: 'wide',
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
    template: 'wide',
  },
];
