import { Router } from "express";
import { RouterClass } from "../__interfaces";
import { Singleton } from "./singleton.model";
import { Route } from "../__types";

export abstract class BaseRouter implements RouterClass {

    protected _router: Router;
    public routeName: string;

    constructor() {
        this._router = Router();
        this.initializeRoutes();
    }

    /**
     * Initilize your routes with a respective HTTP Mehtod.
     */
    abstract initializeRoutes(): void;

    protected static provideRoute(RouterClass: new () => BaseRouter): Route {

        const { routeName, _router } = Singleton.getInstance(RouterClass);

        return {
            name: routeName,
            router: _router
        }
    }
}