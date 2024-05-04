import { BaseRouter, Singleton } from "../models";

export const provideRouter = (RouterClass: new () => BaseRouter) => {
    const { path, _router } = Singleton.getInstance(RouterClass);

    return {
        pathName: path,
        router: _router
    }
}