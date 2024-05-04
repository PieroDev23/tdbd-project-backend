import { LoginController } from "../controllers/auth/login.controller";
import { RegisterController } from "../controllers/auth/register.controller";
import { BaseRouter } from "../models/router.model";
import { Route } from "../__types";


export class AuthRouter extends BaseRouter {

    public routeName: string = '/auth';

    constructor() {
        super();
    }

    initializeRoutes(): void {
        this._router.post('/register', LoginController.handler);
        this._router.post('/login', RegisterController.handler);
    }

    /**
     * Exposes the route on a simple object cotaining the name and the current Route object
     * @returns {Route}
     */
    static get route(): Route {
        return BaseRouter.provideRoute(AuthRouter);
    }
}