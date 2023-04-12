import { Request, Response } from "express";

import {
  createUserService,
  listUsersService,
  updateUserService,
} from "../../services/users";
import { softDeleteUserService } from "../../services/users/index";


const createUserController = async (req: Request, res: Response) => {
  const createdUser = await createUserService(req.body);
  return res.status(201).json(createdUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const retrieveUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.params.id);
  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req.body, req.params.id);
  return res.status(200).json(user);
};

const softDeleteUserController = async (req: Request, res: Response) => {
  const user = await softDeleteUserService(req.params.id);
  return res.status(204).json(user);
};

export {
  listUsersController,
  createUserController,
  updateUserController,
  retrieveUserController,
  softDeleteUserController,

};
