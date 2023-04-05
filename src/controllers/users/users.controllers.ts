import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
	return res.status(201).json("newUser");
};

const listUsersController = (req: Request, res: Response) => {
	return res.json("usersPagination");
};

const retrieveUserController = async (req: Request, res: Response) => {
	return res.json("user");
};

const updateUserController = async (req: Request, res: Response) => {
	return res.json("updatedUser");
};

const softDeleteUserController = async (req: Request, res: Response) => {
	return res.status(204).json();
};

export {
	listUsersController,
	createUserController,
	updateUserController,
	retrieveUserController,
	softDeleteUserController
};
