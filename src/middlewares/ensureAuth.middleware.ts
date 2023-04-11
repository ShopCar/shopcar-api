import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Invalid token" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as Secret, (err, dec: any) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        req.user = {
            id: dec.sub,
        };

        return next();
    });
};

export default ensureAuthMiddleware;
