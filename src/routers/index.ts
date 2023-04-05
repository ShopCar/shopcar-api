import { Router } from "express";

import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";
import carRoutes from "./car.routes";

const routes = Router();

routes.use("/", sessionRoutes);
routes.use("/users", userRoutes);
routes.use("/cars", carRoutes);

export { routes };
