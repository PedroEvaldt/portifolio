export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ExternalLink = {
  label: string;
  href: string | null;
  isAvailable: boolean;
  unavailableLabel?: string;
  editNote?: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  isExternal?: boolean;
};

export type HeroData = {
  name: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctas: CtaLink[];
  terminalLines: string[];
};

export type AboutData = {
  title: string;
  body: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProjectLink = {
  github: ExternalLink;
  details: {
    label: string;
    href: string;
  };
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links: ProjectLink;
};

export type CaseStudySection = {
  title: string;
  items: string[];
};

export type CaseStudy = {
  projectSlug: string;
  title: string;
  sections: CaseStudySection[];
};

export type EducationData = {
  institution: string;
  program: string;
  focusAreas: string[];
};

export type ContactData = {
  title: string;
  body: string;
  links: {
    github: ExternalLink;
    linkedin: ExternalLink;
    email: ExternalLink;
  };
};

export type PortfolioData = {
  site: {
    repositoryUrl: string;
    deploymentUrl: string | null;
    ogImagePath: string | null;
  };
  person: {
    name: string;
    role: string;
    location: string;
  };
  navigation: NavigationItem[];
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  projects: Project[];
  caseStudies: CaseStudy[];
  education: EducationData;
  contact: ContactData;
};
