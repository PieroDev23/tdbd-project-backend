import { NextFunction, Response } from "express"
import { RegisterRequest, TypedRequest } from "../../__types"
import { RegisterSchema } from "../../schemas"

export const registerMiddleware = (req: TypedRequest<RegisterRequest>, res: Response, next: NextFunction) => {
    const { success, error } = RegisterSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            ok: false,
            error
        });
    }

    next();
}