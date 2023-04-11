import { userRepository } from "../../repositories"
import { usersArraySchema } from "../../schemas/users"

const listUsersService = async () => {
    const users = await userRepository.find()

    const validetedUsers = usersArraySchema.parse(users)

    return validetedUsers
}

export {listUsersService}