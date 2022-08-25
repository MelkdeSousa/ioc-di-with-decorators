import 'dotenv/config'
import express, { Express } from 'express'
import { inject } from './di/decorator'
import ILogger from './log/logger.interface'

export default class Application {
    private app: Express

    constructor(
        @inject('logger')
        private logger: ILogger
    ) {
        this.app = express()
        this.app.use(express.json())
    }

    server() {
        const port = process.env.PORT || 3000

        this.app.listen(port, () => {
            this.logger.info(`✨ Listening on port ${port}`)
        })
    }
}