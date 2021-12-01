import ICreateUserDTO from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from '../../repositories/IUsersRepository'

class CreateUserService {

    constructor(
        private iUserRepository: IUsersRepository
    ){}

    execute({ name, username, password }: ICreateUserDTO): void {

        this.iUserRepository.created({ name, username, password })

    }

}

export { CreateUserService }