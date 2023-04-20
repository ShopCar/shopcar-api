import { AppError } from "../../errors"
import { carRepository, userRepository } from "../../repositories"


const deleteCarService = async (carId: string, userId: string): Promise<number> =>{
    const user = await userRepository.findOneBy({ id: userId })

    const carQueryBuilder = carRepository.createQueryBuilder("car")

    const car = await carQueryBuilder
    .leftJoinAndSelect("car.user", "user")
    .where("car.id = :id", { id: carId })
    .getOne()

    if(car!.user.id != user!.id){
            throw new AppError("Missing permissions", 403)
    }

    await carRepository.delete({ id: car!.id })

    return 204
}

export default deleteCarService