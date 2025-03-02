import { useMutation } from "@apollo/client";
import ResumeForm from "./components/ResumeForm";
import CREATE_RESUME from "./graphql/query";

import { Resume } from "./types/Resume";

const App = () => {
  const [createResume, { loading, error }] = useMutation(CREATE_RESUME);

  const handleFormSubmit = async (data: Resume) => {
    console.log("Resume Data:", data);

    // Ensure all arrays exist before mapping
    const formattedData = {
      ...data,
      user: {
        ...data.user,
        socialLinks: (data.user.socialLinks || []).map((link) => ({
          platform: link?.platform?.trim() || "",
          url: link?.url?.trim() || "",
        })),
      },
      experience: (data.experience || []).map((exp) => ({
        ...exp,
        startDate: exp.startDate ? new Date(exp.startDate).toISOString() : null,
        endDate: exp.endDate ? new Date(exp.endDate).toISOString() : null,
      })),
      education: (data.education || []).map((edu) => ({
        ...edu,
        startDate: edu.startDate ? new Date(edu.startDate).toISOString() : null,
        endDate: edu.endDate ? new Date(edu.endDate).toISOString() : null,
      })),
      skills: (data.skills || []).map((skill) => ({
        name: skill?.name?.trim() || "",
        level: skill?.level?.trim() || "",
      })),
      projects: (data.projects || []).map((project) => ({
        ...project,
        technologies: project.technologies || [],
        githubRepo: project.githubRepo || "",
      })),
      certifications: (data.certifications || []).map((cert) => ({
        ...cert,
        dateIssued: cert.dateIssued
          ? new Date(cert.dateIssued).toISOString()
          : null,
      })),
      languages: (data.languages || []).map((lang) => ({
        name: lang?.name?.trim() || "",
        proficiency: lang?.proficiency?.trim() || "",
      })),
      interests: data.interests || [],
    };

    try {
      const { data } = await createResume({
        variables: { resume: formattedData },
      });

      console.log("Resume saved successfully:", data);
    } catch (error) {
      console.error("Error submitting resume:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ResumeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
