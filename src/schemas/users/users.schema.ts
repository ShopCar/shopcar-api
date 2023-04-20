import { z } from "zod";
import {
	addressRequestSchema,
	addressResponseSchema
} from "../addresses/address.schema";

export { userRequestSchema, userUpdateSchema, userResponseSchema };

const userSchema = z.object({
	id: z.string().uuid(),
	name: z.string().min(1).max(50),
	birthdate: z.string().length(10),
	phone: z
		.string()
		.min(10)
		.max(11)
		.regex(/^[0-9]+$/, "Phone number must contain only numbers"),
	cpf: z
		.string()
		.length(11)
		.regex(/^[0-9]+$/, "Phone number must contain only numbers"),
	email: z.string().email().min(1).max(70),
	password: z
		.string()
		.min(8)
		.regex(
			new RegExp(".*[A-Z].*"),
			"Password must have at least one capital letter"
		)
		.regex(
			new RegExp(".*[a-z].*"),
			"Password must have at least one lowercase letter"
		)
		.regex(new RegExp(".*\\d.*"), "Password must have at least one number")
		.regex(
			new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
			"Password must have at least one special character"
		),
	isSeller: z.boolean().default(false),
	description: z.string().nullish(),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullable()
});

const userRequestSchema = userSchema
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
		deletedAt: true
	})
	.extend({
		address: addressRequestSchema
	});

const userUpdateSchema = userSchema
	.pick({
		name: true,
		birthdate: true,
		phone: true,
		cpf: true,
		email: true,
		password: true,
		description: true,
		isSeller: true
	})
	.partial();

const userResponseSchema = userSchema
	.omit({
		password: true
	})
	.extend({
		address: addressResponseSchema
	});
