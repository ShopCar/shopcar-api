import { z } from "zod";

export { carRequestWithoutImages, carRequestSchema, carUpdateSchema };

const carRequestWithoutImages = z.object({
	brand: z.string().min(1).max(30),
	model: z.string().min(1).max(50),
	year: z
		.string()
		.length(4)
		.regex(/^[0-9]+$/, "Phone number must contain only numbers"),
	fuel: z.string().min(1).max(20),
	km: z.string().or(z.number()),
	color: z.string().min(1).max(30),
	description: z.string().nullish(),
	price: z.string().or(z.number().positive())
});

const carRequestSchema = carRequestWithoutImages.extend({
	cover: z.string(),
	gallery: z.array(z.string()).max(6)
});

const carUpdateSchema = carRequestSchema.partial();
