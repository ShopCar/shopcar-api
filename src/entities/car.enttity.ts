import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne
} from "typeorm";
import User from "./user.enttity";

@Entity("cars")
class Car {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 30 })
	brand: string;

	@Column({ length: 50 })
	model: string;

	@Column({ type: "year" })
	year: number;

	@Column({ length: 20 })
	fuel: string;

	@Column({ type: "int" })
	km: number;

	@Column({ length: 20 })
	color: string;

	@Column({ type: "text" })
	description: string;

	@Column({ default: true })
	isPublished: boolean;

	@Column({ type: "decimal", scale: 2, precision: 12 })
	fipe: string | number;

	@Column({ type: "decimal", scale: 2, precision: 12 })
	price: string | number;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@ManyToOne(() => User, user => user.cars)
	user: User;
}

export default Car;
