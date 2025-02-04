import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  user: [];
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  //  pointing to the User model

  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.models.Course ||
  mongoose.model<ICourse>("Course", CourseSchema);
