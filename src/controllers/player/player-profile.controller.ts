import { Request, Response } from "express";
import { processError, useService } from "../../helpers";
import { BaseController } from "../../models";
import { HTTP_CODE_CLIENT_ERROR, HTTP_CODE_OK, HTTP_MESSAGES } from "../../__constants";
import { TypedRequest } from "../../__types";
import { PlayerService } from "../../services";


export type PlayerProfileRequest = {
    nickname: string;
}

export class PlayerProfileController extends BaseController {

    private _ps: PlayerService = useService(PlayerService);

    protected async response(req: TypedRequest<PlayerProfileRequest>, res: Response): Promise<any> {
        try {
            const nickname = req.params.nickname;

            // find the player by username
            const player = await this._ps.getPlayerByNickname(nickname);

            if (!player) {
                return this.jsonResponse(res, {
                    code: HTTP_CODE_CLIENT_ERROR,
                    response: {
                        ok: false,
                        response: 'Player not founded',
                        data: null
                    }
                })
            }


            const profile = await this._ps.getPlayerProfile(player.playerId);

            // return profile information
            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    message: HTTP_MESSAGES[HTTP_CODE_OK],
                    profile
                }
            });

        } catch (error) {
            const { message, name } = processError(error);
            console.log(`[Error Ocurring on ${PlayerProfileController.name} (ERROR NAME: ${name})]: ${message}`);
            return this.jsonResponse(res, this.serverErrorResponse);
        }
    }

}