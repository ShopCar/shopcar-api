import { carRepository } from "../../repositories";

const retrieveCarService = async (carId: string) => {
    const car = await carRepository.findOne({
        where: { id: carId },
        relations: {images: true}
    });

    return car;
};

export default retrieveCarService;
