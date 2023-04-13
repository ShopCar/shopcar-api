import { Car } from "../../entities";
import { ICarRequest } from "../../interfaces/cars";
import { carRepository, imagesRepository } from "../../repositories";

const updateCarService = async (
  data: ICarRequest,
  carId: string
): Promise<Car> => {
    const car = await carRepository.findOne({
        where: {id: carId},
        relations: {images: true}
    })

    const {cover, gallery, ...carData} = data
    
    if(cover || gallery){
      const images = {
        cover,
        gallery
      }
      await imagesRepository.update({id: car!.images.id}, images);
    } 

    await carRepository.update({id: carId}, carData);

    const findCar = await carRepository.findOne({
      where: { id: carId },
      relations: {images: true}
    });

  return findCar!;
};

export default updateCarService;