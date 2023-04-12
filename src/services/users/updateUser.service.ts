import { IUserRequest } from "../../interfaces/users";
import { userRepository } from "../../repositories";

const updateUserService = async (
  data: IUserRequest,
  uuid: string
): Promise<IUserRequest | null> => {
  await userRepository.update({ id: uuid }, data);

  const findUser = await userRepository.findOneBy({ id: uuid });

  return findUser;
};

export { updateUserService };
