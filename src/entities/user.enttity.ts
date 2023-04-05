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
	DeleteDateColumn
} from "typeorm";
import Car from "./car.enttity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 50 })
	name: string;
	
	@CreateDateColumn({ type: "date" })
	birthdate: string;


	@Column({ length: 11, unique: true })
	phone: string;
	
	@Column({ type: "text" })
	description: string

	@Column({ length: 70, unique: true })
	email: string;

	@Column({ length: 120 })
	password: string;

	@Column({	default: false })
	isSeller: boolean;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@DeleteDateColumn({ nullable: true, type: "date" })
	deletedAt: string | null;

	@BeforeInsert()
	@BeforeUpdate()
	hashInsertPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10);
		}
	}

	@OneToMany(() => Car, car => car.user)
	cars: Car[];
}

export default User;
