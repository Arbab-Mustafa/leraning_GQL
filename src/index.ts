import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectToMongoDB from "./database";

const port = Number(process.env.PORT) || 4000;
const mongoURI = process.env.MONGO_URI as string;

connectToMongoDB(mongoURI);

const server = new ApolloServer({
  typeDefs: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello, world!",
    },
  },
});

startStandaloneServer(server, {
  listen: { port },
}).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
