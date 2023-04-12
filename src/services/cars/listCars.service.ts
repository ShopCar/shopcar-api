import { carRepository } from "../../repositories"



const ListAllCarsService = async () => {
    const carList = await carRepository.find({ relations: ["user", "images"] })

    return carList
}

export default ListAllCarsService