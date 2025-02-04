import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

let isConnected: boolean;

export const connectDB = async () => {
  if (isConnected) return; // Skip connection if already connected

  try {
    // Establish MongoDB connection
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit on error
  }
};
