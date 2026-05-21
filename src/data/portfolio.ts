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
      {
        label: "Download CV",
        href: "/cv-pedro-evaldt.pdf",
        variant: "ghost",
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
        "Single Go binary exposes both an HTTP API and a CLI — one tool for programmatic and human access.",
        "Persistence is fully explicit: goose handles schema migrations, sqlc generates type-safe query functions from SQL definitions.",
        "Docker isolates the development database, making the environment reproducible with a single command.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/PedroEvaldt/recall",
          isAvailable: true,
        },
        details: { label: "Details", href: "#case-study-recall" },
      },
    },
    {
      title: "Finance Tracker",
      slug: "finance-tracker",
      description:
        "Personal finance tracking application focused on organizing expenses and financial records.",
      technologies: ["Python", "Finance", "Data modeling", "Automation"],
      highlights: [
        "Models financial records around practical personal tracking workflows, not generic CRUD.",
        "Data structures chosen to reflect real spending categories and time-based grouping.",
        "Structured to add reports, filtering and CSV export without rearchitecting the core.",
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
        "SHA-1 hashing and zlib compression applied to each object following Git's exact binary format — no shortcuts.",
        "Clone implemented over the Smart HTTP protocol, negotiating refs and pack-files against real remote repositories.",
        "Built from the protocol spec rather than wrapping an existing Git library, covering tree serialization and commit graphs.",
      ],
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/PedroEvaldt/Git-Simulator",
          isAvailable: true,
        },
        details: { label: "Details", href: "#case-study-git-simulator" },
      },
    },
    {
      title: "Bank App",
      slug: "bank-app",
      description:
        "C++ application with PostgreSQL and Docker, using SOCI for persistence.",
      technologies: ["C++", "PostgreSQL", "Docker", "SOCI"],
      highlights: [
        "Integrates a C++ application with PostgreSQL via SOCI, avoiding an ORM for direct SQL control.",
        "Docker provides a reproducible database environment without requiring a local PostgreSQL installation.",
        "Transaction-oriented design mirrors real banking operations at the application layer.",
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
        "Fetches messages directly from the IMAP server — no hosted intermediary or third-party service required.",
        "Transforms raw mailbox data into a structured local file, turning retrieval into immediate organization.",
        "Self-contained Go binary: the entire automation runs as a single command with no runtime dependencies.",
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
  caseStudies: [
    {
      projectSlug: "recall",
      title: "Case study: Recall",
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
            "Use Go for a small, fast HTTP server and CLI — both in one binary.",
            "Use PostgreSQL with sqlc and goose to keep persistence explicit and maintainable.",
            "Use Docker to make the development database reproducible.",
          ],
        },
        {
          title: "Implementation highlights",
          items: [
            "CLI commands map directly to practical note workflows.",
            "Database migrations define the storage model clearly and incrementally.",
            "Generated SQL code keeps database access type-safe without a heavy ORM.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Balancing a simple CLI experience with a backend that can evolve independently.",
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
    {
      projectSlug: "git-simulator",
      title: "Case study: Git Simulator",
      sections: [
        {
          title: "Problem",
          items: [
            "Git internals — object storage, tree serialization, commit history and the clone protocol — are typically invisible when using the tool. Understanding them requires reading the source or reimplementing them.",
          ],
        },
        {
          title: "Technical decisions",
          items: [
            "Python for fast iteration and native support for binary operations and hashing.",
            "No external Git library: everything built from the protocol spec, not wrapped around an existing implementation.",
            "Target Smart HTTP for clone to cover real-world protocol negotiation, not just local object copy.",
          ],
        },
        {
          title: "Implementation highlights",
          items: [
            "SHA-1 hashing and zlib compression applied per object following Git's exact binary format.",
            "Tree entries serialized with mode, name and raw SHA bytes as the spec requires.",
            "Smart HTTP clone negotiated via /info/refs and /git-upload-pack against real remote repositories.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Git's binary wire format requires byte-exact serialization — small mistakes produce silently corrupt objects.",
            "Pack-file handling required understanding delta encoding used to compress object streams.",
          ],
        },
        {
          title: "Next steps",
          items: [
            "Implement push support via Smart HTTP.",
            "Add ref tracking and branch awareness.",
            "Support delta-compressed pack-file reconstruction.",
          ],
        },
      ],
    },
  ],
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
