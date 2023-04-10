import { ZodTypeAny } from "zod";
import { Request, Response, NextFunction } from "express";

const ensureIsValidData =
	(schema: ZodTypeAny) =>
	async (req: Request, resp: Response, next: NextFunction) => {
		const validatedData = schema.parse(req.body);

		req.body = validatedData;

		return next();
	};

export default ensureIsValidData;