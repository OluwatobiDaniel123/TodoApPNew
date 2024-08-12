const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://danieloluwatobi765:adebowale1@cluster0.yirjfki.mongodb.net/";

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB connected on ${mongoDB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
