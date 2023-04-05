import { Router } from "express";

const sessionRoutes = Router();

sessionRoutes.post("/login");

sessionRoutes.get("/profile");

export default sessionRoutes;
