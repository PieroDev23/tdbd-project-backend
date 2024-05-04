import { Router } from "express";

export abstract class BaseRouter {

    public _router: Router;
    public path: string;

    constructor() {
        this._router = Router();
        this.onInitRoutes();
    }

    /**
     * Initilize your routes with a respective HTTP Mehtod.
     */
    abstract onInitRoutes(): void;

}