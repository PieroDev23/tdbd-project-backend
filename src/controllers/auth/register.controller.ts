import { Response } from "express";
import { RegisterRequest, TypedRequest } from "../../__types";
import { processError } from "../../helpers";
import { BaseController } from "../../models";
import { AuthService } from "../../services";



export class RegisterController extends BaseController {

    protected async response(req: TypedRequest<RegisterRequest>, res: Response) {
        try {
            const body = req.body;

            const user = await AuthService.verifyUserEmail(body.email);

            if (user) {
                return this.badRequest(res, { message: 'This email is already registered' });
            }

            const { createdAt, updatedAt, ...restUser } = await AuthService.registerUser(body);
            const token = AuthService.genJWT(restUser);

            return this.ok(res, {
                ok: true,
                token,
                user: restUser
            })


        } catch (error) {
            const { message, name } = processError(error);
            this.serverError(res, { message });
            console.log(`[Error Ocurring on ${RegisterController.name} (ERROR NAME: ${name})]: ${message}`);
        }
    }

}