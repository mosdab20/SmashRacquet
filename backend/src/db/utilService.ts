import mongoose from "mongoose";

const DB_URL = "mongodb+srv://admin:admin@cluster0.qezas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
    try {
            await mongoose.connect(DB_URL);
        // console.log("### connected to MongoDB successfully");
    } catch (error) {
        console.log("### error couldn't connect to MongoDB:", error);
    }
};
