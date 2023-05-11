import { carRepository, userRepository } from "../../repositories";

const carsByUserService = async (userId: string) => {
    const carList = await carRepository.find({
        where: {user: {id: userId}},
        relations: ["images"] 
    });

    const user = await userRepository.findOneBy({id: userId})
    return {
        userName: user!.name,
        userId: user!.id,
        userDescription: user!.description,
        cars: carList
    };
};

export default carsByUserService;