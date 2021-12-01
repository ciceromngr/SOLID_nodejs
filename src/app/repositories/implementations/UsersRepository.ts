import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/model/Users";
import { IUsersRepository, ICreateSpecificationDTO } from "../IUsersRepository";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> implements IUsersRepository {

    created({ name, username, password }: ICreateSpecificationDTO): void {
        
        const user = this.create({
            name, username, password
        })

        this.save(user)
    }

}

export { UsersRepository }