import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoute.js";
import todoRouter from "./routes/todoRoute.js";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cors({
  origin:'*'
}));


app.use("/api/tasklist",taskRouter);
app.use("/api/todolist",todoRouter);


app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
});