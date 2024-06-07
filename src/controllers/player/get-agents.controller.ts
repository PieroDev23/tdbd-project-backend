import { Request, Response } from "express";
import { useService } from "../../helpers";
import { BaseController } from "../../models";
import { AgentsService } from "../../services";
import { HTTP_CODE_OK } from "../../__constants";
import { AgentRoles } from "../../__types";





export class GetAgentsController extends BaseController {

    private _agentsService = useService(AgentsService);

    protected async response(req: Request, res: Response): Promise<any> {
        try {

            const agents = await this._agentsService.getAgents();

            this.jsonResponse(res, {
                code: HTTP_CODE_OK,
                response: {
                    ok: true,
                    agents
                }
            });

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            this.jsonResponse(res, this.serverErrorResponse);
        }
    }
}