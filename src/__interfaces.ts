import { Route } from "./__types";

export interface RouterClass {
    initializeRoutes(): void;
}

export interface RoutesProvider {
    get routes(): Route[];
}