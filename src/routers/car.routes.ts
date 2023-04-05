import { Router } from "express";

const carRoutes = Router();

carRoutes.post("/");

carRoutes.get("/");

carRoutes.get("/:id");

carRoutes.patch("/:id");

carRoutes.delete("/:id");

export default carRoutes;
