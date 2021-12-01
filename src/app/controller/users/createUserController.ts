import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserService } from "../../service/users/CreateUserService";


class CreateUserController {

    create(req: Request, res: Response) {
        
        const { name, username, password } = req.body;

        const userRepository = getCustomRepository(UsersRepository)

        const createUserService = new CreateUserService(userRepository)

        createUserService.execute({ name, username, password })

        return res.status(201).send()
    }

}

export { CreateUserController }