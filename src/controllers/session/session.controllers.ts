import { Request, Response } from "express";
import {
	createSessionService,
	profileUserService
} from "../../services/session";

const createSessionController = async (req: Request, res: Response) => {
	const data = await createSessionService(req.body);

	return res.json(data);
};

const profileUserController = async (req: Request, res: Response) => {
	const userId = req.user.id;
	const profileUser = await profileUserService(userId);

	return res.json(profileUser);
};

export { createSessionController, profileUserController };
