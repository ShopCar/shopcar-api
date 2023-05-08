import { Comment } from "../../entities";
import { commentRepository } from "../../repositories";

const listCarCommentsService = async (id: string): Promise<Comment[]> => {
	const comments = await commentRepository.find({
		where: {
			car: {
				id
			}
		},
		relations: { car: true, user: true }
	});

	return comments;
};

export default listCarCommentsService;
