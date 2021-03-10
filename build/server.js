"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./Routes/router");
const express = require("express");
const config_1 = require("./Config/config");
const app = express();
router_1.Router.setup(app);
app.listen(config_1.default.PORT, function () {
    console.log(`App is listening on port ${config_1.default.PORT}`);
});
//# sourceMappingURL=server.js.map