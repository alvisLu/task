import mongoose from 'mongoose';
import 'dotenv/config';
import ITask from '../interfaces/Task';

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean,
});

const taskModel = mongoose.model<ITask & mongoose.Document>('Task', taskSchema);

export default TaskModel;
