import express, { Express } from 'express'
import { routes } from './router'


class App {

    public app: Express

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.router()
    }

    router() {
        this.app.use(routes)
    }

}

export default new App().app