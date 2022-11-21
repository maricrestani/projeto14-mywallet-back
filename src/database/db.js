import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("my-wallet-db");
export const userCollection = db.collection("users");
export const sessionCollection = db.collection("sessions");
export const registryCollection = db.collection("registry");