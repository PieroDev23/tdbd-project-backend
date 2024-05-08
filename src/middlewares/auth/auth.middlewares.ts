import { NextFunction, Response } from "express";
import { LoginRequest, LoginSchema, RegisterRequest, RegisterSchema } from "../../schemas";
import { formatZodError } from "../../helpers";
import { TypedRequest } from "../../__types";


export const loginMiddlware = (req: TypedRequest<LoginRequest>, res: Response, next: NextFunction) => {
    const { success, error } = LoginSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: 'client error',
            error: formatZodError(error),
        })
    }

    next();
}


export const registerMiddleware = (req: TypedRequest<RegisterRequest>, res: Response, next: NextFunction) => {
    const { success, error } = RegisterSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: 'client error',
            error: formatZodError(error)
        });
    }

    next();
}