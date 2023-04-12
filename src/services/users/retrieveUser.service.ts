import { userRepository } from "../../repositories"
import { userWithoutPasswordSchema } from "../../schemas/users"

const retrieveUserService = async (id: string) => {
    const user = await userRepository.findOne({
        where: {id},
        relations: {
            address: true
        }
    })

    const validatedUsers = userWithoutPasswordSchema.parse(user)

    return validatedUsers
}

export default retrieveUserService