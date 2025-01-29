import User from "./model/userModel";

interface UserProps {
  name: string;
  email: string;
}

// get all user resolver
export const userResolver = async () => {
  const user = await User.find();

  if (!user) {
    return "No user found + user";
  }

  return user;
};

// create user resolver

export const createUser = async (_: any, { name, email }: UserProps) => {
  const user = await User.create({ name, email });

  if (!user) {
    return "User not created";
  }

  return user;
};

export const deleteUser = async (_: any, { name }: { name: string }) => {
  try {
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      throw new Error("No user found with the given name");
    }

    return `User with name "${name}" deleted successfully`;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};
