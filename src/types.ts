export interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
  metrics: string[];
}

export interface Achievement {
  metric: string;
  label: string;
  context: string;
}

export interface Project {
  title: string;
  stack: string;
  bullets: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  basics: Basics;
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: string[];
}
