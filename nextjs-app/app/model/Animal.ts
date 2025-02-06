import mongoose, { Schema, Document } from "mongoose";

export interface IAnimal extends Document {
  name: string;
  type: string;
}

const AnimalSchema = new Schema<IAnimal>({
  name: { type: String, required: true },
  type: { type: String, required: true },
});

export default mongoose.models.Animal ||
  mongoose.model<IAnimal>("Animal", AnimalSchema);
