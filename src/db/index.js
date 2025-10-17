import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\n✅ MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ Mongo connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
