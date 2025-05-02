import 'dotenv/config.js'; 
import express from 'express';
import cors from 'cors';
import connectDb from './configs/Mongodb.js';
import { clerkWebhooks } from './controllers/Webhooks.js';

const app = express();

// Async startup function
async function startServer() {
  // Connect to DB
  await connectDb();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.get('/', (req, res) => res.send("API Working"));
  app.post('/clerk' , express.json() ,  clerkWebhooks)

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer().catch(err => console.error('Server startup error:', err));