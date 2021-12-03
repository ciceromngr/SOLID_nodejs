import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {

    constructor(
        private createUserService: CreateUserService
    ){}

    async create(req: Request, res: Response) {

        const { name, username, password } = req.body;

        await this.createUserService.execute({ name, username, password })

        return res.status(201).send()
    }

}

export { CreateUserController }