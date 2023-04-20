import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { ILogin, IloginResponse } from "../../interfaces/session";
import { userRepository } from "../../repositories";
import { AppError } from "../../errors";

const createSessionService = async ({
	email,
	password
}: ILogin): Promise<IloginResponse> => {
	const searchUser = await userRepository.findOne({
		withDeleted: true,
		where: { email },
		select: {
			id: true,
			email: true,
			password: true,
			isSeller: true,
			deletedAt: true
		}
	});

	if (!searchUser) {
		throw new AppError("Invalid user or password!", 403);
	}

	if (searchUser.deletedAt) {
		throw new AppError("User is not active", 400);
	}

	const passwordMatch = await compare(password, searchUser.password);

	if (!passwordMatch) {
		throw new AppError("Invalid user or password!", 403);
	}

	const token = jwt.sign(
		{
			isSeller: searchUser.isSeller
		},
		process.env.SECRET_KEY!,
		{
			subject: searchUser.id,
			expiresIn: "24h"
		}
	);

	const userResponse = await userRepository.findOne({
		where: { id: searchUser.id },
		relations: { cars: true }
	});

	return {
		token,
		user: userResponse!
	};
};

export default createSessionService;
