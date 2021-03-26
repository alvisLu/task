import mongoose from 'mongoose';
import 'dotenv/config';
import ITask from '../interfaces/Task';

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
});

const TaskModel = mongoose.model<ITask & mongoose.Document>('Task', TaskSchema);

export default TaskModel;
