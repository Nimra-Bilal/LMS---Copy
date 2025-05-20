import 'dotenv/config.js'; 
import express from 'express';
import cors from 'cors';
import connectDb from './configs/Mongodb.js';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

const app = express();

  // Connect to DB
  await connectDb();
  await connectCloudinary(); 
app.use(cors({
  origin: [
    'http://localhost:5173', // your local frontend (Vite)
    'https://lms-frontend-nimra-bilals-projects.vercel.app' // deployed frontend
  ],
  credentials: true
}));
  app.use(clerkMiddleware());
  app.post('/stripe',express.raw({type:'application/json'}) ,stripeWebhooks )

  // Middleware
 
  app.use(express.json());

  // Routes
  app.get('/', (req, res) => res.send("API Working"));
  app.post('/clerk' , express.json() ,  clerkWebhooks)
  app.use('/api/educator' , clerkMiddleware() ,  educatorRouter)
  app.use('/api/course',express.json(), courseRouter)
  app.use('/api/user',express.json(), userRouter)
  // app.post('/stripe',express.raw({type:'application/json'}) ,stripeWebhooks )

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>{ console.log(`Server running on port ${PORT}`)});

