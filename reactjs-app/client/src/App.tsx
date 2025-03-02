import { useMutation } from "@apollo/client";
import ResumeForm from "./components/ResumeForm";

import { Resume } from "./types/Resume";
import { useState } from "react";
import CREATE_RESUME from "./graphql/query";

const App = () => {
  const [createResume, { loading, error }] = useMutation(CREATE_RESUME);
  const [submitting, setSubmitting] = useState(false);

  const formatResumeData = (data: Resume) => {
    return {
      ...data,
      user: {
        ...data.user,
        socialLinks: (data.user?.socialLinks || []).map((link) => ({
          platform: link?.platform?.trim() || "", // Ensure trimming only on strings
          url: link?.url?.trim() || "",
        })),
      },
      experience: (data.experience || []).map((exp) => {
        const startDate = exp.startDate ? new Date(exp.startDate) : null;
        const endDate = exp.endDate ? new Date(exp.endDate) : null;

        if (startDate && endDate && startDate > endDate) {
          console.warn(
            "Start date is after end date in experience. Swapping..."
          );
          return {
            jobTitle: exp.jobTitle?.trim() || "",
            company: exp.company?.trim() || "",
            location: exp.location?.trim() || "",
            startDate: endDate?.toISOString(),
            endDate: startDate?.toISOString(),
            description: exp.description?.trim() || "",
          };
        }

        return {
          jobTitle: exp.jobTitle?.trim() || "",
          company: exp.company?.trim() || "",
          location: exp.location?.trim() || "",
          startDate: startDate?.toISOString() || null,
          endDate: endDate?.toISOString() || null,
          description: exp.description?.trim() || "",
        };
      }),
      education: (data.education || []).map((edu) => ({
        degree: edu.degree?.trim() || "",
        institution: edu.institution?.trim() || "",
        location: edu.location?.trim() || "",
        startDate: edu.startDate ? new Date(edu.startDate).toISOString() : null,
        endDate: edu.endDate ? new Date(edu.endDate).toISOString() : null,
        grade: edu.grade?.trim() || "",
      })),
      skills: (data.skills || []).map((skill) => ({
        name: skill?.name?.trim() || "",
        level: skill?.level?.trim() || "",
      })),
      projects: (data.projects || []).map((project) => ({
        title: project?.title?.trim() || "",
        description: project?.description?.trim() || "",
        technologies: Array.isArray(project?.technologies)
          ? project.technologies.map((tech) => tech.trim())
          : [],
        githubRepo: project?.githubRepo?.trim() || "",
      })),
      certifications: (data.certifications || []).map((cert) => ({
        name: cert.name?.trim() || "",
        issuer: cert.issuer?.trim() || "", // ✅ Fixed `issuedBy` → `issuer`
        dateIssued: cert.dateIssued
          ? new Date(cert.dateIssued).toISOString()
          : null,
        credentialID: cert.credentialID?.trim() || "",
        link: cert.link?.trim() || "",
      })),
      languages: (data.languages || []).map((lang) => ({
        name: lang?.name?.trim() || "",
        proficiency: lang?.proficiency?.trim() || "",
      })),
      interests: (data.interests || []).map(
        (interest) => interest?.trim() || ""
      ),
    };
  };

  const handleFormSubmit = async (data: Resume) => {
    setSubmitting(true);
    console.log("Raw Resume Data:", data);

    const formattedData = formatResumeData(data);

    console.log(
      "Formatted Resume Data:",
      JSON.stringify(formattedData, null, 2)
    );

    try {
      const response = await createResume({
        variables: { resume: formattedData },
      });
      console.log("Resume saved successfully:", response.data);
    } catch (error) {
      console.error("Error submitting resume:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {submitting ? (
        <p className="text-lg text-blue-600">Submitting...</p>
      ) : (
        <ResumeForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
