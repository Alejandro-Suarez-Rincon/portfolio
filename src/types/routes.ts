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
}

export interface WorkProject {
  name: string;
  url?: string;
  description: string;
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
}

export interface NavItem {
  label: string;
  href: string;
}
