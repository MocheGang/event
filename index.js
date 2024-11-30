import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Configuration de CORS
const corsOptions = {
    origin: 'https://localhost:5000', // Remplacez par votre domaine
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Autorise les cookies et les identifiants
  }

  app.use(cors(corsOptions));



// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
