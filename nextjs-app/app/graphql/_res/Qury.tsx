import User from "../../model/User";

const getUsers = async () => {
  return await User.find();
};

export { getUsers };
