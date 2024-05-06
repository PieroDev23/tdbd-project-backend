import { Request, Response } from "express";
import { HTTP_CODE_SERVER_ERROR, HTTP_MESSAGES } from "../__constants";
import { TypedResponse } from "../__types";


export abstract class BaseController {

    protected abstract response(req: Request, res: Response): Promise<void | any>

    protected serverErrorResponse = {
        code: HTTP_CODE_SERVER_ERROR,
        response: {
            message: HTTP_MESSAGES[HTTP_CODE_SERVER_ERROR],
            data: null
        }
    }

    public async execute(req: Request, res: Response): Promise<void> {
        try {
            this.response(req, res);
        } catch (error) {
            console.log('[BASE CONTROLLER] Uncaught controller error');
            console.log(error);
            this.jsonResponse(res, this.serverErrorResponse);
        }
    }

    protected jsonResponse<T>(res: TypedResponse<T>, payload: { code: number; response: T }) {
        const { code, response } = payload;
        res.status(code).json(response);
    }

}