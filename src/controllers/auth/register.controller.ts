import { Response } from "express";
import { RegisterRequest, TypedRequest } from "../../__types";
import { processError } from "../../helpers";
import { BaseController } from "../../models";



export class RegisterController extends BaseController {

    protected async response(req: TypedRequest<RegisterRequest>, res: Response) {
        try {
            const body = req.body;

            

        } catch (error) {
            const { message, name } = processError(error);
            this.serverError(res, { message });
            console.log(`[Error Ocurring on ${RegisterController.name} (ERROR NAME: ${name})]: ${message}`);
        }
    }

}