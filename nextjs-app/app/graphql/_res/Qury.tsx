import Teacher from "../../model/Teacher";
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

const getTeachers = async () => {
  const teacher = await Teacher.find().populate("courses").populate("user");

  if (!teacher) {
    throw new Error("No teacher found");
  }

  return teacher;
};

export { getUsers, getCourses, getTeachers };
