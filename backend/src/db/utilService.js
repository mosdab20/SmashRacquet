"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DBService_1 = require("./DBService");
const DB_URL = "mongodb+srv://admin:admin@cluster0.qezas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("connecting...");
        yield mongoose_1.default.connect(DB_URL);
        console.log("inserting data...");
        yield (0, DBService_1.initDB)(); // Datenbank initialisieren, nachdem die Verbindung hergestellt wurde
        // console.log("### connected to MongoDB successfully");
    }
    catch (error) {
        console.log("### error couldn't connect to MongoDB:", error);
    }
});
exports.connectDB = connectDB;
