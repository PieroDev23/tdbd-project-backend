import { Request, Response } from "express";
import { BaseRouter } from "../models";
import { LoginController, RegisterController } from "../controllers/auth";
import { loginMiddlware } from "../middlewares";



export class AuthRouter extends BaseRouter {

    public path: string = '/auth';

    constructor() {
        super();
    }

    onInitRoutes(): void {
        this._router.post('/login',
            loginMiddlware,
            (req: Request, res: Response) => new LoginController().execute(req, res));

        this._router.post('/register',
            (req: Request, res: Response) => new RegisterController().execute(req, res))
    }
}