import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connection = async () => {
  const Database_Url = process.env.Database_Url;
  try {
    await mongoose.connect(Database_Url).then(() => {
      console.log("db is connected!");
    });
  } catch (e) {
    console.log(e.message);
  }
};
