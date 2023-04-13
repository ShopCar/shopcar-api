import { IUserWithoutPassword } from "../../interfaces/users";
import { userRepository } from "../../repositories";

const retrieveUserService = async (id: string): Promise<IUserWithoutPassword> => {
    const user = await userRepository.findOne({
        where: { id },
        relations: {
            address: true,
        },
    });

    return user!;
};

export default retrieveUserService;
