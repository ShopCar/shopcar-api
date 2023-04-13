import { Request, Response } from "express";
import { retrieveAddressService, updateAddressService } from "../../services/addresses";

const retrieveAddressController = async (req: Request, res: Response) => {
    const address = await retrieveAddressService(req.params.id);
    return res.status(200).json(address);
};

const updateAddressController = async (req: Request, res: Response) => {
    const address = await updateAddressService(req.body, req.params.id);
    return res.status(200).json(address);
};

export {
    updateAddressController,
    retrieveAddressController,
};
