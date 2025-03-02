import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Resume } from "../types/Resume";
import InputField from "./Input";

const steps = [
  "Personal Info",
  "Experience",
  "Skills",
  "Education",
  "Projects",
  "Certifications",
  "Languages",
  "Interests",
];

const ResumeForm = ({ onSubmit }: { onSubmit: (data: Resume) => void }) => {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, control } = useForm<Resume>();

  const { fields: experiences, append: addExperience } = useFieldArray({
    control,
    name: "experience",
  });
  const { fields: skills, append: addSkill } = useFieldArray({
    control,
    name: "skills",
  });
  const { fields: projects, append: addProject } = useFieldArray({
    control,
    name: "projects",
  });
  const { fields: certifications, append: addCertification } = useFieldArray({
    control,
    name: "certifications",
  });
  const { fields: languages, append: addLanguage } = useFieldArray({
    control,
    name: "languages",
  });
  const { fields: interests, append: addInterest } = useFieldArray({
    control,
    name: "interests",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl w-[40rem] mx-auto bg-white p-8 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">{steps[step]}</h2>

      {/* Step 1: Personal Info */}
      {step === 0 && (
        <div className="space-y-4">
          <InputField label="Full Name" register={register("user.fullName")} />
          <InputField
            label="Email"
            type="email"
            register={register("user.email")}
          />
          <InputField label="Phone" register={register("user.phone")} />
          <InputField label="Address" register={register("user.address")} />
          <InputField label="Summary" register={register("user.summary")} />
        </div>
      )}

      {/* Step 2: Experience */}
      {step === 1 && (
        <div className="space-y-4">
          {experiences.map((_, index) => (
            <div key={index} className="border-b pb-4">
              <InputField
                label="Job Title"
                register={register(`experience.${index}.jobTitle`)}
              />
              <InputField
                label="Company"
                register={register(`experience.${index}.company`)}
              />
              <InputField
                label="Location"
                register={register(`experience.${index}.location`)}
              />
              <InputField
                label="Start Date"
                type="date"
                register={register(`experience.${index}.startDate`)}
              />
              <InputField
                label="End Date"
                type="date"
                register={register(`experience.${index}.endDate`)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addExperience({
                jobTitle: "",
                company: "",
                location: "",
                startDate: "",
                endDate: "",
              })
            }
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Experience
          </button>
        </div>
      )}

      {/* Step 3: Skills */}
      {step === 2 && (
        <div className="space-y-4">
          {skills.map((_, index) => (
            <div key={index} className="border-b pb-2">
              <InputField
                label="Skill Name"
                register={register(`skills.${index}.name`)}
              />
              <InputField
                label="Proficiency Level"
                register={register(`skills.${index}.level`)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addSkill({ name: "", level: "" })}
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Skill
          </button>
        </div>
      )}

      {/* Step 4: Education */}
      {step === 3 && (
        <div className="space-y-4">
          <InputField
            label="Degree"
            register={register("education.0.degree")}
          />
          <InputField
            label="Institution"
            register={register("education.0.institution")}
          />
          <InputField
            label="Location"
            register={register("education.0.location")}
          />
          <InputField
            label="Start Date"
            type="date"
            register={register("education.0.startDate")}
          />
          <InputField
            label="End Date"
            type="date"
            register={register("education.0.endDate")}
          />
        </div>
      )}

      {/* Step 5: Projects */}
      {step === 4 && (
        <div className="space-y-4">
          {projects.map((_, index) => (
            <div key={index} className="border-b pb-2">
              <InputField
                label="Project Title"
                register={register(`projects.${index}.title`)}
              />
              <InputField
                label="Description"
                register={register(`projects.${index}.description`)}
              />
              <InputField
                label="Technologies"
                register={register(`projects.${index}.technologies.0`)}
              />
              <InputField
                label="GitHub Repo"
                register={register(`projects.${index}.githubRepo`)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addProject({
                title: "",
                description: "",
                technologies: [""],
                githubRepo: "",
              })
            }
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Project
          </button>
        </div>
      )}

      {/* Step 6: Certifications */}
      {step === 5 && (
        <div className="space-y-4">
          {certifications.map((_, index) => (
            <div key={index} className="border-b pb-2">
              <InputField
                label="Certification Name"
                register={register(`certifications.${index}.name`)}
              />
              <InputField
                label="Issued By"
                register={register(`certifications.${index}.issuedBy`)}
              />
              <InputField
                label="Date Issued"
                type="date"
                register={register(`certifications.${index}.dateIssued`)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addCertification({ name: "", issuedBy: "", dateIssued: "" })
            }
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Certification
          </button>
        </div>
      )}

      {/* Step 7: Languages */}
      {step === 6 && (
        <div className="space-y-4">
          {languages.map((_, index) => (
            <div key={index} className="border-b pb-2">
              <InputField
                label="Language"
                register={register(`languages.${index}.name`)}
              />
              <InputField
                label="Proficiency Level"
                register={register(`languages.${index}.proficiency`)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addLanguage({ name: "", proficiency: "" })}
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Language
          </button>
        </div>
      )}

      {/* Step 8: Interests */}
      {step === 7 && (
        <div className="space-y-4">
          {interests.map((_, index) => (
            <InputField
              key={index}
              label="Interest"
              register={register(`interests.${index}`)}
            />
          ))}
          <button
            type="button"
            onClick={() => addInterest("")}
            className="w-full bg-green-500 text-white py-2 mt-2 rounded-lg"
          >
            + Add Interest
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="bg-gray-400 text-white py-2 px-6 rounded-lg"
          >
            Previous
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-lg"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default ResumeForm;
