import {
	Entity,
	Column,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn
} from "typeorm";

import User from "./user.enttity";

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
	description: string;

	@Column({ default: true })
	isPublished: boolean;

	@Column({ type: "decimal", scale: 2, precision: 12 })
	fipe: string | number;

	@Column({ type: "decimal", scale: 2, precision: 12 })
	price: string | number;

	@Column({ type: "int" })
	stock: number;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@DeleteDateColumn({ type: "date", nullable: true })
	deletedAt: string | null;

	@ManyToOne(() => User, user => user.cars)
	user: User;
}

export default Car;
