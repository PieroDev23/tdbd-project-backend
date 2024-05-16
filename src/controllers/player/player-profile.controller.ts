import { Request, Response } from "express";
import { processError } from "../../helpers";
import { BaseController } from "../../models";
import { HTTP_CODE_OK } from "../../__constants";






export class PlayerProfileController extends BaseController {

    protected async response(req: Request, res: Response): Promise<any> {
        try {
            // todo nuestro codigo

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    message: 'hola mundo mi api de players funciona'
                }
            });

        } catch (error) {
            const { message, name } = processError(error);
            console.log(`[Error Ocurring on ${PlayerProfileController.name} (ERROR NAME: ${name})]: ${message}`);
            return this.jsonResponse(res, this.serverErrorResponse);
        }
    }

}