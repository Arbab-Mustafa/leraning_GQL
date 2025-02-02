const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const Course = mongoose.model("Course", courseSchema);

export default Course;
