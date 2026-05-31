export type Locale = 'en' | 'es';

export interface Translations {
  nav: {
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    tagline: string;
    bio: string;
  };
  skills: {
    languages: string;
    frontend: string;
    backend: string;
    data: string;
    infrastructure: string;
    ai: string;
  };
  sections: {
    workExperience: string;
    personalProjects: string;
    education: string;
    contact: string;
    comingSoon: string;
  };
  counters: {
    companies: (n: number) => string;
    projects: (n: number) => string;
    entries: (n: number) => string;
  };
  contact: {
    headline: string;
    sendMessage: string;
    openChat: string;
    callDirectly: string;
    viewProfile: string;
  };
  projectTemplate: {
    back: string;
    backToWork: string;
    aboutTheProject: string;
    links: string;
    viewLiveSite: string;
    sourceCode: string;
    github: string;
  };
  projectCard: {
    viewProject: string;
  };
  workCard: {
    projectsLabel: string;
  };
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
}
