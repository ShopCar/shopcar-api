import { carRepository } from "../../repositories"



const ListAllCarsService = async () => {
    const carList = await carRepository.find()
    
    return carList
}

export default ListAllCarsService