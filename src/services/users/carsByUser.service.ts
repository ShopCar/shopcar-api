import { carRepository } from "../../repositories";

const carsByUserService = async (userId: string) => {
    const carList = await carRepository.find({
        where: {user: {id: userId}},
        relations: ["user", "images"] 
    });

    return carList;
};

export default carsByUserService;