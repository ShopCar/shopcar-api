import { Comment } from "../../entities";
import { commentRepository } from "../../repositories";

const retrieveCommentService = async (
    carId: string
): Promise<Comment | null> => {
    const comment = await commentRepository.findOne({
        where: { id: carId },
        relations: { car: true, user: true },
    });

    return comment;
};

export default retrieveCommentService;
