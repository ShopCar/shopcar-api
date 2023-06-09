import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BeforeInsert,
    BeforeUpdate,
    JoinColumn,
    OneToOne,
} from "typeorm";

import Car from "./car.enttity";
import Address from "./address.entity";
import Comment from "./comments.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50 })
    name: string;

    @CreateDateColumn({ type: "date" })
    birthdate: string;

    @Column({ type: "varchar", length: 11, unique: true })
    phone: string;

    @Column({ type: "varchar", length: 11, unique: true })
    cpf: string;

    @Column({ type: "text", nullable: true })
    description: string | null | undefined;

    @Column({ type: "varchar", length: 70, unique: true })
    email: string;

    @Column({ type: "varchar", length: 120, select: false })
    password: string;

    @Column({ default: false })
    isSeller: boolean;

    @Column({ type: "text", nullable: true })
    resetToken: string | null;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashInsertPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }

    @JoinColumn()
    @OneToOne(() => Address, (address) => address.user, { cascade: true })
    address: Address;

    @OneToMany(() => Car, (car) => car.user, { cascade: true })
    cars: Car[];

    @OneToMany(() => Comment, (comment) => comment.user, { cascade: true })
    comments: Comment[];
}

export default User;
