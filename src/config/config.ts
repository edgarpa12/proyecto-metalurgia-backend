import * as dotenv from 'dotenv';

dotenv.config();

export default {
    APP: process.env.APP,
    PORT: process.env.PORT,

    DB_DIALECT: process.env.DB_DIALECT,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME
};
