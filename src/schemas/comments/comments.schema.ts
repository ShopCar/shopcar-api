import { z } from "zod";

export { commentReqSchema };

const commentReqSchema = z.object({
    comment: z.string(),
});
