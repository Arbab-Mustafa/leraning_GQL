const resolvers = {
  Query: {
    hello: () => "Hello Worldc2",
    getUsers: () => [
      {
        id: "1",
        username: "user1",
        email: "",
      },
    ],
  },
};

export default resolvers;
