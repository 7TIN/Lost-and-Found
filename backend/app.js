import express from 'express';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'

import { PORT } from './config/env.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.use(errorMiddleware);

app.get("/", (req,res)=>{
    res.send("Welcome to the Lost And Found");

})
app.listen(PORT, async () => {
    console.log(`Lost and Found is running on http://localhost:${PORT}`);
  
    await connectToDatabase();
  });

export default app;