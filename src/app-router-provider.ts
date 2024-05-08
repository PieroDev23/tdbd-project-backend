import { API_VERSION } from "./__constants";
import { RoutesProvider } from "./models";
import { AuthRouter } from "./routes";

export class AppRouterProvider extends RoutesProvider {
    apiVersion: string = API_VERSION;

    constructor() {
        super();

        this.routers = [
            AuthRouter,
        ]
    }

}