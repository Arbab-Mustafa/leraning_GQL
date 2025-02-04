import User from "../model/User";

export const resolvers = {
  Query: {
    async getUsers() {
      return await User.find();
    },
  },
  Mutation: {
    async addUser(_: any, { name, email }: { name: string; email: string }) {
      const newUser = new User({ name, email });
      await newUser.save();
      return newUser;
    },
  },
};
