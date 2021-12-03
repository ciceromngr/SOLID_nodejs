import { getRepository, Repository } from "typeorm";
import { Users } from "../../database/model/Users";
import { IUsersRepository, ICreateSpecificationDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<Users>

    constructor() {
        this.repository = getRepository(Users)
    }

    async created({ name, username, password }: ICreateSpecificationDTO): Promise<void> {

        const user = this.repository.create({
            name, username, password
        })

        await this.repository.save(user)
    }

    async listUsers(): Promise<any> {
        const users = await this.repository.find()
        return users
    }

}

export { UsersRepository }