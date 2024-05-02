import { Router } from "express";
import { LoginController } from "../controllers/auth/login.controller";
import { RegisterController } from "../controllers/auth/register.controller";

class AuthRouter {
    private _router: Router;

    constructor() {
        this._router = Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this._router.post('/register', LoginController.handler);
        this._router.post('/login', RegisterController.handler);
    }

    get router() {
        return this._router;
    }
}


export const authRouter = new AuthRouter();