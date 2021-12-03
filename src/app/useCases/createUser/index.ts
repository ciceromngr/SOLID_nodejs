import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export default () => {
    const userRepository = new UsersRepository()
    const createUserService = new CreateUserService(userRepository)
    const createUserController = new CreateUserController(createUserService)

    return createUserController
}