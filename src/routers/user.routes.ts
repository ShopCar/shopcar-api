import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { userRequestSchema } from "../schemas/users";
import {
    createUserController,
    listUsersController,
    softDeleteUserController,
} from "../controllers/users";

const userRoutes = Router();

userRoutes.post(
    "/",
    ensureIsValidData(userRequestSchema),
    createUserController
);

userRoutes.get("/", listUsersController);

userRoutes.get("/:id");

userRoutes.patch("/:id");

userRoutes.delete("/:id", ensureAuthMiddleware, softDeleteUserController);

export default userRoutes;
