import { Request, Response } from "express";
import { BaseRouter } from "../models/router.model";
import { LoginController, RegisterController } from "../controllers/auth";



export class AuthRouter extends BaseRouter {

    constructor() {
        super();
        this.path = '/auth';
    }

    initializeRoutes(): void {
        this._router.post('/login',
            (req: Request, res: Response) => new LoginController().execute(req, res));

        this._router.post('/register',
            (req: Request, res: Response) => new RegisterController().execute(req, res))
    }
}