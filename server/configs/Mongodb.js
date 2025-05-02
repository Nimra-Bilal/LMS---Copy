import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Database CONNECTED'));
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
    console.log(`Connected to: ${process.env.MONGODB_URI}/lms`);
  } catch (err) {
    console.error('DB Connection Error:', err);
    process.exit(1); // Crash app if DB fails
  }
};

export default connectDb;