import bcrypt from 'bcryptjs';

import { User } from "../../database/entities";

import { RegisterRequest } from '../../schemas';
import { UserRepository } from '../../database/repositories';

export class AuthService {

    async verifyUserEmail(email: string): Promise<User | null> {
        const userRepo = new UserRepository();
        const user = await userRepo.findOneBy({ email });

        return user;
    }

    comparePasswords(incomingPassword: string, savedPassword: string): boolean {
        return bcrypt.compareSync(incomingPassword, savedPassword);
    }

    async registerUser(userRegisterRequest: RegisterRequest): Promise<User> {
        const userRepo = new UserRepository();
        const user = await userRepo.create(userRegisterRequest);

        return await userRepo.save(user);
    }

}