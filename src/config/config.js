import * as dotenv from 'dotenv';
dotenv.config();
export default {
    PORT: process.env.PORT,
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
};
