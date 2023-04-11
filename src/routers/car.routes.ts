import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { carRequestSchema } from "../schemas/cars";
import { createCarController } from "../controllers/cars";

const carRoutes = Router();

carRoutes.post(
    "/",
    ensureAuthMiddleware,
    ensureIsValidData(carRequestSchema),
    createCarController
);

carRoutes.get("/");

carRoutes.get("/:id");

carRoutes.patch("/:id");

carRoutes.delete("/:id");

export default carRoutes;
