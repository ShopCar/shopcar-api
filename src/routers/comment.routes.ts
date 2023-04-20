import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData, ensureIsValidId } from "../middlewares";
import { commentRepository } from "../repositories";

const commentRoutes = Router();

commentRoutes.post("/", ensureAuthMiddleware, );

commentRoutes.get("/");

commentRoutes.get("/:id", ensureAuthMiddleware, ensureIsValidId(commentRepository));

commentRoutes.patch("/:id", ensureAuthMiddleware, ensureIsValidId(commentRepository));

commentRoutes.delete("/:id", ensureAuthMiddleware, ensureIsValidId(commentRepository));

export default commentRoutes;
