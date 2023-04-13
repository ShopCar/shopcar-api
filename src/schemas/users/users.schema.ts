import { z } from "zod";
import {
    addressRequestSchema,
    addressResponseSchema,
} from "../addresses/address.schema";

export { userRequestSchema, userUpdateSchema, userWithoutPasswordSchema };

const userRequestSchema = z.object({
    name: z.string(),
    birthdate: z.string(),
    phone: z
        .string()
        .min(10)
        .max(11)
        .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
    description: z.string().nullish(),
    email: z.string().email(),
    password: z
        .string()
        .min(8)
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contains capital letter, lowercase letter, number and special char"
        ),
    isSeller: z.boolean(),
    address: addressRequestSchema,
});

const userUpdateSchema = userRequestSchema.partial();

const userWithoutPasswordSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    birthdate: z.string(),
    phone: z.string(),
    description: z.string().nullable(),
    email: z.string().email(),
    isSeller: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
    address: addressResponseSchema,
});
