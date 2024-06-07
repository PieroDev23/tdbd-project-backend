import { MatchesHistoryController, PlayerProfileController } from "../controllers";
import { BaseRouter } from "../models";




export class PlayerRouter extends BaseRouter {

    public path: string = 'player';

    constructor() {
        super();

        this.routes = [
            {
                path: 'profile',
                method: 'get',
                controller: PlayerProfileController,
            },
            {
                path: 'matches-history',
                method: 'get',
                controller: MatchesHistoryController
            }
        ]
    }

}