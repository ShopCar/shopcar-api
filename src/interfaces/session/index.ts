import { z } from "zod";
import { sessionSchema } from "../../schemas/session";

export { ILogin };

type ILogin = z.infer<typeof sessionSchema>;
