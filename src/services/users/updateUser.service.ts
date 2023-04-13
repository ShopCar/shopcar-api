import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/users";
import { addressRepository, userRepository } from "../../repositories";

const updateUserService = async (
    data: IUserRequest,
    uuid: string
): Promise<IUserRequest | null> => {
    const { address, ...userData } = data;

    const searchUserByEmail = await userRepository.findOneBy({
        email: data.email,
    });
    if (searchUserByEmail && searchUserByEmail.id !== uuid) {
        throw new AppError("User with this email already exists", 409);
    }

    const searchUserByphone = await userRepository.findOneBy({
        phone: data.phone,
    });
    if (searchUserByphone && searchUserByphone.id !== uuid) {
        throw new AppError("User with this phone number already exists", 409);
    }

    await addressRepository.update({ user: { id: uuid } }, address);
    await userRepository.update({ id: uuid }, userData);

    const findUser = await userRepository.findOneBy({ id: uuid });

    return findUser;
};

export default updateUserService;
