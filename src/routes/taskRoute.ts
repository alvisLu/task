import express from 'express';
import TaskModel from '../models/taskModel';

const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
});

router.post('/', async (req, res) => {
  try {
    const newTask = req.body;
    const createdTask = new TaskModel(newTask);
    const savedTask = await createdTask.save();
    res.send(savedTask);
  } catch (e) {
    console.log(e);
  }
});

export default router;
