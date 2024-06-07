import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { BaseController } from "../../models";
import { PlayerService } from "../../services";
import { useService } from "../../helpers";
import { HTTP_CODE_OK } from "../../__constants";




export class GetRankingPlayers extends BaseController {

    private _ps: PlayerService = useService(PlayerService);

    protected async response(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        try {

            const rankingPlayers = await this._ps.getPlayers();

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    rankingPlayers
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