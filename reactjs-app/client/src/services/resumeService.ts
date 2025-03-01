import axios from "axios";
import { Resume } from "../types/Resume";

export const createResume = async (resume: Resume) => {
  try {
    const response = await axios.post("http://localhost:4000/", {
      query: `
        mutation CreateResume($resume: ResumeInput!) {
          createResume(resume: $resume) {
            id
            user { fullName email phone }
            experience { jobTitle company }
          }
        }
      `,
      variables: { resume },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating resume:", error);
  }
};
