import { z } from 'zod';
import {
    EMAIL_VALIDATION_MESSAGE,
    REQUIRED_PASSWORD_MESSAGE,
    REQUIRED_USERNAME_MESSAGE
} from '../../__constants';
import { User } from '../../entities';


// privated
type ControllerResponse = {
    code: number;
    ok: boolean;
    message: string;
}

// public
export const LoginSchema = z.object({
    email: z.string().email(EMAIL_VALIDATION_MESSAGE),
    password: z.string({ required_error: REQUIRED_PASSWORD_MESSAGE }).min(1, REQUIRED_PASSWORD_MESSAGE)
});

export const RegisterSchema = z.object({
    email: z.string().email(EMAIL_VALIDATION_MESSAGE),
    password: z.string({ required_error: REQUIRED_PASSWORD_MESSAGE }).min(1, REQUIRED_PASSWORD_MESSAGE),
    username: z.string({ required_error: REQUIRED_USERNAME_MESSAGE }).min(1, REQUIRED_USERNAME_MESSAGE)
});


// TYPES SCHEMAS
export type LoginRequest = z.infer<typeof LoginSchema>;
export type RegisterRequest = z.infer<typeof RegisterSchema>;

export interface RegisterResponse extends Partial<ControllerResponse> {
    data: {
        token: string;
        user: Omit<User, 'createdAt' | 'updatedAt' | 'hashPassword'>;
    } | null
}
export interface LoginResponse extends Partial<ControllerResponse> {
    data: {
        token: string;
        user: Omit<User, 'createdAt' | 'updatedAt' | 'hashPassword'>;
    } | null
}
