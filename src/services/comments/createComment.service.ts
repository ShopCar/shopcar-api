import { Comment } from "../../entities";
import { ICommentReq } from "../../interfaces/comments/index";
import {
    carRepository,
    commentRepository,
    userRepository,
} from "../../repositories";

const createCommentService = async (
    body: ICommentReq,
    carId: string,
    userId: string
): Promise<Comment> => {
    const car: any = await carRepository.findOneBy({ id: carId });
    const user: any = await userRepository.findOneBy({ id: userId });

    const newComment = commentRepository.create({ ...body, car, user });
    await commentRepository.save(newComment);

    return newComment;
};

export default createCommentService;
