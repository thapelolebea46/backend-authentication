// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Try your connection string from environment
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Initial connection failed:", err.message);

    // Optional fallback: try using non-SRV connection string (replace with yours if needed)
    // await mongoose.connect("mongodb://username:password@host1,host2,host3/authDB?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority");

    process.exit(1);
  }
};

export default connectDB;