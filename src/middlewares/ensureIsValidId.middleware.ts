import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../errors";
import { User, Address, Car, Comment, Images } from "../entities";
import { z } from "zod";

export const ensureIsValidId =
    (repo: Repository<User | Address | Car | Comment | Images>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const { params } = req;

        if (!params.id) {
            throw new AppError("Invalid id", 404);
        }

        const uuidFormat = z.string().uuid("id was not found")
        uuidFormat.parse(params.id)

        const searchDataOnRepo = await repo.findOne({
            where: { id: params.id },
            withDeleted: true,
        });
        if (!searchDataOnRepo) {
            throw new AppError("id was not found", 404);
        }

        return next();
    };
