import { carRepository } from "../../repositories";

const ListAllCarsService = async () => {
  const carList = await carRepository.find({
    relations: ["user", "images", "imagesBase64"],
  });

  return carList;
};

export default ListAllCarsService;
