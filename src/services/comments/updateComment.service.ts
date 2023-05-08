import { Comment } from "../../entities";
import { AppError } from "../../errors";
import { ICommentReq } from "../../interfaces/comments";
import { commentRepository } from "../../repositories";

const updateCommentService = async (
    body: ICommentReq,
    commentId: string
): Promise<Comment | null> => {
    try {
        await commentRepository.update({ id: commentId }, body);
    } catch (error: any) {
        throw new AppError(error.detail, 409);
    }

    const updatedComment = await commentRepository.findOne({
        where: { id: commentId },
        relations: { car: true, user: true },
    });

    return updatedComment;
};

export default updateCommentService;
