import { Request, Response } from "express";
import {
	userResetPasswordService,
	sendResetPasswordEmailService
} from "../../services/resetPassword";

const sendResetPasswordEmailController = async (
	req: Request,
	res: Response
) => {
	const { email } = req.body;

	const message = await sendResetPasswordEmailService(email);

	return res.json({ message });
};

const userResetPasswordController = async (req: Request, res: Response) => {
	const { password } = req.body;
	const { token } = req.params;

	const message = await userResetPasswordService({ password, token });

	return res.json({ message });
};

export { sendResetPasswordEmailController, userResetPasswordController };
