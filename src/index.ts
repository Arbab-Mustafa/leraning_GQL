import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectToMongoDB from "./database";
import dotenv from "dotenv";
import { UserDefs } from "./GraphqlTypes";
import {
  createCourse,
  createUser,
  userResolver,
  courseResolver,
  teacherResolver,
  createTeacher,
  enrollUserToCourse,
  assignTeacherToCourse,
} from "./GraphqlResolver";

// Load environment variables
dotenv.config();

const port = Number(process.env.PORT) || 4000;
const mongoURI = process.env.MONGO_URI as string;

connectToMongoDB(mongoURI);

const server = new ApolloServer({
  typeDefs: `
  ${UserDefs}
  `,
  resolvers: {
    Query: {
      user: userResolver,
      Course: courseResolver,
      Teacher: teacherResolver,
    },
    Mutation: {
      createUser: createUser,
      createCourse: createCourse,
      createTeacher: createTeacher,
      enrollUserToCourse: enrollUserToCourse,
      assignTeacherToCourse: assignTeacherToCourse,
    },
  },
});

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
