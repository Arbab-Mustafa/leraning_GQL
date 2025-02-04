import Course from "../../model/Course";
import User from "../../model/User";

const getUsers = async () => {
  return await User.find();
};

const getCourses = async () => {
  const course = await Course.find().populate("user");

  if (!course) {
    throw new Error("No course found");
  }

  return course;
};

export { getUsers, getCourses };
