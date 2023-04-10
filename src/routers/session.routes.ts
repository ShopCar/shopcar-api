import { Router } from "express";
import { createSessionController } from "../controllers/session";

const sessionRoutes = Router();

sessionRoutes.post("/login", createSessionController);

sessionRoutes.get("/profile");

export default sessionRoutes;
