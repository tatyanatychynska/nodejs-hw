import express from 'express';
import 'dotenv/config';
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use(helmet());

app.use(express.json());

app.use(logger);

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
