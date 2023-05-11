import { Request, Response } from "express";

import {
    createUserService,
    deleteUserService,
    retrieveUserService,
    updateUserService,
    carsByUserService
} from "../../services/users";

const createUserController = async (req: Request, res: Response) => {
    const createdUser = await createUserService(req.body);
    return res.status(201).json(createdUser);
};

const retrieveUserController = async (req: Request, res: Response) => {
    const user = await retrieveUserService(req.params.id);
    return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
    const user = await updateUserService(req.body, req.params.id);
    return res.status(200).json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
    const user = await deleteUserService(req.params.id);
    return res.status(204).json(user);
};

const carsByUserController = async (req: Request, res: Response) => {
    const user = await carsByUserService(req.params.id);
    return res.status(200).json(user);
};

export {
    createUserController,
    updateUserController,
    retrieveUserController,
    deleteUserController,
    carsByUserController
};
