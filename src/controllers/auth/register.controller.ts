
import {
    EMAIL_ALREADY_EXISTS_MESSAGE,
    HTTP_CODE_CLIENT_ERROR,
    HTTP_CODE_OK,
    HTTP_MESSAGES
} from "../../__constants";
import { TypedRequest, TypedResponse } from "../../__types";
import { processError, useService } from "../../helpers";
import { BaseController } from "../../models";
import { RegisterRequest, RegisterResponse } from '../../schemas';
import { AuthService, JWTService } from "../../services";


export class RegisterController extends BaseController {

    // using services
    private _as: AuthService = useService(AuthService);
    private _jwts: JWTService = useService(JWTService);

    protected async response(req: TypedRequest<RegisterRequest>, res: TypedResponse<RegisterResponse>) {
        try {

            const body = req.body;
            const user = await this._as.verifyUserEmail(body.email);

            if (user) {
                return this.jsonResponse(res, {
                    code: HTTP_CODE_CLIENT_ERROR,
                    response: {
                        ok: false,
                        message: EMAIL_ALREADY_EXISTS_MESSAGE,
                        data: null
                    }
                });
            }

            const { createdAt, updatedAt, ...restUser } = await this._as.registerUser(body);
            const token = this._jwts.genJWT(restUser);

            return this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    message: HTTP_MESSAGES[HTTP_CODE_OK],
                    data: {
                        token,
                        user: restUser
                    }
                }
            });

        } catch (error) {
            const { message, name } = processError(error);
            console.log(`[Error Ocurring on ${RegisterController.name} (ERROR NAME: ${name})]: ${message}`);
            return this.jsonResponse(res, this.serverErrorResponse);
        }
    }

}