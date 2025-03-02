const typeDefs = `
  type SocialLink {
  platform: String
  url: String
}

input SocialLinkInput {
  platform: String
  url: String
}

type User {
  fullName: String
  email: String
  phone: String
  address: String
  profilePicture: String
  summary: String
  socialLinks: [SocialLink]  # Changed from [String] to [SocialLink]
}
  type Experience {
    jobTitle: String
    company: String
    location: String
    startDate: String
    endDate: String
    description: String
  }
  type Education {
    degree: String
    institution: String
    location: String
    startDate: String
    endDate: String
    grade: String
  }
  type Skill {
    name: String
    level: String
  }
  type Project {
    title: String
    description: String
    technologies: [String]
    link: String
    githubRepo: String
  }
  type Certification {
    name: String
    issuer: String
    dateIssued: String
    credentialID: String
    link: String
  }
  type Language {
    name: String
    proficiency: String
  }
  type Resume {
    id: ID!
    user: User
    experience: [Experience]
    education: [Education]
    skills: [Skill]
    projects: [Project]
    certifications: [Certification]
    languages: [Language]
    interests: [String]
  }
 
  input ResumeInput {
  user: UserInput
  experience: [ExperienceInput]
  education: [EducationInput]
  skills: [SkillInput]
  projects: [ProjectInput]
  certifications: [CertificationInput]
  languages: [LanguageInput]
  interests: [String]
}


   input UserInput {
  fullName: String
  email: String
  phone: String
  address: String
  profilePicture: String
  summary: String
  socialLinks: [SocialLinkInput]  # Changed from [String] to [SocialLinkInput]
}
  input ExperienceInput {
    jobTitle: String
    company: String
    location: String
    startDate: String
    endDate: String
    description: String
  }
  input EducationInput {
    degree: String
    institution: String
    location: String
    startDate: String
    endDate: String
    grade: String
  }
  input SkillInput {
    name: String
    level: String
  }
  input ProjectInput {
    title: String
    description: String
    technologies: [String]
    link: String
    githubRepo: String
  }
  input CertificationInput {
    name: String
    issuer: String
    dateIssued: String
    credentialID: String
    link: String
  }
  input LanguageInput {
    name: String
    proficiency: String
  }
     type Query {
    getResume(id: ID!): Resume
    getAllResume: [Resume]
  }
  type Mutation {
  createResume(resume: ResumeInput!): Resume
}
`;

export default typeDefs;
