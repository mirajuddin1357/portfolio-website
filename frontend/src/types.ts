export type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  medium?: string;
  whatsapp?: string;
  email?: string;
};

export type ProjectCategory = 'AI' | 'ML' | 'Data' | 'Web' | 'Journalism';

export type SkillCategory = 'Languages' | 'Frameworks' | 'Tools' | 'Cloud' | 'Databases' | 'MLOps';

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  logo: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  institute: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  logo: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}