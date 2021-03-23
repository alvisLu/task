import express from 'express';
import bodyParser from 'body-parser';
import mondel, { connectDB, DB_CONNECT_TIME } from './models/db';

import indexRouter from './routes/indexRoute';
import taskRouter from './routes/taskRoute';

const app = express();
const db = mondel.connection;

db.once('open', () => {
  console.log(`[MongoDB] Connection opend.`);
});

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/task', taskRouter);

setTimeout(connectDB, DB_CONNECT_TIME);

export default app;
