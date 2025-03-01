import ResumeForm from "../components/ResumeForm";
import { createResume } from "../services/resumeService";

const Home = () => {
  const handleSubmit = async (data: any) => {
    const response = await createResume(data);
    console.log("Resume Created:", response);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Resume Builder</h1>
      <ResumeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
