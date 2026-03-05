require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongoose_URI);
    console.log("MongoDB Connect");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
