import { z } from "zod";

const sessionSchema = z.object({
	email: z.string().email(),
	password: z.string()
});

export default sessionSchema;
