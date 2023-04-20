import "dotenv/config";
import { AppError } from "../errors";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const ensureAuthMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let token = req.headers.authorization;

	if (!token) {
		throw new AppError("Missing bearer token", 401);
	}

	token = token.split(" ")[1];

	jwt.verify(token, process.env.SECRET_KEY as Secret, (err, dec: any) => {
		if (err) {
			throw new AppError(err.message, 401);
		}

		req.user = {
			id: dec.sub,
			isSeller: dec.isSeller
		};

		return next();
	});
};

export default ensureAuthMiddleware;
