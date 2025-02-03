import User from "./model/userModel";
import Course from "./model/courseModel";
import Teacher from "./model/teacherModel";
import mongoose from "mongoose"; // Import mongoose for ObjectId validation

// ✅ Interfaces
interface UserProps {
  name: string;
  email: string;
}

interface CourseProps {
  title: string;
  enrolledUsers?: string[]; // Optional since a course can start without enrolled users
}

interface TeacherProps {
  name: string;
  courses?: string[]; // Optional since a teacher may not have courses initially
}

// ----------------------------------- ✅ Get All Users
export const userResolver = async () => {
  try {
    const users = await User.find().populate(["courses", "teachers"]);
    if (users.length === 0) {
      throw new Error("No users found");
    }
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

// ----------------------------------- ✅ Create User
export const createUser = async (_: any, { name, email }: UserProps) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const user = await User.create({ name, email });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

// ----------------------------------- ✅ Get All Courses
export const courseResolver = async () => {
  try {
    const courses = await Course.find().populate("enrolledUsers");
    if (courses.length === 0) {
      throw new Error("No courses found");
    }
    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};

// ----------------------------------- ✅ Create Course
export const createCourse = async (
  _: any,
  { title, enrolledUsers }: CourseProps
) => {
  try {
    // Validate if enrolledUsers exist
    let userIds = [];
    if (enrolledUsers && enrolledUsers.length > 0) {
      userIds = await User.find({ _id: { $in: enrolledUsers } }).select("_id");
      if (userIds.length !== enrolledUsers.length) {
        throw new Error("Some users were not found");
      }
    }

    const course = await Course.create({ title, enrolledUsers: userIds });
    return course;
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error("Failed to create course");
  }
};

// ----------------------------------- ✅ Enroll User in Course
export const enrollUserToCourse = async (
  _: any,
  { userId, courseId }: { userId: string; courseId: string }
) => {
  try {
    console.log("Validating user and course IDs...");
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(courseId)
    ) {
      throw new Error("Invalid user ID or course ID");
    }

    console.log("Fetching user and course...");
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      throw new Error("User or course not found");
    }

    console.log("Checking if user is already enrolled...");
    if (course.enrolledUsers.includes(userId)) {
      throw new Error("User is already enrolled in this course");
    }

    console.log("Enrolling user...");
    course.enrolledUsers.push(userId);
    await course.save();

    console.log("User enrolled successfully");
    return course;
  } catch (error) {
    console.error("Error enrolling user to course:", error);
    throw new Error("Failed to enroll user in course");
  }
};

// ----------------------------------- ✅ Get All Teachers
export const teacherResolver = async () => {
  try {
    const teachers = await Teacher.find().populate("courses");
    if (teachers.length === 0) {
      throw new Error("No teachers found");
    }
    return teachers;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw new Error("Failed to fetch teachers");
  }
};

// ----------------------------------- ✅ Create Teacher
export const createTeacher = async (_: any, { name }: { name: string }) => {
  try {
    const teacher = await Teacher.create({ name });
    return teacher;
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw new Error("Failed to create teacher");
  }
};

// ----------------------------------- ✅ Assign Teacher to Course
export const assignTeacherToCourse = async (
  _: any,
  { teacherId, courseId }: { teacherId: string; courseId: string }
) => {
  try {
    if (
      !mongoose.Types.ObjectId.isValid(teacherId) ||
      !mongoose.Types.ObjectId.isValid(courseId)
    ) {
      throw new Error("Invalid teacher ID or course ID");
    }

    const teacher = await Teacher.findById(teacherId);
    const course = await Course.findById(courseId);

    if (!teacher || !course) {
      throw new Error("Teacher or course not found");
    }

    if (teacher.courses.includes(courseId)) {
      throw new Error("Teacher is already assigned to this course");
    }

    teacher.courses.push(courseId);
    await teacher.save();

    return teacher;
  } catch (error) {
    console.error("Error assigning teacher to course:", error);
    throw new Error("Failed to assign teacher to course");
  }
};
