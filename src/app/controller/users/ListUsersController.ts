import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersService } from "../../service/users/ListUsersService";

class ListUsersController {

    async listUsers(req: Request, res: Response) {

        const userRepository = getCustomRepository(UsersRepository)

        const listUserService = new ListUsersService(userRepository)

        const list = await listUserService.list()

        return res.status(200).json(list)
    }

}

export { ListUsersController }