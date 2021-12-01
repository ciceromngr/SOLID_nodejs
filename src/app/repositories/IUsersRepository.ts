
interface ICreateSpecificationDTO {
    name: string;
    username: string;
    password: string;
}

interface IUsersRepository {

    created({ name, username, password }: ICreateSpecificationDTO): void

}

export { IUsersRepository, ICreateSpecificationDTO }