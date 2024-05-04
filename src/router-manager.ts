import { RoutesProvider } from "./models";
import { AuthRouter } from "./routes";

export class RouterManager extends RoutesProvider {
    apiVersion: string = 'v1';

    constructor() {
        super();

        // initiliazing my routers
        this._routers = [
            AuthRouter,
        ]
    }
}