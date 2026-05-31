import type { Translations } from '../types';

export const es: Translations = {
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    tagline: 'Ingeniero Full Stack · Colombia',
    bio: 'Ingeniero de sistemas que construye productos de extremo a extremo — desde la arquitectura y el diseño de bases de datos hasta las interfaces frontend y la infraestructura cloud. Actualmente especializándome en Big Data.',
  },
  skills: {
    languages: 'Lenguajes',
    frontend: 'Frontend',
    backend: 'Backend',
    data: 'Datos',
    infrastructure: 'Infraestructura',
    ai: 'IA / ML',
  },
  sections: {
    workExperience: 'Experiencia Laboral',
    personalProjects: 'Proyectos Personales',
    education: 'Educación',
    contact: 'Contacto',
    comingSoon: 'Proyectos personales — próximamente.',
  },
  counters: {
    companies: (n) => `${n} ${n === 1 ? 'empresa' : 'empresas'}`,
    projects: (n) => `${n} ${n === 1 ? 'proyecto' : 'proyectos'}`,
    entries: (n) => `${n} ${n === 1 ? 'entrada' : 'entradas'}`,
  },
  contact: {
    headline: 'Construyamos algo juntos.',
    sendMessage: 'Enviar mensaje ↗',
    openChat: 'Abrir chat ↗',
    callDirectly: 'Llamar directamente ↗',
    viewProfile: 'Ver perfil ↗',
  },
  projectTemplate: {
    back: 'Volver',
    backToWork: 'Volver al inicio',
    aboutTheProject: 'Sobre el proyecto',
    links: 'Enlaces',
    viewLiveSite: 'Ver sitio en vivo ↗',
    sourceCode: 'Código fuente ↗',
    github: 'GitHub ↗',
  },
  projectCard: {
    viewProject: 'Ver proyecto',
  },
  workCard: {
    projectsLabel: 'Proyectos',
  },
  themeToggle: {
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro',
  },
};
