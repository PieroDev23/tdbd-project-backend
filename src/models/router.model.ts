import { NextFunction, Request, Response, Router } from "express";
import { BaseController } from "./controller.model";
import { InstanceableClass } from "../__types";


export type PathRoute = {
    path: string;
    method: 'post' | 'put' | 'delete' | 'get' | 'patch'
    controller: InstanceableClass<BaseController>,
    middlewares?: ((req: Request, res: Response, next: NextFunction) => void)[]
}

export abstract class BaseRouter {

    public _router: Router;
    public path: string;
    private _routes: PathRoute[] = [];

    constructor() {
        this._router = Router();
    }

    /**
     * Initilize your routes with a respective HTTP Mehtod.
     */
    private onInitRouter(): void {
        this._routes.forEach(route => {
            const { method, path, controller: Controller, middlewares } = route;
            const c = new Controller();

            const controllerWrapper = (req: Request, res: Response) => {
                c.execute(req, res);
            }

            this._router[method](`/${path}`, middlewares || [], controllerWrapper);
        });
    }

    /**
    * Setter method, set current router routes
    */
    protected set routes(routes: PathRoute[]) {
        this._routes = routes;
        this.onInitRouter();
    }

}