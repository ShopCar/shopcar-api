import { Repository } from "typeorm";
import { Address, Car, Comment, Images, User } from "../entities";
import { AppDataSource } from "../data-source";

const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

const userRepository: Repository<User> = AppDataSource.getRepository(User);

const imagesRepository: Repository<Images> =
  AppDataSource.getRepository(Images);

const addressRepository: Repository<Address> =
  AppDataSource.getRepository(Address);

const commentRepository: Repository<Comment> =
  AppDataSource.getRepository(Comment);

export {
  carRepository,
  userRepository,
  imagesRepository,
  addressRepository,
  commentRepository,
};
