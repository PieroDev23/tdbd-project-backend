
import { AUTH_PATH } from "../__constants";
import { LoginController, RegisterController } from "../controllers";
import { loginMiddlware, registerMiddleware } from "../middlewares";
import { BaseRouter } from "../models";

export class AuthRouter extends BaseRouter {

    public path: string = AUTH_PATH;

    constructor() {
        super();

        this.routes = [
            {
                path: 'login',
                method: 'post',
                controller: LoginController,
                middlewares: [loginMiddlware]
            },
            {
                path: 'register',
                method: 'post',
                controller: RegisterController,
                middlewares: [registerMiddleware]
            }
        ];
    }

}