import User from "../../model/User";

interface UserProp {
  name: string;
  email: string;
}

const addUser = async (_: any, { name, email }: UserProp) => {
  const newUser = new User({ name, email });
  await newUser.save();
  return newUser;
};

export { addUser };
