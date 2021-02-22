import { Router } from './Routes/router';
import * as express from 'express';
import CONFIG from './Config/config';
const app = express();
Router.setup(app);
app.listen(CONFIG.PORT, function () {
    console.log(`App is listening on port ${CONFIG.PORT}`);
});
