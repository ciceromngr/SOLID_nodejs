import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/model/Users";
import { IUsersRepository, ICreateSpecificationDTO } from "../IUsersRepository";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> implements IUsersRepository {
    
    async created({ name, username, password }: ICreateSpecificationDTO): Promise<void> {
        
        const user = this.create({
            name, username, password
        })
        
        await this.save(user)
    }
    
    async listUsers(): Promise<any> {
        const users = await this.find()
        return users
    }

}

export { UsersRepository }