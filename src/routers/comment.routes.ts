import { Router } from "express";
import {
	ensureAuthMiddleware,
	ensureIsValidData,
	ensureIsValidId
} from "../middlewares";
import { carRepository, commentRepository } from "../repositories";
import {
	createCommentController,
	deleteCommentController,
	listCarCommentsController,
	listCommentsController,
	retrieveCommentController,
	updateCommentController
} from "../controllers/comments";

const commentRoutes = Router();

commentRoutes.post(
	"/cars/:id",
	ensureAuthMiddleware,
	ensureIsValidId(carRepository),
	createCommentController
);

commentRoutes.get("/", listCommentsController);

commentRoutes.get("/cars/:id", listCarCommentsController);

commentRoutes.get(
	"/:id",
	ensureAuthMiddleware,
	ensureIsValidId(commentRepository),
	retrieveCommentController
);

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
