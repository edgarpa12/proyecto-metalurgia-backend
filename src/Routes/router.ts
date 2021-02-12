import { EmailController } from '../Controllers/email.controller';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

export class Router {
    public static setup(router: express.Application): void {
        this.setupMiddleware(router);
        this.setupRoutes(router);
    }

    private static setupMiddleware(router: express.Application): void {
        router.use(morgan('dev'));
        router.use(cors());
        router.use(bodyParser.json());
        router.use(bodyParser.urlencoded({ extended: true }));
    }

    private static setupRoutes(router: express.Application): void {
        // Email route
        router.post('/sendEmail', EmailController.sendEmail);
    }
}
