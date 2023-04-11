import { AppError } from "../../errors"
import { userRepository } from "../../repositories"

const softDeleteUserService = async (userId: string) => {
    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new AppError("User not found", 404)
    }

    userRepository.softDelete({id: userId})

    return {}
}

export {softDeleteUserService}