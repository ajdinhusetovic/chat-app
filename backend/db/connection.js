import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

export default connection;
