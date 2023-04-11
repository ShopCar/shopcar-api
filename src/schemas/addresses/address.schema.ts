import { z } from "zod";

export {addressRequestSchema, addressUpdateSchema, addressResponseSchema};

const addressRequestSchema = z.object({
    zipCode: z.string().length(8).regex(/^[0-9]+$/,"Zip Code must contain only numbers"),
	state: z.string().length(2).regex(/^[A-Za-z]+$/),
	city: z.string().max(50),
	district: z.string().max(50),
	street: z.string().max(50),
    number: z.string().max(10).regex(/^[0-9]+$/,"Phone number must contain only numbers").nullish(),
	complement: z.string().max(50).nullish()
});

const addressUpdateSchema = addressRequestSchema.partial();

const addressResponseSchema = z.object({
    id: z.string(),
    zipCode: z.string(),
	state: z.string(),
	city: z.string(),
	district: z.string(),
	street: z.string(),
    number: z.string().nullish(),
	complement: z.string().nullish(),
    createdAt: z.string(),
	updatedAt: z.string(),
});