import { z } from "zod";
import { carRequestSchema, carUpdateSchema } from "../../schemas/cars/index";

export { ICarRequest, ICarUpdate};

type ICarRequest = z.infer<typeof carRequestSchema>;

type ICarUpdate = z.infer<typeof carUpdateSchema>;
