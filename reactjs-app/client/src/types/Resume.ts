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
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

export interface Skill {
  name: string;
  level: string;
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
  issuer: string;
  dateIssued: string;
  credentialID?: string;
  link?: string;
}

export interface Language {
  name: string;
  proficiency: string;
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
