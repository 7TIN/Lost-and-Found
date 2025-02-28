import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'

import { PORT } from './config/env.js';
import lostItemRouter from './routes/lostItem.routes.js';
import foundItemRouter from './routes/foundItem.routes.js';
import claimItemRouter from './routes/claimItem.routes.js';
import itemRouter from './routes/item.routes.js';
import authorize from './middlewares/auth.middleware.js';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/lost',authorize, lostItemRouter);
app.use('/api/v1/found',authorize, foundItemRouter);
// app.use('/api/v1/claim', claimItemRouter);
app.use('/api/v1/items',authorize, itemRouter);
app.use(errorMiddleware);

app.get("/", (req,res)=>{
    res.send("Welcome to the Lost And Found");

})
app.listen(PORT, async () => {
    console.log(`Lost and Found is running on http://localhost:${PORT}`);
  
    await connectToDatabase();
  });

export default app;