import { API_VERSION } from "./__constants";
import { RoutesProvider } from "./models";
import { AgentsRouter, AuthRouter, PlayerRouter, StatsRouter, WeaponsRouter } from "./routes";

export class AppRoutersProvider extends RoutesProvider {
    apiVersion: string = API_VERSION;

    constructor() {
        super();

        this.routers = [
            AuthRouter,
            PlayerRouter,
            AgentsRouter,
            WeaponsRouter,
            StatsRouter
        ]
    }

}