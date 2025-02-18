import Course from "../model/courseModel";
import User from "../model/userModel";

interface User {
  name: string;
  email: string;
}

interface Course {
  title: string;
  description: string;
}

interface AssingCourseToUser {
  courseId: string;
  userId: string;
}

export const getAllUser = async () => {
  try {
    const users = await User.find().populate("course", "title description");
    console.log("Fetched Users with Populated Course:", users); // Debugging
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }
};

export const createUser = async (_: any, { name, email }: User) => {
  const user = await User.create({
    name,
    email,
  });

  return user;
};

export const getCourses = async () => {
  const course = await Course.find();
  if (!course) {
    return "No course found";
  }

  return course;
};

export const createCourse = async (_: any, { title, description }: Course) => {
  const course = await Course.create({
    title,
    description,
  });

  return course;
};

export const assignCourseToUser = async (
  _: any,
  { courseId, userId }: { courseId: string; userId: string }
) => {
  try {
    console.log("Assigning Course to User", { courseId, userId });

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Find course
    const course = await Course.findById(courseId);
    if (!course) {
      return { success: false, message: "Course not found" };
    }

    // Assign course
    user.course = course._id;
    await user.save();

    // Populate course after saving user
    const populatedUser = await User.findById(userId).populate("course");

    console.log("Updated User Data:", populatedUser);

    return {
      success: true,
      message: "Course assigned successfully",
      user: populatedUser,
    };
  } catch (error: any) {
    console.error("Error assigning course:", error);
    return { success: false, message: error.message };
  }
};
