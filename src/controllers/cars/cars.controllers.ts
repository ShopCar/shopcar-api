import { Request, Response } from "express";
import { ICarRequest } from "../../interfaces/cars";
import { createCarService } from "../../services/cars";
import ListAllCarsService from "../../services/cars/listCars.service";

const createCarController = async (req: Request, res: Response) => {
	const body: ICarRequest = req.body
	const userId: string = req.user.id
	const newCar = await createCarService(body, userId)
	return res.status(201).json(newCar);
};

const listCarsController = async (req: Request, res: Response) => {
	const cars = await ListAllCarsService();
	return res.status(200).json(cars);
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
