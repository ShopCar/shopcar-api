import { userRepository } from "../../repositories"
import { userWithoutPasswordSchema } from "../../schemas/users"

const retrieveUserService = async (id: string) => {
    const user = await userRepository.findOneBy({id})

    const validetedUsers = userWithoutPasswordSchema.parse(user)

    return validetedUsers
}

export default retrieveUserService