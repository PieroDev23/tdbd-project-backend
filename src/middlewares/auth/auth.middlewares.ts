import { NextFunction, Response } from "express";
import { LoginRequest, RegisterRequest, TypedRequest } from "../../__types";
import { LoginSchema, RegisterSchema } from "../../schemas";
import { formatZodError } from "../../helpers";


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