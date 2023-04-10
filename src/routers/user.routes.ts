import { Router } from "express";
import { ensureIsValidData } from "../middlewares";
import { userRequestSchema } from "../schemas/users";
import { createUserController } from "../controllers/users";

const userRoutes = Router();

userRoutes.post("/", ensureIsValidData(userRequestSchema), createUserController);

userRoutes.get("/");

userRoutes.get("/:id");

userRoutes.patch("/:id");

userRoutes.delete("/:id");

export default userRoutes;
