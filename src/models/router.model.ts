import { NextFunction, Request, Response, Router } from "express";
import { BaseController } from "./controller.model";


export type Route = {
    path: string;
    method: 'post' | 'put' | 'delete' | 'get' | 'patch'
    controller: BaseController,
    middlewares?: ((req: Request, res: Response, next: NextFunction) => void)[]
}

export abstract class BaseRouter {

    public _router: Router;
    public path: string;
    public abstract _routes: Route[];

    constructor() {
        this._router = Router();
        this.onInitRouter();
    }

    /**
     * Initilize your routes with a respective HTTP Mehtod.
     */
    private onInitRouter(): void {
        this._routes.forEach(route => {
            const { method, path, controller, middlewares } = route;
            this._router[method](`/${path}`, middlewares || [], controller.execute);
        })
    }

}