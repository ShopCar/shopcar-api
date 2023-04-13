import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { ILogin } from "../../interfaces/session";
import { userRepository } from "../../repositories";
import { AppError } from "../../errors";

const createSessionService = async ({
    email,
    password,
}: ILogin): Promise<object> => {
    const searchUser = await userRepository.findOne({
        withDeleted: true,
        where: { email: email },
        select: { password: true, id: true, email: true, deletedAt: true, isSeller: true },
    });

    if (!searchUser) {
        throw new AppError("Invalid user or password!", 403);
    }

    if (searchUser.deletedAt) {
        throw new AppError("User is not active", 400);
    }

    const passwordMatch = await compare(
        String(password),
        searchUser.password
    );

    if (!passwordMatch) {
        throw new AppError("Invalid user or password!", 403);
    }

    const token = jwt.sign(
        {
            isSeller: searchUser.isSeller,
        },
        process.env.SECRET_KEY!,
        {
            subject: String(searchUser.id),
            expiresIn: "24h",
        }
    );
    
    const user = await userRepository.findOne({
        where: {id: searchUser.id},
        relations: {cars: true}
    })
    return { 
        token,
        user
    };
};

export default createSessionService;
