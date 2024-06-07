import { GetSingleStatsController } from "../controllers/stats";
import { BaseRouter } from "../models";



export class StatsRouter extends BaseRouter {

    path: string = 'stats'

    constructor() {
        super();

        this.routes = [
            {
                path: 'get-player-match-stats',
                controller: GetSingleStatsController,
                method: 'get'
            }
        ];
    }

}