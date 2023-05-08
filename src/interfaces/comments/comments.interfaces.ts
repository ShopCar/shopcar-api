import { z } from "zod";
import { commentReqSchema } from "../../schemas/comments";

export { ICommentReq };

type ICommentReq = z.infer<typeof commentReqSchema>;
