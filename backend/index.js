import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import helmet from 'helmet';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Hustle & Refine Tees!');
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong!' });
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI); // Ensure the database connection is awaited
    app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();