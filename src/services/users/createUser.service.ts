import { AppError } from "../../errors";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { addressRepository, userRepository } from "../../repositories";

const createUserService = async (
    userData: IUserRequest
): Promise<IUserResponse> => {
    const { address, ...data } = userData;

    try {
        const createdAddress = addressRepository.create(address);
        await addressRepository.save(createdAddress);

        const createdUser = userRepository.create({
            ...data,
            address: createdAddress,
        });

        await userRepository.save(createdUser);

        await addressRepository.update(
            { id: createdAddress.id },
            { ...createdAddress, user: createdUser }
        );

        const { password, ...userWithoutPassword } = createdUser;
        return userWithoutPassword;
    } catch (error: any) {
        throw new AppError(error.detail, 409);
    }
};

export default createUserService;
