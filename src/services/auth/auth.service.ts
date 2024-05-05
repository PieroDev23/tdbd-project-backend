import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from "../../entities";
import { UserRepository } from "../../repositories";

export class AuthService {

    static async verifyUserEmail(email: string): Promise<User | null> {
        const userRepo = new UserRepository();
        const user = await userRepo.findOneBy({ email });

        return user;
    }

    static genJWT(data: any): string {
        const { APP_JWT_SECRET } = process.env;
        return jwt.sign({ ...data }, APP_JWT_SECRET!, { expiresIn: '1h' });
    }

    static comparePasswords(incomingPassword: string, savedPassword: string): boolean {
        return bcrypt.compareSync(incomingPassword, savedPassword);
    }
}