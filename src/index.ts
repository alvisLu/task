import app from './app';
import 'dotenv/config';

const { PORT = 8000, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}, ${NODE_ENV}`);
});
