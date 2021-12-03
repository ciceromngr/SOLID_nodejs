import { Router } from "express";
import createUserController from "./app/useCases/createUser";

const createUsersRouter = Router()

createUsersRouter.post('/', (req, res) => {
    return createUserController().create(req, res)
})

export { createUsersRouter }