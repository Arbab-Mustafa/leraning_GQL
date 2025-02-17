import User from "../model/userModel";

export const getAllUser = async () => {
  const user = await User.find();

  if (!user) {
    return "No user found";
  }

  return user;
};
