import { Repository } from "typeorm";
import { Address, Car, Comment, Images, User, ImagesBase64 } from "../entities";
import { AppDataSource } from "../data-source";

const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

const userRepository: Repository<User> = AppDataSource.getRepository(User);

const imagesRepository: Repository<Images> =
  AppDataSource.getRepository(Images);

const imagesBase64Repository: Repository<ImagesBase64> =
  AppDataSource.getRepository(ImagesBase64);

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
  imagesBase64Repository,
};
