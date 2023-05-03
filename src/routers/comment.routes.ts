import { Router } from "express";
import {
    ensureAuthMiddleware,
    ensureIsValidData,
    ensureIsValidId,
} from "../middlewares";
import { carRepository, commentRepository } from "../repositories";
import {
    createCommentController,
    deleteCommentController,
    listCommentsController,
    retrieveCommentController,
    updateCommentController,
} from "../controllers/comments";

const commentRoutes = Router();

commentRoutes.post(
    "/:id",
    ensureAuthMiddleware,
    ensureIsValidId(carRepository),
    createCommentController
);

commentRoutes.get("/", listCommentsController);

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
