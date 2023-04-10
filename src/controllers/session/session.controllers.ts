import { Request, Response } from "express";
import { createSessionService } from "../../services/session";

const createSessionController = async (req: Request, res: Response) => {
	const data = await createSessionService(req.body)
	return res.json(data);
};

const profileUserController = async (req: Request, res: Response) => {
	return res.json("profileUser");
};

export { createSessionController, profileUserController };
