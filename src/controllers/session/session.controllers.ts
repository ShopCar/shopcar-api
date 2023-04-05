import { Request, Response } from "express";

const sessionController = async (req: Request, res: Response) => {
	return res.json("token");
};

const profileUserController = async (req: Request, res: Response) => {
	return res.json("profileUser");
};

export { sessionController, profileUserController };
