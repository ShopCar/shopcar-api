import { z } from "zod";

export { carRequestWithoutImages, carRequestSchema };

const carRequestWithoutImages = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    km: z.number(),
    color: z.string(),
    description: z.string(),
    price: z.number(),
});

const carRequestSchema = carRequestWithoutImages.extend({
    cover: z.string(),
    image1: z.string(),
    image2: z.string(),
});

// const carResponseSchema = carRequestWithoutImages.extend({
//     isPublished: z.boolean(),
//     createdAt: z.date(),
//     updatedAt: z.date(),
// })
