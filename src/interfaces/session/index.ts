import { z } from "zod";
import { User } from "../../entities";
import { sessionSchema } from "../../schemas/session";

export { ILogin, IloginResponse };

type ILogin = z.infer<typeof sessionSchema>;

interface IloginResponse {
	token: string;
	user: User;
}
