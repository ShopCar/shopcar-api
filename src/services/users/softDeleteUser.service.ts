import { userRepository } from "../../repositories";

const softDeleteUserService = async (userId: string) => {
    userRepository.softDelete({ id: userId });

    return {};
};

export default softDeleteUserService;
