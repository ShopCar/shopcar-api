import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { carRequestSchema } from "../schemas/cars";
import { createCarController, deleteCarController, listCarsController } from "../controllers/cars";
import { ensureIsValidId } from "../middlewares/ensureIsValidId.middleware";
import { carRepository } from "../repositories";

const carRoutes = Router();

carRoutes.post(
    "/",
    ensureAuthMiddleware,
    ensureIsValidData(carRequestSchema),
    createCarController
);

carRoutes.get("/", listCarsController);

carRoutes.get("/:id", ensureIsValidId(carRepository));

carRoutes.patch("/:id", ensureAuthMiddleware, ensureIsValidId(carRepository));

carRoutes.delete("/:id", ensureAuthMiddleware, ensureIsValidId(carRepository), deleteCarController);

export default carRoutes;
