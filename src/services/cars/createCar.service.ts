import { ICarRequest } from "../../interfaces/cars";
import {
  imagesBase64Repository,
  imagesRepository,
  userRepository,
} from "../../repositories";
import { carRepository } from "../../repositories";
import axios from "axios";

const converterUrlParaBase64 = async (url: string) => {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data, "binary");
  const imagemBase64 = buffer.toString("base64");
  return imagemBase64;
};

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

  await imagesRepository.update({ id: images.id }, { ...images, car: newCar });

  const imagemCoverBase64 = await converterUrlParaBase64(cover);

  const newImagemCover = imagesBase64Repository.create({
    car: newCar,
    imagemBase64: imagemCoverBase64,
    cover: true,
  });

  await imagesBase64Repository.save(newImagemCover);

  gallery.forEach(async (Imagem) => {
    const imagemBase64 = await converterUrlParaBase64(Imagem);
    const newImagem = imagesBase64Repository.create({
      car: newCar,
      imagemBase64: imagemBase64,
      cover: false,
    });
    await imagesBase64Repository.save(newImagem);
  });

  return newCar;
};

export default createCarService;
