import { Router } from "express";
import {
	profileUserController,
	createSessionController
} from "../controllers/session";
import { ensureAuthMiddleware } from "../middlewares";

const sessionRoutes = Router();

sessionRoutes.post("/login", createSessionController);

sessionRoutes.get("/profile", ensureAuthMiddleware, profileUserController);

export default sessionRoutes;
