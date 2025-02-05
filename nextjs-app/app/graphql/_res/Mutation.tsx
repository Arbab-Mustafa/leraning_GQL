/* eslint-disable @typescript-eslint/no-explicit-any */
import Teacher from "../../model/Teacher";
import Course from "../../model/Course";
import User from "../../model/User";

interface UserProp {
  name: string;
  email: string;
}

interface CourseProp {
  title: string;
  userId: string;
}

interface AssignCourseProp {
  userId: string;
  courseId: string;
}

interface AssignTeacherProp {
  name: string;
  courseId: string;
  teacherId: string;
}

const addUser = async (_: any, { name, email }: UserProp) => {
  const newUser = new User({ name, email });
  await newUser.save();
  return newUser;
};

const addCourse = async (_: any, { title }: CourseProp) => {
  const newCourse = new Course({ title });
  await newCourse.save();
  return newCourse;
};

const assingCourse = async (_: any, { userId, courseId }: AssignCourseProp) => {
  const user = await User.findById(userId);
  const course = await Course.findById(courseId);

  if (!user || !course) {
    throw new Error("User or Course not found");
  }

  course.user.push(user);

  await course.save();

  return course;
};

const addTeacher = async (_: any, { name }: AssignTeacherProp) => {
  const newTeacher = new Teacher({ name });

  await newTeacher.save();
  return newTeacher;
};

const assingTeacher = async (
  _: any,
  { courseId, teacherId }: AssignTeacherProp
) => {
  const course = await Course.findById(courseId);
  const teacher = await Teacher.findById(teacherId);

  if (!course || !teacher) {
    throw new Error(" Course or Teacher not found");
  }

  teacher.courses.push(course);

  await teacher.save();

  return teacher;
};

export { addUser, addCourse, assingCourse, assingTeacher, addTeacher };
