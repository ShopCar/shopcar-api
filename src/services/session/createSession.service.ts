import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import 'dotenv/config'
import { ILogin } from '../../interfaces/session'
import { userRepository } from '../../repositories';
import { AppError } from '../../errors';

const createSessionService = async ( { email, password }: ILogin ) => {
    
    const searchUser = await userRepository.find({
        withDeleted: true,
        where: {email: email}
    });

    if(searchUser.length === 0){
       throw new AppError("Invalid user or password!", 403);
    };

    if (searchUser[0].deletedAt){
        throw new AppError("User is not active", 400);
    };

    const passwordMatch = await compare(String(password), searchUser[0].password);
    if(!passwordMatch){
        throw new AppError("Invalid user or password!", 403);
    };

    const token = jwt.sign(
        {
            isSeller: searchUser[0].isSeller,
        },
        process.env.SECRET_KEY!,
        {
            subject: String(searchUser[0].id),
            expiresIn: '24h'
        }
    );
    return {
        token,
        user: searchUser[0]
    };
};

export default createSessionService;