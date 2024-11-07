import express, { Application } from "express";
import bodyParser from "body-parser"
import SwaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import morgan from "morgan"

import UserRoutes from "../User/routes/user.routes";
import { options } from "../swagger/swagger.options";
import { GlobalFilterException } from "../middleware/errors/exceptions/GlobalFilterException";
import { CORS, PORT } from "../constants";

export class App {
    
    private app: Application;

    constructor(private port?: string | number) {
        this.app = express()
        this.settings();
        // middleware;
        this.middleware();
        // routes
        this.Routes();
        // swagger
        this.Swagger();
    }

    private middleware() {
        this.app.use(morgan("dev"))
        this.app.use(CORS)
        this.app.use(bodyParser.json())
    }

    private Routes(): void {
        this.app.use('/api', UserRoutes)
        this.app.use(GlobalFilterException)
    }
    private Swagger() {
        const specs = swaggerJsDoc(options)
        this.app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(specs))
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || PORT)
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`server listen in ${this.app.get('port')}`)
    }
}