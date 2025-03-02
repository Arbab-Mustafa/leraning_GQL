import Resume from "../model/userModel";

interface User {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  profilePicture: string;
  summary: string;
  socialLinks: string[];
}
interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}
interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
}
interface Skill {
  name: string;
  level: string;
}
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubRepo: string;
}
interface Certification {
  name: string;
  issuer: string;
  dateIssued: string;
  credentialID: string;
  link: string;
}
interface Language {
  name: string;
  proficiency: string;
}
interface ResumeInput {
  id: string;
  user: User;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  interests: string[];
}

export const createResume = async (
  _: any,
  { resume }: { resume?: ResumeInput } // Make resume optional to prevent destructuring errors
) => {
  if (!resume) {
    throw new Error("Resume input is required.");
  }

  try {
    // Destructuring all fields with default values to avoid errors
    const {
      user: {
        fullName = "",
        email = "",
        phone = "",
        address = "",
        profilePicture = "",
        summary = "",
        socialLinks = [],
      } = {},
      experience = [],
      education = [],
      skills = [],
      projects = [],
      certifications = [],
      languages = [],
      interests = [],
    } = resume;

    // Create a new Resume document
    const newResume = new Resume({
      user: {
        fullName,
        email,
        phone,
        address,
        profilePicture,
        summary,
        socialLinks,
      },
      experience: experience.map((exp) => ({
        jobTitle: exp.jobTitle || "",
        company: exp.company || "",
        location: exp.location || "",
        startDate: exp.startDate || "",
        endDate: exp.endDate || "",
        description: exp.description || "",
      })),
      education: education.map((edu) => ({
        degree: edu.degree || "",
        institution: edu.institution || "",
        location: edu.location || "",
        startDate: edu.startDate || "",
        endDate: edu.endDate || "",
        grade: edu.grade || "",
      })),
      skills: skills.map((skill) => ({
        name: skill.name || "",
        level: skill.level || "",
      })),
      projects: projects.map((proj) => ({
        title: proj.title || "",
        description: proj.description || "",
        technologies: proj.technologies || [],
        link: proj.link || "",
        githubRepo: proj.githubRepo || "",
      })),
      certifications: certifications.map((cert) => ({
        name: cert.name || "",
        issuer: cert.issuer || "",
        dateIssued: cert.dateIssued || "",
        credentialID: cert.credentialID || "",
        link: cert.link || "",
      })),
      languages: languages.map((lang) => ({
        name: lang.name || "",
        proficiency: lang.proficiency || "",
      })),
      interests,
    });

    // Save to the database
    await newResume.save();
    return newResume;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw new Error("Failed to create resume");
  }
};

export const getResume = async (_: any, { id }: { id: string }) => {
  try {
    const resume = await Resume.findById(id);
    if (!resume) {
      throw new Error("Resume not found");
    }
    return resume;
  } catch (error) {
    console.error(error);
  }
};

export const getAllResume = async () => {
  try {
    const allResume = await Resume.find();
    if (!allResume) {
      throw new Error("No resumes found");
    }
    return allResume;
  } catch (error) {
    console.error(error);
  }
};
