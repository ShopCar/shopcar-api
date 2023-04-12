import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { carRequestSchema } from "../schemas/cars";
import { createCarController, deleteCarController, listCarsController, updateCarController } from "../controllers/cars";
import { ensureIsValidId } from "../middlewares/ensureIsValidId.middleware";
import { carRepository } from "../repositories";
import ensureIsSeller from "../middlewares/ensureIsSeller.middleware";
import { carUpdateSchema } from "../schemas/cars/cars.schema";

const carRoutes = Router();

carRoutes.post(
    "/",
    ensureAuthMiddleware,
    ensureIsValidData(carRequestSchema),
    createCarController
);

carRoutes.get("/", listCarsController);

carRoutes.get("/:id", ensureIsValidId(carRepository));

carRoutes.patch("/:id", ensureAuthMiddleware, ensureIsSeller, ensureIsValidId(carRepository), updateCarController);

carRoutes.delete("/:id", ensureAuthMiddleware, ensureIsSeller, ensureIsValidId(carRepository), ensureIsValidData(carUpdateSchema), deleteCarController);

export default carRoutes;
