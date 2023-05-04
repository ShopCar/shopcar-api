import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import User from "./user.enttity";
import Car from "./car.enttity";

@Entity("comments")
class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text" })
    comment: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
    user: User;

    @ManyToOne(() => Car, (car) => car.comments, { onDelete: "CASCADE" })
    car: Car;
}

export default Comment;
