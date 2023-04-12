import { AppError } from "../../errors";
import { IUserRequest, IUserWithoutPassword } from "../../interfaces/users";
import { addressRepository, userRepository } from "../../repositories";
import { userWithoutPasswordSchema } from "../../schemas/users";


const createUserService = async (userData: IUserRequest): Promise<IUserWithoutPassword> => {
    const {address, ...data} = userData
    
    const searchUserByEmail = await userRepository.findOneBy({email: data.email})
    if (searchUserByEmail){
        throw new AppError( 'User with this email already exists', 409 );
    }

    const searchUserByphone = await userRepository.findOneBy({phone: data.phone})
    if (searchUserByphone){
        throw new AppError( 'User with this phone number already exists', 409 );
    }

    const createdAddress = addressRepository.create(address)
    await addressRepository.save(createdAddress)

    const createdUser = userRepository.create({
        ...data,
        address: createdAddress
    })

    await userRepository.save(createdUser);
    
    const userWithoutPassword = userWithoutPasswordSchema.parse(
        createdUser
    );
    return userWithoutPassword;
}

export default createUserService