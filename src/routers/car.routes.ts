import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { carRequestSchema } from "../schemas/cars";
import {
    createCarController,
    retrieveCarController,
} from "../controllers/cars";
import { ensureIsValidId } from "../middlewares/ensureIsValidId.middleware";
import { carRepository } from "../repositories";

const carRoutes = Router();

carRoutes.post(
    "/",
    ensureAuthMiddleware,
    ensureIsValidData(carRequestSchema),
    createCarController
);

carRoutes.get("/");

carRoutes.get("/:id", ensureIsValidId(carRepository), retrieveCarController);

carRoutes.patch("/:id");

carRoutes.delete("/:id");

export default carRoutes;
