import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const ensureIsSeller = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let user = req.user;

    if (!user.isSeller) {
        return res.status(403).json({ message: "Missing permissions" });
    }
        return next();
};

export default ensureIsSeller;
