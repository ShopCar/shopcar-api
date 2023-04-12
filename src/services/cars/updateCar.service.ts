import { Car } from "../../entities";
import { ICarRequest } from "../../interfaces/cars";
import { carRepository, imagesRepository } from "../../repositories";

const updateCarService = async (
  data: ICarRequest,
  userId: string,
  carId: string
): Promise<Car> => {
    const car = await carRepository.findOne({
        where: {id: carId},
        relations: {images: true}
    })

    const {cover, image1, image2, ...carData} = data

    await imagesRepository.update({id: car!.images.id}, {
        cover: cover,
        gallery: [image1, image2],
    });

    await carRepository.update({id: carId}, carData);

    const findCar = await carRepository.findOneBy({ id: carId });

  return findCar!;
};

export default updateCarService;