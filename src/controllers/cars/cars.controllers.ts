import { Request, Response } from "express";
import { ICarRequest } from "../../interfaces/cars";
import { createCarService, retrieveCarService } from "../../services/cars";

const createCarController = async (req: Request, res: Response) => {
	const body: ICarRequest = req.body
	const userId: string = req.user.id
	const newCar = await createCarService(body, userId)
	return res.status(201).json(newCar);
};

const listCarsController = (req: Request, res: Response) => {
	return res.json("carsPagination");
};

const retrieveCarController = async (req: Request, res: Response) => {
	const carId = req.params.id
	const car = await retrieveCarService(carId)
	return res.status(200).json(car);
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
