import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `

type Query{
    hello: String

}



`;
const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const Apollo_Server = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

Apollo_Server();
