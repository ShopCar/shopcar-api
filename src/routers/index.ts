import { Router } from "express";

import carRoutes from "./car.routes";
import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";

const routes = Router();

routes.use("/", sessionRoutes);
routes.use("/cars", carRoutes);
routes.use("/users", userRoutes);

export { routes };
