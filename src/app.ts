import "express-async-errors";
import { routes } from "./routers";
import swaggerUi from "swagger-ui-express";
import express, { Application } from "express";
import { errorHandler } from "./errors/errors";
import swaggerDocument from "../documentation/swagger.json";

const app: Application = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.use(errorHandler);

export default app;
