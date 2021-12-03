import { UsersRepository } from "../../repositories/implementations/UsersRepository"
import { ListUsersController } from "./listUsersController"
import { ListUsersUseCase } from "./listUsersUseCase"


export default (): ListUsersController => {
    const userRepository = new UsersRepository()
    const listUsersUseCase = new ListUsersUseCase(userRepository)
    const listUsersController = new ListUsersController(listUsersUseCase)

    return listUsersController
}