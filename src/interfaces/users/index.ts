import { z } from "zod";
import {
  userRequestSchema,
  userUpdateSchema,
  userWithoutPasswordSchema,
} from "../../schemas/users";

export { IUserRequest, IUserWithoutPassword, IUserUpdate };

type IUserRequest = z.infer<typeof userRequestSchema>;

type IUserWithoutPassword = z.infer<typeof userWithoutPasswordSchema>;

type IUserUpdate = z.infer<typeof userUpdateSchema>;
