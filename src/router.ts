import { Router } from "express";
import { CreateUserController } from "./app/controller/users/CreateUserController";
import { ListUsersController } from "./app/controller/users/ListUsersController";

const routes = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController() 

routes.post('/users', createUserController.create)
routes.get('/users', listUsersController.listUsers)

export { routes }