export interface SocialLink {
  platform: string;
  url: string;
}

export interface User {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  profilePicture?: string;
  summary: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string; // Ensure ISO format before submission
  endDate: string; // Ensure ISO format before submission
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string; // Ensure ISO format
  endDate: string; // Ensure ISO format
  grade?: string;
}

export enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubRepo?: string;
}

export interface Certification {
  name: string;
  issuer: string; // ✅ Fixed `issuedBy` → `issuer`
  dateIssued: string; // Ensure ISO format
  credentialID?: string;
  link?: string;
}

export enum LanguageProficiency {
  Basic = "Basic",
  Intermediate = "Intermediate",
  Fluent = "Fluent",
  Native = "Native",
}

export interface Language {
  name: string;
  proficiency: LanguageProficiency;
}

export interface Resume {
  user: User;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  interests: string[];
}
