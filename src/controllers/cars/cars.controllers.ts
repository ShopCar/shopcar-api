import { Request, Response } from "express";

const createCarController = async (req: Request, res: Response) => {
	return res.status(201).json("newCar");
};

const listCarsController = (req: Request, res: Response) => {
	return res.json("carsPagination");
};

const retrieveCarController = async (req: Request, res: Response) => {
	return res.json("car");
};

const updateCarController = async (req: Request, res: Response) => {
	return res.json("updatedCar");
};

const deleteCarController = async (req: Request, res: Response) => {
	return res.status(204).json();
};

export {
	listCarsController,
	createCarController,
	updateCarController,
	deleteCarController,
	retrieveCarController
};
