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

export { addUser, addCourse, assingCourse };
