import "dotenv/config.js";
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}.1wzdsdd.mongodb.net/banco-de-sangue`);

let db = mongoose.connection;

export default db;