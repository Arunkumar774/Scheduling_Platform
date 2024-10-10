const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);    
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;