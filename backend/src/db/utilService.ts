import mongoose from "mongoose";
import {initDB} from "./DBService";

const DB_URL = "mongodb+srv://admin:admin@cluster0.qezas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
    try {
        console.log("connecting...")
        await mongoose.connect(DB_URL);
        console.log("inserting data...")
        await initDB(); // Datenbank initialisieren, nachdem die Verbindung hergestellt wurde

        // console.log("### connected to MongoDB successfully");
    } catch (error) {
        console.log("### error couldn't connect to MongoDB:", error);
    }
};
