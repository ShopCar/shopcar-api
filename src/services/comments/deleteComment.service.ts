import { AppError } from "../../errors";
import { commentRepository } from "../../repositories";

const deleteCommentService = async (commentId: string): Promise<{}> => {
    try {
        await commentRepository.delete(commentId);
    } catch (error: any) {
        throw new AppError(error.detail, 409);
    }

    return {};
};

export default deleteCommentService;
