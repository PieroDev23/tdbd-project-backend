import { GetWeaponsController } from "../controllers";
import { BaseRouter } from "../models";




export class WeaponsRouter extends BaseRouter {
    
    public path: string = 'weapons';


    constructor(){
        super();

        this.routes = [
            {
                path: 'get-weapons',
                method: 'get',
                controller: GetWeaponsController
            }
        ]
    }


}