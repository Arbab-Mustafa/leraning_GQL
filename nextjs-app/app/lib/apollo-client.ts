import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql", // Relative URL for Next.js API
  cache: new InMemoryCache(),
});

export default client;
