import express, { Express } from 'express'
import { createUsersRouter } from './createUser.routes'
import { listUsersRouter } from './listUsers.routes'

class App {

    public app: Express
    
    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.router()
    }

    router() {
        this.app.use("/users", createUsersRouter)
        this.app.use("/users", listUsersRouter)
    }
}

export default new App().app