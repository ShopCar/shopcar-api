import { Request, Response } from "express";
import { createUserService, retrieveUserService, updateUserService, softDeleteUserService } from "../../services/users";

const createUserController = async (req: Request, res: Response) => {
    const createdUser = await createUserService(req.body);
    return res.status(201).json(createdUser);
};

const retrieveUserController = async (req: Request, res: Response) => {
    const user = await retrieveUserService(req.params.id);
    return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
    const user = await updateUserService(req.params.id, req.body);
    return res.status(200).json(user);
};

const softDeleteUserController = async (req: Request, res: Response) => {
    const user = await softDeleteUserService(req.params.id);
    return res.status(204).json(user);
};

export {
    createUserController,
    updateUserController,
    retrieveUserController,
    softDeleteUserController,
};
