import type { PortfolioData } from "@/types/portfolio";

const unpublishedRepositoryNote =
  "Repository not published yet. Add the URL in src/data/portfolio.ts when it becomes public.";

export const portfolio: PortfolioData = {
  site: {
    repositoryUrl: "https://github.com/PedroEvaldt/portifolio",
    deploymentUrl: "https://portifolio-omega-gules.vercel.app/",
    ogImagePath: null,
  },
  person: {
    name: "Pedro Evaldt",
    role: "Software Developer",
    location: "Porto Alegre, Brazil",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Pedro Evaldt",
    eyebrow: "Computer Science student at UFRGS",
    headline: "Software Developer focused on backend, systems and practical tools.",
    subheadline:
      "Computer Science student at UFRGS building projects with Go, Python, PostgreSQL, Docker and Linux.",
    ctas: [
      { label: "View projects", href: "#projects", variant: "primary" },
      {
        label: "GitHub",
        href: "https://github.com/PedroEvaldt",
        variant: "secondary",
        isExternal: true,
      },
      { label: "Contact", href: "#contact", variant: "ghost" },
    ],
    terminalLines: [
      "$ go test ./...",
      "$ docker compose up postgres",
      "$ python backtest.py --strategy momentum",
      "$ recall search systems-notes",
    ],
  },
  about: {
    title: "About",
    body: [
      "I am a Computer Science student at UFRGS focused on backend development, systems, databases and practical developer tools.",
      "My learning process is project-driven: I build real tools, study the tradeoffs behind them and improve the implementation through iteration.",
    ],
  },
  skills: [
    {
      title: "Languages",
      items: ["Go", "Python", "C", "C++", "SQL"],
    },
    {
      title: "Backend",
      items: ["HTTP APIs", "PostgreSQL", "Docker", "sqlc", "goose"],
    },
    {
      title: "Tools",
      items: ["Linux", "Git", "GitHub", "CI/CD", "Neovim", "tmux"],
    },
    {
      title: "Interests",
      items: ["AI tools", "systems programming", "automation", "testing"],
    },
  ],
  projects: [
    {
      title: "Recall",
      slug: "recall",
      description:
        "HTTP server and CLI in Go for storing and searching personal notes.",
      technologies: ["Go", "PostgreSQL", "sqlc", "goose", "Docker", "Cobra"],
      highlights: [
        "Combines a backend API with a command-line workflow.",
        "Uses database migrations and generated type-safe SQL access.",
        "Designed around a local-first personal knowledge workflow.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/PedroEvaldt/recall",
          isAvailable: true,
        },
        details: { label: "Details", href: "#case-study" },
      },
    },
    {
      title: "Finance Tracker",
      slug: "finance-tracker",
      description:
        "Personal finance tracking application focused on organizing expenses and financial records.",
      technologies: ["Python", "Finance", "Data modeling", "Automation"],
      highlights: [
        "Organizes financial data around practical personal tracking workflows.",
        "Keeps the project focused on clear records and maintainable data structures.",
        "Provides a foundation for future reports, metrics and automation.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/PedroEvaldt/Finance-tracker",
          isAvailable: true,
        },
        details: { label: "Details", href: "#projects" },
      },
    },
    {
      title: "Git Simulator",
      slug: "git-simulator",
      description:
        "Educational implementation of internal Git commands in Python, including objects, trees, commits and clone via Smart HTTP.",
      technologies: ["Python", "Git internals", "Smart HTTP", "CLI"],
      highlights: [
        "Implements core Git object storage concepts for learning.",
        "Builds trees and commits from low-level primitives.",
        "Explores clone behavior through the Smart HTTP protocol.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/PedroEvaldt/Git-Simulator",
          isAvailable: true,
        },
        details: { label: "Details", href: "#projects" },
      },
    },
    {
      title: "Bank App",
      slug: "bank-app",
      description:
        "C++ application with PostgreSQL and Docker, using SOCI for persistence.",
      technologies: ["C++", "PostgreSQL", "Docker", "SOCI"],
      highlights: [
        "Connects a C++ application to relational persistence.",
        "Uses Docker to make the database environment reproducible.",
        "Practices transaction-oriented application design.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: null,
          isAvailable: false,
          unavailableLabel: "Repository not public",
          editNote: unpublishedRepositoryNote,
        },
        details: { label: "Details", href: "#projects" },
      },
    },
    {
      title: "Webmail Organizer",
      slug: "webmail-organizer",
      description:
        "Go IMAP client for fetching emails and generating an organized local file.",
      technologies: ["Go", "IMAP", "Automation", "Local files"],
      highlights: [
        "Automates email retrieval through IMAP.",
        "Transforms mailbox data into a local organized output.",
        "Focuses on a practical workflow instead of a hosted backend.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: null,
          isAvailable: false,
          unavailableLabel: "Repository not public",
          editNote: unpublishedRepositoryNote,
        },
        details: { label: "Details", href: "#projects" },
      },
    },
  ],
  featuredCaseStudy: {
    projectSlug: "recall",
    title: "Featured case study: Recall",
    sections: [
      {
        title: "Problem",
        items: [
          "Personal notes are easy to create but hard to retrieve when they live across disconnected files and tools.",
        ],
      },
      {
        title: "Technical decisions",
        items: [
          "Use Go for a small, fast HTTP server and CLI.",
          "Use PostgreSQL with sqlc and goose to keep persistence explicit and maintainable.",
          "Use Docker to make the development database reproducible.",
        ],
      },
      {
        title: "Implementation highlights",
        items: [
          "CLI commands map to practical note workflows.",
          "Database migrations define the storage model clearly.",
          "Generated SQL code keeps database access type-safe.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Balancing a simple CLI experience with a backend that can evolve.",
          "Keeping the schema useful without over-designing the first version.",
        ],
      },
      {
        title: "Next steps",
        items: [
          "Improve search ranking and filtering.",
          "Add better import and export workflows.",
          "Expand tests around API and CLI behavior.",
        ],
      },
    ],
  },
  education: {
    institution: "UFRGS",
    program: "Computer Science",
    focusAreas: [
      "backend",
      "databases",
      "systems",
      "Linux",
      "AI tools",
      "software engineering",
    ],
  },
  contact: {
    title: "Contact",
    body: "Open to technical conversations, project feedback and opportunities aligned with backend, systems and developer tools.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/PedroEvaldt",
        isAvailable: true,
      },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pedro-evaldt-b1b504357/",
        isAvailable: true,
      },
      email: {
        label: "Email",
        href: "mailto:pedro.fossati@inf.ufrgs.br",
        isAvailable: true,
      },
    },
  },
};
