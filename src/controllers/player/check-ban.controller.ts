import { Response } from "express";
import { TypedRequest } from "../../__types";
import { BaseController } from "../../models";
import { PlayerService } from "../../services";
import { useService } from "../../helpers";
import { HTTP_CODE_OK } from "../../__constants";





type CheckBanControllerRequest = {
    playerId: string;
}


export class CheckBanController extends BaseController {

    private _ps: PlayerService = useService(PlayerService);

    protected async response(req: TypedRequest<CheckBanControllerRequest>, res: Response): Promise<any> {
        try {

            const { playerId } = req.body;

            const isBanned = await this._ps.checkIfItsBan(playerId);

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: false,
                    isBanned: !!isBanned
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