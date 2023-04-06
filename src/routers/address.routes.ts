import { Router } from "express";

const addressRoutes = Router();

addressRoutes.get("/:id");

addressRoutes.patch("/:id");

addressRoutes.delete("/:id");

export default addressRoutes;
