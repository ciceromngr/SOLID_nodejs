import ICreateUserDTO from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from '../../repositories/IUsersRepository'
import bcrypt from 'bcrypt'
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class CreateUserService {

    constructor(
        private iUserRepository: IUsersRepository
    ) { }

    async execute({ name, username, password }: ICreateUserDTO): Promise<void> {

        await this.iUserRepository.created(
            {
                name,
                username,
                password: await bcrypt.hash(password, 10)
            }
        )

    }

}

export { CreateUserService }