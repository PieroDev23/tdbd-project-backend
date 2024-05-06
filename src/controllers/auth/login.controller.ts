
import { BAD_CREDENTALS_MESSAGE, HTTP_CODE_OK, HTTP_CODE_UNAUTHORIZE, HTTP_MESSAGES } from "../../__constants";
import { TypedRequest, TypedResponse } from "../../__types";
import { processError, useService } from "../../helpers";
import { BaseController } from "../../models";
import { LoginRequest, LoginResponse } from "../../schemas";
import { AuthService, JWTService } from "../../services";


export class LoginController extends BaseController {

    // using services
    private _as: AuthService = useService(AuthService);
    private _jwts: JWTService = useService(JWTService);

    protected async response(req: TypedRequest<LoginRequest>, res: TypedResponse<LoginResponse>) {
        try {
            const { password, email } = req.body;
            const user = await this._as.verifyUserEmail(email);

            if (!user) {
                return this.jsonResponse(res, {
                    code: HTTP_CODE_UNAUTHORIZE,
                    response: {
                        ok: false,
                        message: BAD_CREDENTALS_MESSAGE,
                        data: null
                    }
                })
            }

            const { createdAt, updatedAt, ...restUser } = user;

            const passwordMatch = this._as.comparePasswords(password, user.password);
            if (!passwordMatch) {
                return this.jsonResponse(res, {
                    code: HTTP_CODE_UNAUTHORIZE,
                    response: {
                        ok: false,
                        message: BAD_CREDENTALS_MESSAGE,
                        data: null
                    }
                });
            }

            const token = this._jwts.genJWT(user);

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
            this.jsonResponse(res, this.serverErrorResponse);
            console.log(`[Error Ocurring on ${LoginController.name} (ERROR NAME: ${name})]: ${message}`);
        }
    }
}