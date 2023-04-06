import { Request, Response } from "express";

const createCommentController = async (req: Request, res: Response) => {
	return res.status(201).json("newComment");
};

const listCommentsController = (req: Request, res: Response) => {
	return res.json("commentsPagination");
};

const retrieveCommentController = async (req: Request, res: Response) => {
	return res.json("comment");
};

const updateCommentController = async (req: Request, res: Response) => {
	return res.json("updatedComment");
};

const deleteCommentController = async (req: Request, res: Response) => {
	return res.status(204).json();
};

export {
	listCommentsController,
	createCommentController,
	updateCommentController,
	retrieveCommentController,
	deleteCommentController
};
