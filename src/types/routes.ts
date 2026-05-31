export type ProjectTemplate = 'standard' | 'wide' | 'minimal';

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  productionUrl?: string;
  template: ProjectTemplate;
  translations?: {
    es?: {
      shortDescription: string;
      description: string;
    };
  };
}

export interface WorkProject {
  name: string;
  url?: string;
  description: string;
  translations?: {
    es?: { description: string };
  };
}

export interface WorkExperience {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  projects?: WorkProject[];
  tags: string[];
  companyUrl?: string;
  translations?: {
    es?: { description: string };
  };
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status?: string;
  description?: string;
  translations?: {
    es?: {
      degree?: string;
      status?: string;
      description?: string;
    };
  };
}

export interface NavItem {
  label: string;
  href: string;
}
