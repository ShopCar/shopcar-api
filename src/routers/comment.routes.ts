import { Router } from "express";
import { carRepository, commentRepository } from "../repositories";
import { ensureAuthMiddleware, ensureIsValidId } from "../middlewares";
import {
	createCommentController,
	deleteCommentController,
	updateCommentController,
	listCarCommentsController
} from "../controllers/comments";

const commentRoutes = Router();

commentRoutes.post(
	"/cars/:id",
	ensureAuthMiddleware,
	ensureIsValidId(carRepository),
	createCommentController
);

commentRoutes.get("/cars/:id", listCarCommentsController);

commentRoutes.patch(
	"/:id",
	ensureAuthMiddleware,
	ensureIsValidId(commentRepository),
	updateCommentController
);

commentRoutes.delete(
	"/:id",
	ensureAuthMiddleware,
	ensureIsValidId(commentRepository),
	deleteCommentController
);

export default commentRoutes;
