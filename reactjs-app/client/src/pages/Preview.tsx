import { Resume } from "../types/Resume";

const Preview = ({ resume }: { resume: Resume }) => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold">{resume.user.fullName}</h1>
      <p className="text-gray-600">
        {resume.user.email} | {resume.user.phone}
      </p>

      <h2 className="text-xl font-semibold mt-4">Experience</h2>
      {resume.experience.map((exp, index) => (
        <div key={index} className="p-2 border-b">
          <h3 className="font-bold">
            {exp.jobTitle} at {exp.company}
          </h3>
          <p className="text-gray-500">
            {exp.startDate} - {exp.endDate}
          </p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Preview;
