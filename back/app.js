import cors from "cors";
import express from "express";
import { viewsRouter } from "./routes/views-router";
import logger from "morgan";
const app = express();

// CORS 에러 방지
app.use(cors());

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(viewsRouter);

export { app };
