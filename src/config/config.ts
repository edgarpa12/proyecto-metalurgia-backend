import * as dotenv from 'dotenv';

dotenv.config();

export default {
    APP: process.env.APP || 'development',
    PORT: process.env.PORT || '3000',

    DB_DIALECT: process.env.DB_DIALECT || 'mongo',
    DB_HOST: process.env.DB_HOST || "<url-mongo>",
    DB_NAME: process.env.DB_NAME || 'kemedsdb'
};
