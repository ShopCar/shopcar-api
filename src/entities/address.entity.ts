import {
    Column,
    Entity,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    JoinColumn,
} from "typeorm";

import User from "./user.enttity";

@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 8 })
    zipCode: string;

    @Column({ type: "varchar", length: 2 })
    state: string;

    @Column({ type: "varchar", length: 50 })
    city: string;

    @Column({ type: "varchar", length: 50 })
    district: string;

    @Column({ type: "varchar", length: 50 })
    street: string;

    @Column({ type: "varchar", nullable: true, length: 10 })
    number: string | null | undefined;

    @Column({ type: "varchar", nullable: true, length: 50 })
    complement: string | null | undefined;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @JoinColumn()
    @OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
    user: User;
}

export default Address;
