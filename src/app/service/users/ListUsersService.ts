import { Users } from "../../database/model/Users"
import { IUsersRepository } from "../../repositories/IUsersRepository"

class ListUsersService {

    constructor(
        private iUserRepository: IUsersRepository
    ) { }

    async list(): Promise<Users[]> {

        const lists = await this.iUserRepository.listUsers()
        const users: Users[] = lists.map(list => ({
            id: list.id,
            name: list.name,
            username: list.username,
            create_at: list.create_at,
            password: `${'*'.repeat(Math.floor(Math.random() * 10 + 1))}`
        }))

        return users

    }
}

export { ListUsersService }