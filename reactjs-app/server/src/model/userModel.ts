import mongoose from "mongoose";

const SocialLinkSchema = new mongoose.Schema({
  platform: String,
  url: String,
});

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  profilePicture: String,
  summary: String,
  socialLinks: [SocialLinkSchema], // ✅ Fixed: Now it's an array of objects
});

const ExperienceSchema = new mongoose.Schema({
  jobTitle: String,
  company: String,
  location: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const EducationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  location: String,
  startDate: Date,
  endDate: Date,
  grade: String,
});

const SkillSchema = new mongoose.Schema({
  name: String,
  level: String,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
  githubRepo: String,
});

const CertificationSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  dateIssued: Date,
  credentialID: String,
  link: String,
});

const LanguageSchema = new mongoose.Schema({
  name: String,
  proficiency: String,
});

const ResumeSchema = new mongoose.Schema({
  user: UserSchema,
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [SkillSchema],
  projects: [ProjectSchema],
  certifications: [CertificationSchema],
  languages: [LanguageSchema],
  interests: [String],
});

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
