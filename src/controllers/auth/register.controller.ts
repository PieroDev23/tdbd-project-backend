import { Request, Response } from "express";



export class RegisterController {

    static handler(req: Request, res: Response) {
        res.json({
            ok: true,
            data: 'Hello'
        })
    }
}