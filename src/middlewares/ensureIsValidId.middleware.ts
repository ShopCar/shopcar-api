import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import {AppError} from "../errors"
import {User, Address, Car, Comment, Images} from "../entities"

export const ensureIsValidId = (repo: Repository<User | Address | Car | Comment | Images>) => async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;

    if( !params.id ) {
        throw new AppError( 'Invalid id', 404 );
    };
    
    const searchDataOnRepo = await repo.findOne({
        where: { id: params.id },
        withDeleted: true
    });
    if (!searchDataOnRepo){
        throw new AppError("id was not found", 404);
    };

    return next();
};