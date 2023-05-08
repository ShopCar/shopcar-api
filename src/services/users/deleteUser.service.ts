import { userRepository } from "../../repositories";

const deleteUserService = async (userId: string) => {
    userRepository.delete({ id: userId });

    return {};
};

export default deleteUserService;
