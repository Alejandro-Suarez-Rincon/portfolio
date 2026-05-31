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
    translations: {
      es: {
        shortDescription:
          'Pipeline ETL de extremo a extremo que ingesta datos abiertos del gobierno colombiano, los almacena en PostgreSQL y los expone a través de una API FastAPI y un panel de análisis.',
        description: `Kitsune es una plataforma full-stack de ETL y exploración de datos construida sobre el portal de datos abiertos del gobierno colombiano (datos.gov.co). El dataset registra colombianos detenidos en el exterior — país de detención, tipo de delito, estado legal, grupo etario, consulado y cantidad de personas.

El pipeline está dividido en tres capas independientes:

ETL — Un script de Python obtiene registros de la API REST del gobierno, normaliza nombres de campos inconsistentes (p. ej. fecha_publicaci_n → fecha_publicacion), convierte tipos e inserta masivamente en PostgreSQL usando execute_values de psycopg2. El script es idempotente y corre en su propio entorno virtual.

API — Un servicio FastAPI expone los datos a través de cuatro endpoints: listar todos los registros (paginados), obtener por ID, filtrar por fecha de publicación y búsqueda de texto completo por palabra clave del delito. El ORM de SQLAlchemy gestiona toda la interacción con la base de datos. La documentación Swagger y ReDoc se genera automáticamente.

Dashboard — Un frontend Next.js con Tailwind CSS y Recharts. La interfaz incluye una barra de estadísticas (total de registros, países únicos, conteo por género, headcount acumulado), cinco filtros combinables (palabra clave del delito, país, género, grupo etario, estado legal), una tabla de datos ordenable y tres gráficos reactivos — barras horizontales de headcount por país, barras de registros por tipo de delito y torta de distribución por género. Todos los gráficos se actualizan en tiempo real al aplicar filtros.

Todo el stack — PostgreSQL, FastAPI y el frontend Next.js — está orquestado con Docker Compose, y un script de shell gestiona automáticamente la configuración del entorno, instalación de dependencias, ejecución del ETL e inicio de los servidores.

Stack: Python · FastAPI · SQLAlchemy · PostgreSQL · psycopg2 · Next.js · Recharts · TailwindCSS · Docker Compose`,
      },
    },
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
    translations: {
      es: {
        shortDescription:
          'Chat multicanal en tiempo real sobre WiFi local — sin cuentas ni nube. Mensajería WebSocket con notificaciones toast por canal.',
        description: `ChatRoom es un chat multicanal en tiempo real que funciona completamente en una red WiFi local — sin internet, sin cuentas, sin servidor en la nube. Cualquier persona en la misma red abre la app, elige un nombre de usuario y puede unirse o crear canales e intercambiar mensajes al instante.

El proyecto es un monorepo en TypeScript con dos paquetes independientes:

Core (backend) — Un servidor Express con Socket.io gestiona toda la comunicación en tiempo real. Los clientes emiten un evento join room para suscribirse a un canal, luego intercambian mensajes a través del par de eventos message:server → message:client que hace broadcast a todos los sockets en esa sala. El servidor lee el origen CORS permitido desde una variable de entorno para funcionar desde cualquier IP en la red local.

Web (frontend) — Un frontend Next.js 14 App Router con Tailwind CSS y NextUI. El estado se gestiona con un hook useReducer que rastrea el historial de mensajes y el conteo de no leídos por canal. Cuando llega un mensaje en un canal que el usuario no está viendo, Sonner lanza una notificación toast con el remitente y el preview del mensaje. Cada nombre de usuario se mapea a un color determinístico de una paleta de 10 colores mediante un hash simple, por lo que la misma persona siempre aparece con el mismo color en todas las sesiones.

Todo el stack se levanta con un solo comando: ./run.sh detecta automáticamente la IP local de la máquina, escribe el archivo .env e inicia ambos servicios mediante Docker Compose. Accesible en http://{ip}:3000 desde cualquier dispositivo en la red.

Stack: TypeScript · Next.js 14 · React · Socket.io · Express · Node.js · NextUI · Tailwind CSS · Sonner · Docker Compose`,
      },
    },
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
    translations: {
      es: {
        shortDescription:
          'Apunta la cámara a una hoja de papel, escribe una operación matemática y la IA la resuelve en tiempo real.',
        description: `CalculadoraIA captura video en vivo y resuelve operaciones matemáticas escritas a mano en una hoja de papel — sin teclado, sin interfaz tradicional.

Al iniciar, el usuario hace clic en las 4 esquinas de una hoja de papel. OpenCV aplica una corrección de perspectiva y divide el área en tres zonas de detección: primer número, operador y segundo número. Dos redes neuronales convolucionales procesan cada zona de forma independiente: una entrenada con MNIST para los dígitos del 0 al 9, y otra entrenada con un dataset personalizado para los operadores + - × ÷. Cuando ambos modelos superan el umbral de confianza, el resultado se renderiza como una superposición en tiempo real.

Los modelos vienen pre-entrenados y empaquetados en el repositorio, por lo que el proyecto corre completamente offline con un solo comando.

Stack: Python · TensorFlow · Keras · OpenCV · NumPy`,
      },
    },
  },
];
