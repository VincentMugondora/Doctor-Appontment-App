const mongoose = require("mongoose");
const colors = require("colors");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected Successfully ${mongoose.connection.host}`.bgBlue.white)
  } catch (error) {
    console.log(`MongoDB Server Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
