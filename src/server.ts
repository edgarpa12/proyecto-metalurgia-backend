import { Router } from './Routes/router';
import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app: express.Application = express();

Router.setup(app);

const port = <string>process.env.PORT

app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
});