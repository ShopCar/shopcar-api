import { Request, Response } from "express";

const retrieveAddressController = async (req: Request, res: Response) => {
    return res.json("address");
};

const updateAddressController = async (req: Request, res: Response) => {
    return res.json("updatedAddress");
};

const deleteAddressController = async (req: Request, res: Response) => {
    return res.status(204).json();
};

export {
    updateAddressController,
    deleteAddressController,
    retrieveAddressController,
};
