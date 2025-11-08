
export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  result: string;
  year: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface Achievement {
  title: string;
  description: string;
}
