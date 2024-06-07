import { Response } from "express";
import { TypedRequest } from "../../__types";
import { BaseController } from "../../models";
import { HTTP_CODE_OK } from "../../__constants";
import { PlayerService } from "../../services";
import { useService } from "../../helpers";


type MatchesHistoryRequest = {
    playerId: string;
}

export class MatchesHistoryController extends BaseController {


    private _ps: PlayerService = useService(PlayerService);

    protected async response(req: TypedRequest<MatchesHistoryRequest>, res: Response<any, Record<string, any>>): Promise<any> {
        try {
            const { playerId } = req.body;

            const player = await this._ps.getPlayerMatchesHistory(playerId);
            console.log(player);

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    data: {
                        playerId
                    }
                }
            });

        } catch (error) {
            if (error instanceof Error) {
                console.log(`[Error on ${MatchesHistoryController.name}]: ${error.message}`);
            }

            this.jsonResponse(res, this.serverErrorResponse);
        }
    }

}