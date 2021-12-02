import { Users } from "../../database/model/Users"
import { IUsersRepository } from "../../repositories/IUsersRepository"

class ListUsersService {

    constructor(
        private iUserRepository: IUsersRepository
    ){}

    async list(): Promise<Users[]> {

        const users = await this.iUserRepository.listUsers()
        return users

    }
}

export { ListUsersService }