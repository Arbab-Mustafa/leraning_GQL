//  user model / schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,

    unique: true,
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
