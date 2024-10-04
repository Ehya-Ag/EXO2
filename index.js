import express from "express";
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(helmet());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
  standardHeaders: 'draft-7',
  message: "Limite atteinte"
});

app.use(limiter);

// Configuration de CORS
const corsOptions = {
  origin: ['https://localhost:3005'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
