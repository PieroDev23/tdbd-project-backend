import { RoutesProvider } from "./__interfaces";
import { Route } from "./__types";
import { AuthRouter } from './routes/auth.routes';

export class APIRoutes implements RoutesProvider {

    public readonly apiVersion = 'v1';

    get routes(): Route[] {
        return [
            AuthRouter.route
        ]
    }
}
