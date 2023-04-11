import { ICarRequest } from "../../interfaces/cars";
import { imagesRepository, userRepository } from "../../repositories";
import { carRepository } from "../../repositories";
import { carRequestWithoutImages } from "../../schemas/cars/cars.schema";

const createCarService = async (body: ICarRequest, userId: string) => {
    const user: any = await userRepository.findOneBy({ id: userId });

    const images = imagesRepository.create({
        cover: body.cover,
        gallery: [body.image1, body.image2],
    });
    await imagesRepository.save(images);

    const carBody = carRequestWithoutImages.parse(body);

    const newCar = carRepository.create({
        ...carBody,
        images,
        user,
    });
    await carRepository.save(newCar);

    return newCar;
};

export default createCarService;
