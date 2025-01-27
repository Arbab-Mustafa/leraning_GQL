import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectToMongoDB from "./database";
import dotenv from "dotenv";
import { UserDefs } from "./GraphqlTypes";
import { userResolver } from "./GraphqlResolver";

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
    },
  },
});

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
