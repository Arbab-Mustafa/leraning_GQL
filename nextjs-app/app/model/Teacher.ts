import mongoose, { Schema, Document } from "mongoose";

export interface ITeacher extends Document {
  name: string;
  email: string;
  age: number;
  courses: [];
  user: [];
}

const TeacherSchema = new Schema<ITeacher>({
  name: { type: String, required: true },

  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.models.Teacher ||
  mongoose.model<ITeacher>("Teacher", TeacherSchema);
