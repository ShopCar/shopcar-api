import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData } from "../middlewares";
import { userRequestSchema } from "../schemas/users";
import {
  createUserController,
  listUsersController,
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

userRoutes.get("/", listUsersController);

userRoutes.get("/:id");

userRoutes.patch("/:id", updateUserController);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsValidId(userRepository),
  softDeleteUserController
);

export default userRoutes;
