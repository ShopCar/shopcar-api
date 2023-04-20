import { z } from "zod";

export { addressRequestSchema, addressUpdateSchema, addressResponseSchema };

const addressResponseSchema = z.object({
	id: z.string(),
	zipCode: z
		.string()
		.length(8)
		.regex(/^[0-9]+$/, "Zip Code must contain only numbers"),
	state: z
		.string()
		.length(2)
		.regex(/^[A-Za-z]+$/),
	city: z.string().min(1).max(50),
	district: z.string().min(1).max(50),
	street: z.string().min(1).max(50),
	number: z
		.string()
		.max(10)
		.regex(/^[0-9]+$/, "Phone number must contain only numbers")
		.nullish(),
	complement: z.string().max(50).nullish(),
	createdAt: z.string(),
	updatedAt: z.string()
});

const addressRequestSchema = addressResponseSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true
});

const addressUpdateSchema = addressRequestSchema.partial();
