
import { EMAIL_ALREADY_EXISTS_MESSAGE, HTTP_CODE_OK, HTTP_MESSAGES } from "../../__constants";
import { TypedRequest, TypedResponse } from "../../__types";
import { processError, useService } from "../../helpers";
import { BaseController } from "../../models";
import { RegisterRequest, RegisterResponse } from '../../schemas';
import { AuthService, JWTService } from "../../services";


export class RegisterController extends BaseController {

    // using services
    private _as: AuthService = useService(AuthService);
    private _ts: JWTService = useService(JWTService);

    protected async response(req: TypedRequest<RegisterRequest>, res: TypedResponse<RegisterResponse>) {
        try {

            const body = req.body;
            const user = await this._as.verifyUserEmail(body.email);

            if (user) {
                return res.status(400).json({
                    ok: false,
                    message: EMAIL_ALREADY_EXISTS_MESSAGE,
                });
            }

            const { createdAt, updatedAt, ...restUser } = await this._as.registerUser(body);
            const token = this._ts.genJWT(restUser);

            return res.status(HTTP_CODE_OK).json({
                ok: true,
                message: HTTP_MESSAGES[HTTP_CODE_OK],

            })


        } catch (error) {
            const { message, name } = processError(error);
            this.serverError(res, { message });
            console.log(`[Error Ocurring on ${RegisterController.name} (ERROR NAME: ${name})]: ${message}`);
        }
    }

}