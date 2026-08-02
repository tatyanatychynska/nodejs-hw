import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import {errors} from 'celebrate';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';


import { connectMongoDB } from './db/connectMongoDB.js';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());


app.use(logger);

app.use(notesRoutes);
app.use(authRoutes);
app.use(userRoutes);


app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

const port = process.env.PORT || 3000;

await connectMongoDB();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
