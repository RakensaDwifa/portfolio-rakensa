import type {
  ExperienceItem,
  ProfileData,
  Project,
  TechItem,
} from "../types/portfolio";

export const profileData: ProfileData = {
  name: "Rakensa Dwifa Noverdiastra",
  shortName: "Rakensa Dwifa",
  role: "Web Developer",
  tagline: "Engineering Physics student & self-taught web developer",
  education: "Engineering Physics • Telkom University, Bandung",
  status: "Open to internships, freelance & collaborations",
  bio: "I build clean, responsive websites while studying the physics behind how things work. Curious by nature, I turn ideas into interfaces that are fast, accessible, and pleasant to use.",
  about: [
    "I am an Engineering Physics student at Telkom University Bandung with a strong interest in web development. Alongside my coursework, I actively learn web programming and keep refining my skills in this field.",
    "I bring a solid work ethic, clear team communication, leadership, the ability to multitask, and I am always target-oriented. Learning how to code is not always easy — but I enjoy the challenge.",
  ],
  interests: [
    "Web Development",
    "Responsive Design",
    "UI Engineering",
    "Physics & Engineering",
    "Problem Solving",
    "Continuous Learning",
  ],
  experienceStart: "Self-taught since 2023",
  avatarUrl: "/img/profile.webp",
  resumeUrl: "/cv/Rakensa-Dwifa-CV.pdf",
  location: "Bandung, Indonesia",
  email: "rakensadwifa@gmail.com",
  socials: [
    {
      key: "github",
      label: "GitHub",
      url: "https://github.com/RakensaDwifa",
      handle: "@RakensaDwifa",
    },
    {
      key: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/rakensadwifa/",
      handle: "@rakensadwifa",
    },
    {
      key: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@kensaaaaaaaa",
      handle: "@kensaaaaaaaa",
    },
    {
      key: "email",
      label: "Email",
      url: "mailto:rakensadwifa@gmail.com",
      handle: "rakensadwifa@gmail.com",
    },
  ],
};

export const techStackData: TechItem[] = [
  {
    name: "HTML5",
    layer: "foundation",
    iconKey: "html5",
    color: "#E34F26",
    roleTag: "Semantic Markup",
    usageContext: "Accessible, semantic page structure with clean document outlines.",
  },
  {
    name: "CSS3",
    layer: "foundation",
    iconKey: "css",
    color: "#1572B6",
    roleTag: "Layout & Styling",
    usageContext: "Flexbox, grid, responsive layouts and modern visual styling.",
  },
  {
    name: "JavaScript",
    layer: "foundation",
    iconKey: "javascript",
    color: "#F7DF1E",
    roleTag: "Interactivity",
    usageContext: "DOM logic, events and asynchronous behaviour for dynamic UIs.",
  },
  {
    name: "Tailwind CSS",
    layer: "framework",
    iconKey: "tailwindcss",
    color: "#06B6D4",
    roleTag: "Utility-first CSS",
    usageContext: "Design tokens, consistent spacing and fast responsive builds.",
  },
  {
    name: "React",
    layer: "framework",
    iconKey: "react",
    color: "#61DAFB",
    roleTag: "Component UI",
    usageContext: "Component-driven interfaces built with reusable, composable pieces.",
  },
  {
    name: "Next.js",
    layer: "framework",
    iconKey: "nextdotjs",
    color: "#0F172A",
    roleTag: "App Framework",
    usageContext: "Routing, rendering and performance for production web apps.",
  },
  {
    name: "Git",
    layer: "tooling",
    iconKey: "git",
    color: "#F05032",
    roleTag: "Version Control",
    usageContext: "Tracking changes with a clear, incremental commit history.",
  },
  {
    name: "GitHub",
    layer: "tooling",
    iconKey: "github",
    color: "#181717",
    roleTag: "Collaboration",
    usageContext: "Hosting repositories, reviewing code and deploying projects.",
  },
  {
    name: "Responsive Design",
    layer: "tooling",
    iconKey: "css",
    color: "#0D9488",
    roleTag: "Cross-device",
    usageContext: "Layouts that adapt cleanly from mobile to large desktop screens.",
  },
];

export const projectsData: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    subtitle: "This portfolio — rebuilt from scratch with Next.js",
    category: "web",
    year: "2026",
    summary:
      "A personal portfolio site presenting who I am, what I build, and how to reach me — designed with a bold neo-brutalist look and smooth, intentional motion.",
    description:
      "The project you are viewing right now. Originally a static HTML + Tailwind site, it was redesigned and rebuilt with Next.js, TypeScript and Framer Motion, with a focused design system and a content structure that is easy to extend.",
    architecture: [
      "Next.js App Router with TypeScript and a centralized data layer",
      "Tailwind CSS v4 design tokens for a consistent visual language",
      "Framer Motion for scroll reveals and micro-interactions",
      "Lenis for smooth, inertial scrolling",
      "Component-based sections that scale as new projects are added",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],
    highlights: [
      "Single-page, content-driven architecture",
      "Responsive from mobile to desktop",
      "Neo-brutalist coastal design system",
    ],
    challenges:
      "Designing a bold aesthetic that stays readable and professional, then keeping performance high while adding rich motion.",
    role: "Designer & Developer",
    githubUrl: "https://github.com/RakensaDwifa/RakensaDwifa.github.io",
    demoUrl: "https://rakensadwifa.github.io/",
    imageUrl: "/img/project-1.webp",
    imageFit: "cover",
    featured: true,
    metrics: [
      { label: "Role", value: "Design & Build" },
      { label: "Stack", value: "Next.js" },
      { label: "Type", value: "Personal" },
    ],
  },
  {
    id: "wismaku",
    title: "Wismaku",
    subtitle: "Lodging booking platform — customer app + admin panel",
    category: "web",
    year: "2026",
    summary:
      "A RedDoorz-style lodging booking prototype built as a hands-on learning project: a customer-facing marketplace plus a separate admin panel, both deployed on Vercel.",
    description:
      "Wismaku is a two-app product experiment. The customer demo presents a lodging marketplace with a clean booking flow and fictional data, while a separate admin app manages the same domain. The admin side is covered by Vitest tests and CI via GitHub Actions, so the project practices more than just UI — it practices shipping.",
    architecture: [
      "Customer prototype: React + Vite marketplace interface",
      "Admin panel: separate React app with Vitest tests + CI",
      "Configuration-first setup via .env.example",
      "Both apps deployed independently on Vercel",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
    ],
    highlights: [
      "Customer + admin shipped as two real apps",
      "Tested with Vitest in CI",
      "Live demo on Vercel",
    ],
    challenges:
      "Designing a consistent admin experience for the same data the customer app presents, and keeping both apps deployable individually.",
    role: "Designer & Developer",
    githubUrl: "https://github.com/RakensaDwifa/wismaku-demo",
    demoUrl: "https://wismaku-demo.vercel.app",
    imageUrl: "/projects/wismaku.webp",
    featured: true,
    metrics: [
      { label: "Role", value: "Design & Build" },
      { label: "Stack", value: "React + Vite" },
      { label: "Type", value: "Prototype" },
    ],
  },
  {
    id: "train-journey-tracker",
    title: "Train Journey Tracker",
    subtitle: "Journey & ticket expense tracker with a real database",
    category: "web",
    year: "2026",
    summary:
      "A full-stack tracker for train journeys and ticket expenses — Next.js with Drizzle ORM and shadcn/ui, built from a written PRD before a line of code.",
    description:
      "This project shows the full journey from requirements to schema: the PRD.md documents what the app should do, then Drizzle defines a type-safe database layer, and shadcn/ui provides the component foundation. It is the closest thing to a production project structure in my portfolio.",
    architecture: [
      "Next.js App Router with TypeScript",
      "Drizzle ORM schema + database layer",
      "shadcn/ui component system",
      "Requirements documented in PRD.md first",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "shadcn/ui",
    ],
    highlights: [
      "PRD-first development process",
      "Real database integration",
      "Type-safe data layer",
    ],
    challenges:
      "Thinking in schema before UI — modelling journeys and expenses cleanly so the tracker stays useful over time.",
    role: "Developer",
    githubUrl: "https://github.com/RakensaDwifa/train-journey-tracker",
    imageUrl: "/projects/train-journey-tracker.webp",
    metrics: [
      { label: "Role", value: "Build" },
      { label: "Stack", value: "Next.js + Drizzle" },
      { label: "Type", value: "Full-stack" },
    ],
  },
  {
    id: "todo-list-app",
    title: "Todo List App",
    subtitle: "DOM, state, localStorage & filtering — from the fundamentals",
    category: "web",
    year: "2026",
    summary:
      "A classic todo app in pure vanilla JavaScript that applies the core web concepts: DOM manipulation, state management, localStorage persistence and filter logic.",
    description:
      "Built with zero frameworks, this app was my way of mastering the foundations before reaching for tools. Add, toggle, delete and filter all work through plain JavaScript, with state surviving page reloads thanks to localStorage.",
    architecture: [
      "Plain HTML/CSS/JavaScript — no dependencies",
      "State managed in JavaScript, persisted with localStorage",
      "Add, toggle, delete and filter flows",
      "Live demo deployed on Vercel",
    ],
    stack: ["JavaScript", "HTML", "CSS", "localStorage"],
    highlights: [
      "Zero dependencies",
      "Persistence via localStorage",
      "Filtering & state management",
    ],
    challenges:
      "Keeping state and DOM in sync without a framework — the exact discipline the frameworks automate.",
    role: "Developer",
    githubUrl: "https://github.com/RakensaDwifa/todo-list-app",
    demoUrl: "https://todo-list-app-jet-phi.vercel.app",
    imageUrl: "/projects/todo-list-app.webp",
    metrics: [
      { label: "Role", value: "Developer" },
      { label: "Stack", value: "Vanilla JS" },
      { label: "Type", value: "Learning" },
    ],
  },
  {
    id: "snake-xp",
    title: "Snake XP",
    subtitle: "A classic snake game, rebuilt in TypeScript",
    category: "web",
    year: "2026",
    summary:
      "A retro snake game written in TypeScript with Vite — a fun way to tighten game logic, canvas rendering and keyboard input.",
    description:
      "Snake XP takes a familiar game and rebuilds it with TypeScript: a game loop, movement and collision detection, and an XP-like scoring progression. It is a compact project that demonstrates clean logic split into small modules.",
    architecture: [
      "Vite + TypeScript toolchain",
      "Game loop with movement & collision logic",
      "Canvas rendering",
      "Local dev scripts + README",
    ],
    stack: ["TypeScript", "Vite", "Canvas"],
    highlights: [
      "Game loop & collision logic",
      "Canvas rendering",
      "Live demo on Vercel",
    ],
    challenges:
      "Getting the timing and input handling right so the game feels responsive and fair.",
    role: "Developer",
    githubUrl: "https://github.com/RakensaDwifa/snake-x",
    demoUrl: "https://snake-x-nine.vercel.app",
    imageUrl: "/projects/snake-xp.webp",
    metrics: [
      { label: "Role", value: "Developer" },
      { label: "Stack", value: "TypeScript" },
      { label: "Type", value: "Game" },
    ],
  },
  {
    id: "ucapan-digital",
    title: "Ucapan Digital",
    subtitle: "Digital greeting card platform — auth, storage & payments",
    category: "web",
    year: "2026",
    summary:
      "A platform for sending digital greeting cards — love letters, birthday wishes, anniversaries — with Next.js, Supabase for auth & storage and Midtrans payment integration.",
    description:
      "Ucapan Digital (shipped as pesanmanis, building on the earlier ucapanpacar iteration) is my most full-stack project. It handles user accounts and media through Supabase, lets people create and share greeting cards, and processes payments through Midtrans — the closest I have come to a real product.",
    architecture: [
      "Next.js + TypeScript front and back",
      "Supabase for authentication, database & storage",
      "Midtrans payment integration",
      "Public share flows + admin side",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Midtrans",
      "Tailwind CSS",
    ],
    highlights: [
      "Full-stack with real payment flow",
      "Auth & storage via Supabase",
      "Live on Vercel",
    ],
    challenges:
      "Fitting together auth, storage and payments into one coherent flow that someone can actually use.",
    role: "Developer",
    githubUrl: "https://github.com/RakensaDwifa/pesanmanis",
    demoUrl: "https://ucapanpacar.vercel.app",
    imageUrl: "/projects/ucapan-digital.webp",
    metrics: [
      { label: "Role", value: "Full-stack" },
      { label: "Stack", value: "Next.js + Supabase" },
      { label: "Type", value: "Platform" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "edu-telkom",
    period: "2023 — Present",
    role: "Engineering Physics (Undergraduate)",
    organization: "Telkom University, Bandung",
    badge: "Formal Education",
    category: "education",
    description:
      "Studying the fundamentals of physics applied to engineering — building analytical thinking, modeling skills and a scientific approach that also shapes how I write and structure code.",
    highlights: [
      "Strong analytical & problem-solving foundation",
      "Modeling, mathematics and systems thinking",
      "Balancing coursework with continuous web development practice",
    ],
    tech: ["Physics", "Mathematics", "Systems Thinking", "Problem Solving"],
  },
  {
    id: "learning-web",
    period: "2023 — Present",
    role: "Self-taught Web Developer",
    organization: "Personal Projects",
    badge: "Continuous Learning",
    category: "learning",
    description:
      "Learning and building websites end-to-end with HTML, CSS, JavaScript and Tailwind CSS, and now exploring modern frameworks such as React and Next.js to build faster, more maintainable interfaces.",
    highlights: [
      "Responsive, mobile-first layouts",
      "Clean, semantic markup and accessible UI",
      "Version control with Git and GitHub",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Git", "React", "Next.js"],
  },
];
