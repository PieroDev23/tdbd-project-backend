import { Response } from "express";
import { HTTP_CODE_OK } from "../../__constants";
import { TypedRequest } from "../../__types";
import { useService } from "../../helpers";
import { BaseController } from "../../models";
import { StatsService } from "../../services/stats/stats.service";



type GetSingleStatsRequest = {
    matchId: string;
    playerId: string;
}


export class GetSingleStatsController extends BaseController {

    private _statsService = useService(StatsService);

    protected async response(req: TypedRequest<GetSingleStatsRequest>, res: Response<any, Record<string, any>>): Promise<any> {

        try {

            const { playerId, matchId } = req.query

            const stats = await this._statsService.getStats(playerId, matchId);

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    stats
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