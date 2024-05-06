import { Request, Response } from "express";

import { AUTH_PATH, LOGIN_PATH, REGISTER_PATH } from "../__constants";
import { LoginController, RegisterController } from "../controllers";
import { loginMiddlware, registerMiddleware } from "../middlewares";
import { BaseRouter } from "../models";

export class AuthRouter extends BaseRouter {

    public path: string = AUTH_PATH;

    constructor() {
        super();
    }

    onInitRoutes(): void {
        this._router.post(`/${LOGIN_PATH}`, loginMiddlware, (req: Request, res: Response) => new LoginController().execute(req, res));
        this._router.post(`/${REGISTER_PATH}`, registerMiddleware, (req: Request, res: Response) => new RegisterController().execute(req, res));
    }
}