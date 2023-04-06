import {
	Column,
	Entity,
	OneToOne,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn
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

	@Column({ type: "varchar", length: 20 })
	city: string;

	@Column({ type: "varchar", length: 20 })
	district: string;

	@Column({ type: "varchar", length: 50 })
	street: string;

	@Column({ type: "varchar", nullable: true, length: 10 })
	number: string | null | undefined;

	@Column({ type: "varchar", nullable: true, length: 30 })
	complement: string | null | undefined;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@OneToOne(() => User, user => user.address)
	user: User;
}

export default Address;
