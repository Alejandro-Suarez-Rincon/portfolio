import type { Project } from '@/types/routes';

// Personal projects — add new entries here to have them appear in the portfolio.
// Each project needs a thumbnail at /public/images/projects/<slug>-thumb.png
export const projects: Project[] = [
  {
    slug: 'kitsune-test',
    name: 'Kitsune — ETL & Data Explorer',
    shortDescription:
      'End-to-end data pipeline that ingests Colombian open government data, stores it in PostgreSQL, and surfaces it through a FastAPI and an analytics dashboard.',
    description: `Kitsune is a full-stack ETL and data exploration platform built on top of Colombia's open government data portal (datos.gov.co). The dataset tracks Colombian nationals imprisoned abroad — their country of detention, crime type, legal status, age group, consulate, and headcount.

The pipeline is split into three independent layers:

ETL — A Python script fetches records from the government's REST API, normalizes inconsistent field names (e.g. fecha_publicaci_n → fecha_publicacion), casts types, and bulk-inserts into PostgreSQL using psycopg2's execute_values for efficiency. The script is idempotent and runs in its own virtual environment.

API — A FastAPI service exposes the data through four endpoints: list all records (paginated), retrieve by ID, filter by publication date, and full-text search by crime keyword. SQLAlchemy ORM handles all database interaction. Swagger and ReDoc documentation are auto-generated and available out of the box.

Dashboard — A Next.js frontend built with Tailwind CSS and Recharts. The interface features a stats bar (total records, unique countries, gender count, cumulative headcount), five combinable filters (crime keyword, country, gender, age group, legal status), a sortable data table, and three reactive charts — a horizontal bar chart of headcount by country, a bar chart of records by crime type, and a pie chart of gender distribution. All charts update live as filters are applied.

The entire stack — PostgreSQL, FastAPI, and the Next.js frontend — is orchestrated with Docker Compose and a single shell script handles environment setup, dependency installation, ETL execution, and server startup automatically.

Stack: Python · FastAPI · SQLAlchemy · PostgreSQL · psycopg2 · Next.js · Recharts · TailwindCSS · Docker Compose`,
    thumbnail: '/images/projects/kitsune-thumb.png',
    images: [],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Docker', 'ETL'],
    githubUrl: 'https://github.com/Alejandro-Suarez-Rincon/kitsune-test',
    template: 'wide',
  },
  {
    slug: 'chat-notification',
    name: 'ChatRoom — Local WiFi Multi-Channel Chat',
    shortDescription:
      'Real-time multi-channel chat over local WiFi — no accounts, no cloud. WebSocket messaging with per-channel toast notifications.',
    description: `ChatRoom is a real-time multi-channel chat that runs entirely on a local WiFi network — no internet, no accounts, no server in the cloud. Anyone on the same network opens the app, picks a username, and can join or create channels and exchange messages instantly.

The project is a TypeScript monorepo with two independent packages:

Core (backend) — An Express server with Socket.io handles all real-time communication. Clients emit a join room event to subscribe to a channel, then exchange messages through a message:server → message:client event pair that broadcasts to every socket in that room. The server reads its allowed CORS origin from an environment variable so it works from any IP on the local network.

Web (frontend) — A Next.js 14 App Router frontend styled with Tailwind CSS and NextUI. State is managed with a useReducer hook that tracks message history and unread counts per channel. When a message arrives in a channel the user is not currently viewing, Sonner fires a toast notification with the sender and message preview. Each username is mapped to a deterministic color from a 10-slot palette using a simple hash, so the same person always appears in the same color across all sessions.

The entire stack spins up with a single command: ./run.sh auto-detects the machine's local IP, writes the .env file, and starts both services via Docker Compose. Accessible at http://{ip}:3000 from any device on the network.

Stack: TypeScript · Next.js 14 · React · Socket.io · Express · Node.js · NextUI · Tailwind CSS · Sonner · Docker Compose`,
    thumbnail: '/images/projects/chat-thumb.png',
    images: [],
    tags: ['TypeScript', 'Next.js', 'Socket.io', 'Express', 'Node.js', 'Real-time', 'Docker'],
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
];
