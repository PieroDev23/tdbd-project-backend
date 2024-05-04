import { BaseRouter } from "../models";
import { Singleton } from "../models/singleton.model";

export const provideRouter = (RouterClass: new () => BaseRouter) => {
    const { path, _router } = Singleton.getInstance(RouterClass);

    return {
        pathName: path,
        router: _router
    }
}