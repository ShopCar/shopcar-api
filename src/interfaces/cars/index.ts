import { z } from "zod";
import { carRequestSchema } from "../../schemas/cars/index";

export { ICarRequest };

type ICarRequest = z.infer<typeof carRequestSchema>;
