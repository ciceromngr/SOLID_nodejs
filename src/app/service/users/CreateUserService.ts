import ICreateUserDTO from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from '../../repositories/IUsersRepository'

class CreateUserService {

    constructor(
        private iUserRepository: IUsersRepository
    ){}

    async execute({ name, username, password }: ICreateUserDTO): Promise<void> {

        await this.iUserRepository.created({ name, username, password })

    }

}

export { CreateUserService }