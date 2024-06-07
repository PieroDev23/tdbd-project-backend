import { GetAgentsController } from "../controllers/player/get-agents.controller";
import { BaseRouter } from "../models";



export class AgentsRouter extends BaseRouter {

    public path: string = 'agents'

    constructor() {
        super();

        this.routes = [
            {
                path: 'get-agents',
                method: 'get',
                controller: GetAgentsController
            }
        ]
    }

}