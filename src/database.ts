import mongoose from "mongoose";

interface MongoConnection {
  connection: {
    host: string;
  };
}

const connectToMongoDB = async (mongoURI: string): Promise<void> => {
  try {
    // Replace with your MongoDB URI
    const connection: MongoConnection = await mongoose.connect(mongoURI);

    console.log(`🚀 Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongoDB;
