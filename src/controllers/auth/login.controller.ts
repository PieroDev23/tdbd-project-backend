import { Request, Response } from "express";
import { BaseController } from "../../models";


export class LoginController extends BaseController {

    protected async response(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

}