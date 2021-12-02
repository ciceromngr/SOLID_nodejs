import { Users } from "../database/model/Users";

interface ICreateSpecificationDTO {
    name: string;
    username: string;
    password: string;
}

interface IUsersRepository {

    created({ name, username, password }: ICreateSpecificationDTO): Promise<void>

    listUsers(): Promise<Users[]>
}

export { IUsersRepository, ICreateSpecificationDTO }