import { InstanceableClass } from "../__types";
import { provideRouter } from "../helpers/provide-router.helper";
import { BaseRouter } from "./router.model";



export abstract class RoutesProvider {

    abstract apiVersion: string;

    protected _routers: InstanceableClass<BaseRouter>[] = [];

    get routes() {
        return this._routers.map(RouterClass => {
            return provideRouter(RouterClass)
        })
    }
}