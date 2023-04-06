import { Router } from "express";

import carRoutes from "./car.routes";
import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";
import addressRoutes from "./address.routes";
import commentRoutes from "./comment.routes";

const routes = Router();

routes.use("/", sessionRoutes);
routes.use("/cars", carRoutes);
routes.use("/users", userRoutes);
routes.use("/comments", commentRoutes);
routes.use("/addresses", addressRoutes);

export { routes };
