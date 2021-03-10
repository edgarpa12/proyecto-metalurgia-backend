"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const email_controller_1 = require("../Controllers/email.controller");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
class Router {
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
        router.post('/sendEmail', email_controller_1.EmailController.sendEmail);
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map