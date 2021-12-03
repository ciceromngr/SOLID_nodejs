import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUsersUseCase";


class ListUsersController {

    constructor(
        private listUsersUseCase: ListUsersUseCase
    ) {}

    async listUsers(req: Request, res: Response): Promise<Response> {
        const users = await this.listUsersUseCase.listUsers()
        return res.status(200).json(users)
    }

}

export { ListUsersController }