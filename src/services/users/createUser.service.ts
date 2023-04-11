import { IUserRequest, IUserWithoutPassword } from "../../interfaces/users";
import { userRepository } from "../../repositories";
import { userWithoutPasswordSchema } from "../../schemas/users";


const createUserService = async (userData: IUserRequest): Promise<IUserWithoutPassword> => {
    const createdUser = userRepository.create({
        ...userData
    })

    await userRepository.save(createdUser);
    
    const userWithoutPassword = userWithoutPasswordSchema.parse(
        createdUser
    );
    return userWithoutPassword;
}

export default createUserService