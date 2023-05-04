import {
    Entity,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

import User from "./user.enttity";
import Images from "./images.entity";
import Comment from "./comments.entity";

@Entity("cars")
class Car {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 30 })
    brand: string;

    @Column({ type: "varchar", length: 50 })
    model: string;

    @Column({ type: "varchar", length: 4 })
    year: string;

    @Column({ type: "varchar", length: 20 })
    fuel: string;

    @Column({ type: "decimal", scale: 2, precision: 12 })
    km: string | number;

    @Column({ type: "varchar", length: 30 })
    color: string;

    @Column({ type: "text", nullable: true })
    description: string | null | undefined;

    @Column({ default: true })
    isPublished: boolean;

    @Column({ type: "decimal", scale: 2, precision: 12 })
    price: string | number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @JoinColumn()
    @OneToOne(() => Images, (images) => images.car, { cascade: true })
    images: Images;

    @ManyToOne(() => User, (user) => user.cars, { onDelete: "CASCADE" })
    user: User;

    @OneToMany(() => Comment, (comment) => comment.car, { cascade: true })
    comments: Comment[];
}

export default Car;
