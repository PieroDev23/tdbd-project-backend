import { MatchesHistoryController, PlayerProfileController } from "../controllers";
import { CheckBanController } from "../controllers/player/check-ban.controller";
import { GetRankingPlayers } from "../controllers/player/get-ranking-players.controller";
import { BaseRouter } from "../models";




export class PlayerRouter extends BaseRouter {

    public path: string = 'player';

    constructor() {
        super();

        this.routes = [
            {
                path: 'profile/:nickname',
                method: 'get',
                controller: PlayerProfileController,
            },
            {
                path: 'matches-history/:playerId',
                method: 'get',
                controller: MatchesHistoryController
            },
            {
                path: 'get-ranking-players',
                method: 'get',
                controller: GetRankingPlayers
            },
            {
                path: 'check-ban',
                method: 'get',
                controller: CheckBanController
            }
        ]
    }

}