import type { Translations } from '../types';

export const en: Translations = {
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    tagline: 'Full Stack Engineer · Colombia',
    bio: 'Systems engineer building end-to-end products — from architecture and database design to frontend interfaces and cloud infrastructure. Currently specializing in Big Data.',
  },
  skills: {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    data: 'Data',
    infrastructure: 'Infrastructure',
  },
  sections: {
    workExperience: 'Work Experience',
    personalProjects: 'Personal Projects',
    education: 'Education',
    contact: 'Contact',
    comingSoon: 'Personal projects — coming soon.',
  },
  counters: {
    companies: (n) => `${n} ${n === 1 ? 'company' : 'companies'}`,
    projects: (n) => `${n} ${n === 1 ? 'project' : 'projects'}`,
    entries: (n) => `${n} ${n === 1 ? 'entry' : 'entries'}`,
  },
  contact: {
    headline: "Let's build something together.",
    sendMessage: 'Send a message ↗',
    openChat: 'Open chat ↗',
    callDirectly: 'Call directly ↗',
  },
  projectTemplate: {
    back: 'Back',
    backToWork: 'Back to work',
    aboutTheProject: 'About the project',
    links: 'Links',
    viewLiveSite: 'View live site ↗',
    sourceCode: 'Source code ↗',
    github: 'GitHub ↗',
  },
  projectCard: {
    viewProject: 'View project',
  },
  workCard: {
    projectsLabel: 'Projects',
  },
  themeToggle: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
};
