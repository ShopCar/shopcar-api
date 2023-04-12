import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { userRequestSchema } from "../schemas/users";
import {
  createUserController,
  listUsersController,
  retrieveUserController,
  softDeleteUserController,
  updateUserController,

} from "../controllers/users";
import { ensureIsValidId } from "../middlewares/ensureIsValidId.middleware";
import { userRepository } from "../repositories";

const userRoutes = Router();

userRoutes.post(
  "/",
  ensureIsValidData(userRequestSchema),
  createUserController
);

userRoutes.get("/:id", ensureAuthMiddleware, ensureIsValidId(userRepository), retrieveUserController);


userRoutes.patch("/:id", ensureAuthMiddleware, ensureIsValidId(userRepository), updateUserController);


userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsValidId(userRepository),
  softDeleteUserController
);

export default userRoutes;
