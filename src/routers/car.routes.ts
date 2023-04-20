import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData, ensureIsValidId, ensureIsSeller } from "../middlewares";
import { carRequestSchema, carUpdateSchema } from "../schemas/cars";
import {
    createCarController,
    deleteCarController,
    listCarsController,
    updateCarController,
    retrieveCarController,
} from "../controllers/cars";
import { carRepository } from "../repositories";

const carRoutes = Router();

carRoutes.post(
    "/",
    ensureAuthMiddleware,
    ensureIsSeller,
    ensureIsValidData(carRequestSchema),
    createCarController
);

carRoutes.get("/", listCarsController);

carRoutes.get("/:id", ensureIsValidId(carRepository), retrieveCarController);

carRoutes.patch(
    "/:id",
    ensureAuthMiddleware,
    ensureIsSeller,
    ensureIsValidId(carRepository),
    updateCarController
);

carRoutes.delete(
    "/:id",
    ensureAuthMiddleware,
    ensureIsSeller,
    ensureIsValidId(carRepository),
    ensureIsValidData(carUpdateSchema),
    deleteCarController
);

export default carRoutes;
