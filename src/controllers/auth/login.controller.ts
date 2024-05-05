import { Response } from "express";

import { LoginRequest, TypedRequest } from "../../__types";
import { processError } from "../../helpers";
import { BaseController } from "../../models";
import { AuthService } from "../../services";


export class LoginController extends BaseController {

    protected async response(req: TypedRequest<LoginRequest>, res: Response) {
        try {
            const { password, email } = req.body;
            const user = await AuthService.verifyUserEmail(email);

            if (!user) {
                return this.badRequest(res, { message: 'User doesnt exists.' });
            }

            const { createdAt, updatedAt, ...restUser } = user;

            const passwordMatch = AuthService.comparePasswords(password, user.password);
            if (!passwordMatch) {
                return this.badRequest(res, { ok: false, message: 'User doesnt exists.' });
            }

            const token = AuthService.genJWT(user);
            return this.ok(res, { ok: true, token, user: restUser });

        } catch (error) {
            const { message, name } = processError(error);
            this.serverError(res, { message })
            console.log(`[Error Ocurring on ${LoginController.name} (ERROR NAME: ${name})]: ${message}`);
        }
    }

}