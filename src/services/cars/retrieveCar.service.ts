import { carRepository } from "../../repositories";

const retrieveCarService = async (carId: string) => {
    const car = await carRepository.findOneBy({ id: carId });

    return car;
};

export default retrieveCarService;
