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
    id: "project-slot-1",
    title: "Project Slot 01",
    subtitle: "Reserved for the next build",
    category: "web",
    summary:
      "An empty slot waiting for my next project. Swap this card with real work by editing a single data file.",
    stack: ["TBD"],
    placeholder: true,
    metrics: [
      { label: "Status", value: "In progress" },
      { label: "Category", value: "Web" },
      { label: "Year", value: "—" },
    ],
  },
  {
    id: "project-slot-2",
    title: "Project Slot 02",
    subtitle: "Reserved for the next build",
    category: "web",
    summary:
      "Another placeholder card. Add a project here whenever it is ready to be shown.",
    stack: ["TBD"],
    placeholder: true,
    metrics: [
      { label: "Status", value: "In progress" },
      { label: "Category", value: "Web" },
      { label: "Year", value: "—" },
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
