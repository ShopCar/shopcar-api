import { Request, Response } from "express";
import { ICarRequest } from "../../interfaces/cars";
import {
    createCarService,
    retrieveCarService,
    ListAllCarsService,
    deleteCarService,
} from "../../services/cars";
import updateCarService from "../../services/cars/updateCar.service";

const createCarController = async (req: Request, res: Response) => {
    const body: ICarRequest = req.body;
    const userId: string = req.user.id;
    const newCar = await createCarService(body, userId);
    return res.status(201).json(newCar);
};

const listCarsController = async (req: Request, res: Response) => {
    const cars = await ListAllCarsService();
    return res.status(200).json(cars);
};

const retrieveCarController = async (req: Request, res: Response) => {
    const carId = req.params.id;
    const car = await retrieveCarService(carId);
    return res.status(200).json(car);
};

const updateCarController = async (req: Request, res: Response) => {
    const body: ICarRequest = req.body;
    const carId: string = req.params.id;
    const car = await updateCarService(body, carId);
    return res.status(200).json(car);
};

const deleteCarController = async (req: Request, res: Response) => {
    const carId = req.params.id;
    const userId = req.user.id;
    const status = await deleteCarService(carId, userId);
    return res.status(status).json();
};

export {
    listCarsController,
    createCarController,
    updateCarController,
    deleteCarController,
    retrieveCarController,
};
