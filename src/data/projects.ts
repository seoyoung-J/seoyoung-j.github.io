export type ProjectDecision = {
  title: string;
  reasoning: string[];
  alternatives: string[];
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectExperiment = {
  name: string;
  condition: string;
  result: string;
  decision: string;
};

export type ProjectTroubleshooting = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  section?: string;
};

export type ProjectCaseStudy = {
  overview?: string[];
  problem?: string[];
  constraints?: string[];
  approach?: string[];
  decisions?: ProjectDecision[];
  systemFlow?: string[];
  modeling?: {
    description?: string[];
    experiments?: ProjectExperiment[];
  };
  serviceIntegration?: string[];
  techStack?: string[];
  metrics?: ProjectMetric[];
  resultDescription?: string[];
  troubleshooting?: ProjectTroubleshooting[];
  learnings?: string[];
  additionalContext?: string[];
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  featured: boolean;
  order: number;
  showOnHome: boolean;
  period: string;
  summary: string;
  highlight: string;
  role: string;
  teamSize: string;
  projectType: string;
  impact: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
  }[];
  video?: string;
  caseStudy?: ProjectCaseStudy;
};
