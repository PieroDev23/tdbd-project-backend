import { NextFunction, Request, Response } from "express";
import { LoginSchema } from "../../schemas";


export const loginMiddlware = (req: Request, res: Response, next: NextFunction) => {
    const { success, error } = LoginSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: 'client error',
            error,
        })
    }

    next();
}