import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import Car from "./car.enttity";

@Entity("images")
class Images {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text" })
    cover: string;

    @Column({ type: "text" })
    gallery: string[];

    @JoinColumn()
    @OneToOne(() => Car, (car) => car.images, { onDelete: "CASCADE" })
    car: Car;
}

export default Images;
