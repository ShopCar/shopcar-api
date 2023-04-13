import { Router } from "express";
import { ensureAuthMiddleware, ensureIsValidData, ensureIsValidId } from "../middlewares";
import { addressRepository } from "../repositories";
import { retrieveAddressController, updateAddressController } from "../controllers/addresses";
import { addressUpdateSchema } from "../schemas/addresses";

const addressRoutes = Router();

addressRoutes.get("/:id", ensureAuthMiddleware, ensureIsValidId(addressRepository), retrieveAddressController);

addressRoutes.patch("/:id", ensureAuthMiddleware, ensureIsValidId(addressRepository), ensureIsValidData(addressUpdateSchema), updateAddressController);

export default addressRoutes;
