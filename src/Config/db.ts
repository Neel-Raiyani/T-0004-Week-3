import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongodbURL = process.env.MONGODB_URI!;

const connectDB = async() => {
    try {
        await mongoose.connect(mongodbURL);
        console.log("MongoDB connected successfully!!!");
    } 
    catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
};

export default connectDB;