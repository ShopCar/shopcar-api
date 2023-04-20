import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import Car from "./car.enttity";

@Entity("images")
class Images {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text" })
    cover: string;

    @Column({ type: "text" })
    gallery: string[];

    @OneToOne(() => Car, (car) => car.images)
    car: Car;
}

export default Images;
