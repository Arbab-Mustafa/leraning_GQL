import ResumeForm from "./components/ResumeForm";
import { Resume } from "./types/Resume";

const App = () => {
  const handleFormSubmit = (data: Resume) => {
    console.log("Resume Data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ResumeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
