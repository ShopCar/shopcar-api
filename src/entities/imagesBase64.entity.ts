import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Car from "./car.enttity";

@Entity("imagesBase64")
class ImagesBase64 {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean" })
  cover: boolean;

  @Column({ type: "text" })
  imagemBase64: string;

  @JoinColumn()
  @ManyToOne(() => Car, (car) => car.imagesBase64, { onDelete: "CASCADE" })
  car: Car;
}

export default ImagesBase64;
