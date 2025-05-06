import 'dotenv/config.js'; 
import express from 'express';
import cors from 'cors';
import connectDb from './configs/Mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

  // Connect to DB
  await connectDb();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.get('/', (req, res) => res.send("API Working"));
  app.post('/clerk' , express.json() ,  clerkWebhooks)

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>{ console.log(`Server running on port ${PORT}`)});

