import User from "./model/userModel";
import Course from "./model/courseModel";
import Teacher from "./model/teacherModel";

interface UserProps {
  name: string;
  email: string;
}

interface CourseProps {
  title: string;
  enrolledUsers: string[];
}

interface TeacherProps {
  name: string;
  courses: string[];
  user: string[];
}

// get all user resolver
export const userResolver = async () => {
  const user = await User.find();

  if (!user) {
    return "No user found + user";
  }

  return user;
};

// create user resolver

export const createUser = async (_: any, { name, email }: UserProps) => {
  const user = await User.create({ name, email });

  if (!user) {
    return "User not created";
  }

  return user;
};

export const deleteUser = async (_: any, { name }: { name: string }) => {
  try {
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      throw new Error("No user found with the given name");
    }

    return `User with name "${name}" deleted successfully`;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};

// ---------------------------create course resolver

export const courseResolver = async () => {
  const course = await Course.find();

  if (!course) {
    return "No course found";
  }

  return course;
};

export const createCourse = async (_: any, { title }: CourseProps) => {
  const course = await Course.create({ title });

  if (!course) {
    return "Course not created";
  }

  return course;
};

//---------------------------------create teacher resolver

export const teacherResolver = async () => {
  const teacher = await Teacher.find();

  if (!teacher) {
    return "No teacher found";
  }

  return teacher;
};

export const createTeacher = async (_: any, { name }: TeacherProps) => {
  const teacher = await Teacher.create({ name });

  if (!teacher) {
    return "Teacher not created";
  }

  return teacher;
};
