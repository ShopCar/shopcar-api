import { Router } from "express";
import {
	userResetPasswordSchema,
	sendResetPasswordEmailSchema
} from "../schemas/users";
import {
	userResetPasswordController,
	sendResetPasswordEmailController
} from "../controllers/resetPassword";
import { ensureIsValidData } from "../middlewares";

const resetPassword = Router();

resetPassword.post(
	"/reset_password",
	ensureIsValidData(sendResetPasswordEmailSchema),
	sendResetPasswordEmailController
);

resetPassword.patch(
	"/reset_password/:token",
	ensureIsValidData(userResetPasswordSchema),
	userResetPasswordController
);

export default resetPassword;
