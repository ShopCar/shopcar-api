import { Router } from "express";

const commentRoutes = Router();

commentRoutes.post("/");

commentRoutes.get("/");

commentRoutes.get("/:id");

commentRoutes.patch("/:id");

commentRoutes.delete("/:id");

export default commentRoutes;
