import { InstanceableClass } from "../__types";
import { BaseRouter } from "./router.model";


export abstract class RoutesProvider {
    
    abstract apiVersion: string;
    protected _routers: InstanceableClass<BaseRouter>[] = [];

    /**
     * map my array if routers and return an new array that contains the path of the
     * router and the router itself
     */
    get routes() {
        return this._routers.map(RouterClass => {
            const { path, _router } = new RouterClass();
            return {
                pathName: path,
                router: _router
            }
        })
    }
}