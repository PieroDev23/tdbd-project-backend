import { Request, Response } from "express";



export class LoginController {

    static handler(req: Request, res: Response) {
        res.json({
            ok: true,
            data: 'Hello'
        })
    }

}