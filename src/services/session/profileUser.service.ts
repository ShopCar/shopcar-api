import { User } from "../../entities";
import { userRepository } from "../../repositories";

const profileUserService = async (id: string): Promise<User> => {
	const user = await userRepository.findOne({
		where: {
			id
		},
		relations: {
			address: true
		}
	});

	return user!;
};

export default profileUserService;
