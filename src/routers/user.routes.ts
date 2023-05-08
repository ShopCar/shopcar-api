import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData, ensureIsValidId } from "../middlewares";
import { userRequestSchema } from "../schemas/users";
import {
    createUserController,
    retrieveUserController,
    deleteUserController,
    updateUserController,
} from "../controllers/users";
import { userRepository } from "../repositories";

const userRoutes = Router();

userRoutes.post(
    "/",
    ensureIsValidData(userRequestSchema),
    createUserController
);

userRoutes.get(
    "/:id",
    ensureAuthMiddleware,
    ensureIsValidId(userRepository),
    retrieveUserController
);

userRoutes.patch(
    "/:id",
    ensureAuthMiddleware,
    ensureIsValidId(userRepository),
    updateUserController
);

userRoutes.delete(
    "/:id",
    ensureAuthMiddleware,
    ensureIsValidId(userRepository),
    deleteUserController
);

export default userRoutes;
