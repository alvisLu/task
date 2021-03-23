import 'dotenv/config';
import mongoose from 'mongoose';

export const DB_CONNECT_TIME = 3000;
const {
  MONGO_URL = `mongodb://root:password@task_mongo:27017/task`,
} = process.env;

export const connectDB = async () => {
  try {
    console.log(`[MongoDB] Connection to ${MONGO_URL}`);
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(`[MongoDB] Error in MongoDB connection: ${e}`);
    console.log(`[MongoDB] Reconect MongoDB.`);
    setTimeout(connectDB, DB_CONNECT_TIME);
  }
};

export default mongoose;
