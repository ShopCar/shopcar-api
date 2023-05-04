import { ICarRequest } from "../../interfaces/cars";
import { imagesRepository, userRepository } from "../../repositories";
import { carRepository } from "../../repositories";

const createCarService = async (body: ICarRequest, userId: string) => {
    const user: any = await userRepository.findOneBy({ id: userId });
    const { cover, gallery, ...carData } = body;
    const images = imagesRepository.create({ cover, gallery });
    await imagesRepository.save(images);

    const newCar = carRepository.create({
        ...carData,
        images,
        user,
    });
    await carRepository.save(newCar);

    await imagesRepository.update(
        { id: images.id },
        { ...images, car: newCar }
    );

    return newCar;
};

export default createCarService;
