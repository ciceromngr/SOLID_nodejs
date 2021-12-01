import { Router } from "express";
import { CreateUserController } from "./app/controller/users/createUserController";

const routes = Router()
const createUserController = new CreateUserController()

routes.post('/users', createUserController.create)

export { routes }