import "express-async-errors";
import { routes } from "./routers";
import express, { Application } from "express";
import { errorHandler } from "./errors/errors";

const app: Application = express();
app.use(express.json());

app.use(routes);

app.use(errorHandler);

export default app;
