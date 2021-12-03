import { Router } from "express";
import listUsersController from "./app/useCases/lisUsers";

const listUsersRouter = Router()

listUsersRouter.get('/', (req, res) => {
    return listUsersController().listUsers(req, res)
})

export { listUsersRouter }