
import { AUTH_PATH } from "../__constants";
import { LoginController, RegisterController } from "../controllers";
import { loginMiddlware, registerMiddleware } from "../middlewares";
import { BaseRouter } from "../models";
import { Route } from "../models/router.model";

export class AuthRouter extends BaseRouter {

    public path: string = AUTH_PATH;

    public _routes: Route[] = [
        {
            path: 'login',
            method: 'post',
            controller: new LoginController(),
            middlewares: [loginMiddlware]
        },
        {
            path: 'register',
            method: 'post',
            controller: new RegisterController(),
            middlewares: [registerMiddleware]
        }
    ]

}