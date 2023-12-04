import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/user.routes.js'
import noteRouter from './routes/note.routes.js'

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", userRouter);
app.use("/api", noteRouter);

export default app;