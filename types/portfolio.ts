export type SocialKey = "github" | "instagram" | "tiktok" | "linkedin" | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  url: string;
  handle: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  education: string;
  status: string;
  bio: string;
  about: string[];
  interests: string[];
  experienceStart: string;
  avatarUrl: string;
  resumeUrl: string;
  location: string;
  email: string;
  socials: SocialLink[];
}

export type ProjectCategory = "web" | "mobile" | "other";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year?: string;
  summary: string;
  description?: string;
  architecture?: string[];
  stack: string[];
  highlights?: string[];
  challenges?: string;
  role?: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
  placeholder?: boolean;
  metrics?: ProjectMetric[];
}

export type TechLayer = "foundation" | "framework" | "tooling";

export interface TechItem {
  name: string;
  layer: TechLayer;
  iconKey: string;
  color: string;
  roleTag: string;
  usageContext: string;
}

export type ExperienceCategory = "education" | "project" | "learning";

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  badge: string;
  category: ExperienceCategory;
  description: string;
  highlights?: string[];
  tech?: string[];
}
