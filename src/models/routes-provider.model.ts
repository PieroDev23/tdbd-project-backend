import { InstanceableClass } from "../__types";
import { BaseRouter } from "./router.model";
import { Singleton } from "./singleton.model";



export abstract class RoutesProvider {

    abstract apiVersion: string;
    protected _routers: InstanceableClass<BaseRouter>[] = [];

    get routes() {
        return this._routers.map(RouterClass => {
            const { path, _router } = Singleton.getInstance(RouterClass);
            return {
                pathName: path,
                router: _router
            }
        })
    }
}