import { EmailController } from '../Controllers/email.controller';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
export class Router {
    static setup(router) {
        this.setupMiddleware(router);
        this.setupRoutes(router);
    }
    static setupMiddleware(router) {
        router.use(morgan('dev'));
        router.use(cors());
        router.use(bodyParser.json());
        router.use(bodyParser.urlencoded({ extended: true }));
    }
    static setupRoutes(router) {
        // Email route
        router.post('/sendEmail', EmailController.sendEmail);
    }
}
