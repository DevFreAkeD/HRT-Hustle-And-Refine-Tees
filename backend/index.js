import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello from Hustle & Refine Tees!');
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI); // Ensure the database connection is awaited
    app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();