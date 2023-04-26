import { z } from "zod";
import {
	userRequestSchema,
	userUpdateSchema,
	userResponseSchema
} from "../../schemas/users";

export { IUserRequest, IUserResponse, IUserUpdate, IUserResetPassword };

type IUserRequest = z.infer<typeof userRequestSchema>;

type IUserResponse = z.infer<typeof userResponseSchema>;

type IUserUpdate = z.infer<typeof userUpdateSchema>;

type IUserResetPassword = {
	password: string;
	token: string;
};
