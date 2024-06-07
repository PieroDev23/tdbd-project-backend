import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { BaseController } from "../../models";
import { WeaponsService } from "../../services";
import { useService } from "../../helpers";
import { HTTP_CODE_OK } from "../../__constants";




export class GetWeaponsController extends BaseController {


    private _ws: WeaponsService = useService(WeaponsService);

    protected async response(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        try {

            const weapons = await this._ws.getWeapons();

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    weapons
                }
            })

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            this.jsonResponse(res, this.serverErrorResponse);
        }
    }

}