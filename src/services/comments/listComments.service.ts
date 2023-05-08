import { Comment } from "../../entities";
import { commentRepository } from "../../repositories";

const listCommentsService = async (): Promise<Comment[]> => {
    const comments = await commentRepository.find({
        relations: { car: true, user: true },
    });

    return comments;
};

export default listCommentsService;
