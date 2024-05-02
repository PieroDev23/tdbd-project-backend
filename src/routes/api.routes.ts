import { Route } from "../__types";
import { authRouter } from "./auth.routes";



export class APIRoutes {

    static routes(): Route[] {

        return [
            {
                name: '/auth',
                router: authRouter.router
            }
        ]

    }
}
