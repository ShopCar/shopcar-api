import { Request, Response } from "express";
import { ICommentReq } from "../../interfaces/comments/index";
import {
	createCommentService,
	deleteCommentService,
	listCarCommentsService,
	listCommentsService,
	retrieveCommentService,
	updateCommentService
} from "../../services/comments";

const createCommentController = async (req: Request, res: Response) => {
	const body: ICommentReq = req.body;
	const carId: string = req.params.id;
	const userId: string = req.user.id;
	const newComment = await createCommentService(body, carId, userId);
	return res.status(201).json(newComment);
};

const listCommentsController = async (req: Request, res: Response) => {
	const comments = await listCommentsService();
	return res.status(200).json(comments);
};

const retrieveCommentController = async (req: Request, res: Response) => {
	const carId: string = req.params.id;
	const comment = await retrieveCommentService(carId);
	return res.json(comment);
};

const updateCommentController = async (req: Request, res: Response) => {
	const body: ICommentReq = req.body;
	const commentId: string = req.params.id;
	const updatedComment = await updateCommentService(body, commentId);
	return res.json(updatedComment);
};

const deleteCommentController = async (req: Request, res: Response) => {
	const commentId: string = req.params.id;
	await deleteCommentService(commentId);
	return res.status(204).json({});
};

const listCarCommentsController = async (req: Request, res: Response) => {
	const carId: string = req.params.id;
	const comments = await listCarCommentsService(carId);
	return res.status(200).json(comments);
};

export {
	listCommentsController,
	createCommentController,
	updateCommentController,
	deleteCommentController,
	retrieveCommentController,
	listCarCommentsController
};
