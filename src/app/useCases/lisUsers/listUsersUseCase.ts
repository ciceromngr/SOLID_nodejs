import { Users } from "../../database/model/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class ListUsersUseCase {

    constructor(
        private iUserRepository: IUsersRepository
    ){}

    async listUsers(): Promise<Users[]> {
        return await this.iUserRepository.listUsers() 
    }

}

export { ListUsersUseCase }